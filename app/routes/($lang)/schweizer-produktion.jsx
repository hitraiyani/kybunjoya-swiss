import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ExpandingCard, Link, Breadcrumb, ArrowRight} from '~/components';
import {MEDIA_FRAGMENT} from '~/data/fragments';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url: data?.url,
});

export const handle = {
  seo,
};

export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'schweizer-produktion',
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

export default function schweizerSchuhpropktion() {
  const {page} = useLoaderData();

  const sliderImages =
    page?.schweizer_schuhpropktion?.reference?.slider_images?.references?.edges.map(
      (data) => data.node.image.url,
    );

  return (
    <>
      <Breadcrumb
        crumbs={getBreadCrumbs('schweizerSchuhproduktion', 'uberuns')}
      />
      <div className="container">
        <div className="title-wrap">
          <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {page?.schweizer_schuhpropktion?.reference?.head_title?.value}
          </h2>
        </div>
      </div>
      <div className="banner container">
        <div className="banner-row product-list-hero-img relative overflow-hidden pb-[35%] min-h-[200px]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={
              page?.schweizer_schuhpropktion?.reference?.hero_image?.reference
                ?.image?.url
            }
            alt=""
          />
        </div>
        <div
          className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[40px] lg:mt-[44px] max-w-[1100px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(
              page?.schweizer_schuhpropktion?.reference?.short_description
                ?.value,
            ),
          }}
        ></div>
      </div>
      <div className="about-sec about-sec-slider container pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[50px] pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px] items-center ">
          <div className="img-col lg:w-[40%] w-full relative">
            <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] font-bold lg:hidden">
              {page?.schweizer_schuhpropktion?.reference?.main_title?.value}
            </h2>
            <div className="product-brand--swiper-buttons">
              <div
                id="swiper-button-next-about-sec-desk"
                className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-1/2 lg:top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
              >
                <ArrowRight
                  className={
                    'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                  }
                />
              </div>
              <div
                id="swiper-button-prev-about-sec-desk"
                className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-1/2 lg:top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
              >
                <ArrowRight
                  className={
                    'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                  }
                />
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                slidesPerView={1}
                navigation={{
                  prevEl: '#swiper-button-next-about-sec-desk',
                  nextEl: '#swiper-button-prev-about-sec-desk',
                }}
                pagination={{
                  el: '#about-sec-pagination-desk',
                  clickable: true,
                }}
                className="h-full overflow-visible flex flex-col"
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="h-full w-full object-cover block absolute inset-0"
                      src={image}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                id="about-sec-pagination-desk"
                className="product-brand-pagination-div text-center mt-[10px]"
              ></div>
            </div>
          </div>
          <div className="content-col w-full lg:w-[60%] lg:max-w-[785px] flex flex-col">
            <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] font-bold hidden lg:block">
              {page?.schweizer_schuhpropktion?.reference?.main_title?.value}
            </h2>
            <div
              className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mb-[25px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(
                  page?.schweizer_schuhpropktion?.reference?.long_description
                    ?.value,
                ),
              }}
            ></div>
            <Link
              to={
                page?.schweizer_schuhpropktion?.reference?.book_now_link?.value
              }
              target="_blank"
              className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[20px] md:px-[35px] py-[12px] md:py-[15px] hover:bg-black hover:text-white text-[14px] md:text-[18px] max-w-fit"
            >
              {
                page?.schweizer_schuhpropktion?.reference?.book_now_link_text
                  ?.value
              }
            </Link>
          </div>
        </div>
      </div>

      <div className="video-sec container pt-[20px] md:pt-[30px] lg:pt-[40px] xl:pt-[50px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px] items-center">
          <div className="content-col w-full lg:w-[35%] flex flex-col">
            <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] font-bold">
              {
                page?.schweizer_schuhpropktion?.reference?.video_section_title
                  ?.value
              }
            </h2>
            <iframe
              className="w-full aspect-[4/2] lg:hidden mb-[20px]"
              src={
                page?.schweizer_schuhpropktion?.reference?.video_section_url
                  ?.value
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div
              className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mb-[25px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(
                  page?.schweizer_schuhpropktion?.reference?.video_section_desc
                    ?.value,
                ),
              }}
            ></div>
            <div className="btn-wrap">
              <Link
                to={
                  page?.schweizer_schuhpropktion?.reference
                    ?.video_section_button_redirect?.value
                }
                target="_blank"
                className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[20px] md:px-[35px] py-[12px] md:py-[15px] hover:bg-black hover:text-white text-[14px] md:text-[18px] max-w-fit"
              >
                {
                  page?.schweizer_schuhpropktion?.reference
                    ?.video_section_button_text?.value
                }
              </Link>
            </div>
          </div>
          <div className="video-wrap lg:w-[65%] overflow-hidden w-full">
            <iframe
              className="w-full aspect-[4/2] hidden lg:block"
              src={
                page?.schweizer_schuhpropktion?.reference?.video_section_url
                  ?.value
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
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
      schweizer_schuhpropktion : metafield(namespace: "custom", key: "schweizer_schuhpropktion") {
        reference {
          ... on Metaobject {
            hero_image: field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            slider_images: field(key: "slider_images") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            main_title: field(key: "main_title") {
              value
            }
            long_description: field(key: "long_description") {
              value
            }
            short_description: field(key: "short_description") {
              value
            }
            book_now_link: field(key: "book_now_link") {
              value
            }
            book_now_link_text: field(key: "book_now_link_text") {
              value
            }
            head_title: field(key: "head_title") {
              value
            }
            video_section_title: field(key: "video_section_title") {
              value
            }
            video_section_url: field(key: "video_section_url") {
              value
            }
            video_section_desc: field(key: "video_section_desc") {
              value
            }
            video_section_button_text: field(key: "video_section_button_text") {
              value
            }
            video_section_button_redirect: field(key: "video_section_button_redirect") {
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
