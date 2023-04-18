import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {flattenConnection, AnalyticsPageType} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {PageHeader, Section, Text, SortFilter, ArrowRight,IconCart,IconMapPin} from '~/components';
import {ProductGrid} from '~/components/ProductGrid';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const seo = ({data}) => ({
  title: data?.collection?.seo?.title,
  description: data?.collection?.seo?.description,
  titleTemplate: '%s | Collection',
  media: {
    type: 'image',
    url: data?.collection?.image?.url,
    height: data?.collection?.image?.height,
    width: data?.collection?.image?.width,
    altText: data?.collection?.image?.altText,
  },
});

export const handle = {
  seo,
};

const PAGINATION_SIZE = 40;

export async function loader({params, request, context}) {
  const {collectionHandle} = params;

  invariant(collectionHandle, 'Missing collectionHandle param');

  const searchParams = new URL(request.url).searchParams;
  const knownFilters = ['productVendor', 'productType'];
  const available = 'available';
  const variantOption = 'variantOption';
  const {sortKey, reverse} = getSortValuesFromParam(searchParams.get('sort'));
  const cursor = searchParams.get('cursor');
  const filters = [];
  const appliedFilters = [];

  for (const [key, value] of searchParams.entries()) {
    if (available === key) {
      filters.push({available: value === 'true'});
      appliedFilters.push({
        label: value === 'true' ? 'In stock' : 'Out of stock',
        urlParam: {
          key: available,
          value,
        },
      });
    } else if (knownFilters.includes(key)) {
      filters.push({[key]: value});
      appliedFilters.push({label: value, urlParam: {key, value}});
    } else if (key.includes(variantOption)) {
      const [name, val] = value.split(':');
      filters.push({variantOption: {name, value: val}});
      appliedFilters.push({label: val, urlParam: {key, value}});
    }
  }

  // Builds min and max price filter since we can't stack them separately into
  // the filters array. See price filters limitations:
  // https://shopify.dev/custom-storefronts/products-collections/filter-products#limitations
  if (searchParams.has('minPrice') || searchParams.has('maxPrice')) {
    const price = {};
    if (searchParams.has('minPrice')) {
      price.min = Number(searchParams.get('minPrice')) || 0;
      appliedFilters.push({
        label: `Min: $${price.min}`,
        urlParam: {key: 'minPrice', value: searchParams.get('minPrice')},
      });
    }
    if (searchParams.has('maxPrice')) {
      price.max = Number(searchParams.get('maxPrice')) || 0;
      appliedFilters.push({
        label: `Max: $${price.max}`,
        urlParam: {key: 'maxPrice', value: searchParams.get('maxPrice')},
      });
    }
    filters.push({
      price,
    });
  }

  const {collection, collections} = await context.storefront.query(
    COLLECTION_QUERY,
    {
      variables: {
        handle: collectionHandle,
        pageBy: PAGINATION_SIZE,
        cursor,
        filters,
        sortKey,
        reverse,
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    },
  );

  if (!collection) {
    throw new Response(null, {status: 404});
  }

  const collectionNodes = flattenConnection(collections);

  return json({
    collection,
    appliedFilters,
    collections: collectionNodes,
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id,
    },
  });
}

