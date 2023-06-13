import React from 'react';
import {Image} from '@shopify/hydrogen';
import {
  Heading,
  Section,
  Grid,
  Link,
  ArrowRightLight,
  ArrowRight,
} from '~/components';
import {toHTML} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

export function ProductBrandSection({data}) {
  return (
    <section className="product-brand-section pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
      <div className="product-brand-inner">
        <div className="product-brand-lists flex flex-col">
          <div className="product-brand-list pb-[60px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[30px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
                {/* <Link to={`${data?.brand_1_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              > */}
                <div className="product-brand--swiper-buttons">
                  <div
                    id="swiper-button-next-product-brand1"
                    className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div
                    id="swiper-button-prev-product-brand1"
                    className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: '#swiper-button-next-product-brand1',
                    nextEl: '#swiper-button-prev-product-brand1',
                  }}
                  pagination={{
                    el: '#product-brand-pagination-div1',
                    clickable: true,
                  }}
                  className=""
                >
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_1_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_1_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_1_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div> */}
                {/* <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                    <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.brand_1_text?.value,
                        }}
                      ></span>
                      <ArrowRightLight
                        className={
                          'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                        }
                      />
                    </h2>
                  </div> */}
                <div id="product-brand-pagination-div1" className="product-brand-pagination-div text-center mt-[10px]"></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_1_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_1_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_1_sub_button_redirect?.value}
                        className="md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-[#00795c] text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_1_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[60px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[30px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
                {/* <Link to={`${data?.brand_2_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              > */}
                <div className="product-brand--swiper-buttons">
                  <div
                    id="swiper-button-next-product-brand2"
                    className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div
                    id="swiper-button-prev-product-brand2"
                    className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: '#swiper-button-next-product-brand2',
                    nextEl: '#swiper-button-prev-product-brand2',
                  }}
                  pagination={{
                    el: '#product-brand-pagination-div2',
                    clickable: true,
                  }}
                  className=""
                >
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_2_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_2_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_2_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div> */}
                {/* <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                    <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.brand_2_text?.value,
                        }}
                      ></span>
                      <ArrowRightLight
                        className={
                          'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                        }
                      />
                    </h2>
                  </div> */}
                <div id="product-brand-pagination-div2" className="product-brand-pagination-div text-center mt-[10px]"></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_2_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_2_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_2_sub_button_redirect?.value}
                        className="md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-[#00795c] text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_2_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>            
          <div className="product-brand-list pb-[60px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[30px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
                {/* <Link to={`${data?.brand_3_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              > */}
                <div className="product-brand--swiper-buttons">
                  <div
                    id="swiper-button-next-product-brand3"
                    className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div
                    id="swiper-button-prev-product-brand3"
                    className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: '#swiper-button-next-product-brand3',
                    nextEl: '#swiper-button-prev-product-brand3',
                  }}
                  pagination={{
                    el: '#product-brand-pagination-div3',
                    clickable: true,
                  }}
                  className=""
                >
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_3_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_3_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_3_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div> */}
                {/* <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                    <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.brand_3_text?.value,
                        }}
                      ></span>
                      <ArrowRightLight
                        className={
                          'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                        }
                      />
                    </h2>
                  </div> */}
                <div id="product-brand-pagination-div3" className="product-brand-pagination-div text-center mt-[10px]"></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_3_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_3_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_3_sub_button_redirect?.value}
                        className="md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-[#00795c] text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_3_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[60px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[30px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
                {/* <Link to={`${data?.brand_5_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              > */}
                <div className="product-brand--swiper-buttons">
                  <div
                    id="swiper-button-next-product-brand5"
                    className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div
                    id="swiper-button-prev-product-brand5"
                    className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: '#swiper-button-next-product-brand5',
                    nextEl: '#swiper-button-prev-product-brand5',
                  }}
                  pagination={{
                    el: '#product-brand-pagination-div5',
                    clickable: true,
                  }}
                  className=""
                >
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_5_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_5_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_5_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div> */}
                {/* <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                    <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.brand_5_text?.value,
                        }}
                      ></span>
                      <ArrowRightLight
                        className={
                          'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                        }
                      />
                    </h2>
                  </div> */}
                <div id="product-brand-pagination-div5" className="product-brand-pagination-div text-center mt-[10px]"></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_5_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_5_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_5_sub_button_redirect?.value}
                        className="md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-[#00795c] text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_5_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[60px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[30px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
                {/* <Link to={`${data?.brand_4_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              > */}
                <div className="product-brand--swiper-buttons">
                  <div
                    id="swiper-button-next-product-brand4"
                    className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div
                    id="swiper-button-prev-product-brand4"
                    className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: '#swiper-button-next-product-brand4',
                    nextEl: '#swiper-button-prev-product-brand4',
                  }}
                  pagination={{
                    el: '#product-brand-pagination-div4',
                    clickable: true,
                  }}
                  className=""
                >
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_4_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_4_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_4_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div> */}
                {/* <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                    <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.brand_4_text?.value,
                        }}
                      ></span>
                      <ArrowRightLight
                        className={
                          'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                        }
                      />
                    </h2>
                  </div> */}
                <div id="product-brand-pagination-div4" className="product-brand-pagination-div text-center mt-[10px]"></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_4_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_4_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_4_sub_button_redirect?.value}
                        className="md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-[#00795c] text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_4_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="product-brand-list pb-[60px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[30px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
                {/* <Link to={`${data?.brand_6_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              > */}
                <div className="product-brand--swiper-buttons">
                  <div
                    id="swiper-button-next-product-brand6"
                    className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:left-[-30px] lg:left-[-23px] left-[-10px] outline rotate-180"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                  <div
                    id="swiper-button-prev-product-brand6"
                    className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-white hover:text-white after:text-[30px] bg-black hover:opacity-70 flex items-center justify-center outline-[8px] xl:outline-[10px] outline-[rgba(21,_21,_21,_0.6)] absolute z-[2] top-[calc(50%_-_20px)] -translate-y-1/2 xl:right-[-30px] lg:right-[-23px] right-[-10px] outline"
                  >
                    <ArrowRight
                      className={
                        'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'
                      }
                    />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: '#swiper-button-next-product-brand6',
                    nextEl: '#swiper-button-prev-product-brand6',
                  }}
                  pagination={{
                    el: '#product-brand-pagination-div6',
                    clickable: true,
                  }}
                  className=""
                >
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_6_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_6_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative block overflow-hidden pb-[100%] md:pb-[72%] w-full">
                      <div className="img-wrap w-full h-full absolute inset-0">
                        <img
                          className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                          src={data?.brand_6_image?.reference?.image?.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div> */}
                {/* <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                    <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data?.brand_6_text?.value,
                        }}
                      ></span>
                      <ArrowRightLight
                        className={
                          'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                        }
                      />
                    </h2>
                  </div> */}
                <div id="product-brand-pagination-div6" className="product-brand-pagination-div text-center mt-[10px]"></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_6_sub_text?.value}
                    </h4> 
                    {/* <div
                      className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_6_sub_desc?.value),
                      }}
                    ></div> */}
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_6_sub_button_redirect?.value}
                        className="md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-[#00795c] text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_6_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
