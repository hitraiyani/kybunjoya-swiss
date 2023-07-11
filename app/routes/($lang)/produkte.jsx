import React, {useState} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  ArrowRight,
  ExpandingCard,
  Link,
  ProductBrandSection,
  ProductMiscUpdate,
  Breadcrumb,
  ArrowRightLight,
} from '~/components';
import {MEDIA_FRAGMENT} from '~/data/fragments';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url : data?.url,
});

export const handle = {
  seo,
};

export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'produkte',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  return json(
    {page, url: request.url},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function products() {
  const {page} = useLoaderData();

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs(null, 'produkte')} />
      <div className="container">
        <div className="title-wrap">
          <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {page?.product_misc_update?.reference?.head_title?.value}
          </h2>
        </div>
        <div className="sub-title">
          <h4
            className="text-[#000000] text-[24px] mb-[18px] leading-[1.2] max-w-[930px] font-bold"
            dangerouslySetInnerHTML={{
              __html: toHTML(
                page?.product_misc_update?.reference?.new_hero_main_title
                  ?.value,
              ),
            }}
          ></h4>
        </div>
        <div
          className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] max-w-[930px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(
              page?.product_misc_update?.reference?.new_hero_main_desc?.value,
            ),
          }}
        ></div>
      </div>
      <ProductBrandSection data={ {...page?.products_brand_section?.reference, ...page?.product_brand_section_2?.reference} } />
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
      product_misc_update : metafield(namespace: "custom", key: "product_misc_update") {
        reference {
          ... on Metaobject {
            handle
            head_title : field(key: "head_title") {
              value
            }
            new_hero_main_title : field(key: "new_hero_main_title") {
              value
            }
            new_hero_main_desc : field(key: "new_hero_main_desc") {
              value
            }
          }
        }
      }
      product_brand_section_2: metafield(namespace: "custom", key: "product_brand_section_2") {
      	reference {
          ... on Metaobject {
            brand_6_text : field(key: "brand_6_text") {
              value
            }
            brand_6_image : field(key: "brand_6_image") {
              reference {
                ...Media
              }
            }
            brand_6_redirect : field(key: "brand_6_redirect") {
              value
            }
            brand_6_sub_text : field(key: "brand_6_sub_text") {
              value
            }
            brand_6_sub_desc : field(key: "brand_6_sub_desc") {
              value
            }
            brand_6_sub_button_text : field(key: "brand_6_sub_button_text") {
              value
            }
            brand_6_sub_button_redirect : field(key: "brand_6_sub_button_redirect") {
              value
            }
            brand_1_image_slider : field(key: "brand_1_image_slider") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            brand_2_image_slider : field(key: "brand_2_image_slider") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            brand_3_image_slider : field(key: "brand_3_image_slider") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            brand_4_image_slider : field(key: "brand_4_image_slider") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            brand_5_image_slider : field(key: "brand_5_image_slider") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            brand_6_image_slider : field(key: "brand_6_image_slider") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
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
            brand_1_sub_text : field(key: "brand_1_sub_text") {
              value
            }
            brand_1_sub_desc : field(key: "brand_1_sub_desc") {
              value
            }
            brand_1_sub_button_text : field(key: "brand_1_sub_button_text") {
              value
            }
            brand_1_sub_button_redirect : field(key: "brand_1_sub_button_redirect") {
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
            brand_2_sub_text : field(key: "brand_2_sub_text") {
              value
            }
            brand_2_sub_desc : field(key: "brand_2_sub_desc") {
              value
            }
            brand_2_sub_button_text : field(key: "brand_2_sub_button_text") {
              value
            }
            brand_2_sub_button_redirect : field(key: "brand_2_sub_button_redirect") {
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
            brand_3_sub_text : field(key: "brand_3_sub_text") {
              value
            }
            brand_3_sub_desc : field(key: "brand_3_sub_desc") {
              value
            }
            brand_3_sub_button_text : field(key: "brand_3_sub_button_text") {
              value
            }
            brand_3_sub_button_redirect : field(key: "brand_3_sub_button_redirect") {
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
            brand_4_sub_text : field(key: "brand_4_sub_text") {
              value
            }
            brand_4_sub_desc : field(key: "brand_4_sub_desc") {
              value
            }
            brand_4_sub_button_text : field(key: "brand_4_sub_button_text") {
              value
            }
            brand_4_sub_button_redirect : field(key: "brand_4_sub_button_redirect") {
              value
            }
            brand_5_text : field(key: "brand_5_text") {
              value
            }
            brand_5_image : field(key: "brand_5_image") {
              reference {
                ...Media
              }
            }
            brand_5_redirect : field(key: "brand_5_redirect") {
              value
            }
            brand_5_sub_text : field(key: "brand_5_sub_text") {
              value
            }
            brand_5_sub_desc : field(key: "brand_5_sub_desc") {
              value
            }
            brand_5_sub_button_text : field(key: "brand_5_sub_button_text") {
              value
            }
            brand_5_sub_button_redirect : field(key: "brand_5_sub_button_redirect") {
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