export default function Collection() {
  const {collection, collections, appliedFilters} = useLoaderData();

  console.log('collection', collection.products.filters);

  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <h1 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px] mb-[20px] lg:mb-[30px]">
          kybun Schuhe
        </h1>
        {/* <PageHeader heading={collection.title}>
          {collection?.description && (
            <div className="flex items-baseline justify-between w-full">
              <div>
                <Text format width="narrow" as="p" className="inline-block">
                  {collection.description}
                </Text>
              </div>
            </div>
          )}
        </PageHeader> */}
        <div className="product-list-hero-img relative overflow-hidden rounded-xl pb-[35%] min-h-[400px]">
          <img
            className="absolute rounded-xl inset-0 w-full h-full object-cover"
            src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_11.png?v=1681738522"
            alt=""
          />
        </div>
        <section className="info-slider-with-img mt-[100px]">
          <div className="row flex gap-x-[70px] gap-y-[30px]">
            <div className='"w-[50%]'>
              <div className="img-info-col relative h-[calc(100%_-_60px)]">
                <div className="img-wrap h-full flex flex-col justify-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/svg-kybun-magglingen-3_1.png?v=1681740026"
                    alt=""
                  />
                </div>
                <ul className="img-info-list">
                  <li>
                    <svg
                      className="icon"
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={50}
                        cy={50}
                        r={49}
                        fill="#EDEDED"
                        fillOpacity="0.5"
                        stroke="#DEDEDE"
                        strokeWidth={2}
                      />
                      <line
                        x1="51.4502"
                        y1="27.9277"
                        x2="51.4502"
                        y2="72.9728"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <line
                        x1="72.9727"
                        y1="51.4502"
                        x2="27.9276"
                        y2="51.4502"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                    <img
                      className="line"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_9.png?v=1681740250"
                      alt=""
                    />
                    <span>Dämpfung im Fersenbereich</span>
                  </li>
                  <li>
                    <svg
                      className="icon"
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={50}
                        cy={50}
                        r={49}
                        fill="#EDEDED"
                        fillOpacity="0.5"
                        stroke="#DEDEDE"
                        strokeWidth={2}
                      />
                      <line
                        x1="51.4502"
                        y1="27.9277"
                        x2="51.4502"
                        y2="72.9728"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <line
                        x1="72.9727"
                        y1="51.4502"
                        x2="27.9276"
                        y2="51.4502"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                    <img
                      className="line"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_7.png?v=1681740250"
                      alt=""
                    />
                    <span>elastisch-federnd</span>
                  </li>
                  <li>
                    <svg
                      className="icon"
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={50}
                        cy={50}
                        r={49}
                        fill="#EDEDED"
                        fillOpacity="0.5"
                        stroke="#DEDEDE"
                        strokeWidth={2}
                      />
                      <line
                        x1="51.4502"
                        y1="27.9277"
                        x2="51.4502"
                        y2="72.9728"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <line
                        x1="72.9727"
                        y1="51.4502"
                        x2="27.9276"
                        y2="51.4502"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                    <img
                      className="line"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_5.png?v=1681740250"
                      alt=""
                    />
                    <span>Swiss made</span>
                  </li>
                  <li>
                    <svg
                      className="icon"
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={50}
                        cy={50}
                        r={49}
                        fill="#EDEDED"
                        fillOpacity="0.5"
                        stroke="#DEDEDE"
                        strokeWidth={2}
                      />
                      <line
                        x1="51.4502"
                        y1="27.9277"
                        x2="51.4502"
                        y2="72.9728"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <line
                        x1="72.9727"
                        y1="51.4502"
                        x2="27.9276"
                        y2="51.4502"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </svg>
                    <img
                      className="line"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_6.png?v=1681740250"
                      alt=""
                    />
                    <span>Swiss made</span>
                  </li>
                </ul>
              </div>
              <div className="slider-controls mt-[34px] flex flex-wrap gap-x-[37px] gap-y-[20px] items-center">
                <div className="products-swiper-buttons relative flex gap-[10px] xl:gap-[20px]">
                  <div className="swiper-button-next-product-info rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180">
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div className="swiper-button-prev-product-info rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center">
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <div class="my-custom-pagination-div !w-auto"></div>
              </div>
            </div>
            <div className="w-[50%] content-info-col rounded-xl">
              <div className="content-info-col-inner">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next-product-info',
                    prevEl: '.swiper-button-prev-product-info',
                  }}
                  loop="false"
                  autoplay="false"
                  pagination={{
                    el: '.my-custom-pagination-div',
                    clickable: true,
                  }}
                  className="h-full overflow-visible rounded-xl flex flex-col"
                >
                  <SwiperSlide className="pb-[60px]">
                    <div className="item relative">
                      <div className="bg-img absolute inset-0 rounded-[10px]">
                        <img
                          className="w-full h-full object-cover rounded-[10px]"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_1.png?v=1681740595"
                          alt=""
                        />
                      </div>
                      <div className="info bg-[#fff] py-[80px] px-[30px] relative z-[1] w-[77%] ml-auto rounded-[10px] top-[48px] mr-[50px]">
                        <div className="top-btn flex gap-[20px]">
                          <a
                            href="#"
                            className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#000] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#00795c] hover:!text-[#fff]"
                          >
                            <IconCart />
                            kybun Online-Shop
                          </a>
                          <a
                            href="#"
                            className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#00795C] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#000000] hover:!text-[#ffffff]"
                          >
                            <IconMapPin />
                            Storefinder
                          </a>
                        </div>
                        <div className="desc mt-[68px]">
                          <h3 className="text-[18px] lg:text-[25px] text-black font-normal tracking-[-0.400697px]">
                            Im Schweizer Luftkissen-Schuh steht der Fuss direkt
                            auf einer elastisch-federnden Matte, die dem Fuss
                            die maximale Bewegungsfreiheit in alle Richtungen
                            ermöglicht. Durch die Elastizität und Instabilität
                            in alle Richtungen wird die Muskulatur optimal
                            trainiert.
                          </h3>
                        </div>
                        <div className="desc mt-[40px] text-black text-[18px] font-normal">
                          <p>
                            Die Gelenke werden geschont und die Rückenmuskulatur
                            entspannt wie in keiner anderen Fussbekleidung. Der
                            kybun ist ein Alltagsschuh, der den ganzen Tag
                            getragen werden kann. Er ist besonders geeignet für
                            Menschen, die im Berufsleben lange stehen und eine
                            intensive körperliche Arbeit verrichten. Die
                            elastisch-federnde Sohle (Luftkissen-Sohle)
                            verhindert schwere Beine, brennende Füsse,
                            Rückenschmerzen und Venenleiden.
                          </p>
                          <p>
                            Da das elastisch-federnde Material sich immer
                            dynamisch an die Form der Fusssohle anpasst, ist der
                            kybun auch ideal für alle Fussprobleme. Für Sportler
                            eignet er sich zum Warm Up als auch zum Auslaufen
                            nach Trainingseinheiten oder Wettkämpfen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pb-[60px]">
                    <div className="item relative">
                      <div className="bg-img absolute inset-0 rounded-[10px]">
                        <img
                          className="w-full h-full object-cover rounded-[10px]"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_1.png?v=1681740595"
                          alt=""
                        />
                      </div>
                      <div className="info bg-[#fff] py-[80px] px-[30px] relative z-[1] w-[77%] ml-auto rounded-[10px] top-[48px] mr-[50px]">
                        <div className="top-btn flex gap-[20px]">
                          <a
                            href="#"
                            className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#000] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#00795c] hover:!text-[#fff]"
                          >
                            <IconCart />
                            kybun Online-Shop
                          </a>
                          <a
                            href="#"
                            className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#00795C] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#000000] hover:!text-[#ffffff]"
                          >
                            <IconCart />
                            Storefinder
                          </a>
                        </div>
                        <div className="desc mt-[68px]">
                          <h3 className="text-[18px] lg:text-[25px] text-black font-normal tracking-[-0.400697px]">
                            Im Schweizer Luftkissen-Schuh steht der Fuss direkt
                            auf einer elastisch-federnden Matte, die dem Fuss
                            die maximale Bewegungsfreiheit in alle Richtungen
                            ermöglicht. Durch die Elastizität und Instabilität
                            in alle Richtungen wird die Muskulatur optimal
                            trainiert.
                          </h3>
                        </div>
                        <div className="desc mt-[40px] text-black text-[18px] font-normal">
                          <p>
                            Die Gelenke werden geschont und die Rückenmuskulatur
                            entspannt wie in keiner anderen Fussbekleidung. Der
                            kybun ist ein Alltagsschuh, der den ganzen Tag
                            getragen werden kann. Er ist besonders geeignet für
                            Menschen, die im Berufsleben lange stehen und eine
                            intensive körperliche Arbeit verrichten. Die
                            elastisch-federnde Sohle (Luftkissen-Sohle)
                            verhindert schwere Beine, brennende Füsse,
                            Rückenschmerzen und Venenleiden.
                          </p>
                          <p>
                            Da das elastisch-federnde Material sich immer
                            dynamisch an die Form der Fusssohle anpasst, ist der
                            kybun auch ideal für alle Fussprobleme. Für Sportler
                            eignet er sich zum Warm Up als auch zum Auslaufen
                            nach Trainingseinheiten oder Wettkämpfen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pb-[60px]">
                    <div className="item relative">
                      <div className="bg-img absolute inset-0 rounded-[10px]">
                        <img
                          className="w-full h-full object-cover rounded-[10px]"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_1.png?v=1681740595"
                          alt=""
                        />
                      </div>
                      <div className="info bg-[#fff] py-[80px] px-[30px] relative z-[1] w-[77%] ml-auto rounded-[10px] top-[48px] mr-[50px]">
                        <div className="top-btn flex gap-[20px]">
                          <a
                            href="#"
                            className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#000] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#00795c] hover:!text-[#fff]"
                          >
                            <IconCart />
                            kybun Online-Shop
                          </a>
                          <a
                            href="#"
                            className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#00795C] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#000000] hover:!text-[#ffffff]"
                          >
                            <IconCart />
                            Storefinder
                          </a>
                        </div>
                        <div className="desc mt-[68px]">
                          <h3 className="text-[18px] lg:text-[25px] text-black font-normal tracking-[-0.400697px]">
                            Im Schweizer Luftkissen-Schuh steht der Fuss direkt
                            auf einer elastisch-federnden Matte, die dem Fuss
                            die maximale Bewegungsfreiheit in alle Richtungen
                            ermöglicht. Durch die Elastizität und Instabilität
                            in alle Richtungen wird die Muskulatur optimal
                            trainiert.
                          </h3>
                        </div>
                        <div className="desc mt-[40px] text-black text-[18px] font-normal">
                          <p>
                            Die Gelenke werden geschont und die Rückenmuskulatur
                            entspannt wie in keiner anderen Fussbekleidung. Der
                            kybun ist ein Alltagsschuh, der den ganzen Tag
                            getragen werden kann. Er ist besonders geeignet für
                            Menschen, die im Berufsleben lange stehen und eine
                            intensive körperliche Arbeit verrichten. Die
                            elastisch-federnde Sohle (Luftkissen-Sohle)
                            verhindert schwere Beine, brennende Füsse,
                            Rückenschmerzen und Venenleiden.
                          </p>
                          <p>
                            Da das elastisch-federnde Material sich immer
                            dynamisch an die Form der Fusssohle anpasst, ist der
                            kybun auch ideal für alle Fussprobleme. Für Sportler
                            eignet er sich zum Warm Up als auch zum Auslaufen
                            nach Trainingseinheiten oder Wettkämpfen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <Section className={'mt-[300px]'}>
          <SortFilter
            filters={collection.products.filters}
            appliedFilters={appliedFilters}
            collections={collections}
          >
            <ProductGrid
              key={collection.id}
              collection={collection}
              url={`/collections/${collection.handle}`}
              data-test="product-grid"
              className="grid grid-cols-3 product-listing gap-x-[20px] gap-y-[70px]"
            />
          </SortFilter>
        </Section>
      </div>
    </>
  );
}

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $pageBy,
        after: $cursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`;

function getSortValuesFromParam(sortParam) {
  switch (sortParam) {
    case 'price-high-low':
      return {
        sortKey: 'PRICE',
        reverse: true,
      };
    case 'price-low-high':
      return {
        sortKey: 'PRICE',
        reverse: false,
      };
    case 'best-selling':
      return {
        sortKey: 'BEST_SELLING',
        reverse: false,
      };
    case 'newest':
      return {
        sortKey: 'CREATED',
        reverse: true,
      };
    case 'featured':
      return {
        sortKey: 'MANUAL',
        reverse: false,
      };
    default:
      return {
        sortKey: 'RELEVANCE',
        reverse: false,
      };
  }
}
