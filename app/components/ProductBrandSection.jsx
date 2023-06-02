import React from 'react'
import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';
import { toHTML } from '~/lib/utils';

export function ProductBrandSection({data}) {

  return (
    <section className="product-brand-section py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
    <div className="product-brand-inner">
      <div className="product-brand-lists flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] xl:gap-y-[100px]">
        <div className="product-brand-list lg:pb-[140px]">
          <div className="product-brand-list-inner relative">
            <div className="img-with-text relative">
              <Link to={`${data?.brand_1_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              >
                <div className="img-wrap w-full h-full absolute inset-0">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={data?.brand_1_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
                <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                  <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span dangerouslySetInnerHTML={{
                        __html: data?.brand_1_text?.value,
                      }}>
                      </span>
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                      }
                    />
                  </h2>
                </div>
              </Link>
            </div>
            <div className="brand-info relative lg:ml-auto mt-auto lg:absolute right-0 lg:bottom-[-140px] z-[1] w-full lg:w-[60%]">
              <div className="container">
                <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_1_sub_text?.value}
                    </h4>
                    <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(data?.brand_1_sub_desc?.value),
                        }}
                    >
                    </div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        href="#"
                        to={data?.brand_1_sub_button_redirect?.value}
                        className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                      >
                        { data?.brand_1_sub_button_text?.value }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-brand-list lg:pb-[140px]">
          <div className="product-brand-list-inner relative">
            <div className="img-with-text relative">
              <Link to={`${data?.brand_2_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              >
                <div className="img-wrap w-full h-full absolute inset-0">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={data?.brand_2_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
                <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                  <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span dangerouslySetInnerHTML={{
                        __html: data?.brand_2_text?.value,
                      }}>
                      </span>
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                      }
                    />
                  </h2>
                </div>
              </Link>
            </div>
            <div className="brand-info relative lg:ml-auto mt-auto lg:absolute right-0 lg:bottom-[-140px] z-[1] w-full lg:w-[60%]">
              <div className="container">
                <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_2_sub_text?.value}
                    </h4>
                    <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(data?.brand_2_sub_desc?.value),
                        }}
                    >
                    </div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        href="#"
                        to={data?.brand_2_sub_button_redirect?.value}
                        className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                      >
                        { data?.brand_2_sub_button_text?.value }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-brand-list lg:pb-[140px]">
          <div className="product-brand-list-inner relative">
            <div className="img-with-text relative">
              <Link to={`${data?.brand_3_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              >
                <div className="img-wrap w-full h-full absolute inset-0">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={data?.brand_3_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
                <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                  <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span dangerouslySetInnerHTML={{
                        __html: data?.brand_3_text?.value,
                      }}>
                      </span>
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                      }
                    />
                  </h2>
                </div>
              </Link>
            </div>
            <div className="brand-info relative lg:ml-auto mt-auto lg:absolute right-0 lg:bottom-[-140px] z-[1] w-full lg:w-[60%]">
              <div className="container">
                <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_3_sub_text?.value}
                    </h4>
                    <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(data?.brand_3_sub_desc?.value),
                        }}
                    >
                    </div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        href="#"
                        to={data?.brand_3_sub_button_redirect?.value}
                        className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                      >
                        { data?.brand_3_sub_button_text?.value }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-brand-list lg:pb-[140px]">
          <div className="product-brand-list-inner relative">
            <div className="img-with-text relative">
              <Link to={`${data?.brand_5_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              >
                <div className="img-wrap w-full h-full absolute inset-0">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={data?.brand_5_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
                <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                  <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span dangerouslySetInnerHTML={{
                        __html: data?.brand_5_text?.value,
                      }}>
                      </span>
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                      }
                    />
                  </h2>
                </div>
              </Link>
            </div>
            <div className="brand-info relative lg:ml-auto mt-auto lg:absolute right-0 lg:bottom-[-140px] z-[1] w-full lg:w-[60%]">
              <div className="container">
                <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_5_sub_text?.value}
                    </h4>
                    <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(data?.brand_5_sub_desc?.value),
                        }}
                    >
                    </div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        href="#"
                        to={data?.brand_5_sub_button_redirect?.value}
                        className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                      >
                        { data?.brand_5_sub_button_text?.value }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-brand-list lg:pb-[140px]">
          <div className="product-brand-list-inner relative">
            <div className="img-with-text relative">
              <Link to={`${data?.brand_4_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              >
                <div className="img-wrap w-full h-full absolute inset-0">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={data?.brand_4_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
                <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                  <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span dangerouslySetInnerHTML={{
                        __html: data?.brand_4_text?.value,
                      }}>
                      </span>
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                      }
                    />
                  </h2>
                </div>
              </Link>
            </div>
            <div className="brand-info relative lg:ml-auto mt-auto lg:absolute right-0 lg:bottom-[-140px] z-[1] w-full lg:w-[60%]">
              <div className="container">
                <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_4_sub_text?.value}
                    </h4>
                    <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(data?.brand_4_sub_desc?.value),
                        }}
                    >
                    </div>
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        href="#"
                        to={data?.brand_4_sub_button_redirect?.value}
                        className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                      >
                        { data?.brand_4_sub_button_text?.value }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-brand-list lg:pb-[140px]">
          <div className="product-brand-list-inner relative">
            <div className="img-with-text relative">
              <Link to={`${data?.brand_6_redirect?.value}`}
                className="relative block w-full overflow-hidden pb-[42%] min-h-[250px]"
              >
                <div className="img-wrap w-full h-full absolute inset-0">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={data?.brand_6_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
                <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                <div className="title-col container absolute bottom-0 left-0 w-full py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px]">
                  <h2 className="whitespace-pre-wrap flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white btn gap-[20px] leading-none">
                      <span dangerouslySetInnerHTML={{
                        __html: data?.brand_6_text?.value,
                      }}>
                      </span>
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[74px] lg:h-[74px] border rounded-full p-[5px] sm:p-2 lg:p-[12px] text-white border-white transition-all'
                      }
                    />
                  </h2>
                </div>
              </Link>
            </div>
            <div className="brand-info relative lg:ml-auto mt-auto lg:absolute right-0 lg:bottom-[-140px] z-[1] w-full lg:w-[60%]">
              <div className="container">
                <div className="brand-info-inner p-[20px] lg:p-[40px] 2xl:px-[60px] 2xl:py-[50px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] bg-white lg:rounded-[10px] w-full">
                  <div className="max-w-[795px]">
                    <h4 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px]">
                      {data?.brand_6_sub_text?.value}
                    </h4>
                    {/* <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mt-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(data?.brand_6_sub_desc?.value),
                        }}
                    >
                    </div> */}
                    <div className="btn-wrap flex mt-[19px]">
                      <Link
                        href="#"
                        to={data?.brand_6_sub_button_redirect?.value}
                        className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                      >
                        { data?.brand_6_sub_button_text?.value }
                      </Link>
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
  )
}
