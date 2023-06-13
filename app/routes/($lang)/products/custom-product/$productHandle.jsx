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
  Breadcrumb
} from '~/components';
import {useLoaderData, useLocation} from '@remix-run/react';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {toHTML, truncate, getAicoMetaByKeyName, getYoutubeId, getBreadCrumbs} from '~/lib/utils';
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

  const {productHandle} = params;

  const {product, ratgeber_seite_fersensporn_mobile} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });


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
    {page, product, ratgeber_seite_fersensporn_mobile},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function ratgeberSeiteFersensporn() {
  const {page, product, ratgeber_seite_fersensporn_mobile} = useLoaderData();

  const aicoProductData = product;

  const aicoDrKybunJoyaProductTags = [];
  let drKybunJoyaTagHeading = '';
  aicoProductData?.tags?.forEach((item) => {
    if (item.includes('attribute_de_kybun')) {
      if (!drKybunJoyaTagHeading) {
          drKybunJoyaTagHeading = item.split('_').at(-2);
      }
      aicoDrKybunJoyaProductTags.push(item.split('_').at(-1));
    }
  });
  const aicoProductTagsUrsachen = [];
  let ursachenTagHeading = '';
  aicoProductData?.tags?.forEach((item) => {
    if (item.includes('attribute_de_Ursachen')) {
      if (!ursachenTagHeading) {
        ursachenTagHeading = item.split('_').at(-2);
      }
      aicoProductTagsUrsachen.push(item.split('_').at(-1));
    }
  });

  const aicoTestimonialsData = aicoProductData?.testimonials_data?.value ? JSON.parse(aicoProductData.testimonials_data.value) : [];
  const aicoKnowledgeBasesData = aicoProductData?.knowledgebases_data?.value ? JSON.parse(aicoProductData.knowledgebases_data.value) : [];
  let productPdfTitle = '';
  let productPdfUrl = '';
  if (aicoKnowledgeBasesData.length > 0) {
      productPdfTitle = aicoKnowledgeBasesData[0]?.title;
      if(aicoKnowledgeBasesData[0]?.file) {
        productPdfUrl = aicoKnowledgeBasesData[0]?.file
      } else if (aicoKnowledgeBasesData[0]?.image) {
        productPdfUrl = AICO_API_IMAGE_PREFIX + aicoKnowledgeBasesData[0]?.image
      }
  }
  // const aicoContentBuilders = aicoProductData?.aico_content_builders?.value ? JSON.parse(aicoProductData.aico_content_builders.value) : [];
  // let aicoCotentBuilderHtml = '';
  // if (aicoContentBuilders.length) {
  //   if (aicoContentBuilders[0]['values'][0]['contentBuilder']) {
  //     aicoCotentBuilderHtml = aicoContentBuilders[0]['values'][0]['contentBuilder']['value'];
  //   }
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

  const rtgb_textursachen_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'rtgb_textursachen_de_ch',
  );

  const rtgb_textkybunjoyatherapie_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'rtgb_textkybunjoyatherapie_de_ch',
  );
  
  const rtgb_textnachbutton_de_ch = getAicoMetaByKeyName(
    aicoProductData?.aico_custom_fields_de_ch?.value,
    'rtgb_textnachbutton_de_ch',
  );



  const [downloadLinks, setDownloadLinks] = useState([]);
  const [menuLinks, setMenuLinks] = useState([]);

  useEffect(() => {

    if (aicoProductData?.documents?.value) {
      var container = document.createElement('div');
      container.innerHTML = aicoProductData.documents.value;
      var downlinks = container.querySelectorAll('a');
      let downListArr = [];
      downlinks.forEach((link) => {
         downListArr.push({'href': link.href, 'title' :link.innerText.trim() })
      });
      setDownloadLinks(downListArr);
    }

    const links = document.querySelectorAll('.scroll-link');
    setMenuLinks(Array.from(links));

    // const downloadLinks = document.querySelectorAll('.download-link');
    // downloadLinks.forEach((link) => {
    //   link.addEventListener('click', (event) => {
    //     event.preventDefault(); // Prevent the default link behavior

    //     const pdfUrl = link.href;
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', pdfUrl, true);
    //     xhr.responseType = 'blob';
    //     xhr.onload = () => {
    //       if (xhr.status === 200) {
    //         const blob = new Blob([xhr.response], {type: 'application/pdf'});
    //         const url = URL.createObjectURL(blob);
    //         const downloadLink = document.createElement('a');
    //         downloadLink.setAttribute('download', '');
    //         downloadLink.href = url;
    //         document.body.appendChild(downloadLink);
    //         downloadLink.click();
    //         document.body.removeChild(downloadLink);
    //       }
    //     };
    //     xhr.send();
    //   });
    // });
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


  const [isActive, setActive] = useState('false');
  const ToggleClass = () => {
    setActive(!isActive);
  };
  
  const {pathname} = useLocation();
  const breadCrumbsData =  getBreadCrumbs(null,'ratgeber');
  breadCrumbsData.push({title : aicoProductData?.title, to : pathname });

  return (
    <>
      <Breadcrumb crumbs={breadCrumbsData}/>
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
                  ratgeber_seite_fersensporn_mobile
                    ?.wie_kybun_joya_hilft_section_title?.value
                }
              </h4>
            </div> */}
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[60px]">
              <div className="col-left w-full lg:w-[50%]">
              <div className="desc text-[16px] md:text-[16px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[32px]"
                >
                 {aicoProductTagsUrsachen.length > 0 && (
                  <>
                    <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                      {ursachenTagHeading}
                    </h2>
                    {rtgb_textursachen_de_ch && ( <p>{ rtgb_textursachen_de_ch }</p> )}
                    <ul className="list-style2 list-style3">
                      {aicoProductTagsUrsachen.map((item, index) => {
                        return (<li className='list-style-red' key={index}>{item}</li>)
                      })}
                    </ul>
                  </>
                 )}
                 {aicoDrKybunJoyaProductTags.length > 0 && (
                    <>
                      <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                        {drKybunJoyaTagHeading}
                      </h2>
                      { rtgb_textkybunjoyatherapie_de_ch && ( <p>{ rtgb_textkybunjoyatherapie_de_ch }</p> )}
                      <ul className="list-style2 list-style3">
                        {aicoDrKybunJoyaProductTags.map((item, index) => {
                          return (<li key={index}>{item}</li>)
                        })}
                      </ul>
                    </>
                )}
                  {rtgb_textnachbutton_de_ch && ( <p>{ rtgb_textnachbutton_de_ch }</p> )}
                </div>
                {downloadLinks.length > 0 && (
                  <>
                    {downloadLinks.map((item, index) => {
                        return (
                          <div className="btn-wrap mt-[20px]" key={index}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={item.href}
                              className="download-link pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-black tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[25px] justify-center w-fit text-left items-center transition-all duration-700 hover:text-[#00795c] download-link underline"
                            >
                              <IconDownload className={'w-[20px] h-[20px]'} />
                              {item.title}
                            </a>
                          </div>
                        );
                    })}
                  </>
                )}
                {/* <div className="mobile-info aicoCotentBuilderWrap">
                  <div
                    className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: aicoCotentBuilderHtml,
                    }}
                  ></div>
                </div> */}
              </div>

              <div className="col-right w-full lg:w-[50%]">
                {/* <div className="desc text-[16px] md:text-[16px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[32px]"
                >
                  <ul className="list-style2 list-style3">
                    { apicoProductTags.map((item,index) => {
                        return (<li key={index}>{item}</li>)
                    }) }
                    { aicoProductTagsUrsachen.map((item,index) => {
                        return (<li className='list-style-red' key={index}>{item}</li>)
                    }) }
                  </ul>
                </div> */}
                
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
                    ratgeber_seite_fersensporn_mobile
                    ?.shopfinder_section_title?.value
                  }
                  
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      ratgeber_seite_fersensporn_mobile
                        ?.shopfinder_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <Link
                    to={ratgeber_seite_fersensporn_mobile
                      ?.shopfinder_section_button_redirect?.value}
                    className="text-white flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-[#00795C] hover:bg-black rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[12px] lg:px-[30px] leading-none"
                    href="#"
                  >
                    {
                      ratgeber_seite_fersensporn_mobile
                        ?.shopfinder_section_button_text?.value
                    }
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </Link>
                </div>
              </div>
              {/* <div className="col-right w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    ratgeber_seite_fersensporn_mobile
                      ?.kybun_schuhe_testen_section_title?.value
                  }
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      ratgeber_seite_fersensporn_mobile
                        ?.kybun_schuhe_testen_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <a
                    className="text-white flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-[#00795C] hover:bg-black rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[12px] lg:px-[30px] leading-none"
                    href="#"
                  >
                    Schuhe testen
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </a>
                </div>
              </div> */}
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
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <TopProductMobileSlider
          products={
            ratgeber_seite_fersensporn_mobile
              ?.footer_pop_products?.references?.edges
          }
        />
        <section className="mobile-sec mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
          <div className="inner-row">
            <div className="flex flex-col md:flex-row gap-y-[20px] gap-x-[20px]">
              <div className="col-left w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    ratgeber_seite_fersensporn_mobile
                      ?.kybun_schuhe_testen_section_title?.value
                  }
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      ratgeber_seite_fersensporn_mobile
                        ?.kybun_schuhe_testen_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <Link
                    className="text-white flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-[#00795C] hover:bg-black rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[12px] lg:px-[30px] leading-none"
                    to={
                      ratgeber_seite_fersensporn_mobile
                        ?.kybun_schuhe_testen_section_button_redirect?.value
                    }
                  >
                    {
                      ratgeber_seite_fersensporn_mobile
                        ?.kybun_schuhe_testen_section_button_text?.value
                    }
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </Link>
                </div>
              </div>
              {/* <div className="col-right w-full lg:w-[50%]">
                <h2 className="text-[#00795C] text-[30px] lg:text-[40px] tracking-[-1.05984px] mb-[20px] font-medium">
                  {
                    ratgeber_seite_fersensporn_mobile
                      ?.shopfinder_section_title?.value
                  }
                </h2>
                <div className="img-wrap relative overflow-hidden min-h-[186px] mt-auto pb-[46%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      ratgeber_seite_fersensporn_mobile
                        ?.shopfinder_section_image?.reference?.image
                        ?.url
                    }
                    alt=""
                  />
                  <Link
                    className="text-white flex justify-end items-center gap-[8px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal bg-[#00795C] hover:bg-black rounded-[48px] mt-auto hover:!text-white absolute bottom-[15px] right-[15px] py-[10px] px-[20px] lg:py-[12px] lg:px-[30px] leading-none"
                    to={
                      ratgeber_seite_fersensporn_mobile
                        ?.shopfinder_section_button_redirect?.value
                    }
                  >
                    {
                      ratgeber_seite_fersensporn_mobile
                        ?.shopfinder_section_button_text?.value
                    }
                    <ArrowRightLight
                      className={'w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'}
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <div className="btn-wrap mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] flex gap-[5px] lg:gap-[20px] justify-center">
              <Link
                to={
                  ratgeber_seite_fersensporn_mobile
                    ?.kybun_schuhe_testen_section_button_2_redirect?.value
                }
                className="pro-btn text-[12px] md:text-[20px] lg:text-[21px] leading-none text-white tracking-[-0.400697px] font-normal flex gap-[5px] justify-center px-[5px] lg:px-[35px] py-[10px] lg:py-[20px] bg-[#00795c] rounded-[100px] w-full lg:w-fit text-center items-center transition-all duration-700 hover:bg-black mt-[10px] hover:text-white"
              >
                {
                  ratgeber_seite_fersensporn_mobile
                    ?.kybun_schuhe_testen_section_button_2_text?.value
                }
              </Link>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  ratgeber_seite_fersensporn_mobile
                    ?.wie_kybun_joya_hilft_section_broschure?.reference?.url
                }
                className="pro-btn text-[12px] md:text-[20px] lg:text-[21px] leading-none text-white tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[15px] justify-center px-[5px] lg:px-[35px] py-[10px] lg:py-[20px] bg-[#00795c] rounded-[100px] w-full lg:w-fit text-center items-center transition-all duration-700 hover:bg-black mt-[10px] hover:text-white download-link"
              >
                <IconDownload className={'w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'} /> Fersensporn
                Broschüre
              </a> */}
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

const PRODUCT_QUERY = `#graphql
${MEDIA_FRAGMENT}
${PRODUCT_CARD_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
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
      knowledgebases_data : metafield(namespace: "custom_fields", key: "knowledgebases_data") {
        value
      }
      documents : metafield(namespace: "custom_fields", key: "documents") {
        value
      }
    }
    ratgeber_seite_fersensporn_mobile : metaobject(id :"gid://shopify/Metaobject/2229502273") {
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
`;

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
