import React from 'react'
import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';
import { toHTML } from '~/lib/utils';

export function ProductBrandSection({data}) {

  return (
    <Section className={'collectionsGrid-sec'}>
      <div className="container">
        <h1 className='text-[#00795C] text-[20px] mb-6'>{data?.main_title?.value}</h1>
        <div className="md:grid md:grid-rows-2 xl:grid-rows-2 md:grid-flow-col gap-7 flex flex-col">
          <div className="collectionsGrid-item relative">
            <Link to={`${data?.brand_1_redirect?.value}`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.brand_1_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
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
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
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
             to={`${data?.brand_2_redirect?.value}`}
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
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
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
              to={`${data?.brand_5_redirect?.value}`}
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
                <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white leading-none p-5 btn w-2/4 gap-5">
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
        </div>
      </div>
    </Section>
  )
}
