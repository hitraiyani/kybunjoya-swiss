import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {flattenConnection, AnalyticsPageType} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {PageHeader, Section, Text, SortFilter} from '~/components';
import {ProductGrid} from '~/components/ProductGrid';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';

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

const PAGINATION_SIZE = 48;

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
          kybun Schuhe{' '}
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
            <div className="w-[50%] img-info-col relative">
              <div className="img-wrap">
                <img
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/svg-kybun-magglingen-3_1.png?v=1681740026"
                  alt=""
                />
              </div>
              <ul className="img-info-list">
                <li>
                  <svg className='icon' width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx={50} cy={50} r={49} fill="#EDEDED" fillOpacity="0.5" stroke="#DEDEDE" strokeWidth={2} /> <line x1="51.4502" y1="27.9277" x2="51.4502" y2="72.9728" stroke="black" strokeWidth={2} /> <line x1="72.9727" y1="51.4502" x2="27.9276" y2="51.4502" stroke="black" strokeWidth={2} /> </svg>
                  <img
                    className="line"
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_9.png?v=1681740250"
                    alt=""
                  />
                  <span>Dämpfung im Fersenbereich</span>
                </li>
                <li>
                <svg className='icon' width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx={50} cy={50} r={49} fill="#EDEDED" fillOpacity="0.5" stroke="#DEDEDE" strokeWidth={2} /> <line x1="51.4502" y1="27.9277" x2="51.4502" y2="72.9728" stroke="black" strokeWidth={2} /> <line x1="72.9727" y1="51.4502" x2="27.9276" y2="51.4502" stroke="black" strokeWidth={2} /> </svg>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_7.png?v=1681740250"
                    alt=""
                  />
                  <span>elastisch-federnd</span>
                </li>
                <li>
                <svg className='icon' width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx={50} cy={50} r={49} fill="#EDEDED" fillOpacity="0.5" stroke="#DEDEDE" strokeWidth={2} /> <line x1="51.4502" y1="27.9277" x2="51.4502" y2="72.9728" stroke="black" strokeWidth={2} /> <line x1="72.9727" y1="51.4502" x2="27.9276" y2="51.4502" stroke="black" strokeWidth={2} /> </svg>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_5.png?v=1681740250"
                    alt=""
                  />
                  <span>Swiss made</span>
                </li>
                <li>
                <svg className='icon' width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx={50} cy={50} r={49} fill="#EDEDED" fillOpacity="0.5" stroke="#DEDEDE" strokeWidth={2} /> <line x1="51.4502" y1="27.9277" x2="51.4502" y2="72.9728" stroke="black" strokeWidth={2} /> <line x1="72.9727" y1="51.4502" x2="27.9276" y2="51.4502" stroke="black" strokeWidth={2} /> </svg>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Vector_6.png?v=1681740250"
                    alt=""
                  />
                  <span>Swiss made</span>
                </li>
              </ul>
            </div>
            <div className="w-[50%] content-info-col rounded-xl">
              <div className="content-info-col-inner">
                <div className="item relative">
                  <div className="bg-img absolute inset-0 rounded-[10px]">
                    <img className='w-full h-full object-cover rounded-[10px]'
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_1.png?v=1681740595"
                      alt=""
                    />
                  </div>
                  <div className="info bg-[#fff] py-[80px] px-[30px] relative z-[1] w-[77%] ml-auto rounded-[10px] top-[100px] mr-[50px]">
                    <div className="top-btn flex gap-[20px]">
                      <a
                        href="#"
                        className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#000] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#00795c] hover:!text-[#fff]"
                      >
                        <svg
                          width={17}
                          height={17}
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.34676 16.5C4.94305 16.5 4.5989 16.3593 4.3143 16.078C4.02969 15.7967 3.88739 15.4585 3.88739 15.0634C3.88739 14.6683 4.03113 14.3315 4.31861 14.053C4.6061 13.7745 4.95169 13.6353 5.35538 13.6353C5.75908 13.6353 6.10323 13.7759 6.38784 14.0573C6.67244 14.3386 6.81474 14.6768 6.81474 15.0719C6.81474 15.4669 6.671 15.8037 6.38353 16.0822C6.09604 16.3607 5.75045 16.5 5.34676 16.5ZM13.4783 16.5C13.0746 16.5 12.7304 16.3593 12.4458 16.078C12.1612 15.7967 12.0189 15.4585 12.0189 15.0634C12.0189 14.6683 12.1627 14.3315 12.4501 14.053C12.7376 13.7745 13.0832 13.6353 13.4869 13.6353C13.8906 13.6353 14.2348 13.7759 14.5194 14.0573C14.804 14.3386 14.9463 14.6768 14.9463 15.0719C14.9463 15.4669 14.8025 15.8037 14.5151 16.0822C14.2276 16.3607 13.882 16.5 13.4783 16.5ZM3.71813 2.07163H15.5523C15.9064 2.07163 16.1757 2.22833 16.3605 2.54173C16.5452 2.85513 16.5465 3.17011 16.3644 3.4867L13.7027 8.18299C13.5471 8.44132 13.3472 8.64992 13.1029 8.80879C12.8586 8.96766 12.5881 9.04709 12.2914 9.04709H6.16643L5.06205 11.0637H14.9997V12.362H5.14778C4.55264 12.362 4.12486 12.1668 3.86442 11.7765C3.60397 11.3861 3.60897 10.9509 3.87944 10.4708L5.16589 8.15185L2.10508 1.79829H0.5V0.5H2.96597L3.71813 2.07163Z"
                            fill="white"
                          />
                        </svg>
                        kybun Online-Shop
                      </a>
                      <a
                        href="#"
                        className="tracking-[-0.400697px] text-[18px] leading-none flex text-center justify-center items-center gap-[10px] bg-[#00795C] text-white rounded-[100px] px-[53px] py-[20px] flex-1 font-normal hover:!bg-[#000000] hover:!text-[#ffffff]"
                      >
                        <svg
                          width={14}
                          height={19}
                          viewBox="0 0 14 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.99993 0C3.41023 0 0.5 2.95206 0.5 6.59384C0.5 7.21957 0.587887 7.82426 0.748523 8.3978C0.847343 8.75095 0.955485 9.10174 1.12614 9.41877C2.4591 11.8943 7 19 7 19C7 19 11.5411 11.8943 12.8741 9.4187C13.0447 9.10167 13.1527 8.75095 13.2517 8.39787C13.4122 7.82426 13.5001 7.21964 13.5001 6.59391C13.5 2.95206 10.5898 0 6.99993 0ZM6.99993 10.5091C4.86835 10.5091 3.14033 8.75614 3.14033 6.59376C3.14033 4.43139 4.86835 2.6784 6.99993 2.6784C9.13151 2.6784 10.8595 4.43139 10.8595 6.59376C10.8595 8.75614 9.13151 10.5091 6.99993 10.5091Z"
                            fill="white"
                          />
                        </svg>
                        Storefinder
                      </a>
                    </div>
                    <div className="desc mt-[68px]">
                      <h3 className="text-[18px] lg:text-[25px] text-black font-normal tracking-[-0.400697px]">
                        Im Schweizer Luftkissen-Schuh steht der Fuss direkt auf
                        einer elastisch-federnden Matte, die dem Fuss die
                        maximale Bewegungsfreiheit in alle Richtungen
                        ermöglicht. Durch die Elastizität und Instabilität in
                        alle Richtungen wird die Muskulatur optimal trainiert.
                      </h3>
                    </div>
                    <div className="desc mt-[40px] text-black text-[18px] font-normal">
                      <p>
                        Die Gelenke werden geschont und die Rückenmuskulatur
                        entspannt wie in keiner anderen Fussbekleidung. Der
                        kybun ist ein Alltagsschuh, der den ganzen Tag getragen
                        werden kann. Er ist besonders geeignet für Menschen, die
                        im Berufsleben lange stehen und eine intensive
                        körperliche Arbeit verrichten. Die elastisch-federnde
                        Sohle (Luftkissen-Sohle) verhindert schwere Beine,
                        brennende Füsse, Rückenschmerzen und Venenleiden.{' '}
                      </p>
                      <p>
                        Da das elastisch-federnde Material sich immer dynamisch
                        an die Form der Fusssohle anpasst, ist der kybun auch
                        ideal für alle Fussprobleme. Für Sportler eignet er sich
                        zum Warm Up als auch zum Auslaufen nach
                        Trainingseinheiten oder Wettkämpfen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section>
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
