import React from 'react'
import { toHTML } from '~/lib/utils';
import { Link  } from '~/components';

export function ProductMiscUpdate({data}) {
  return (
    <>
        <div className="about-sec container">
      <h1 className='text-[#00795C] text-[20px] mb-6'>{data?.head_title?.value}</h1>
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px]">
          
          <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <img
              className="h-full object-cover  rounded-xl block"
              src={data.main_section_image.reference.image.url}
              alt=""
            />
          </div>
          <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[35px] text-[#00795C] leading-[1.2] tracking-[-2.07729px] mb-[15px]">
              {data.sub_section_1_title.value}
            </h2>
            <h3 className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
              dangerouslySetInnerHTML={{
                __html: toHTML(data?.main_section_text?.value),
              }}
            >
            </h3>
            <div className="flex">
              <Link to="" className="inline-block rounded-[100px] bg-black text-white
                  text-center px-[59px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-[224px]">
                  Übersicht
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-sec container">
      <h1 className='text-[#00795C] text-[20px] mb-6'>{data?.sub_title?.value}</h1>
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px]">
          
          <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <img
              className="h-full object-cover  rounded-xl block"
              src={data.sub_section_1_image.reference.image.url}
              alt=""
            />
          </div>
          <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[35px] text-[#00795C] leading-[1.2] tracking-[-2.07729px] mb-[15px]">
              {data.sub_section_1_title.value}
            </h2>
            <h3 className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
               dangerouslySetInnerHTML={{
                 __html: toHTML(data?.sub_section_1_text?.value),
               }}
            >
            </h3>
          </div>
          
          <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <img
              className="h-full object-cover  rounded-xl block"
              src={data.sub_section_2_image.reference.image.url}
              alt=""
            />
          </div>
          <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[35px] text-[#00795C] leading-[1.2] tracking-[-2.07729px] mb-[15px]">
              {data.sub_section_2_title.value}
            </h2>
            <h3 className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
              dangerouslySetInnerHTML={{
                 __html: toHTML(data?.sub_section_2_text?.value),
               }}
            >
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
