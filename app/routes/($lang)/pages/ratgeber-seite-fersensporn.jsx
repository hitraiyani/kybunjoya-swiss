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
import {toHTML, truncate, getAicoMetaByKeyName, getYoutubeId} from '~/lib/utils';
import {flattenConnection} from '@shopify/hydrogen';
import {STORE_LOCALE, AICO_API_IMAGE_PREFIX} from '~/lib/const';

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

  const aicoProductData = page?.fersensporn_product?.reference;


  const apicoProductTags = [];
  aicoProductData?.tags?.forEach((item) => {
    if (item.includes('attribute_de_Dr.')) {
      apicoProductTags.push(item.split('_').at(-1));
    }
  });

  const aicoContentBuilders = aicoProductData?.aico_content_builders?.value ? JSON.parse(aicoProductData.aico_content_builders.value) : [];
  const aicoTestimonialsData = aicoProductData?.testimonials_data?.value ? JSON.parse(aicoProductData.testimonials_data.value) : [];

  let aicoCotentBuilderHtml = '';
  // if (aicoContentBuilders.length) {
  //   aicoCotentBuilderHtml = aicoContentBuilders[0]['values'][0]['contentBuilder']['value'];
  // }


  const dkj_videourl_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'dkj_videourl_de_ch',
  );

  const dkj_name_international_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'dkj_name_international_de_ch',
  );

  const videoId = getYoutubeId(dkj_videourl_de_ch);

  const dkj_videotitel_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'dkj_videotitel_de_ch',
  );

  const dkj_videobeschreibung_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'dkj_videobeschreibung_de_ch',
  );


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

  const mainVideoSection = page?.ratgeber_seite_fersensporn_mobile?.reference
    ?.main_video_section?.value
    ? JSON.parse(
        page.ratgeber_seite_fersensporn_mobile.reference.main_video_section
          .value,
      )
    : {};

  const kundenmeinungenSectionDesc = page?.ratgeber_seite_fersensporn_mobile
    ?.reference?.kundenmeinungen_section_desc?.value
    ? JSON.parse(
        page?.ratgeber_seite_fersensporn_mobile.reference
          .kundenmeinungen_section_desc.value,
      )
    : [];

  const [isActive, setActive] = useState('false');
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="container">
        <section className="rich-text-sec" id="section_1">
          <div className="rich-text-inner">
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[60px]">
              <div className="col-left w-full lg:w-[50%]">
                <div className="w-full mb-[12px]">
                  <div className="title-wrap">
                    <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px]">
                      {
                        aicoProductData?.title
                      }
                    </h2>
                    <h3 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.2] mb-[20px]">
                      {
                        dkj_name_international_de_ch
                      }
                    </h3>
                  </div>
                </div>
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: (
                        page?.fersensporn_product?.reference?.description_de_ch?.value
                    ),
                  }}
                ></div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="video-info">
                  {dkj_videourl_de_ch && (
                    <div className="video-wrap w-full relative overflow-hidden pb-[50%]">
                      {videoId !='error' ? (<iframe
                        className="absolute w-full h-full inset-0 object-cover bg-cover"
                        src={`//www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />) : (<video controls="controls" src={dkj_videourl_de_ch}></video>)}
                      
                    </div>
                  )}
                  <div className="info mt-[12px]">
                    <h4 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px]">
                      {dkj_videotitel_de_ch}
                    </h4>
                    <div className="desc text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      <p>{dkj_videobeschreibung_de_ch}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">

          <div className="rich-text-inner">
            {/* <div className="title-wrap mb-[20px]">
              <h4 className="text-black text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[20px] font-medium">
                {
                  page?.ratgeber_seite_fersensporn_mobile?.reference
                    ?.wie_kybun_joya_hilft_section_title?.value
                }
              </h4>
            </div> */}
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[60px]">
              <div className="col-left w-full lg:w-[50%]">
                <div className="mobile-info aicoCotentBuilderWrap">
                  <div
                    className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: aicoCotentBuilderHtml,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="desc text-[16px] md:text-[16px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[32px]"
                >
                  <ul className="list-style2 list-style3">
                    { apicoProductTags.map((item,index) => {
                        return (<li key={index}>{item}</li>)
                    }) }
                  </ul>
                </div>
                <div className="btn-wrap mt-[20px]">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.wie_kybun_joya_hilft_section_broschure?.reference?.url
                    }
                    className="download-link pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-black tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[25px] justify-center w-fit text-left items-center transition-all duration-700 hover:text-[#00795c] download-link underline"
                  >
                    <IconDownload className={'w-[20px] h-[20px]'} />
                    Fersensporn Broschüre
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mobile-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="inner-row">
            <div className="flex flex-col md:flex-row gap-y-[20px] gap-x-[20px]">
              <div className="col-left w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    page?.ratgeber_seite_fersensporn_mobile?.reference
                    ?.shopfinder_section_title?.value
                  }
                  
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.shopfinder_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <Link
                    to={page?.ratgeber_seite_fersensporn_mobile?.reference
                      ?.shopfinder_section_button_redirect?.value}
                    className="text-black flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-white hover:bg-[#00795C] rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[20px] lg:px-[40px] leading-none"
                    href="#"
                  >
                    {
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.shopfinder_section_button_text?.value
                    }
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    page?.ratgeber_seite_fersensporn_mobile?.reference
                      ?.kybun_schuhe_testen_section_title?.value
                  }
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.kybun_schuhe_testen_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <a
                    className="text-black flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-white hover:bg-[#00795C] rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[20px] lg:px-[40px] leading-none"
                    href="#"
                  >
                    Schuhe testen
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer-opinions-sec customer-opinions-sec-mobile mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
          <div className="customer-opinions-inner">
            <div
              className={`${
                isActive ? '' : 'active'
              } customer-opinions-box-mobile relative`}
            >
              <div className="customer-items mr-[-20px]">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={15}
                  autoHeight="true"
                  pagination={{clickable: true}}
                  className="h-full overflow-visible flex flex-col"
                  breakpoints={{
                    0: {
                      slidesPerView: 1.2,
                    },
                    1024: {
                      slidesPerView: 2.2,
                    },
                    1280: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {
                    aicoTestimonialsData.map((item,index) => {
                      const testimonialsObj = {
                        title : '',
                        text : '',
                        image : '',
                      }
                      item.values?.forEach((value) => {
                          if (value.locale.toLowerCase() == STORE_LOCALE.toLowerCase()) {
                            testimonialsObj.title = value.title;  
                            testimonialsObj.text = value.text;  
                            testimonialsObj.image = value.image;  
                            var prefix = 'http://';
                            if (value.image && value.image.substr(0, prefix.length) !== prefix) {
                              testimonialsObj.image = AICO_API_IMAGE_PREFIX + value.image;
                            }
                          }
                      })
                      return (<SwiperSlide key={index}>
                        <div className="item p-[30px] bg-[#EDEDED] box-border break-inside-avoid mb-[20px] rounded-[10px] shadow-[0px_0px_0.9821px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_rgba(0,0,0,0.1)] w-full">
                          <div className="item-inner">
                            <div className="desc text-[16px] md:text-[18px] lg:text-[20px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>{testimonialsObj.text}</p>
                            </div>
                            <div className="customer-info flex border-t border-[#DEDEDE] pt-[10px] mt-[10px] gap-[10px] items-center">
                              <div className="customer-img w-[50px] h-[50px] md:w-[100px] md:h-[100px] relative overflow-hidden rounded-full">
                                <img
                                  className="absolute w-full h-full object-cover rounded-full"
                                  src={testimonialsObj.image}
                                  alt=""
                                />
                              </div>
                              <div className="info flex-1">
                                <h4 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-bold leading-[1.4] mb-[5px]">
                                  {testimonialsObj.title}
                                </h4>
                                {/* <h5 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                  {item.user_location}
                                </h5> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>)
                    })
                  }
                  {/* {kundenmeinungenSectionDesc.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="item p-[30px] bg-[#EDEDED] box-border break-inside-avoid mb-[20px] rounded-[10px] shadow-[0px_0px_0.9821px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_rgba(0,0,0,0.1)] w-full">
                          <div className="item-inner">
                            <div className="desc text-[16px] md:text-[18px] lg:text-[20px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>{item.user_comment}</p>
                            </div>
                            <div className="customer-info flex border-t border-[#DEDEDE] pt-[10px] mt-[10px] gap-[10px] items-center">
                              <div className="customer-img w-[50px] h-[50px] md:w-[100px] md:h-[100px] relative overflow-hidden rounded-full">
                                <img
                                  className="absolute w-full h-full object-cover rounded-full"
                                  src={item.user_image}
                                  alt=""
                                />
                              </div>
                              <div className="info flex-1">
                                <h4 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-bold leading-[1.4] mb-[5px]">
                                  {item.user_name}
                                </h4>
                                <h5 className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                  {item.user_location}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })} */}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <TopProductMobileSlider
          products={
            page?.ratgeber_seite_fersensporn_mobile?.reference
              ?.footer_pop_products?.references?.edges
          }
        />
        <section className="mobile-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
          <div className="inner-row">
            <div className="flex flex-col md:flex-row gap-y-[20px] gap-x-[20px]">
              <div className="col-left w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    page?.ratgeber_seite_fersensporn_mobile?.reference
                      ?.kybun_schuhe_testen_section_title?.value
                  }
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.kybun_schuhe_testen_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <Link
                    className="text-black flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-white hover:bg-[#00795C] rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[20px] lg:px-[40px] leading-none"
                    to={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.kybun_schuhe_testen_section_button_redirect?.value
                    }
                  >
                    {
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.kybun_schuhe_testen_section_button_text?.value
                    }
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    page?.ratgeber_seite_fersensporn_mobile?.reference
                      ?.shopfinder_section_title?.value
                  }
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.shopfinder_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <Link
                    className="text-black flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-white hover:bg-[#00795C] rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[20px] lg:px-[40px] leading-none"
                    to={
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.shopfinder_section_button_redirect?.value
                    }
                  >
                    {
                      page?.ratgeber_seite_fersensporn_mobile?.reference
                        ?.shopfinder_section_button_text?.value
                    }
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="btn-wrap mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] flex gap-[5px] lg:gap-[20px] justify-center">
              <Link
                to={
                  page?.ratgeber_seite_fersensporn_mobile?.reference
                    ?.kybun_schuhe_testen_section_button_2_redirect?.value
                }
                className="pro-btn text-[12px] md:text-[20px] lg:text-[21px] leading-none text-white tracking-[-0.400697px] font-normal flex gap-[5px] justify-center px-[5px] lg:px-[35px] py-[10px] lg:py-[20px] bg-black rounded-[100px] w-full lg:w-fit text-center items-center transition-all duration-700 hover:bg-[#00795c] mt-[10px] hover:text-white"
              >
                {
                  page?.ratgeber_seite_fersensporn_mobile?.reference
                    ?.kybun_schuhe_testen_section_button_2_text?.value
                }
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  page?.ratgeber_seite_fersensporn_mobile?.reference
                    ?.wie_kybun_joya_hilft_section_broschure?.reference?.url
                }
                className="pro-btn text-[12px] md:text-[20px] lg:text-[21px] leading-none text-white tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[15px] justify-center px-[5px] lg:px-[35px] py-[10px] lg:py-[20px] bg-black rounded-[100px] w-full lg:w-fit text-center items-center transition-all duration-700 hover:bg-[#00795c] mt-[10px] hover:text-white download-link"
              >
                <IconDownload className={'w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'} /> Fersensporn
                Broschüre
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function TopProductMobileSlider({products}) {
  return (
    <section className="pro-slider-mobile mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
      <div className="pro-slider-inner overflow-hidden m-[-10px]">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
          slidesPerView={1.2}
          spaceBetween={0}
          autoHeight="true"
          pagination={{clickable: true}}
          className="h-full"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product, index) => {
            const firstVariant = flattenConnection(product.node.variants)[0];
            if (!firstVariant) return null;
            const {image} = firstVariant;
            return (
              <SwiperSlide key={index} className="p-[10px]">
                <Link to={`/products/${product?.node?.handle}`}>
                  <div className="product-item pt-[5px]">
                    <div className="grid gap-4">
                      <div className="card-image pb-[100%] relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                        <img
                          className="object-contain fadeIn absolute inset-0 w-full h-full"
                          src={image?.url}
                          alt={image?.altText}
                        />
                      </div>
                      <div className="flex gap-1 flex-col">
                        <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                          {product?.node?.title}
                        </h3>
                        <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                          <p>{truncate(product?.node?.description, 100)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
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
      fersensporn_product : metafield(namespace: "custom", key: "fersensporn_product") {
        reference {
          ... on Product {
            title
            tags
            aico_content_builders : metafield(namespace: "aico", key: "aico_content_builders") {
              value
            }
            aico_custom_fields_de_ch : metafield(namespace: "aico", key: "aico_custom_fields_de_ch") {
              value
            }
            description_de_ch : metafield(namespace: "custom_fields", key: "description_de_ch") {
              value
            }
            testimonials_data : metafield(namespace: "custom_fields", key: "testimonials_data") {
              value
            }
          }
        }
      }
      ratgeber_seite_fersensporn_mobile : metafield(namespace: "custom", key: "ratgeber_seite_fersensporn_mobile") {
        reference {
          ... on Metaobject {
            handle
            head_desc : field(key: "head_desc") {
              value
            }
            head_title_sub : field(key: "head_title_sub") {
              value
            }
            head_title_sub_secondary : field(key: "head_title_sub_secondary") {
              value
            }
            main_video_section : field(key: "main_video_section") {
              value
            }
            kundenmeinungen_section_desc : field(key: "kundenmeinungen_section_desc") {
              value
            }
            wie_kybun_joya_hilft_section_title : field(key: "wie_kybun_joya_hilft_section_title") {
              value
            }
            wie_kybun_joya_hilft_section_desc : field(key: "wie_kybun_joya_hilft_section_desc") {
              value
            }
            wie_kybun_joya_hilft_section_right_side_desc : field(key: "wie_kybun_joya_hilft_section_right_side_desc") {
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
            shopfinder_section_title : field(key: "shopfinder_section_title") {
              value
            }
            shopfinder_section_image : field(key: "shopfinder_section_image") {
              reference {
                ...Media
              }
            }
            shopfinder_section_button_text : field(key: "shopfinder_section_button_text") {
              value
            }
            shopfinder_section_button_redirect : field(key: "shopfinder_section_button_redirect") {
              value
            }
            footer_pop_products : field(key: "footer_pop_products") {
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
