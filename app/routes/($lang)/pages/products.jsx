import React from 'react';
import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { toHTML } from '~/lib/utils';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExpandingCard, Link, ProductBrandSection, ProductMiscUpdate } from '~/components';
import { MEDIA_FRAGMENT } from '~/data/fragments';

const seo = ({ data }) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
});

export const handle = {
  seo,
};

export async function loader({ request, params, context }) {

  const { page } = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'products',
      language: context.storefront.i18n.language,
    },
  });


  if (!page) {
    throw new Response(null, { status: 404 });
  }

  return json(
    { page },
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function schweizerSchuhpropktion() {
  const { page } = useLoaderData();

  const sliderImages =
    page?.slider_images?.references?.edges.map(
      (data) => data.node.image.url,
    );
  // const faqArr = page?.faq?.value ? JSON.parse(page.faq.value) : [];

  return (
    <>
      <div className="container">
        <div className="title-wrap mt-[120px] lg:mt-[200px]">
          <h2 className="title text-[#00795C] tracking-[-2.07729px] text-[35px] ">
            Produkte
          </h2>
        </div>
      </div>
      <div className="about-sec container">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px]">
          <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[35px] lg:text-[40px] xl:text-[55px] text-[#00795C] leading-[1.2] tracking-[-2.07729px] mb-[15px]">
              {page?.main_title?.value}
            </h2>
            <h3 className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
              dangerouslySetInnerHTML={{
                __html: toHTML(page?.short_description?.value),
              }}
            >
            </h3>
            <h2 className="text-[35px] lg:text-[40px] xl:text-[55px] text-[#00795C] leading-[1.2] tracking-[-2.07729px] mb-[15px]">
              {page?.head_title?.value}
            </h2>
            <div className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
              dangerouslySetInnerHTML={{
                __html: toHTML(page?.long_description?.value),
              }}
            >
            </div>
            <div className="flex">
              <Link to="" className="inline-block rounded-[100px] bg-black text-white
                  text-center px-[59px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-[224px]">
                Jetzt Buchen
              </Link>
              <div className="products-swiper-button-prev nline-block rounded-[100px] bg-black text-white
                  text-center px-[59px] py-[15px]">Pre </div>
              <div className="products-swiper-button-next nline-block rounded-[100px] bg-black text-white
                  text-center px-[59px] py-[15px]"> Next</div>
            </div>
          </div>
          <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={1}
              loop="false"
              autoplay="false"
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.products-swiper-button-next',
                prevEl: '.products-swiper-button-prev',
              }}
              className="h-full overflow-visible rounded-xl flex flex-col"
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="h-full object-cover  rounded-xl block"
                    src={image}
                    alt=""
                  />
                </SwiperSlide>
              ))}
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
