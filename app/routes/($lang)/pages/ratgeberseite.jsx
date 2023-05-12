import {ExpandingCardStyle2, Link, IconClose, Breadcrumb} from '~/components';
import React, {Fragment, useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {toHTML, getBreadCrumbs} from '~/lib/utils';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
});

export const handle = {
  seo,
};
const PAGINATION_SIZE = 40;
export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'ratgeber-detail-page',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const pageCollectionTitle = page?.ratgeber_detail?.reference?.page_collection?.reference?.title;

  const {sub_collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: {
      searchTerm : `title:\\"${pageCollectionTitle}\\"`,
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
  
  const filters = [ { productType: 'Dr. kybun Joya' } ]

  const {collection} = await context.storefront.query(
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

  return json(
    {page, collection, sub_collections, pageCollectionTitle},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}
export default function ratgeberseite() {
  const {page, collection, sub_collections, pageCollectionTitle} = useLoaderData();

  const [searchQuery, setSearchQuery] = useState('');


  const filteredKybunJoyaProducts = collection?.products?.nodes.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase())
  });

  

  const buttonAccordionMapping = page?.ratgeber_detail?.reference
    ?.button_accordion_mapping?.value
    ? JSON.parse(page.ratgeber_detail.reference.button_accordion_mapping.value)
    : [];

  useEffect(() => {
     document.querySelectorAll('.my-achor-link').forEach(function (link) {
      link.addEventListener('mouseover', function (e) {
        e.preventDefault();
        
        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          icon.classList.remove('active');
        });

        const hashId = this.hash.substring(1);

        const kgIcon = document.getElementById(hashId.replace('link','kb-body-icon-'));
        kgIcon?.classList?.add('active');

      });
      link.addEventListener('mouseout', function (e) {
        e.preventDefault();
        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          
          let activeLink  = document.getElementsByClassName('my-achor-link active')[0];
          if (activeLink) {
            const [hash, query] = activeLink.href.split('#')[1].split('?')
            const iconId = hash.replace('link','kb-body-icon-');
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
          window.location.href = this.getAttribute('hreflink')
          return true;
        }
        

        // add active class to clicked element
        this.classList.add('active');

        const hashId = this.hash.substring(1);

        
        const kgIcon = document.getElementById(hashId.replace('link','kb-body-icon-'));
        kgIcon?.classList?.add('active');

        document.querySelectorAll('.kb-accordion').forEach(function (accordion) {
          if (accordion.id != hashId && accordion.getAttribute('data-headlessui-state') == 'open') {
            accordion?.querySelector('button')?.click();
          }
       });
       var myElement = document.querySelector('#' + hashId);
        if (myElement && myElement?.getAttribute('data-headlessui-state') != 'open') {
            myElement?.querySelector('button')?.click();
        }

        setTimeout(()=> {
          var target = this.hash;
        var $target = document.querySelector(target);
        var scrollDistance = $target.offsetTop - 90;

        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth',
        });
        },500);
      });
    });
  }, []);

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs('beratung','ratgeber')}/>
      <div className="container">
        <section className="dr-info-tabs-section">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap flex-col md:flex-row gap-y-[30px] gap-x-[46px] justify-center md:justify-start">
              <div className="content-info w-full xl:flex-[1]">
                <div className="title-wrap text-left xl:text-right xl:max-w-[280px] ml-auto">
                  <h2 className="text-[#00795C] leading-none text-[40px] md:text-[50px] lg:text-[70px] 2xl:text-[100px] font-black">
                    {page?.ratgeber_detail?.reference?.head_title?.value}
                  </h2>
                </div>
                <div
                  className="desc mt-[20px] mx-auto lg:mt-[30px] xl:mt-[52px] text-[28px] md:text-[30px] lg:text-[35px] 2xl:text-[40px] tracking-[-0.97152px]  text-left xl:text-right text-black leading-[1.2]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_detail?.reference?.head_content?.value,
                    ),
                  }}
                ></div>
              </div>
              <div className="interactive-img-wrap mx-auto block w-[320px]">
                <div className="img-wrap w-full text-center relative">
                  <img
                    className="m-auto"
                    src={
                      page?.ratgeber_detail?.reference?.head_interactive_image
                        ?.reference?.image?.url
                    }
                    alt=""
                  />
                  <div className="interactive-list w-full left-[-90px] top-0 h-full absolute">
                    <div className="absolute top-0 left-[240px] kb-body-icon" id="kb-body-icon-1">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[300px] left-[220px] kb-body-icon" id="kb-body-icon-3">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[330px] left-[130px] kb-body-icon" id="kb-body-icon-5">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[330px] left-[281px] kb-body-icon" id="kb-body-icon-2">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[510px] left-[261px] kb-body-icon" id="kb-body-icon-4">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute bottom-[110px] left-[180px] kb-body-icon" id="kb-body-icon-6">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute bottom-[80px] left-[250px] kb-body-icon" id="kb-body-icon-7">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col tabs-wrap xl:flex-[1]">
                <div className="search-bar">
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
                        onChange={e => setSearchQuery(e.target.value)}
                        className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] py-[20px] 2xl:py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                      />
                    </div>
                  </form>
                </div>
                <div className="scroll-links-wrap grid grid-cols-2 min-[1701px]:gap-x-[40px] max-[1700px]:gap-[20px] min-[1701px]:gap-y-[45px] gap-[20px] mt-[30px]">
                  {filteredKybunJoyaProducts.map((product,index) => {
                      return (
                        <Link
                          key={index}
                          to={`/products/custom-product/${product.handle}`}
                          className="p-[15px] xl:px-[20px] xl:py-[26px] flex justify-center items-center text-center bg-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[21px] leading-[1.4] hover:text-white hover:bg-[#00795C] xl:min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                        >
                          {product.title}
                        </Link>
                      );
                  })}
                  {/* {buttonAccordionMapping?.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={`#link${index + 1}`}
                        hreflink={item.hreflink}
                        className="p-[15px] xl:px-[20px] xl:py-[26px] flex justify-center items-center text-center bg-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[21px] leading-[1.4] hover:text-white hover:bg-[#00795C] xl:min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                      >
                        {item.button_name}
                      </a>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dr-faq-sec !max-w-[870px] mx-auto flex flex-col gap-[20px] my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
          {sub_collections?.nodes?.map((item,index) => {
              if (item.title != pageCollectionTitle) {
                  console.log("item", );
                  <ul><li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li></ul>
                  return (
                    <ExpandingCardStyle2
                      key={index}
                      id={`link${index + 1}`}
                      content={""}
                      products={item?.products?.edges}
                      title={item.title.replace(pageCollectionTitle, "")}
                    />
                  )
              }
          })}
          {/* {buttonAccordionMapping?.map((item, index) => {
            console.log("item",item);
            if (!item.accordion_title) return <></>;
            return (
              <ExpandingCardStyle2
                key={index}
                id={`link${index + 1}`}
                content={item.accordion_content}
                title={item.accordion_title}
              />
            );
          })} */}
          <div className="info-bottom mt-[20px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px]">
            <div className="title-wrap">
              <h3 className="text-center tracking-[-0.97152px] text-[28px] md:text-[30px] lg:text-[2 leading-[1.1] font-medium">
                {page?.ratgeber_detail?.reference?.cta_text?.value}
              </h3>
            </div>
            <div className="link-wrap flex justify-center mt-[20px] lg:mt-[40px]">
              <Link
                className="block rounded-[100px] bg-black text-white
            text-center px-[60px] py-[20px] md:py-[25px] hover:bg-[#00795c] hover:text-white text-[16px] md:text-[18px] max-w-fit font-normal leading-none"
                to={
                  page?.ratgeber_detail?.reference?.cta_button_redirect?.value
                }
              >
                {page?.ratgeber_detail?.reference?.cta_button_text?.value}
              </Link>
            </div>
          </div>
        </section>
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
            head_interactive_image : field(key: "head_interactive_image") {
              reference {
                ...Media
              }
            }
            head_title : field(key: "head_title") {
              value
            }
            head_content : field(key: "head_content") {
              value
            }
            cta_text : field(key: "cta_text") {
              value
            }
            cta_button_text : field(key: "cta_button_text") {
              value
            }
            cta_button_redirect : field(key: "cta_button_redirect") {
              value
            }
            button_accordion_mapping : field(key: "button_accordion_mapping") {
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
