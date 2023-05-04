import React, {useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML} from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import {Link} from '~/components';

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
      handle: 'aboutus',
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

export default function aboutUs() {
  const {page} = useLoaderData();

  const timeLineDetailArr = page?.about_us?.reference?.time_line_section_desc
    ?.value
    ? JSON.parse(page.about_us.reference.time_line_section_desc.value)
    : [];

  const [isActive, setActive] = useState('false');
  const ToggleClass = () => {
    setActive(!isActive);
  };

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
      <div className="container mt-[120px] lg:mt-[200px]">
        <section className="video-banner-with-title pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[50px]">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {page?.about_us?.reference?.head_title?.value}
          </h1>
          <div className="video-wrap relative overflow-hidden rounded-xl pb-[35%] min-h-[400px] w-full">
            <iframe
              className="absolute w-full h-full inset-0 object-cover bg-cover"
              src={page?.about_us?.reference?.hero_video?.value}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
        <section className="timeline-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <div className="title-wrap">
            <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold text-center">
              {page?.about_us?.reference?.time_line_section_title?.value}
            </h2>
          </div>
          <div className="w-full">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden md:block w-[2px] bg-[#DEDEDE] absolute h-full left-1/2 transform -translate-x-1/2" />
              <div
                className={`${
                  isActive ? '' : 'active'
                } timeline-items relative`}
              >
                {timeLineDetailArr?.map((item, index) => {
                  return (
                    <div
                      className="py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] timeline-item"
                      key={index}
                    >
                      <div className="flex flex-col md:flex-row gap-y-[20px]">
                        <div className="img-wrap w-full md:w-[50%]">
                          <div className="overflow-hidden pb-[59%] relative rounded-[10px] w-full">
                            <img
                              className="absolute inset-0 w-full h-full object-cover"
                              src={item?.timeline_image}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="content-wrap w-full md:w-[50%]">
                          <h3 className="text-[#000000] text-[30px] lg:text-[35px] xl:text-[40px] mb-[5px] font-bold leading-[1.1] title">
                            {item?.timeline_title}
                          </h3>
                          <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                            {item?.timeline_desc}
                          </div>
                        </div>
                        <div className="text-white bg-[#00795C] px-[30px] py-[5px] tracking-[-0.97152px] leading-none text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] absolute left-1/2 -translate-y-4 md:translate-y-0 transform -translate-x-1/2 flex items-center justify-center rounded-[110px] font-medium w-fit date">
                          <span>{item?.timeline_year}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="btn-wrap flex justify-center mt-[20px] md:mt-[30px] xl:mt-[42px]">
            <button
              onClick={ToggleClass}
              className="w-fit px-[30px] py-[15px] bg-black rounded-[100px] transition-all !text-white text-[18px] md:text-[20px] lg:text-[21px] tracking-[-0.400697px] hover:bg-[#00795c] font-normal"
            >
              {isActive ? 'Mehr Anzeigen' : 'Weniger Anzeigenr'}
            </button>
          </div>
          {/* <div className="btn-wrap flex justify-center mt-[20px] md:mt-[30px] xl:mt-[42px]">
            <Link
              className="w-fit px-[30px] py-[15px] bg-black rounded-[100px] transition-all !text-white text-[18px] md:text-[20px] lg:text-[25px] tracking-[-0.400697px] hover:bg-[#00795c] font-normal"
              to={page?.about_us?.reference?.time_line_readmore_button_redirect?.value}
            >
              {page?.about_us?.reference?.time_line_readmore_button_text?.value}
            </Link>
          </div> */}
        </section>
        <section className="about-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <h2 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
            {
              page?.about_us?.reference
                ?.einblick_in_unsere_produkte_section_title?.value
            }
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
            <div className="content-col w-full lg:w-[60%] flex flex-col">
              <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#00795C] leading-[1.2] tracking-[-1.05984px] mb-[17px] font-medium">
                {
                  page?.about_us?.reference
                    ?.einblick_in_unsere_produkte_section_sub_title?.value
                }
              </h2>
              <div
                className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(
                    page?.about_us?.reference
                      ?.einblick_in_unsere_produkte_section_desc?.value,
                  ),
                }}
              ></div>
            </div>
            <div className="img-col w-full lg:w-[40%] overflow-hidden">
              <img
                className="h-full object-cover  rounded-xl block"
                src={
                  page?.about_us?.reference
                    ?.einblick_in_unsere_produkte_section_image?.reference
                    ?.image?.url
                }
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="about-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <h2 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
            {page?.about_us?.reference?.was_uns_antreibt_section_title?.value}
          </h2>
          <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
            <div className="img-col w-full lg:w-[40%] overflow-hidden">
              <img
                className="h-full object-cover rounded-xl block"
                src={
                  page?.about_us?.reference?.was_uns_antreibt_section_image
                    ?.reference?.image?.url
                }
                alt=""
              />
            </div>
            <div className="content-col w-full lg:w-[60%] flex flex-col">
              <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#00795C] leading-[1.2] tracking-[-1.05984px] mb-[17px] font-medium">
                {
                  page?.about_us?.reference?.was_uns_antreibt_section_sub_title
                    ?.value
                }
              </h2>
              <div
                className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(
                    page?.about_us?.reference?.was_uns_antreibt_section_desc
                      ?.value,
                  ),
                }}
              ></div>
            </div>
          </div>
        </section>
        <section className="about-sec pt-[20px] md:pt-[30px] lg:pt-[40px] xl:pt-[50px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <h2 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
            {page?.about_us?.reference?.wissenschaft_section_title?.value}
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
            <div className="content-col w-full lg:w-[60%] flex flex-col">
              <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#00795C] leading-[1.2] tracking-[-1.05984px] mb-[17px] font-medium">
                {
                  page?.about_us?.reference?.wissenschaft_section_sub_title
                    ?.value
                }
              </h2>
              <div
                className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(
                    page?.about_us?.reference?.wissenschaft_section_desc?.value,
                  ),
                }}
              ></div>
            </div>
            <div className="img-col overflow-hidden w-full lg:w-[40%]">
              <img
                className="h-full object-cover  rounded-xl block"
                src={
                  page?.about_us?.reference?.wissenschaft_section_image
                    ?.reference?.image?.url
                }
                alt=""
              />
            </div>
          </div>
        </section>
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
      about_us : metafield(namespace: "custom", key: "about_us") {
        reference {
          ... on Metaobject {
            handle
            head_title : field(key: "head_title") {
              value
            }
            hero_video : field(key: "hero_video") {
              value
            }
            sub_section_2_redirect : field(key: "sub_section_2_redirect") {
              value
            }
            time_line_section_title : field(key: "time_line_section_title") {
              value
            }
            time_line_section_desc : field(key: "time_line_section_desc") {
              value
            }
            time_line_readmore_button_text : field(key: "time_line_readmore_button_text") {
              value
            }
            time_line_readmore_button_redirect : field(key: "time_line_readmore_button_redirect") {
              value
            }
            einblick_in_unsere_produkte_section_title : field(key: "einblick_in_unsere_produkte_section_title") {
              value
            }
            einblick_in_unsere_produkte_section_sub_title : field(key: "einblick_in_unsere_produkte_section_sub_title") {
              value
            }
            einblick_in_unsere_produkte_section_desc : field(key: "einblick_in_unsere_produkte_section_desc") {
              value
            }
            einblick_in_unsere_produkte_section_image : field(key: "einblick_in_unsere_produkte_section_image") {
              reference {
                ...Media
              }
            }
            was_uns_antreibt_section_title : field(key: "was_uns_antreibt_section_title") {
              value
            }
            was_uns_antreibt_section_sub_title : field(key: "was_uns_antreibt_section_sub_title") {
              value
            }
            was_uns_antreibt_section_desc : field(key: "was_uns_antreibt_section_desc") {
              value
            }
            was_uns_antreibt_section_image : field(key: "was_uns_antreibt_section_image") {
              reference {
                ...Media
              }
            }
            wissenschaft_section_title : field(key: "wissenschaft_section_title") {
              value
            }
            wissenschaft_section_sub_title : field(key: "wissenschaft_section_sub_title") {
              value
            }
            wissenschaft_section_desc : field(key: "wissenschaft_section_desc") {
              value
            }
            wissenschaft_section_image : field(key: "wissenschaft_section_image") {
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
