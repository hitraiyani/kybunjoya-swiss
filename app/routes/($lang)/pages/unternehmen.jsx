import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Breadcrumb, Link} from '~/components';
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
      handle: 'unternehmen',
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

export default function unternehmen() {
  const {page} = useLoaderData();
  const unternehmenReference = page?.unternehmen?.reference;

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs('unternehmen', 'uberuns')} />
      <div className="heroSlider-sec  mt-[-120px] lg:mt-[-190px]">
        <div className="prodcut-items">
          <div className="prodcut-item">
            <div className="relative flex w-full h-[50vh] sm:h-[60vh] md:h-[82vh] flex-co image-container min-h-[450px] overflow-hidden">
              {/* <iframe className="object-cover object-center active  w-[100vw] h-[86.25vw] min-h-[86vh] min-w-fit absolute -translate-y-2/4 left-0 top-2/4 pointer-events-none" src={hereMetaObj?.data?.hero_video_url?.value} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              <video
                className="object-cover object-center active w-full h-full absolute -translate-y-2/4 left-0 top-2/4 pointer-events-none"
                width="{320}"
                height="{240}"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/76124b6c242146c5822914a9bfbe3788.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/230615_kybun_Tower_Shots.ogg?v=1686835912"
                  type="video/ogg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Screenshot_196.png?v=1686810184"
                  title="Your browser does not support the <video> tag"
                />
              </video>
              {/* <img
              className="object-cover object-center w-full active"
              id="defaultActive"
              src={
                hereMetaObj?.data?.image?.references?.edges[0]?.node?.image?.url
              }
            ></img>
            {Object.keys(menuBannerImageMapping).map((oneKey, i) => {
              return (
                <img
                  key={i}
                  data-image={oneKey}
                  className="object-cover object-center w-full "
                  src={menuBannerImageMapping[oneKey]}
                ></img>
              );
            })} */}

              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
              <div className="absolute slider-content bottom-[40px] lg:bottom-[58px] left-0 right-0 w-full container">
                <h1 className="mb-[15px] text-white title text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold">
                  Unternehmen
                </h1>
                {/* <h4 className="text-white desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.2] flex gap-[10px] items-center">
                  <span className="w-[36px] h-[36px] overflow-hidden relative">
                    <img
                      className="inset-0 absolute object-contain w-full h-full block"
                      src={
                        hereMetaObj?.data?.sub_title_image?.reference?.image
                          ?.url
                      }
                    />
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(hereMetaObj?.data?.sub_title?.value),
                    }}
                  ></span>
                </h4> */}
                {/* <Link
                  to={`${hereMetaObj?.data?.cta?.value}`}
                  className="inline-block md:px-[60px] px-[40px] py-[20px] md:py-[25px] md:text-[18px] text-[16px] font-medium text-black transition-all bg-white btn hover:bg-black hover:text-white leading-none !hidden"
                >
                  {hereMetaObj?.data?.cta_label?.value}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="banner-with-title">
        <div className="container">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {unternehmenReference?.head_title?.value}
          </h1>
        </div>
      </section> */}
      {/* <section className="about-sec container">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[45px] items-center">
          <div className="img-col lg:flex-1 w-full relative overflow-hidden pb-[56%] md:pb-[35%]">
            <iframe
              width={100}
              height={100}
              src={unternehmenReference?.head_video_url?.value}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={unternehmenReference?.hero_image?.reference?.image?.url}
              alt=""
            />
          </div>
          <div className="content-col w-full lg:w-[273px] flex flex-col">
            <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
              <p>
                Seit 1996 entwickelt, produziert und vertreibt die kybun Joya
                Gruppe hochwertige Produkte rund um gesundes Gehen und Stehen.
                Wir ermöglichen unseren Kunden damit langfristig fit und
                beweglich zu bleiben und nachhaltig schmerzfrei zu werden.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="aboutus-section mt-[40px] lg:mt-[62px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] max-w-[1030px] mx-auto">
        <div className="container">
          <div
            className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[40px] md:mb-[50px]"
            dangerouslySetInnerHTML={{
              __html: toHTML(unternehmenReference?.main_desc?.value),
            }}
          ></div>
          <div className="img-wrap mb-[20px] lg:mb-[35px] pb-[100%] relative overflow-hidden">
            <img
              className="h-full w-full object-cover inset-0 absolute"
              src={
                unternehmenReference?.quote_section_image?.reference?.image?.url
              }
              alt=""
            />
          </div>
          <div
            className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px]"
            dangerouslySetInnerHTML={{
              __html: toHTML(unternehmenReference?.quote_section_desc?.value),
            }}
          ></div>
          <div className="flex flex-col gap-y-[30px] lg:flex-row gap-x-[30px] 2xl:gap-x-[49px] pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
            <div className="w-full lg:w-[45%]">
              <div className="img-wrap">
                <img
                  className="max-w-full mx-auto"
                  src={
                    unternehmenReference?.quote_section_sub_image?.reference
                      ?.image?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-[55%]">
              <div className="sub-title mb-[10px]">
                <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-normal">
                  {unternehmenReference?.quote_section_title?.value}
                </h4>
              </div>
              <div
                className="desc desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(
                    unternehmenReference?.quote_section_sub_desc?.value,
                  ),
                }}
              ></div>
              <div className="btn-wrap">
                <Link
                  target="_blank"
                  to={
                    unternehmenReference?.quote_section_button_redirect?.value
                  }
                  className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[20px] md:px-[35px] py-[12px] md:py-[15px] hover:bg-black hover:text-white text-[14px] md:text-[18px] max-w-fit"
                >
                  {unternehmenReference?.quote_section_button_text?.value}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      unternehmen : metafield(namespace: "custom", key: "unternehmen") {
        reference {
          ... on Metaobject {
            head_title : field(key: "head_title") {
              value
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            head_video_url : field(key: "head_video_url") {
              value
            }
            main_desc : field(key: "main_desc") {
              value
            }
            quote_section_title : field(key: "quote_section_title") {
              value
            }
            quote_section_desc : field(key: "quote_section_desc") {
              value
            }
            quote_section_button_text : field(key: "quote_section_button_text") {
              value
            }
            quote_section_button_redirect : field(key: "quote_section_button_redirect") {
              value
            }
            quote_section_sub_desc : field(key: "quote_section_sub_desc") {
              value
            }
            quote_section_sub_image : field(key: "quote_section_sub_image") {
              reference {
                ...Media
              }
            }
            quote_section_image : field(key: "quote_section_image") {
              reference {
                ...Media
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
