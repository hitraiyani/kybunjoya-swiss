import React from 'react';

export function NewsBanner({data}) {
    
  return (
    <section className="heroSlider-sec mt-[21px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
      <div className="container">
        <div className="relative flex w-full image-container min-h-[320px] overflow-hidden">
          <img
            className="object-cover object-center w-full active"
            id="defaultActive"
            src={data?.banner_image?.reference?.image?.url}
          ></img>
          <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
          <div className="absolute slider-content bottom-[15px] md:bottom-[33px] left-0 right-0 w-full px-[15px] md:px-[33px] lg:px-[46px]">
            <h4 className="text-white desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] font-bold leading-[1.2] mb-[10px]">
              {data?.title?.value}
            </h4>
            <h2 className="mb-[15px] text-white title text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold">
              {data?.sub_title?.value}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
