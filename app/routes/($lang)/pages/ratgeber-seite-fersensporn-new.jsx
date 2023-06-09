import React, {useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  ArrowRight,
  ArrowRightLight,
  Link,
  IconClose,
  IconDownload,
} from '~/components';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {toHTML, truncate} from '~/lib/utils';
import {flattenConnection} from '@shopify/hydrogen';

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
      handle: 'ratgeber-seite-fersensporn-new',
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

export default function ratgeberSeiteFersenspornNew() {
  const {page} = useLoaderData();

  const [menuLinks, setMenuLinks] = useState([]);

  useEffect(() => {
    const links = document.querySelectorAll('.scroll-link');
    setMenuLinks(Array.from(links));

    const downloadLinks = document.querySelectorAll('.download-link');
    downloadLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        const pdfUrl = link.href;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', pdfUrl, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
          if (xhr.status === 200) {
            const blob = new Blob([xhr.response], {type: 'application/pdf'});
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', '');
            downloadLink.href = url;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        };
        xhr.send();
      });
    });
  }, []);

  const scrollToSection = (targetId, headerHeight) => {
    const targetSection = document.getElementById(targetId);
    const targetPosition = targetSection.offsetTop - headerHeight;
    const currentPosition = window.pageYOffset;
    const distance = targetPosition - currentPosition;
    const duration = 500; // adjust this value to change the duration of the animation
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutQuad(progress, currentPosition, distance, duration),
      );
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    menuLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.dataset.target;
        const headerHeight = 90;
        scrollToSection(targetId, headerHeight);
      });
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.dataset.target;
          scrollToSection(targetId);
        });
      });
    };
  }, [menuLinks]);

  const mainVideoSection = page?.ratgeber_seite_fersensporn?.reference
    ?.main_video_section?.value
    ? JSON.parse(
        page.ratgeber_seite_fersensporn.reference.main_video_section.value,
      )
    : {};
  const mainVideoSliderSection = page?.ratgeber_seite_fersensporn?.reference
    ?.main_video_slider_section?.value
    ? JSON.parse(
        page.ratgeber_seite_fersensporn.reference.main_video_slider_section
          .value,
      )
    : [];
  const relevanteLinksSectionLeftPart = page?.ratgeber_seite_fersensporn
    ?.reference?.relevante_links_section_left_part?.value
    ? JSON.parse(
        page?.ratgeber_seite_fersensporn.reference
          .relevante_links_section_left_part.value,
      )
    : [];
  const relevanteLinksSectionRightPart = page?.ratgeber_seite_fersensporn
    ?.reference?.relevante_links_section_right_part?.value
    ? JSON.parse(
        page?.ratgeber_seite_fersensporn.reference
          .relevante_links_section_right_part.value,
      )
    : [];

  const kundenmeinungenSectionDesc = page
    ?.ratgeber_seite_fersensporn_second_part?.reference
    ?.kundenmeinungen_section_desc?.value
    ? JSON.parse(
        page?.ratgeber_seite_fersensporn_second_part.reference
          .kundenmeinungen_section_desc.value,
      )
    : [];

  const kundenmeinungenSectionDescMobile = kundenmeinungenSectionDesc.slice(
    0,
    5,
  );

  const drInfoSlider = page?.ratgeber_seite_fersensporn_second_part?.reference
    ?.dr_info_slider?.value
    ? JSON.parse(
        page?.ratgeber_seite_fersensporn_second_part.reference.dr_info_slider
          .value,
      )
    : [];

  const [isActive, setActive] = useState('false');
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="container">
        <div className="page-title">
          <h1 className="title text-[#00795C] text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] mb-[30px] lg:mb-[43px] leading-none font-black">
            {page?.ratgeber_seite_fersensporn?.reference?.head_title?.value}
          </h1>
        </div>
        <section className="rich-text-with-slider" id="section_1">
          <div className="rich-text-inner">
            <div className="w-full mb-[12px]">
              <div className="title-wrap">
                <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px]">
                  {
                    page?.ratgeber_seite_fersensporn?.reference?.head_title_sub
                      ?.value
                  }
                </h2>
                <h3 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.2] mb-[20px]">
                  {
                    page?.ratgeber_seite_fersensporn?.reference
                      ?.head_title_sub_secondary?.value
                  }
                </h3>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[93px]">
              <div className="col-left w-full lg:w-[65%]">
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_seite_fersensporn?.reference?.head_desc
                        ?.value,
                    ),
                  }}
                ></div>
                <div className="box bg-[#EDEDED] rounded-[10px] p-[30px] xl:px-[63px] xl:py-[49px] mt-[43px]">
                  <h3 className="text-[35px] xl:text-[40px] text-[#00795C] font-bold leading-[1.2] tracking-[-0.97152px] mb-[33px]">
                    {
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.overview_title?.value
                    }
                  </h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.overview_desc?.value,
                    }}
                  ></span>
                </div>
              </div>
              <div className="col-right w-full lg:w-[35%]">
                <div className="video-info">
                  {mainVideoSection?.video_url && (
                    <div className="video-wrap w-full aspect-video  relative overflow-hidden">
                      <iframe
                        className="absolute w-full h-full inset-0 object-cover bg-cover"
                        src={mainVideoSection?.video_url}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <div className="info mt-[12px]">
                    <h4 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px]">
                      {mainVideoSection?.video_title}
                    </h4>
                    <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      <p>{mainVideoSection?.video_desc}</p>
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
                        prevEl: '.swiper-button-next-video',
                        nextEl: '.swiper-button-prev-video',
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1.2,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 1,
                        },
                        1800: {
                          slidesPerView: 2,
                        },
                      }}
                      className="h-full overflow-visible flex flex-col"
                    >
                      {mainVideoSliderSection.length > 0 &&
                        mainVideoSliderSection.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="video-info">
                                <div className="video-wrap w-full aspect-video  relative overflow-hidden">
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
                                  <h4 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px] text-[#00795C]">
                                    {item?.video_title}
                                  </h4>
                                  <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                    <p>{item?.video_desc}</p>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                    <div className="absolute top-[26%] min-[1800px]:top-[16%] z-[1] rounded-full swiper-button-next-video border-[5px] border-[rgba(0,_148,_112,_0.3)] left-[-24px]">
                      <div className="rounded-full w-[45px] h-[45px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center rotate-180">
                        <ArrowRight
                          className={'relative left-[1px] w-[20px] h-[20px]'}
                        />
                      </div>
                    </div>
                    <div className="absolute top-[26%] min-[1800px]:top-[16%] z-[1] rounded-full swiper-button-prev-video border-[5px] border-[rgba(0,_148,_112,_0.3)] right-[-24px]">
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
        <section className="relevante-links-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="title-wrap">
            <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
              {
                page?.ratgeber_seite_fersensporn?.reference
                  ?.relevante_links_section_title?.value
              }
            </h2>
          </div>
          <div className="flex flex-col xl:flex-row gap-[20px]">
            <div className="col-left w-full xl:w-[50%]">
              <div className="flex flex-row gap-[10px] md:gap-[20px] h-full">
                {relevanteLinksSectionLeftPart.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="item w-[50%] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)]  h-full"
                    >
                      <div className="box h-full flex flex-col items-center px-[15px] py-[15px]">
                        <div className="img-title-wrap flex flex-col my-[30px] xl:mb-[10px] h-full justify-center">
                          <img
                            className="max-w-full h-[30px] md:h-[50px] object-contain"
                            src={item?.brand_logo}
                            alt=""
                          />
                          <h4 className="text-[20px] md:text-[35px] text-[#00795C] font-bold leading-[1.2] text-center mt-[5px]">
                            {item?.sub_title}
                          </h4>
                        </div>
                        <div className="link-wrap mt-auto w-full">
                          <Link
                            to={item?.redirect_link_url}
                            className="text-[#00795C] flex justify-end items-center gap-[8px] text-[14px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                          >
                            {item?.redirect_link_text}
                            <ArrowRightLight className={'w-[20px] h-[20px] md:w-[30px] md:h-[30px]'} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-right w-full xl:w-[50%]">
              <div className="title-wrap bg-[#00795C]">
                <h4 className="text-[24px] md:text-[28px] xl:text-[35px] text-white font-bold leading-[1.2] text-left px-[20px] py-[17px]">
                  {
                    page?.ratgeber_seite_fersensporn?.reference
                      ?.relevante_links_section_right_part_title?.value
                  }
                </h4>
              </div>
              <div className="flex flex-col  md:flex-row gap-[20px] px-[20px] py-[15px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)]">
                {relevanteLinksSectionRightPart.map((item, index) => {
                  return (
                    <div
                      className="item w-full flex flex-col md:w-[50%]"
                      key={index}
                    >
                      <h4 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#00795C] font-bold leading-none mb-[10px]">
                        {item?.title}
                      </h4>
                      <div className="img-wrap relative overflow-hidden  h-[186px] mt-auto">
                        <img
                          className="absolute w-full h-full inset-0 object-cover"
                          src={item?.image}
                          alt=""
                        />
                      </div>
                      <div className="link-wrap mt-[10px]">
                        <Link
                          to={item?.redirect_link_url}
                          className="text-[#00795C] flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
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
        <section className="rich-text-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="rich-text -inner max-w-[1077px]">
            <div className="title-wrap">
              <h2 className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] lg:mb-[40px] leading-[1.1]">
                {
                  page?.ratgeber_seite_fersensporn?.reference
                    ?.kybun_joya_fersensporn_section_title?.value
                }
              </h2>
              <h4 className="title text-[#00795C] text-[28px] md:text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                {
                  page?.ratgeber_seite_fersensporn?.reference
                    ?.kybun_joya_fersensporn_section_sub_title?.value
                }
              </h4>
            </div>
            <div
              className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
              dangerouslySetInnerHTML={{
                __html: toHTML(
                  page?.ratgeber_seite_fersensporn?.reference
                    ?.kybun_joya_fersensporn_section_desc?.value,
                ),
              }}
            ></div>
          </div>
        </section>
        <section
          className="rich-text-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]"
          id="section_2"
        >
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h4 className="title text-[#00795C] text-[28px] md:text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                {
                  page?.ratgeber_seite_fersensporn?.reference?.ursachen_title
                    ?.value
                }
              </h4>
            </div>
            <div className="flex lg:flex-row flex-col gap-[30px] xl:gap-x-[77px] w-full">
              <div className="col-left w-full lg:w-[50%]">
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                  <p>
                    <strong>
                      {
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.ursachen_left_section_title?.value
                      }
                    </strong>
                  </p>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <img
                    className="max-w-full  sm:float-right sm:ml-[15px] mb-[15px] w-full sm:w-[320px] h-[320px] object-cover"
                    src={
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.ursachen_left_section_image?.reference?.image?.url
                    }
                    alt=""
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.ursachen_left_section_desc?.value,
                      ),
                    }}
                  ></span>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                  <p>
                    <strong>
                      {
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.ursachen_right_section_title?.value
                      }
                    </strong>
                  </p>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <img
                    className="max-w-full  sm:float-right sm:ml-[15px] mb-[15px] border-[2px] border-[#EDEDED] w-full sm:w-[320px] h-[320px] object-contain p-[20px]"
                    src={
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.ursachen_right_section_image?.reference?.image?.url
                    }
                    alt=""
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.ursachen_right_section_desc?.value,
                      ),
                    }}
                  ></span>
                </div>
              </div>
            </div>
            <div
              className="flex lg:flex-row flex-col gap-[30px] xl:gap-x-[77px] w-full mt-[30px]"
              id="section_3"
            >
              <div className="col-left w-full lg:w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[28px] md:text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    {
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.langzeitfolgen_section_title?.value
                    }
                  </h4>
                </div>
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.langzeitfolgen_section_desc?.value,
                    ),
                  }}
                ></div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[28px] md:text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    {
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.konventionelle_therapie_section_title?.value
                    }
                  </h4>
                </div>
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.konventionelle_therapie_section_desc?.value,
                    ),
                  }}
                ></div>
              </div>
            </div>
            <div
              className="flex lg:flex-row flex-col gap-y-[30px] gap-x-[77px] w-full mt-[72px]"
              id="section_4"
            >
              <div className="col-left w-full lg:w-[40%]">
                <h4 className="title text-[#00795C] text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] tracking-[-0.97152px] leading-[1.1] font-medium">
                  {
                    page?.ratgeber_seite_fersensporn_second_part?.reference
                      ?.kybun_wirkungsprinzip_section_title?.value
                  }
                </h4>
                <h5 className="text-[30px] text-[#00795C] font-medium leading-[1.2] text-left">
                  {
                    page?.ratgeber_seite_fersensporn_second_part?.reference
                      ?.kybun_wirkungsprinzip_section_sub_title?.value
                  }
                </h5>
                <div
                  className="desc desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mt-[30px]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_seite_fersensporn_second_part?.reference
                        ?.kybun_wirkungsprinzip_section_desc?.value,
                    ),
                  }}
                ></div>
              </div>
              <div className="col-right w-full lg:w-[60%]">
                <div className="img-wrap  border border-[#D9D9D9]">
                  <img
                    className="w-full"
                    src={
                      page?.ratgeber_seite_fersensporn_second_part?.reference
                        ?.kybun_wirkungsprinzip_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h2 className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] lg:mb-[40px] leading-[1.1]">
                {
                  page?.ratgeber_seite_fersensporn?.reference
                    ?.anwendertipps_title?.value
                }
              </h2>
            </div>
            <div
              className="flex lg:flex-row flex-col gap-[30px] xl:gap-x-[85px] w-full"
              id="section_5"
            >
              <div className="col-left w-full lg:w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    {
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.erstreaktionen_section_title?.value
                    }
                  </h4>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mt-[30px]">
                  <p>
                    <strong>
                      {
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.erstreaktionen_section_sub_title?.value
                      }
                    </strong>
                  </p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.erstreaktionen_section_desc?.value,
                      ),
                    }}
                  ></span>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    {
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.anwendungstipps_section_title?.value
                    }
                  </h4>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mt-[30px]">
                  <p>
                    <strong>
                      {
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.anwendungstipps_section_sub_title?.value
                      }
                    </strong>
                  </p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_seite_fersensporn?.reference
                          ?.anwendungstipps_section_desc?.value,
                      ),
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="rich-text-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]"
          id="section_6"
        >
          <div className="rich-text-inner">
            <div className="flex flex-col lg:flex-row mt-[72px] gap-[30px] xl:gap-[73px]">
              <div className="col-left w-full lg:w-[65%]">
                <div className="video-wrap w-full aspect-video  relative overflow-hidden">
                  <iframe
                    className="absolute w-full h-full inset-0 object-cover bg-cover"
                    src={
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.kybun_ubungen_section_video_url?.value
                    }
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col-right w-full lg:w-[35%]">
                <h4 className="title text-[#00795C] text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] tracking-[-0.97152px] leading-[1.1] font-medium mb-[25px]">
                  {
                    page?.ratgeber_seite_fersensporn?.reference
                      ?.kybun_ubungen_section_title?.value
                  }
                </h4>
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html:
                      page?.ratgeber_seite_fersensporn?.reference
                        ?.kybun_ubungen_section_desc?.value,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer-opinions-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="customer-opinions-inner">
            <div className="title-wrap">
              <h2 className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] lg:mb-[40px] leading-[1.1]">
                {
                  page?.ratgeber_seite_fersensporn_second_part?.reference
                    ?.kundenmeinungen_section_title?.value
                }
              </h2>
              <h4
                className="title text-[#00795C] text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium"
                id="section_7"
              >
                {
                  page?.ratgeber_seite_fersensporn_second_part?.reference
                    ?.kundenmeinungen_section_sub_title?.value
                }
              </h4>
            </div>
            {/* <div className='customer-opinions-box columns-3 gap-[20px]'> */}
            <div
              className={`${
                isActive ? '' : 'active'
              } customer-opinions-box relative overflow-hidden`}
            >
              <div className="columns-1 md:columns-2 xl:columns-3 gap-[20px] customer-items hidden md:block">
                {kundenmeinungenSectionDesc.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="item p-[30px] bg-[#EDEDED] box-border break-inside-avoid mb-[20px] rounded-[10px] shadow-[0px_0px_0.9821px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_rgba(0,0,0,0.1)]"
                    >
                      <div className="item-inner">
                        <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                          <p>{item.user_comment}</p>
                        </div>
                        <div className="customer-info flex border-t border-[#DEDEDE] pt-[21px] mt-[46px] gap-[27px] items-center">
                          <div className="customer-img w-[109px] h-[109px] relative overflow-hidden rounded-full">
                            <img
                              className="absolute w-full h-full object-cover rounded-full"
                              src={item.user_image}
                              alt=""
                            />
                          </div>
                          <div className="info flex-1">
                            <h4 className="text-[21px] font-bold text-black mb-[15px]">
                              {item.user_name}
                            </h4>
                            <h5 className="text-[18px] tracking-[-0.400697px] text-black font-normal">
                              {item.user_location}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="customer-opinions-sec-mobile md:hidden">
                <div className="customer-items mr-[-20px]">
                  <Swiper
                    modules={[
                      Navigation,
                      Scrollbar,
                      A11y,
                      Autoplay,
                      Pagination,
                    ]}
                    slidesPerView={1.2}
                    spaceBetween={15}
                    autoHeight="true"
                    pagination={{clickable: true}}
                    className="h-full overflow-visible flex flex-col"
                  >
                    {kundenmeinungenSectionDescMobile.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="item p-[30px] bg-[#EDEDED] box-border break-inside-avoid mb-[20px] rounded-[10px] shadow-[0px_0px_0.9821px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_rgba(0,0,0,0.1)] w-full">
                            <div className="item-inner">
                              <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>{item.user_comment}</p>
                              </div>
                              <div className="customer-info flex border-t border-[#DEDEDE] pt-[10px] mt-[10px] gap-[10px] items-center">
                                <div className="customer-img w-[50px] h-[50px] relative overflow-hidden rounded-full">
                                  <img
                                    className="absolute w-full h-full object-cover rounded-full"
                                    src={item.user_image}
                                    alt=""
                                  />
                                </div>
                                <div className="info flex-1">
                                  <h4 className="text-[16px] font-bold text-black mb-[5px]">
                                    {item.user_name}
                                  </h4>
                                  <h5 className="text-[16px] tracking-[-0.400697px] text-black font-normal">
                                    {item.user_location}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
            <button
              onClick={ToggleClass}
              className="toggle-btn desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] items-center gap-[23px] justify-center m-auto hover:text-[#00795c] mt-[10px] hidden md:flex"
            >
              {isActive ? (
                <>
                  <IconClose className="rotate-45 w-[23px] h-[23px]" />
                  Lese Lesen
                </>
              ) : (
                <>
                  <IconClose className="w-[23px] h-[23px]" />
                  Mehr weniger
                </>
              )}
            </button>
          </div>
        </section>
        <section className="review-slider-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="slider-inner relative">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay,Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{clickable: true}}
              navigation={{
                prevEl: '.swiper-button-next-review',
                nextEl: '.swiper-button-prev-review',
              }}
              className="h-full overflow-visible flex flex-col"
            >
              {drInfoSlider.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider-items">
                      <div className="item rounded-[10px] my-[10px]">
                        <div className="item-inner flex flex-wrap items-center gap-[20px] lg:gap-[40px] max-w-[99%] rounded-[10px] p-[20px] lg:p-[30px] [md:py-[50px] xl:py-[100px] md:px-[50px] mx-auto  shadow-[0px_0px_0.9821px_rgba(0,0,0,0.05),0px_-0.0716px_7.8568px_rgba(0,0,0,0.1)] justify-center text-center sm:text-left">
                          <div className="dr-img w-[100px] h-[100px] md:w-[245px] md:h-[245px] rounded-full relative overflow-hidden">
                            <img
                              className="absolute w-full h-full inset-0"
                              src={item.dr_image}
                              alt=""
                            />
                          </div>
                          <div className="dr-info w-full sm:w-[calc(100%_-_140px)]  md:w-[calc(100%_-_300px)] xl:w-[321px] xl:pr-[60px]">
                            <h4 className="name text-[20px] md:text-[24px] xl:text-[33px] text-black font-bold">
                              {item.dr_name}
                            </h4>
                            <h5 className="text-[16px] md:text-[24px] tracking-[-0.544698px] font-normal">
                              {item.dr_location}
                            </h5>
                          </div>
                          <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] flex-1">
                            <p>{item.dr_comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="absolute top-[calc(50%_-_20px)] -translate-y-2/4 z-[1] rounded-full swiper-button-next-review border-[5px] border-[rgba(0,_148,_112,_0.3)] left-[-20px] lg:left-[-34px] hidden md:block">
              <div className="rounded-full w-[40px] h-[40px] lg:w-[73px] lg:h-[73px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center rotate-180">
                <ArrowRight
                  className={
                    'relative left-[1px] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]'
                  }
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_20px)] -translate-y-2/4 z-[1] rounded-full swiper-button-prev-review border-[5px] border-[rgba(0,_148,_112,_0.3)] right-[-20px] lg:right-[-34px] hidden md:block">
              <div className="rounded-full w-[40px] h-[40px] lg:w-[73px] lg:h-[73px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center">
                <ArrowRight
                  className={
                    'relative left-[2px] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]'
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="rich-text mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] mb-[40px]"
          id="section_8"
        >
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h4 className="title text-[#00795C] text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] tracking-[-0.97152px] leading-[1.1] font-medium mb-[25px]">
                {
                  page?.ratgeber_seite_fersensporn_second_part?.reference
                    ?.medienberichte_section_title?.value
                }
              </h4>
              <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[605px]">
                <ul className="list-disc list-outside flex flex-col gap-[15px] pl-[40px] text-[#00795C]">
                  <li className="underline">
                    {
                      page?.ratgeber_seite_fersensporn_second_part?.reference
                        ?.medienberichte_section_tips?.value
                    }
                  </li>
                </ul>
                <p>
                  {
                    page?.ratgeber_seite_fersensporn_second_part?.reference
                      ?.medienberichte_section_desc?.value
                  }
                </p>
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
${PRODUCT_CARD_FRAGMENT}
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
            anwendertipps_title : field(key: "anwendertipps_title") {
              value
            }
            anwendungstipps_section_desc : field(key: "anwendungstipps_section_desc") {
              value
            }
            anwendungstipps_section_sub_title : field(key: "anwendungstipps_section_sub_title") {
              value
            }
            anwendungstipps_section_title : field(key: "anwendungstipps_section_title") {
              value
            }
            erstreaktionen_section_desc : field(key: "erstreaktionen_section_desc") {
              value
            }
            erstreaktionen_section_sub_title : field(key: "erstreaktionen_section_sub_title") {
              value
            }
            erstreaktionen_section_title : field(key: "erstreaktionen_section_title") {
              value
            }
            kybun_ubungen_section_title : field(key: "kybun_ubungen_section_title") {
              value
            }
            kybun_ubungen_section_video_url : field(key: "kybun_ubungen_section_video_url") {
              value
            }
            kybun_ubungen_section_desc : field(key: "kybun_ubungen_section_desc") {
              value
            }
          }
        }
      }
      ratgeber_seite_fersensporn_second_part : metafield(namespace: "custom", key: "ratgeber_seite_fersensporn_second_part") {
        reference {
          ... on Metaobject {
            handle
            kybun_wirkungsprinzip_section_title : field(key: "kybun_wirkungsprinzip_section_title") {
              value
            }
            kybun_wirkungsprinzip_section_sub_title : field(key: "kybun_wirkungsprinzip_section_sub_title") {
              value
            }
            kybun_wirkungsprinzip_section_desc : field(key: "kybun_wirkungsprinzip_section_desc") {
              value
            }
            kybun_wirkungsprinzip_section_image : field(key: "kybun_wirkungsprinzip_section_image") {
              reference {
                ...Media
              }
            }
            kundenmeinungen_section_title : field(key: "kundenmeinungen_section_title") {
              value
            }
            kundenmeinungen_section_sub_title : field(key: "kundenmeinungen_section_sub_title") {
              value
            }
            kundenmeinungen_section_desc : field(key: "kundenmeinungen_section_desc") {
              value
            }
            dr_info_slider : field(key: "dr_info_slider") {
              value
            }
            medienberichte_section_title : field(key: "medienberichte_section_title") {
              value
            }
            medienberichte_section_tips : field(key: "medienberichte_section_tips") {
              value
            }
            medienberichte_section_desc : field(key: "medienberichte_section_desc") {
              value
            }
            wie_kybun_joya_hilft_section_title : field(key: "wie_kybun_joya_hilft_section_title") {
              value
            }
            wie_kybun_joya_hilft_section_desc : field(key: "wie_kybun_joya_hilft_section_desc") {
              value
            }
            wie_kybun_joya_hilft_section_broschure : field(key: "wie_kybun_joya_hilft_section_broschure") {
              reference {
                ... on GenericFile {
                    id
                    url
                }
              }
            }
            kybun_schuhe_testen_section_title : field(key: "kybun_schuhe_testen_section_title") {
              value
            }
            kybun_schuhe_testen_section_image : field(key: "kybun_schuhe_testen_section_image") {
              reference {
                ...Media
              }
            }
            kybun_schuhe_testen_section_button_text : field(key: "kybun_schuhe_testen_section_button_text") {
              value
            }
            kybun_schuhe_testen_section_button_redirect : field(key: "kybun_schuhe_testen_section_button_redirect") {
              value
            }
            kybun_schuhe_testen_section_button_2_text : field(key: "kybun_schuhe_testen_section_button_2_text") {
              value
            }
            kybun_schuhe_testen_section_button_2_redirect : field(key: "kybun_schuhe_testen_section_button_2_redirect") {
              value
            }
            foooter_top_products : field(key: "foooter_top_products") {
              references(first: 5) {
                edges {
                  node {
                    ... on Product {
                      ...ProductCard
                    }
                  }
                }
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
