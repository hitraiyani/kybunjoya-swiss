import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ArrowRight, ArrowRightLight, Link} from '~/components';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import { toHTML} from '~/lib/utils';

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
      handle: 'ratgeber-seite-fersensporn',
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





export default function ratgeberSeiteFersensporn() {

  const {page} = useLoaderData();

  const mainVideoSection = page?.ratgeber_seite_fersensporn?.reference?.main_video_section?.value ? JSON.parse(page.ratgeber_seite_fersensporn.reference.main_video_section.value) : {};
  const mainVideoSliderSection = page?.ratgeber_seite_fersensporn?.reference?.main_video_slider_section?.value ? JSON.parse(page.ratgeber_seite_fersensporn.reference.main_video_slider_section.value) : [];
  const relevanteLinksSectionLeftPart = page?.ratgeber_seite_fersensporn?.reference?.relevante_links_section_left_part?.value ? JSON.parse(page?.ratgeber_seite_fersensporn.reference.relevante_links_section_left_part.value) : [];
  const relevanteLinksSectionRightPart = page?.ratgeber_seite_fersensporn?.reference?.relevante_links_section_right_part?.value ? JSON.parse(page?.ratgeber_seite_fersensporn.reference.relevante_links_section_right_part.value) : [];

  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <div className="page-title">
          <h1 className="title text-[#00795C] text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] mb-[30px] lg:mb-[43px] leading-none font-black">
            {page?.ratgeber_seite_fersensporn?.reference?.head_title?.value}
          </h1>
        </div>
        <section className="rich-text-with-slider">
          <div className="rich-text-inner">
            <div className="w-full mb-[12px]">
              <div className="title-wrap">
                <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px]">
                  {page?.ratgeber_seite_fersensporn?.reference?.head_title_sub?.value}
                </h2>
                <h3
                  className="text-[30px] text-[#00795C] font-bold leading-[1.2] mb-[20px]"
                >
                  {page?.ratgeber_seite_fersensporn?.reference?.head_title_sub_secondary?.value}
                </h3>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[93px]">
              <div className="col-left w-[65%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                   dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.head_desc?.value),
                  }}
                >
                </div>
                <div className="box bg-[#EDEDED] rounded-[10px] px-[63px] py-[49px] mt-[43px]">
                  <h3 className="text-[35px] xl:text-[40px] text-[#00795C] font-bold leading-[1.2] tracking-[-0.97152px] mb-[33px]">
                      {page?.ratgeber_seite_fersensporn?.reference?.overview_title?.value}
                  </h3>
                  <span 
                    dangerouslySetInnerHTML={{
                      __html: (page?.ratgeber_seite_fersensporn?.reference?.overview_desc?.value),
                    }}
                  >
                  </span>
                </div>
              </div>
              <div className="col-right w-[35%]">
                <div className="video-info">
                {
                      mainVideoSection?.video_url && (
                        <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                            <iframe
                                className="absolute w-full h-full inset-0 object-cover bg-cover"
                                src={mainVideoSection?.video_url}
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                        </div>
                      )
                  }
                  <div className="info mt-[12px]">
                    <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px]">
                      {mainVideoSection?.video_title}
                    </h4>
                    <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      <p>
                        {mainVideoSection?.video_desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="video-info-slider mt-[31px]">
                  <div className="video-slider-inner relative">
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y, Autoplay]}
                      slidesPerView={2}
                      spaceBetween={20}
                      navigation={{
                        nextEl: '.swiper-button-next-video',
                        prevEl: '.swiper-button-prev-video',
                      }}
                      loop="true"
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      className="h-full overflow-visible rounded-xl flex flex-col"
                    >
                       {mainVideoSliderSection.length > 0 && mainVideoSliderSection.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="video-info">
                                <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                                  <iframe
                                    className="absolute w-full h-full inset-0 object-cover bg-cover"
                                    src={item?.video_url}
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  />
                                </div>
                                <div className="info mt-[12px]">
                                  <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px]">
                                    {item?.video_title}
                                  </h4>
                                  <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                    <p>
                                    {item?.video_desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                       })}
                    </Swiper>
                    <div className="absolute top-[16%] z-[1] rounded-full swiper-button-next-video border-[5px] border-[rgba(0,_148,_112,_0.3)] left-[-24px]">
                      <div className="rounded-full w-[45px] h-[45px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center rotate-180">
                        <ArrowRight
                          className={'relative left-[1px] w-[20px] h-[20px]'}
                        />
                      </div>
                    </div>
                    <div className="absolute top-[16%] z-[1] rounded-full swiper-button-prev-video border-[5px] border-[rgba(0,_148,_112,_0.3)] right-[-24px]">
                      <div className="rounded-full w-[45px] h-[45px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center">
                        <ArrowRight
                          className={'relative left-[2px] w-[20px] h-[20px]'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relevante-links-sec mt-[140px]">
          <div className="title-wrap">
            <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
              {page?.ratgeber_seite_fersensporn?.reference?.relevante_links_section_title?.value}
            </h2>
          </div>
          <div className="flex flex-row gap-[20px]">
            <div className="col-left w-[50%]">
              <div className="flex gap-[20px] h-full">
                {relevanteLinksSectionLeftPart.map((item, index) => {
                    return (
                      <div key={index} className="item w-[50%] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] rounded-[10px] h-full">
                        <div className="box h-full flex flex-col items-center px-[20px] py-[15px]">
                          <div className="img-title-wrap flex flex-col mb-[10px] h-full justify-center">
                            <img
                              className="max-w-full h-[50px] object-contain"
                              src={item?.brand_logo}
                              alt=""
                            />
                            <h4 className="text-[35px] text-[#00795C] font-bold leading-[1.2] text-center mt-[5px]">
                              {item?.sub_title}
                            </h4>
                          </div>
                          <div className="link-wrap mt-auto w-full">
                            <Link
                              to={item?.redirect_link_url}
                              className="text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                            >
                              {item?.redirect_link_text}
                              <ArrowRightLight className={'w-[30px] h-[30px]'} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="col-right w-[50%]">
              <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                <h4 className="text-[35px] text-white font-bold leading-[1.2] text-left px-[20px] py-[17px]">
                  {page?.ratgeber_seite_fersensporn?.reference?.relevante_links_section_right_part_title?.value}
                </h4>
              </div>
              <div className="flex gap-[20px] px-[20px] py-[15px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] rounded-bl-[10px] rounded-br-[10px]">
                {relevanteLinksSectionRightPart.map((item, index) => {
                    return(
                      <div className="item w-[50%]" key={index}>
                        <h4 className="desc text-[25px] text-[#00795C] font-bold leading-none mb-[10px]">
                          {item?.title}
                        </h4>
                        <div className="img-wrap relative overflow-hidden rounded-[10px] h-[186px]">
                          <img
                            className="absolute w-full h-full inset-0 object-cover"
                            src={item?.image}
                            alt=""
                          />
                        </div>
                        <div className="link-wrap mt-[10px]">
                          <Link 
                            to={item?.redirect_link_url}
                            className="text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                          >
                            {item?.redirect_link_text}
                            <ArrowRightLight className={'w-[30px] h-[30px]'} />
                          </Link>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec mt-[80px]">
          <div className="rich-text -inner max-w-[1077px]">
            <div className="title-wrap">
              <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[20px] lg:mb-[40px] leading-[1.1]">
                {page?.ratgeber_seite_fersensporn?.reference?.kybun_joya_fersensporn_section_title?.value}
              </h2>
              <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                {page?.ratgeber_seite_fersensporn?.reference?.kybun_joya_fersensporn_section_sub_title?.value}
              </h4>
            </div>
            <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
              dangerouslySetInnerHTML={{
                __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.kybun_joya_fersensporn_section_desc?.value),
              }}
            >
            </div>
          </div>
        </section>
        <section className="rich-text-sec mt-[80px]">
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                {page?.ratgeber_seite_fersensporn?.reference?.ursachen_title?.value}
              </h4>
            </div>
            <div className="flex lg:flex-row flex-col gap-y-[30px] gap-x-[77px] w-full">
              <div className="col-left w-[50%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                  <p>
                    <strong>{page?.ratgeber_seite_fersensporn?.reference?.ursachen_left_section_title?.value}</strong>
                  </p>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <img
                    className="max-w-full rounded-[10px] float-right ml-[15px] mb-[15px] w-[320px] h-[320px] object-cover"
                    src={page?.ratgeber_seite_fersensporn?.reference?.ursachen_left_section_image?.reference?.image?.url}
                    alt=""
                  />
                  <span 
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.ursachen_left_section_desc?.value),
                    }}
                  >
                  </span>
                </div>
              </div>
              <div className="col-right w-[50%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                  <p>
                    <strong>{page?.ratgeber_seite_fersensporn?.reference?.ursachen_right_section_title?.value}</strong>
                  </p>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <img
                    className="max-w-full rounded-[10px] float-right ml-[15px] mb-[15px] border-[2px] border-[#EDEDED] w-[320px] h-[320px] object-contain p-[20px]"
                    src={page?.ratgeber_seite_fersensporn?.reference?.ursachen_right_section_image?.reference?.image?.url}
                    alt=""
                  />
                   <span 
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.ursachen_right_section_desc?.value),
                    }}
                  >
                  </span>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-y-[30px] gap-x-[77px] w-full mt-[72px]">
              <div className="col-left w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    {page?.ratgeber_seite_fersensporn?.reference?.langzeitfolgen_section_title?.value}
                  </h4>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                   dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.langzeitfolgen_section_desc?.value),
                  }}
                >
                </div>
              </div>
              <div className="col-right w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    {page?.ratgeber_seite_fersensporn?.reference?.konventionelle_therapie_section_title?.value}
                  </h4>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.konventionelle_therapie_section_desc?.value),
                  }}
                 >
                </div>
              </div>
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
      ratgeber_seite_fersensporn : metafield(namespace: "custom", key: "ratgeber_seite_fersensporn") {
        reference {
          ... on Metaobject {
            handle
            head_title : field(key: "head_title") {
              value
            }
            head_title_sub : field(key: "head_title_sub") {
              value
            }
            head_title_sub_secondary : field(key: "head_title_sub_secondary") {
              value
            }
            head_desc : field(key: "head_desc") {
              value
            }
            overview_title : field(key: "overview_title") {
              value
            }
            overview_desc : field(key: "overview_desc") {
              value
            }
            main_video_section : field(key: "main_video_section") {
              value
            }
            main_video_slider_section : field(key: "main_video_slider_section") {
              value
            }
            kybun_joya_fersensporn_section_title : field(key: "kybun_joya_fersensporn_section_title") {
              value
            }
            kybun_joya_fersensporn_section_sub_title : field(key: "kybun_joya_fersensporn_section_sub_title") {
              value
            }
            kybun_joya_fersensporn_section_desc : field(key: "kybun_joya_fersensporn_section_desc") {
              value
            }
            ursachen_title : field(key: "ursachen_title") {
              value
            }
            ursachen_left_section_title : field(key: "ursachen_left_section_title") {
              value
            }
            ursachen_left_section_desc : field(key: "ursachen_left_section_desc") {
              value
            }
            ursachen_left_section_image : field(key: "ursachen_left_section_image") {
              reference {
                ...Media
              }
            }
            ursachen_right_section_title : field(key: "ursachen_right_section_title") {
              value
            }
            ursachen_right_section_desc : field(key: "ursachen_right_section_desc") {
              value
            }
            ursachen_right_section_image : field(key: "ursachen_right_section_image") {
              reference {
                ...Media
              }
            }
            langzeitfolgen_section_title : field(key: "langzeitfolgen_section_title") {
              value
            }
            langzeitfolgen_section_desc : field(key: "langzeitfolgen_section_desc") {
              value
            }
            konventionelle_therapie_section_title : field(key: "konventionelle_therapie_section_title") {
              value
            }
            konventionelle_therapie_section_desc : field(key: "konventionelle_therapie_section_desc") {
              value
            }
            relevante_links_section_title : field(key: "relevante_links_section_title") {
              value
            }
            relevante_links_section_left_part : field(key: "relevante_links_section_left_part") {
              value
            }
            relevante_links_section_right_part_title : field(key: "relevante_links_section_right_part_title") {
              value
            }
            relevante_links_section_right_part : field(key: "relevante_links_section_right_part") {
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