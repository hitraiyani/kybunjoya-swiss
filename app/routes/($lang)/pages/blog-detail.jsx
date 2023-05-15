import React from 'react';
import {Breadcrumb, ArrowRight2} from '~/components';

export default function blogDetails() {
  return (
    <>
      <div className="Breadcrumb-sec mb-[20px] lg:mb-[25px]">
        <div className="container">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-y-[10px] gap-x-[8px] md:gap-x-[16px] flex-wrap">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight2
                    className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                  />
                  <a
                    href="#"
                    className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                  >
                    Blog
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight2
                    className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                  />
                  <a
                    href="#"
                    className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                  >
                    Blog Article
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="hero-banner-section kontakt-banner-section  overflow-hidden">
        <div className="container">
          <div className="hero-banner-inner relative  pt-[35.3%] min-h-[350px]">
            <div className="bg-img w-full h-full absolute inset-0 z-[-1]  overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
              <img
                className="w-full h-full object-cover "
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Mask_group_1.jpg?v=1684130159"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
