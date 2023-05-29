import React from 'react'
import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';
import { toHTML } from '~/lib/utils';

export function ProductBrandSection({data}) {

  return (
    <Section className={'collectionsGrid-sec mt-[40px]  mb-[100px] md:mt-[53px] collectionsGrid-sec-box-layout'}>
      <div className="container">
        <h2 className='text-[#000000] text-[24px] lg:text-[30px] mb-[33px] leading-[1.2] max-w-[1000px] font-bold hidden'>{data?.head_title?.value}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[17px]">
          <div className="collectionsGrid-item relative collectionsGrid-item-prodcut">
            <Link to={`${data?.brand_1_redirect?.value}`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.brand_1_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="whitespace-pre-wrap flex flex-col font-normal text-[30px]  xl:text-[40px] text-white absolute bottom-0 left-0 p-5 btn gap-5 ">
                <span dangerouslySetInnerHTML={{
                  __html: data?.brand_1_text?.value,
                }}></span>
                <ArrowRightLight
                  className={
                    'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                  }
                />
              </Heading>
            </Link>
          </div>
         <div className="collectionsGrid-item relative">
            <Link to={`${data?.brand_2_redirect?.value}`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.brand_2_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="whitespace-pre-wrap flex flex-col font-normal text-[30px]  xl:text-[40px] text-white absolute bottom-0 left-0 p-5 btn gap-5 ">
              <span dangerouslySetInnerHTML={{
                  __html: (data?.brand_2_text?.value),
                }}></span>
                <ArrowRightLight
                  className={
                    'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                  }
                />
              </Heading>
            </Link>
          </div>
           <div className="collectionsGrid-item relative">
            <Link
             to={`${data?.brand_3_redirect?.value}`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.brand_3_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="whitespace-pre-wrap flex flex-col font-normal text-[30px]  xl:text-[40px] text-white absolute bottom-0 left-0 p-5 btn gap-5 ">
               <span dangerouslySetInnerHTML={{
                  __html: (data?.brand_3_text?.value),
                }}></span>
                <ArrowRightLight
                  className={
                    'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                  }
                />
              </Heading>
            </Link>
          </div>
          <div className="collectionsGrid-item relative">
            <Link
              to={`${data?.brand_4_redirect?.value}`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.brand_4_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <div className="flex absolute bottom-0 left-0 p-5 w-full items-end h-full">
                <Heading className="whitespace-pre-wrap flex flex-col font-normal text-[30px] xl:text-[40px] text-white btn gap-5">
                <span dangerouslySetInnerHTML={{
                  __html: (data?.brand_4_text?.value),
                }}></span>
                  <ArrowRightLight
                    className={
                      'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                    }
                  />
                </Heading>
              </div>
            </Link>
          </div>
          {/* <div className="collectionsGrid-item relative">
            <Link
              to={`${data?.brand_5_redirect?.value}`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.brand_5_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <div className="flex absolute bottom-0 left-0 p-5 w-full items-end h-full">
                <Heading className="whitespace-pre-wrap flex flex-col font-normal text-[30px] xl:text-[40px] text-white btn w-2/4 gap-5">
                <span dangerouslySetInnerHTML={{
                  __html: (data?.brand_5_text?.value),
                }}></span>
                  <ArrowRightLight
                    className={
                      'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                    }
                  />
                </Heading>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </Section>
  )
}
