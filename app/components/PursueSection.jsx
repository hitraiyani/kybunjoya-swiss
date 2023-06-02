import React from 'react'
import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';
import { toHTML } from '~/lib/utils';

export function PursueSection({data}) {
  
  return (
    <Section className={'collectionsGrid-sec collectionsGrid-sec-box-layout collectionsGrid-sec-box-layout2 pb-[40px] md:pb-[60px]'}>
    <div className="container">
      <h2 className='text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold'>{data?.main_title?.value}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[17px]">
        <div className="collectionsGrid-item relative">
          <Link to={`${data?.section_1_button_text?.value}`} className="relative block w-full overflow-hidden">
            <div className="img-wrap w-full h-full absolute inset-0">
              <Image
                data={data?.section_1_image?.reference.image}
                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-top"
                alt=""
              />
            </div>
            <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
            <Heading className="flex flex-col font-normal text-[18px] sm:text-[26px] text-white absolute bottom-0 left-0 p-[15px] sm:p-5 btn gap-[10px] w-full">
              <span dangerouslySetInnerHTML={{
                __html: toHTML(data?.section_1_text?.value),
              }}></span>
              <ArrowRightLight
                className={
                  'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] border rounded-full p-[5px] sm:p-2 text-white border-white transition-all'
                }
              />
            </Heading>
          </Link>
        </div>
        <div className="collectionsGrid-item relative">
          <Link to={`${data?.section_2_button_text?.value}`} className="relative block w-full overflow-hidden">
            <div className="img-wrap w-full h-full absolute inset-0">
              <Image
                data={data?.section_2_image?.reference.image}
                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-right sm:object-top"
                alt=""
              />
            </div>
            <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
            <Heading className="flex flex-col font-normal text-[18px] sm:text-[26px] text-white absolute bottom-0 left-0 p-[15px] sm:p-5 btn gap-[10px] w-full">
            <span dangerouslySetInnerHTML={{
                __html: toHTML(data?.section_2_text?.value),
              }}></span>
              <ArrowRightLight
                className={
                  'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] border rounded-full p-[5px] sm:p-2 text-white border-white transition-all'
                }
              />
            </Heading>
          </Link>
        </div>
        <div className="collectionsGrid-item relative">
          <Link
           to={`${data?.section_3_button_text?.value}`}
            className="relative block w-full h-full overflow-hidden"
          >
            <div className="img-wrap w-full h-full absolute inset-0">
              <Image
                data={data?.section_3_image?.reference.image}
                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-right sm:object-top"
                alt=""
              />
            </div>
            <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
            <Heading className="flex flex-col font-normal text-[18px] sm:text-[26px] text-white absolute bottom-0 left-0 p-[15px] sm:p-5 btn gap-[10px] w-full">
             <span dangerouslySetInnerHTML={{
                __html: toHTML(data?.section_3_text?.value),
              }}></span>
              <ArrowRightLight
                className={
                  'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] border rounded-full p-[5px] sm:p-2 text-white border-white transition-all'
                }
              />
            </Heading>
          </Link>
        </div>
        <div className="collectionsGrid-item relative">
          <Link
           to={`${data?.section_4_button_text?.value}`}
            className="relative block w-full h-full overflow-hidden"
          >
            <div className="img-wrap w-full h-full absolute inset-0">
              <Image
                data={data?.section_4_image?.reference.image}
                className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-right sm:object-top"
                alt=""
              />
            </div>
            <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
            <Heading className="flex flex-col font-normal text-[18px] sm:text-[26px] text-white absolute bottom-0 left-0 p-[15px] sm:p-5 btn gap-[10px] w-full">
             <span dangerouslySetInnerHTML={{
                __html: toHTML(data?.section_4_text?.value),
              }}></span>
              <ArrowRightLight
                className={
                  'w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] border rounded-full p-[5px] sm:p-2 text-white border-white transition-all'
                }
              />
            </Heading>
          </Link>
        </div>
      </div>
    </div>
  </Section>
  )
}
