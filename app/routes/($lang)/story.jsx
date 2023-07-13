import React, {useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import {Link, Breadcrumb} from '~/components';

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
      handle: 'story',
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

export default function Heritage() {
  const {page} = useLoaderData();

  const heritageReference = page?.about_us?.reference;

  useEffect(() => {
    window.addEventListener('scroll', function () {
      var windscroll = this.scrollY;
      if (windscroll >= 10) {
        var timelineEvents = document.querySelectorAll(
          '.timeline-items .timeline-item',
        );
        timelineEvents.forEach(function (event, i) {
          if (windscroll > event.offsetTop + 400) {
            timelineEvents[i].classList.add('active');
          }
        });
      } else {
        timelineEvents[0].classList.add('active');
      }
    });
  }, []);

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs(null, 'heritage')} />
      <div className="container">
        <section className="video-banner-with-title pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {heritageReference?.time_line_1_title?.value}
          </h1>
          <div className="video-banner-with-title">
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[40px] 2xl:gap-x-[80px] items-center">
              <div className="w-full lg:w-[50%]">
                <div className="video-wrap relative overflow-hidden pb-[100%] lg:pb-[100%] w-full">
                  <img
                    className="absolute w-full h-full inset-0 object-cover bg-cover"
                    src={heritageReference?.time_line_1_media?.value}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-[50%]">
                <div className="info-with-year flex flex-col gap-[10px] items-start lg:max-w-[729px] lg:mx-auto">
                  <div className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] flex items-center justify-center rounded-[110px] font-medium w-fit date">
                    {heritageReference?.time_line_1_year?.value}
                  </div>
                  <div
                    className="desc text-[16px] lg:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[853px]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        heritageReference?.time_line_1_desc?.value,
                      ),
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-banner-with-title pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <div className="flex flex-col lg:flex-row-reverse gap-y-[30px] gap-x-[40px] 2xl:gap-x-[80px] items-center">
            <div className="w-full lg:w-[50%]">
              <div className="video-wrap relative overflow-hidden pb-[57%] w-full">
                <iframe
                  className="absolute w-full h-full inset-0 object-cover bg-cover"
                  src={heritageReference?.time_line_2_media?.value}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="info-with-year flex flex-col gap-[10px] items-start lg:max-w-[729px] lg:mx-auto">
                <div className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] flex items-center justify-center rounded-[110px] font-medium w-fit date">
                  {heritageReference?.time_line_2_year?.value}
                </div>
                <div
                  className="desc text-[16px] lg:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[853px]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(heritageReference?.time_line_2_desc?.value),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-banner-with-title pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] font-bold">
            {heritageReference?.time_line_3_title?.value}
          </h2>
          <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[40px] 2xl:gap-x-[80px] items-center">
            <div className="w-full lg:w-[50%]">
              <div className="video-wrap relative overflow-hidden pb-[100%] lg:pb-[100%] w-full">
                <img
                  className="absolute w-full h-full inset-0 object-cover bg-cover"
                  src={heritageReference?.time_line_3_media?.value}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="info-with-year flex flex-col gap-[10px] items-start lg:max-w-[729px] lg:mx-auto">
                <div className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] flex items-center justify-center rounded-[110px] font-medium w-fit date">
                  {heritageReference?.time_line_3_year?.value}
                </div>
                <div
                  className="desc text-[16px] lg:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[853px]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(heritageReference?.time_line_3_desc?.value),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const PAGE_QUERY = `#graphql
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      about_us: metafield(namespace: "custom", key: "about_us") {
        reference {
          ... on Metaobject {
            handle
            time_line_1_title: field(key: "time_line_1_title") {
              value
            }
            time_line_1_year: field(key: "time_line_1_year") {
              value
            }
            time_line_1_desc: field(key: "time_line_1_desc") {
              value
            }
            time_line_1_media: field(key: "time_line_1_media") {
              value
            }
            time_line_2_title: field(key: "time_line_2_title") {
              value
            }
            time_line_2_year: field(key: "time_line_2_year") {
              value
            }
            time_line_2_desc: field(key: "time_line_2_desc") {
              value
            }
            time_line_2_media: field(key: "time_line_2_media") {
              value
            }
            time_line_3_title: field(key: "time_line_3_title") {
              value
            }
            time_line_3_year: field(key: "time_line_3_year") {
              value
            }
            time_line_3_desc: field(key: "time_line_3_desc") {
              value
            }
            time_line_3_media: field(key: "time_line_3_media") {
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
