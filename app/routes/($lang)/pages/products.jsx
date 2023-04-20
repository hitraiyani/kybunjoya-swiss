import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  ArrowRight,
  ExpandingCard,
  Link,
  ProductBrandSection,
  ProductMiscUpdate,
} from '~/components';
import {MEDIA_FRAGMENT} from '~/data/fragments';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
});

export const handle = {
  seo,
};

export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'products',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  return json(
    {page},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function schweizerSchuhpropktion() {
  const {page} = useLoaderData();

  const sliderImages = page?.slider_images?.references?.edges.map(
    (data) => data.node.image.url,
  );

  let firstSlideImages = [];
  let restSlideImages = [];
  if (sliderImages.length > 0) {
    firstSlideImages = sliderImages.slice(0,2);
    restSlideImages = sliderImages.slice(2);
  }

  return (
    <>
      <div className="container">
        <div className="title-wrap mt-[120px] lg:mt-[200px]">
          <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[60px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            Produkte
          </h2>
        </div>
      </div>
      <div className="container lg:!pr-0">
        <div className="flex gap-[22px] flex-col lg:flex-row">
          <div className="content-col w-full lg:w-[40%] flex flex-col bg-[#EDEDED] rounded-[10px] py-[27px] px-[32px]">
            <h2 className="text-[24px] lg:text-[30px] text-[#00795C] leading-[1.2] mb-[10px]">
              {page?.main_title?.value}
            </h2>
            <div
              className="desc text-black text-[20x] xl:text-[25px] lg:text-[18px] leading-[1.3] font-[400]"
              dangerouslySetInnerHTML={{
                __html: toHTML(page?.short_description?.value),
              }}
            ></div>
            <h2 className="text-[20px] lg:text-[25px] text-[#00795C] leading-[1.2] mb-[10px] mt-[47px]">
              {page?.head_title?.value}
            </h2>
            <div
              className="desc text-black text-[20x] xl:text-[25px] lg:text-[18px] leading-[1.3] font-[400] mb-[20px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(page?.long_description?.value),
              }}
            ></div>
            <div className="flex mt-auto justify-between items-center flex-wrap gap-[15px]">
              <Link
                to=""
                className="px-[35px] py-[22px] bg-black text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
              >
                Mehr über Technologie
              </Link>
              {/* <div className="products-swiper-buttons relative flex gap-[10px] xl:gap-[20px]">
                <div
                  className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180"
                ><ArrowRight className={'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'} /></div>
                <div
                  className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center"
                ><ArrowRight className={'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'} /></div>
              </div> */}
            </div>
          </div>
          <div className="img-col w-full lg:w-[60%] overflow-hidden product-slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={1.6}
              spaceBetween={20}
              navigation
              className="h-full overflow-visible flex flex-col"
            >
              <SwiperSlide>
                <div className="imgs-wrap flex flex-col gap-[20px]">
                  <img
                    className="w-full object-cover rounded-[10px] h-auto lg:h-[310px]"
                    src={firstSlideImages[0]}
                    alt=""
                  />
                  <div className='img-2 rounded-[10px] h-full xl:w-[60%] w-full xl:h-[40%] ml-auto block'>

                  <img
                    className="object-cover rounded-[10px] w-full h-full ml-auto block"
                    src={firstSlideImages[1]}
                    alt=""
                  />
                  </div>
                </div>
              </SwiperSlide>
              {restSlideImages.map((image,index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="imgs-wrap flex flex-col gap-[20px] h-full">
                        <img
                          className="h-full w-full object-cover rounded-[10px] "
                          src={image}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  );
              })}
              {/* {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="imgs-wrap grid grid-rows-2 grid-flow-col gap-[20px] lg:h-[700px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px] col-span-1 xl:col-span-2 aspect-[3/2]"
                      src={image}
                      alt=""
                    />
                    <img
                      className="object-cover rounded-[10px] col-span-1 xl:col-span-2 w-full xl:w-[80%] h-full xl:h-[80%] ml-auto block aspect-[3/2]"
                      src={image}
                      alt=""
                    />
                    <img
                      className="h-full w-full object-cover rounded-[10px] row-span-2 aspect-square"
                      src={image}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))} */}
            </Swiper>
          </div>
        </div>
      </div>
      <ProductBrandSection data={page?.products_brand_section?.reference} />
      <ProductMiscUpdate data={page?.product_misc_update?.reference} />
    </>
  );
}

const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      main_title: metafield(namespace: "custom", key: "main_title") {
        value
      }
      head_title: metafield(namespace: "custom", key: "head_title") {
        value
      }
      long_description: metafield(namespace: "custom", key: "long_description") {
        value
      }
      short_description: metafield(namespace: "custom", key: "short_description") {
        value
      }
      slider_images: metafield(namespace: "custom", key: "slider_images") {
        references(first: 10) {
            edges {
                node {
                ...Media
                }
            }
        }
      }
      product_misc_update : metafield(namespace: "custom", key: "product_misc_update") {
        reference {
          ... on Metaobject {
            handle
            head_title : field(key: "head_title") {
              value
            }
            main_section_heading : field(key: "main_section_heading") {
              value
            }
            main_section_text : field(key: "main_section_text") {
              value
            }
            main_section_redirect : field(key: "main_section_redirect") {
              value
            }
            sub_title : field(key: "sub_title") {
              value
            }
            main_section_image : field(key: "main_section_image") {
              reference {
                ...Media
              }
            }
            sub_title : field(key: "sub_title") {
              value
            }
            sub_section_1_title : field(key: "sub_section_1_title") {
              value
            }
            sub_section_1_text : field(key: "sub_section_1_text") {
              value
            }
            sub_section_1_image : field(key: "sub_section_1_image") {
              reference {
                ...Media
              }
            }
            sub_section_1_redirect : field(key: "sub_section_1_redirect") {
              value
            }
            sub_section_2_title : field(key: "sub_section_2_title") {
              value
            }
            sub_section_2_text : field(key: "sub_section_2_text") {
              value
            }
            sub_section_2_image : field(key: "sub_section_2_image") {
              reference {
                ...Media
              }
            }
            sub_section_2_redirect : field(key: "sub_section_2_redirect") {
              value
            }
          }
        }
      }
      products_brand_section: metafield(namespace: "custom", key: "products_brand_section") {
      	reference {
          ... on Metaobject {
            handle
            head_title : field(key: "main_title") {
              value
            }
            brand_1_text : field(key: "brand_1_text") {
              value
            }
            brand_1_image : field(key: "brand_1_image") {
              reference {
                ...Media
              }
            }
            brand_1_redirect : field(key: "brand_1_redirect") {
              value
            }
            brand_2_text : field(key: "brand_2_text") {
              value
            }
            brand_2_image : field(key: "brand_2_image") {
              reference {
                ...Media
              }
            }
            brand_2_redirect : field(key: "brand_2_redirect") {
              value
            }
            brand_3_text : field(key: "brand_3_text") {
              value
            }
            brand_3_image : field(key: "brand_3_image") {
              reference {
                ...Media
              }
            }
            brand_3_redirect : field(key: "brand_3_redirect") {
              value
            }
            brand_4_text : field(key: "brand_4_text") {
              value
            }
            brand_4_image : field(key: "brand_4_image") {
              reference {
                ...Media
              }
            }
            brand_4_redirect : field(key: "brand_4_redirect") {
              value
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
