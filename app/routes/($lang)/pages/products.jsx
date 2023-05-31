import React, {useState} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  ArrowRight,
  ExpandingCard,
  Link,
  ProductBrandSection,
  ProductMiscUpdate,
  Breadcrumb,
  ArrowRightLight,
} from '~/components';
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
      handle: 'products',
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
    page?.product_misc_update?.reference?.slider_images?.references?.edges.map(
      (data) => data.node.image.url,
    );

  let firstSlideImages = [];
  let restSlideImages = [];
  if (sliderImages.length > 0) {
    firstSlideImages = sliderImages.slice(0, 2);
    restSlideImages = sliderImages.slice(2);
  }
  const [slidesPerView, setSlidesPerView] = useState(false);

  const handleTransitionEnd = (swiper) => {
    if (
      swiper.activeIndex === 0 ||
      swiper.slides.length === swiper.activeIndex
    ) {
      setSlidesPerView(false);
    } else {
      setSlidesPerView(true);
    }
  };

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs(null, 'produkte')} />
      <div className="container">
        <div className="title-wrap">
          <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            Produkte
          </h2>
        </div>
        <div className="sub-title">
          <h4
            className="text-[#000000] text-[24px] lg:text-[30px] mb-[33px] leading-[1.2] max-w-[930px] font-bold"
            dangerouslySetInnerHTML={{
              __html: toHTML(
                page?.product_misc_update?.reference?.new_hero_main_title
                  ?.value,
              ),
            }}
          ></h4>
        </div>
        <div
          className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] max-w-[930px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(
              page?.product_misc_update?.reference?.new_hero_main_desc?.value,
            ),
          }}
        ></div>
      </div>
      <div className="container lg:!pr-0 hidden">
        <div className="flex gap-[22px] flex-col lg:flex-row">
          <div className="content-col w-full lg:w-[40%] flex flex-col bg-[#EDEDED] py-[27px] px-[32px]">
            <h2 className="text-[24px] lg:text-[30px] text-[#00795C] leading-[1.2] mb-[10px]">
              {
                page?.product_misc_update?.reference?.hero_section_title_1
                  ?.value
              }
            </h2>
            <div
              className="desc text-black text-[16x] lg:text-[18px] xl:text-[21px]  leading-[1.3] font-[400]"
              dangerouslySetInnerHTML={{
                __html: toHTML(
                  page?.product_misc_update?.reference?.hero_section_desc_1
                    ?.value,
                ),
              }}
            ></div>
            <h2 className="text-[24px] lg:text-[30px] text-[#00795C] leading-[1.2] mb-[10px] mt-[47px]">
              {
                page?.product_misc_update?.reference?.hero_section_title_2
                  ?.value
              }
            </h2>
            <div
              className="desc text-black text-[16x] lg:text-[18px] xl:text-[21px]  leading-[1.3] font-[400] mb-[20px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(
                  page?.product_misc_update?.reference?.hero_section_desc_2
                    ?.value,
                ),
              }}
            ></div>
            <div className="flex mt-auto justify-between items-center flex-wrap gap-[15px]">
              <Link
                to=""
                className="md:px-[35px] px-[30px] md:py-[22px] py-[20px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
              >
                Mehr über Technologie
              </Link>
              {/* <div className="products-swiper-buttons relative flex gap-[10px] xl:gap-[20px]">
                <div
                  className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180"
                ><ArrowRight className={'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'} /></div>
                <div
                  className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center"
                ><ArrowRight className={'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'} /></div>
              </div> */}
            </div>
          </div>
          <div className="img-col w-full lg:w-[60%] overflow-hidden product-slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={1.6}
              spaceBetween={20}
              navigation
              onSlideChange={handleTransitionEnd}
              centeredSlides={slidesPerView}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 1.6,
                  spaceBetween: 20,
                },
              }}
              className="h-full overflow-visible flex flex-col lg:h-[660px]"
            >
              <SwiperSlide>
                <div className="imgs-wrap flex flex-col gap-[20px]">
                  <img
                    className="w-full object-cover h-auto lg:h-[310px]"
                    src={firstSlideImages[0]}
                    alt=""
                  />
                  <div className="img-2 h-full xl:w-[60%] w-full xl:h-[40%] ml-auto block">
                    <img
                      className="object-cover w-full h-full ml-auto block"
                      src={firstSlideImages[1]}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              {restSlideImages.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="imgs-wrap flex flex-col gap-[20px] h-full">
                      <img
                        className="h-full w-full object-cover"
                        src={image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="imgs-wrap grid grid-rows-2 grid-flow-col gap-[20px] lg:h-[700px]">
                    <img
                      className="h-full w-full object-cover col-span-1 xl:col-span-2 aspect-[3/2]"
                      src={image}
                      alt=""
                    />
                    <img
                      className="object-cover col-span-1 xl:col-span-2 w-full xl:w-[80%] h-full xl:h-[80%] ml-auto block aspect-[3/2]"
                      src={image}
                      alt=""
                    />
                    <img
                      className="h-full w-full object-cover row-span-2 aspect-square"
                      src={image}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))} */}
            </Swiper>
          </div>
        </div>
      </div>
      <section className="product-brand-section py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="product-brand-inner">
          <div className="product-brand-lists flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] xl:gap-y-[100px]">
            <div className="product-brand-list">
              <div className="product-brand-list-inner relative">
                <div className="img-with-text relative">
                  <a
                    href="#"
                    className="relative block w-full overflow-hidden pb-[42%]"
                  >
                    <div className="img-wrap w-full h-full absolute inset-0">
                      <img
                        className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/204.01031-weather_jacket-ss23-stratosphere_pearl-w-4x5-c-g4.png_1_5e72f5de-c16e-4e8f-a627-a386b930667f.png?v=1685513712"
                        alt=""
                      />
                    </div>
                    <div className="img-overlay absolute w-full h-full md:h-2/4 inset-x-0 bottom-0"></div>
                    <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                      <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                        <span>kybun Schuhe</span>
                        <ArrowRightLight
                          className={
                            'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                          }
                        />
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="brand-info relative z-[1px] lg:ml-auto mt-auto lg:mt-[-20%] w-full lg:w-[60%]">
                  <div className="container">
                    <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                      <div className="max-w-[795px]">
                        <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                          Kernmarke kybun
                        </h4>
                        <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]">
                          <ul>
                            <li>Trainiert die Muskulatur bei jedem Schritt</li>
                            <li>Verbessert die Durchblutung</li>
                            <li>
                              Ermöglicht schmerzfreies Stehen und Gehen – auch
                              im Alter
                            </li>
                          </ul>
                          <p>
                            Für die häufigsten Fuss-, Knie-, Hüft- und
                            Rückenprobleme ist kybun der Schweizer
                            Luftkissen-Schuh die optimale Lösung gegen Schmerzen
                            am Bewegungsapparat. Der medizinisch erprobte und in
                            der Schweiz hergestellte Luftkissen-Schuh ermöglicht
                            bereits Millionen von Menschen weltweit ein
                            schmerzfreies und gesundes Leben.
                          </p>
                        </div>
                        <div className="btn-wrap flex mt-[19px]">
                          <a
                            href="#"
                            className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                          >
                            kybun entdecken
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-brand-list">
              <div className="product-brand-list-inner relative">
                <div className="img-with-text relative">
                  <a
                    href="#"
                    className="relative block w-full overflow-hidden pb-[42%]"
                  >
                    <div className="img-wrap w-full h-full absolute inset-0">
                      <img
                        className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/204.01031-weather_jacket-ss23-stratosphere_pearl-w-4x5-c-g4.png_1_5e72f5de-c16e-4e8f-a627-a386b930667f.png?v=1685513712"
                        alt=""
                      />
                    </div>
                    <div className="img-overlay absolute w-full h-full md:h-2/4 inset-x-0 bottom-0"></div>
                    <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                      <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                        <span>kybun Schuhe</span>
                        <ArrowRightLight
                          className={
                            'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                          }
                        />
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="brand-info relative z-[1px] lg:ml-auto mt-auto lg:mt-[-20%] w-full lg:w-[60%]">
                  <div className="container">
                    <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                      <div className="max-w-[795px]">
                        <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                          Kernmarke kybun
                        </h4>
                        <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]">
                          <ul>
                            <li>Trainiert die Muskulatur bei jedem Schritt</li>
                            <li>Verbessert die Durchblutung</li>
                            <li>
                              Ermöglicht schmerzfreies Stehen und Gehen – auch
                              im Alter
                            </li>
                          </ul>
                          <p>
                            Für die häufigsten Fuss-, Knie-, Hüft- und
                            Rückenprobleme ist kybun der Schweizer
                            Luftkissen-Schuh die optimale Lösung gegen Schmerzen
                            am Bewegungsapparat. Der medizinisch erprobte und in
                            der Schweiz hergestellte Luftkissen-Schuh ermöglicht
                            bereits Millionen von Menschen weltweit ein
                            schmerzfreies und gesundes Leben.
                          </p>
                        </div>
                        <div className="btn-wrap flex mt-[19px]">
                          <a
                            href="#"
                            className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                          >
                            kybun entdecken
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-brand-list">
              <div className="product-brand-list-inner relative">
                <div className="img-with-text relative">
                  <a
                    href="#"
                    className="relative block w-full overflow-hidden pb-[42%]"
                  >
                    <div className="img-wrap w-full h-full absolute inset-0">
                      <img
                        className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/204.01031-weather_jacket-ss23-stratosphere_pearl-w-4x5-c-g4.png_1_5e72f5de-c16e-4e8f-a627-a386b930667f.png?v=1685513712"
                        alt=""
                      />
                    </div>
                    <div className="img-overlay absolute w-full h-full md:h-2/4 inset-x-0 bottom-0"></div>
                    <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                      <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                        <span>kybun Schuhe</span>
                        <ArrowRightLight
                          className={
                            'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                          }
                        />
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="brand-info relative z-[1px] lg:ml-auto mt-auto lg:mt-[-20%] w-full lg:w-[60%]">
                  <div className="container">
                    <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                      <div className="max-w-[795px]">
                        <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                          Kernmarke kybun
                        </h4>
                        <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]">
                          <ul>
                            <li>Trainiert die Muskulatur bei jedem Schritt</li>
                            <li>Verbessert die Durchblutung</li>
                            <li>
                              Ermöglicht schmerzfreies Stehen und Gehen – auch
                              im Alter
                            </li>
                          </ul>
                          <p>
                            Für die häufigsten Fuss-, Knie-, Hüft- und
                            Rückenprobleme ist kybun der Schweizer
                            Luftkissen-Schuh die optimale Lösung gegen Schmerzen
                            am Bewegungsapparat. Der medizinisch erprobte und in
                            der Schweiz hergestellte Luftkissen-Schuh ermöglicht
                            bereits Millionen von Menschen weltweit ein
                            schmerzfreies und gesundes Leben.
                          </p>
                        </div>
                        <div className="btn-wrap flex mt-[19px]">
                          <a
                            href="#"
                            className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                          >
                            kybun entdecken
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-brand-list">
              <div className="product-brand-list-inner relative">
                <div className="img-with-text relative">
                  <a
                    href="#"
                    className="relative block w-full overflow-hidden pb-[42%]"
                  >
                    <div className="img-wrap w-full h-full absolute inset-0">
                      <img
                        className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/204.01031-weather_jacket-ss23-stratosphere_pearl-w-4x5-c-g4.png_1_5e72f5de-c16e-4e8f-a627-a386b930667f.png?v=1685513712"
                        alt=""
                      />
                    </div>
                    <div className="img-overlay absolute w-full h-full md:h-2/4 inset-x-0 bottom-0"></div>
                    <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                      <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                        <span>kybun Schuhe</span>
                        <ArrowRightLight
                          className={
                            'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                          }
                        />
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="brand-info relative z-[1px] lg:ml-auto mt-auto lg:mt-[-20%] w-full lg:w-[60%]">
                  <div className="container">
                    <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                      <div className="max-w-[795px]">
                        <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                          Kernmarke kybun
                        </h4>
                        <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]">
                          <ul>
                            <li>Trainiert die Muskulatur bei jedem Schritt</li>
                            <li>Verbessert die Durchblutung</li>
                            <li>
                              Ermöglicht schmerzfreies Stehen und Gehen – auch
                              im Alter
                            </li>
                          </ul>
                          <p>
                            Für die häufigsten Fuss-, Knie-, Hüft- und
                            Rückenprobleme ist kybun der Schweizer
                            Luftkissen-Schuh die optimale Lösung gegen Schmerzen
                            am Bewegungsapparat. Der medizinisch erprobte und in
                            der Schweiz hergestellte Luftkissen-Schuh ermöglicht
                            bereits Millionen von Menschen weltweit ein
                            schmerzfreies und gesundes Leben.
                          </p>
                        </div>
                        <div className="btn-wrap flex mt-[19px]">
                          <a
                            href="#"
                            className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                          >
                            kybun entdecken
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ProductBrandSection data={page?.products_brand_section?.reference} /> */}
      {/* <ProductMiscUpdate data={page?.product_misc_update?.reference} /> */}
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
      product_misc_update : metafield(namespace: "custom", key: "product_misc_update") {
        reference {
          ... on Metaobject {
            handle
            hero_section_title_1 : field(key: "hero_section_title_1") {
              value
            }
            hero_section_title_2 : field(key: "hero_section_title_2") {
              value
            }
            hero_section_desc_1 : field(key: "hero_section_desc_1") {
              value
            }
            hero_section_desc_2 : field(key: "hero_section_desc_2") {
              value
            }
            slider_images : field(key: "slider_images") {
              references(first: 10) {
                  edges {
                      node {
                      ...Media
                      }
                  }
              }
            }
            head_title : field(key: "head_title") {
              value
            }
            main_section_heading : field(key: "main_section_heading") {
              value
            }
            main_section_text : field(key: "main_section_text") {
              value
            }
            main_section_redirect : field(key: "main_section_redirect") {
              value
            }
            sub_title : field(key: "sub_title") {
              value
            }
            main_section_image : field(key: "main_section_image") {
              reference {
                ...Media
              }
            }
            sub_title : field(key: "sub_title") {
              value
            }
            sub_section_1_title : field(key: "sub_section_1_title") {
              value
            }
            sub_section_1_text : field(key: "sub_section_1_text") {
              value
            }
            sub_section_1_image : field(key: "sub_section_1_image") {
              reference {
                ...Media
              }
            }
            sub_section_1_redirect : field(key: "sub_section_1_redirect") {
              value
            }
            sub_section_2_title : field(key: "sub_section_2_title") {
              value
            }
            sub_section_2_text : field(key: "sub_section_2_text") {
              value
            }
            sub_section_2_image : field(key: "sub_section_2_image") {
              reference {
                ...Media
              }
            }
            sub_section_2_redirect : field(key: "sub_section_2_redirect") {
              value
            }
            new_hero_main_title : field(key: "new_hero_main_title") {
              value
            }
            new_hero_main_desc : field(key: "new_hero_main_desc") {
              value
            }

          }
        }
      }
      products_brand_section: metafield(namespace: "custom", key: "products_brand_section") {
      	reference {
          ... on Metaobject {
            handle
            head_title : field(key: "main_title") {
              value
            }
            brand_1_text : field(key: "brand_1_text") {
              value
            }
            brand_1_image : field(key: "brand_1_image") {
              reference {
                ...Media
              }
            }
            brand_1_redirect : field(key: "brand_1_redirect") {
              value
            }
            brand_2_text : field(key: "brand_2_text") {
              value
            }
            brand_2_image : field(key: "brand_2_image") {
              reference {
                ...Media
              }
            }
            brand_2_redirect : field(key: "brand_2_redirect") {
              value
            }
            brand_3_text : field(key: "brand_3_text") {
              value
            }
            brand_3_image : field(key: "brand_3_image") {
              reference {
                ...Media
              }
            }
            brand_3_redirect : field(key: "brand_3_redirect") {
              value
            }
            brand_4_text : field(key: "brand_4_text") {
              value
            }
            brand_4_image : field(key: "brand_4_image") {
              reference {
                ...Media
              }
            }
            brand_4_redirect : field(key: "brand_4_redirect") {
              value
            }
            brand_5_text : field(key: "brand_5_text") {
              value
            }
            brand_5_image : field(key: "brand_5_image") {
              reference {
                ...Media
              }
            }
            brand_5_redirect : field(key: "brand_5_redirect") {
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
