import {
  ExpandingCardStyle2,
  Link,
  IconClose,
  Breadcrumb,
  ArrowRight,
} from '~/components';
import React, {Fragment, useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url: data?.url,
});

export const handle = {
  seo,
};
const PAGINATION_SIZE = 40;
export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'dr-kybun-joya',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const pageCollectionTitle =
    page?.ratgeber_detail?.reference?.page_collection?.reference?.title;

  const {sub_collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: {
      searchTerm: `title:\\"${pageCollectionTitle}\\"`,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  const collectionHandle = 'all-products';

  const searchParams = new URL(request.url).searchParams;

  const knownFilters = ['productVendor', 'productType'];
  const available = 'available';
  const variantOption = 'variantOption';
  const {sortKey, reverse} = getSortValuesFromParam(searchParams.get('sort'));
  const cursor = searchParams.get('cursor');

  const filters = [{productType: 'Dr. kybun Joya'}];

  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
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
  });

  return json(
    {page, collection, sub_collections, pageCollectionTitle, url: request.url},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}
export default function ratgeberseite() {
  const {page, collection, sub_collections, pageCollectionTitle} =
    useLoaderData();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredKybunJoyaProducts = collection?.products?.nodes.filter(
    (product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    },
  );

  const headProductList = filteredKybunJoyaProducts?.slice(0, 5);
  const sliderProductList = filteredKybunJoyaProducts?.slice(5, 11);

  useEffect(() => {
    document.querySelectorAll('.my-achor-link').forEach(function (link) {
      link.addEventListener('mouseover', function (e) {
        e.preventDefault();

        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          icon.classList.remove('active');
        });

        const hashId = this.hash.substring(1);

        const kgIcon = document.getElementById(
          hashId.replace('link', 'kb-body-icon-'),
        );
        kgIcon?.classList?.add('active');
      });
      link.addEventListener('mouseout', function (e) {
        e.preventDefault();
        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          let activeLink = document.getElementsByClassName(
            'my-achor-link active',
          )[0];
          if (activeLink) {
            const [hash, query] = activeLink.href.split('#')[1].split('?');
            const iconId = hash.replace('link', 'kb-body-icon-');
            if (icon.id != iconId) {
              icon.classList.remove('active');
            } else {
              icon.classList.add('active');
            }
          } else {
            icon.classList.remove('active');
          }
        });
      });
    });

    document.querySelectorAll('.my-achor-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.my-achor-link').forEach(function (link) {
          link.classList.remove('active');
        });

        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          icon.classList.remove('active');
        });

        if (this.getAttribute('hreflink')) {
          window.location.href = this.getAttribute('hreflink');
          return true;
        }

        // add active class to clicked element
        this.classList.add('active');

        const hashId = this.hash.substring(1);

        const kgIcon = document.getElementById(
          hashId.replace('link', 'kb-body-icon-'),
        );
        kgIcon?.classList?.add('active');

        document
          .querySelectorAll('.kb-accordion')
          .forEach(function (accordion) {
            if (
              accordion.id != hashId &&
              accordion.getAttribute('data-headlessui-state') == 'open'
            ) {
              accordion?.querySelector('button')?.click();
            }
          });
        var myElement = document.querySelector('#' + hashId);
        if (
          myElement &&
          myElement?.getAttribute('data-headlessui-state') != 'open'
        ) {
          myElement?.querySelector('button')?.click();
        }

        setTimeout(() => {
          var target = this.hash;
          var $target = document.querySelector(target);
          var scrollDistance = $target.offsetTop - 90;

          window.scrollTo({
            top: scrollDistance,
            behavior: 'smooth',
          });
        }, 500);
      });
    });
  }, []);

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs(null, 'ratgeber')} />
      <section className="dr-info-tabs-section">
        <div className="container">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap flex-col gap-x-[46px] justify-center md:justify-start">
              <div className="content-info w-full xl:flex-[1]">
                <div className="title-wrap text-left">
                  <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
                    {page?.ratgeber_detail?.reference?.head_title?.value}
                  </h2>
                  <div className="product-list-hero-img relative overflow-hidden pb-[29%] min-h-[270px]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover object-left-top"
                      src={
                        page?.ratgeber_detail?.reference?.hero_image?.reference
                          ?.image?.url
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="desc  mt-[20px] lg:mt-[40px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[910px]"
                  dangerouslySetInnerHTML={{
                    __html:
                      page?.ratgeber_detail?.reference?.head_new_desc_with_list
                        ?.value,
                  }}
                ></div>
                <div className="desc mt-[20px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[870px]">
                  <ul className="list-style2 list-style3 flex flex-col gap-y-[10px]">
                    {headProductList?.length > 0 &&
                      headProductList.map((product, index) => {
                        return (
                          <li
                            className="list-style-green hover:underline"
                            key={index}
                          >
                            <Link
                              key={index}
                              to={`/dr-kybun-joya/${product.handle}`}
                            >
                              {product.title}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
                           
              <div className="right-col tabs-wrap xl:flex-[1]">
                <div className="search-bar hidden">
                  <form action="">
                    <div className="relative">
                      <button
                        type="submit"
                        className="text-black absolute inset-y-0 left-[28px] flex items-center"
                      >
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 53 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {' '}
                          <circle
                            cx="22.6274"
                            cy="23.4645"
                            r={15}
                            transform="rotate(-45 22.6274 23.4645)"
                            stroke="black"
                            strokeWidth={2}
                          />{' '}
                          <line
                            x1="33.9415"
                            y1="34.7782"
                            x2="41.0126"
                            y2="41.8493"
                            stroke="black"
                            strokeWidth={2}
                          />{' '}
                        </svg>
                      </button>
                      <input
                        type="search"
                        placeholder="Suchen"
                        name="q"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] py-[20px] 2xl:py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                      />
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-items-section pt-[40px] md:pt-[60px]">
        <div className="container !pr-0">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold pr-[20px]">
            {page?.ratgeber_detail?.reference?.product_slider_title?.value}
          </h2>
          <div className="relative w-full popular-items-slider">
            <div className="product-brand--swiper-buttons">
              <div
                id="swiper-button-next-artical-slider"
                className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-1/2 translate-y-[-180%] lg:translate-y-[-110%] xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
              >
                <ArrowRight
                  className={
                    'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                  }
                />
              </div>
              <div
                id="swiper-button-prev-artical-slider"
                className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-1/2 translate-y-[-180%] xl:translate-y-[-110%] md:right-[30px] right-[10px] outline"
              >
                <ArrowRight
                  className={
                    'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                  }
                />
              </div>
            </div>
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={2.5}
              spaceBetween={20}
              // autoplay={{
              //   delay: 3500,
              //   disableOnInteraction: false,
              // }}
              navigation={{
                prevEl: '#swiper-button-next-artical-slider',
                nextEl: '#swiper-button-prev-artical-slider',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                },
                767: {
                  slidesPerView: 2.1,
                },
                1280: {
                  slidesPerView: 2.3,
                },
                1500: {
                  slidesPerView: 2.5,
                },
              }}
              className=""
            >
              {sliderProductList.length > 0 &&
                sliderProductList.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="popular-item">
                        <Link to={`/dr-kybun-joya/${product.handle}`}>
                          <div className="img-wrap overflow-hidden pb-[100%] md:pb-[65%] mb-[15px] relative">
                            <img
                              className="absolute inset-0 w-full h-full object-cover object-center hover:scale-110 transition-all duration-500"
                              src={
                                product?.featuredImage?.url
                                  ? product?.featuredImage?.url
                                  : 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_1_4.png?v=1685525783'
                              }
                              alt=""
                            />
                          </div>

                          {/* <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[5px]">
                            <p>Gesundheitswissen</p>
                          </div> */}
                          <div className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-medium mb-[15px] hover:text-[#00795c]">
                            <p>{product.title}</p>
                          </div>
                        </Link>
                        <Link
                          to={`/dr-kybun-joya/${product.handle}`}
                          className="inline-block rounded-[100px] bg-[#00795c] text-white
                            text-center px-[20px] md:px-[35px] py-[12px] md:py-[15px] hover:bg-black hover:text-white text-[14px] md:text-[18px] max-w-fit"
                        >
                          Mehr erfahren
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
             
            </Swiper>
          </div>
          <div
            className="desc lg:mt-[40px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[950px] mt-[30px] pr-[20px]"
            dangerouslySetInnerHTML={{
              __html: toHTML(
                page?.ratgeber_detail?.reference?.product_slider_sub_desc
                  ?.value,
              ),
            }}
          ></div>
        </div>
      </section>
      <section className="dr-faq-sec mx-auto my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
        <div className="container flex flex-col gap-[20px]">
          <h3 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] font-bold">
            {page?.ratgeber_detail?.reference?.product_sub_list_title?.value}
          </h3>
          {sub_collections?.nodes?.map((item, index) => {
            if (
              item.title != pageCollectionTitle &&
              item?.products?.edges.length > 0
            ) {
              return (
                <ExpandingCardStyle2
                  key={index}
                  id={`link${index + 1}`}
                  content={''}
                  products={item?.products?.edges}
                  title={item.title.replace(pageCollectionTitle, '').trim()}
                />
              );
            }
          })}
          
        </div>
      </section>
      <section className="search-bar-section mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
        <div className="container">
          <div className="search-bar max-w-[991px] mx-auto">
            <form action="">
              <div className="relative">
                <button
                  type="submit"
                  className="text-black absolute inset-y-0 left-[28px] flex items-center"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 53 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {' '}
                    <circle
                      cx="22.6274"
                      cy="23.4645"
                      r={15}
                      transform="rotate(-45 22.6274 23.4645)"
                      stroke="black"
                      strokeWidth={2}
                    />{' '}
                    <line
                      x1="33.9415"
                      y1="34.7782"
                      x2="41.0126"
                      y2="41.8493"
                      stroke="black"
                      strokeWidth={2}
                    />{' '}
                  </svg>
                </button>
                <input
                  type="search"
                  placeholder="Suchen"
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] py-[20px] 2xl:py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="two-box-sec mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="col w-full lg:w-[50%]">
              <Link
                className="col-inner shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] h-full flex flex-col"
                to={
                  page?.ratgeber_detail?.reference?.footer_main_left_section_cta
                    ?.value
                }
              >
                <div className="img-wrap relative overflow-hidden pb-[38%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-left-top hover:scale-110 transition-all duration-500"
                    src={
                      page?.ratgeber_detail?.reference
                        ?.footer_main_left_section_image?.reference?.image?.url
                    }
                    alt=""
                  />
                </div>
                <div className="info-col p-[15px] md:p-[25px] lg:p-[30px] xl:p-[40px] md:!pt-[25px] max-w-[683px] mx-auto h-full flex flex-col">
                  <h4
                    className="text-[24px] md:text-[28px] xl:text-[30px] text-black font-[500] leading-[1.2] text-center"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_detail?.reference
                          ?.footer_main_left_section_desc?.value,
                      ),
                    }}
                  ></h4>
                  <div className="btn-wrap flex justify-center mt-auto">
                    <div
                      to={
                        page?.ratgeber_detail?.reference
                          ?.footer_main_left_section_cta?.value
                      }
                      className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[40px] lg:px-[59px] py-[20px] lg:py-[25px] hover:bg-black hover:text-white text-[16px] lg:text-[18px] max-w-fit mt-[20px] leading-none"
                    >
                      {
                        page?.ratgeber_detail?.reference
                          ?.footer_main_left_section_cta_label?.value
                      }
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col w-full lg:w-[50%]">
              <Link
                className="col-inner shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] h-full flex flex-col"
                to={
                  page?.ratgeber_detail?.reference
                    ?.footer_main_right_section_cta?.value
                }
              >
                <div className="img-wrap relative overflow-hidden pb-[38%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-left-top hover:scale-110 transition-all duration-500"
                    src={
                      page?.ratgeber_detail?.reference
                        ?.footer_main_right_section_image?.reference?.image?.url
                    }
                    alt=""
                  />
                </div>
                <div className="info-col p-[15px] md:p-[25px] lg:p-[30px] xl:p-[40px] md:!pt-[25px] max-w-[683px] mx-auto h-full flex flex-col">
                  <h4
                    className="text-[24px] md:text-[28px] xl:text-[30px] text-black font-[500] leading-[1.2] text-center"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_detail?.reference
                          ?.footer_main_right_section_desc?.value,
                      ),
                    }}
                  ></h4>
                  <div className="btn-wrap flex justify-center mt-auto">
                    <div className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[40px] lg:px-[59px] py-[20px] lg:py-[25px] hover:bg-black hover:text-white text-[16px] lg:text-[18px] max-w-fit mt-[20px] leading-none">
                      {
                        page?.ratgeber_detail?.reference
                          ?.footer_main_right_section_cta_label?.value
                      }
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
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

