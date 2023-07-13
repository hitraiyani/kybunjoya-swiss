import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Breadcrumb, Link} from '~/components';
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
      handle: 'unternehmen',
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
                  src={unternehmenReference?.video_tag_mp_4_url?.value}
                  type="video/mp4"
                />
                <source
                  src={unternehmenReference?.video_tag_ogg_url?.value}
                  type="video/ogg"
                />
                <img
                  src={unternehmenReference?.video_tag_image_url?.value}
                  title="Your browser does not support the <video> tag"
                />
              </video>

              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
              <div className="absolute slider-content bottom-[40px] lg:bottom-[50px] left-0 right-0 w-full container">
                <h1 className="text-white title text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold">
                  {unternehmenReference?.head_title?.value}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="aboutus-section mt-[40px] lg:mt-[62px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] max-w-[1030px] mx-auto">
        <div className="container">
          <div
            className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[40px] md:mb-[50px] tracking-[-0.400697px]"
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
                className="desc desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px] tracking-[-0.400697px]"
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
      unternehmen: metafield(namespace: "custom", key: "unternehmen") {
        reference {
          ... on Metaobject {
            head_title: field(key: "head_title") {
              value
            }
            main_desc: field(key: "main_desc") {
              value
            }
            video_tag_mp_4_url: field(key: "video_tag_mp_4_url") {
              value
            }
            video_tag_ogg_url: field(key: "video_tag_ogg_url") {
              value
            }
            video_tag_image_url: field(key: "video_tag_image_url") {
              value
            }
            quote_section_title: field(key: "quote_section_title") {
              value
            }
            quote_section_desc: field(key: "quote_section_desc") {
              value
            }
            quote_section_button_text: field(key: "quote_section_button_text") {
              value
            }
            quote_section_button_redirect: field(key: "quote_section_button_redirect") {
              value
            }
            quote_section_sub_desc: field(key: "quote_section_sub_desc") {
              value
            }
            quote_section_sub_image: field(key: "quote_section_sub_image") {
              reference {
                ...Media
              }
            }
            quote_section_image: field(key: "quote_section_image") {
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
