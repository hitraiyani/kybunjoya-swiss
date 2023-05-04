import React from 'react';
import {toHTML} from '~/lib/utils';
import {Link} from '~/components';

export function ProductMiscUpdate({data}) {
  return (
    <>
      <div className="about-sec container mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]">
        <h1 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
          {data?.head_title?.value}
        </h1>
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[49px]">
          <div className="img-col w-full lg:w-[40%] overflow-hidden">
            <img
              className="h-full object-cover  rounded-xl block"
              src={data.main_section_image.reference.image.url}
              alt=""
            />
          </div>
          <div className="content-col w-full lg:w-[60%] flex flex-col">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] text-black font-medium leading-[1.2] mb-[20px]">
              {data.sub_section_1_title.value}
            </h2>
            <div
              className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[30px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(data?.main_section_text?.value),
              }}
            ></div>
            <div className="flex">
              <Link
                to=""
                className="md:px-[35px] px-[30px] md:py-[22px] py-[20px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
              >
                Übersicht
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-sec container mt-[30px] lg:mt-[60px] mb-[50px] md:mb-[80px] lg:mb-[100px] xl:mb-[170px]">
        <h1 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
          {data?.sub_title?.value}
        </h1>
        <div className="flex flex-col xl:flex-row gap-[50px] items-start">
          <div className="item flex flex-col sm:flex-row gap-[20px] w-full xl:w-[50%] items-start">
            <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
              <img
                className="h-full object-cover  rounded-xl block aspect-[2.5/2]"
                src={data.sub_section_1_image.reference.image.url}
                alt=""
              />
            </div>
            <div className="content-col flex-1 flex flex-col justify-center">
              <h2 className="text-[20px] md:text-[21px] text-[#000000] leading-[1.2] tracking-[-0.40] mb-[15px] font-normal">
                {data.sub_section_1_title.value}
              </h2>
              <div
                className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(data?.sub_section_1_text?.value),
                }}
              ></div>
            </div>
          </div>
          <div className="item flex flex-col sm:flex-row gap-[20px] w-full xl:w-[50%] items-start">
            <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
              <img
                className="h-full object-cover  rounded-xl block aspect-[2.5/2]"
                src={data.sub_section_2_image.reference.image.url}
                alt=""
              />
            </div>
            <div className="content-col flex-1 flex flex-col justify-center">
              <h2 className="text-[20px] md:text-[21px] text-[#000000] leading-[1.2] tracking-[-0.40] mb-[15px] font-normal">
                {data.sub_section_2_title.value}
              </h2>
              <div
                className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(data?.sub_section_2_text?.value),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