const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      ratgeber_detail : metafield(namespace: "custom", key: "ratgeber_detail") {
        reference {
          ... on Metaobject {
            handle
            head_title : field(key: "head_title") {
              value
            }
            head_new_desc_with_list : field(key: "head_new_desc_with_list") {
              value
            }
            footer_main_left_section_desc : field(key: "footer_main_left_section_desc") {
              value
            }
            footer_main_left_section_image : field(key: "footer_main_left_section_image") {
              reference {
                ...Media
              }
            }
            footer_main_left_section_cta : field(key: "footer_main_left_section_cta") {
              value
            }
            footer_main_left_section_cta_label : field(key: "footer_main_left_section_cta_label") {
              value
            }
            footer_main_right_section_desc : field(key: "footer_main_right_section_desc") {
              value
            }
            footer_main_right_section_image : field(key: "footer_main_right_section_image") {
              reference {
                ...Media
              }
            }
            footer_main_right_section_cta : field(key: "footer_main_right_section_cta") {
              value
            }
            footer_main_right_section_cta_label : field(key: "footer_main_right_section_cta_label") {
              value
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
           
            product_slider_title : field(key: "product_slider_title") {
              value
            }
            product_slider_sub_desc : field(key: "product_slider_sub_desc") {
              value
            }
            product_sub_list_title : field(key: "product_sub_list_title") {
              value
            }
            page_collection : field(key: "page_collection") {
              reference {
                ... on Collection {
                  title
                  handle
                }
              }
            }
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`;

const COLLECTIONS_QUERY = `#graphql
  query Collections(
    $country: CountryCode
    $language: LanguageCode
    $searchTerm: String
  ) @inContext(country: $country, language: $language) {
    sub_collections : collections (first : 250,  query: $searchTerm) {
      nodes {
        id
        title
        handle
        products(first: 50, sortKey : TITLE) {
          edges {
            node {
              id
              title
              handle
            }
          }
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
