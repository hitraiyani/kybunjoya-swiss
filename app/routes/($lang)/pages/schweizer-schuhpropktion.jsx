import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ExpandingCard, Link, Breadcrumb} from '~/components';
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
      handle: 'schweizer-schuhpropktion',
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

  const sliderImages =
    page?.schweizer_schuhpropktion?.reference?.slider_images?.references?.edges.map(
      (data) => data.node.image.url,
    );

  const faqArr = page?.schweizer_schuhpropktion?.reference?.faq?.value
    ? JSON.parse(page?.schweizer_schuhpropktion?.reference?.faq.value)
    : [];

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
        <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[40px] lg:mt-[44px] max-w-[1100px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(
              page?.schweizer_schuhpropktion?.reference?.short_description
                ?.value,
            ),
          }}
        >
        </div>
      </div>
      <div className="about-sec about-sec-slider container pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[50px] pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="flex flex-col-reverse lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px] ">
          <div className="img-col lg:w-[40%] overflow-hidden w-full hidden lg:block">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={1}
              navigation={false}
              loop="false"
              autoplay="false"
              pagination={{clickable: true}}
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
          </div>
          <div className="content-col w-full lg:w-[60%] lg:max-w-[785px] flex flex-col">
            <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] font-bold">
              {page?.schweizer_schuhpropktion?.reference?.main_title?.value}
            </h2>
            <div className="img-col lg:w-[40%] overflow-hidden w-full lg:hidden mb-[20px]">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={1}
              navigation={false}
              loop="false"
              autoplay="false"
              pagination={{clickable: true}}
              className="h-full overflow-visible flex flex-col"
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="h-full object-cover block"
                    src={image}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
            <div
              className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px]"
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
              className="inline-block rounded-[100px] bg-[#00795c] text-white
                 text-center px-[35px] py-[15px] hover:bg-black hover:text-white text-[18px] max-w-fit"
            >
              Kandahar entdecken
            </Link>
          </div>
        </div>
      </div>  
      {faqArr.length > 0 && (
        <div className="faq-sec container mt-10 hidden">
          <h3 className="title uppercase text-[18px] leading-[1.2] pb-[10px] border-b border-[#595959] font-normal">
            Häufige Fragen
          </h3>
          {faqArr.map((item) => (
            <ExpandingCard content={item.answer} title={item.question} />
          ))}
        </div>
      )}
      <div className="video-sec container pt-[20px] md:pt-[30px] lg:pt-[40px] xl:pt-[50px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px] ">
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
            <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px]"
               dangerouslySetInnerHTML={{
                __html: toHTML(
                  page?.schweizer_schuhpropktion?.reference?.video_section_desc
                    ?.value,
                ),
              }}
            >
            </div>
            <div className="btn-wrap">
              <Link
                to={
                  page?.schweizer_schuhpropktion?.reference?.video_section_button_redirect
                    ?.value
                }
                className="inline-block rounded-[100px] bg-[#00795c] text-white
                 text-center px-[35px] py-[15px] hover:bg-black hover:text-white text-[18px] max-w-fit"
              >
                {page?.schweizer_schuhpropktion?.reference?.video_section_button_text
                    ?.value}
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
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            slider_images : field(key: "slider_images") {
              references(first: 5) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            main_title : field(key: "main_title") {
              value
            }
            long_description : field(key: "long_description") {
              value
            }
            short_description : field(key: "short_description") {
              value
            }
            book_now_link : field(key: "book_now_link") {
              value
            }
            book_now_link_text : field(key: "book_now_link_text") {
              value
            }
            head_title : field(key: "head_title") {
              value
            }
            video_section_title : field(key: "video_section_title") {
              value
            }
            video_section_url : field(key: "video_section_url") {
              value
            }
            video_section_desc : field(key: "video_section_desc") {
              value
            }
            video_section_button_text : field(key: "video_section_button_text") {
              value
            }
            video_section_button_redirect : field(key: "video_section_button_redirect") {
              value
            }
            faq : field(key: "faq") {
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
