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
    <section className="product-brand-section pt-[40px] md:pt-[50px]">
      <div className="product-brand-inner">
        <div className="product-brand-lists flex flex-col">
          <div className="product-brand-list pb-[70px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[10px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
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
                  {data?.brand_1_image_slider?.references?.edges?.map(
                    (item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative block overflow-hidden pb-[100%] md:pb-[100%] w-full">
                            <div className="img-wrap w-full h-full absolute inset-0">
                              <Image
                                data={item.node.image}
                                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
                <div
                  id="product-brand-pagination-div1"
                  className="product-brand-pagination-div text-center mt-[10px]"
                ></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_1_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_1_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_1_sub_button_redirect?.value}
                        target="_blank"
                        className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_1_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[70px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[10px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
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
                  {data?.brand_2_image_slider?.references?.edges?.map(
                    (item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative block overflow-hidden pb-[100%] md:pb-[100%] w-full">
                            <div className="img-wrap w-full h-full absolute inset-0">
                              <Image
                                data={item.node.image}
                                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
                <div
                  id="product-brand-pagination-div2"
                  className="product-brand-pagination-div text-center mt-[10px]"
                ></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_2_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_2_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_2_sub_button_redirect?.value}
                        target="_blank"
                        className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_2_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[70px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[10px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
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
                  {data?.brand_3_image_slider?.references?.edges?.map(
                    (item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative block overflow-hidden pb-[100%] md:pb-[100%] w-full">
                            <div className="img-wrap w-full h-full absolute inset-0">
                              <Image
                                data={item.node.image}
                                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
                <div
                  id="product-brand-pagination-div3"
                  className="product-brand-pagination-div text-center mt-[10px]"
                ></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_3_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_3_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_3_sub_button_redirect?.value}
                        target="_blank"
                        className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_3_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[70px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[10px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
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
                  {data?.brand_5_image_slider?.references?.edges?.map(
                    (item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative block overflow-hidden pb-[100%] md:pb-[100%] w-full">
                            <div className="img-wrap w-full h-full absolute inset-0">
                              <Image
                                data={item.node.image}
                                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
                <div
                  id="product-brand-pagination-div5"
                  className="product-brand-pagination-div text-center mt-[10px]"
                ></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_5_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_5_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_5_sub_button_redirect?.value}
                        target="_blank"
                        className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_5_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-brand-list pb-[70px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[10px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
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
                   {data?.brand_4_image_slider?.references?.edges?.map(
                    (item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative block overflow-hidden pb-[100%] md:pb-[100%] w-full">
                            <div className="img-wrap w-full h-full absolute inset-0">
                              <Image
                                data={item.node.image}
                                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
                <div
                  id="product-brand-pagination-div4"
                  className="product-brand-pagination-div text-center mt-[10px]"
                ></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_4_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_4_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_4_sub_button_redirect?.value}
                        target="_blank"
                        className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                      >
                        {data?.brand_4_sub_button_text?.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-brand-list pb-[70px] md:pb-[100px] lg:pb-[140px] container">
            <div className="product-brand-list-inner relative flex flex-col lg:flex-row gap-y-[10px]  gap-x-[50px] 2xl:gap-x-[80px] items-center">
              <div className="img-with-text relative w-full lg:w-[50%]">
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
                  {data?.brand_6_image_slider?.references?.edges?.map(
                    (item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative block overflow-hidden pb-[100%] md:pb-[65%] w-full">
                            <div className="img-wrap w-full h-full absolute inset-0">
                              <Image
                                data={item.node.image}
                                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
                <div
                  id="product-brand-pagination-div6"
                  className="product-brand-pagination-div text-center mt-[10px]"
                ></div>
              </div>
              <div className="brand-info relative w-full lg:w-[50%]">
                <div className="brand-info-inner bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_6_sub_text?.value}
                    </h4>
                    <div
                      className="desc text-black text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] mt-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(data?.brand_6_sub_desc?.value),
                      }}
                    ></div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        to={data?.brand_6_sub_button_redirect?.value}
                        className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
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
