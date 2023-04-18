import React from 'react';

export default function ratgeber() {
  return (
    <>
      <div className="container mt-[200px]">
        <section className="page-title">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-0.97152px] mb-6">
            Ratgeber
          </h1>
        </section>
        <section className="hero-banner-section ratgeber-banner-section rounded-xl">
          <div className="hero-banner-inner relative">
            <div className='banner-info'>
              <div className='flex flex-wrap items-end px-[72px] py-[57px] justify-between'>
                <div className='title-wrap'>
                  <h2 className='text-white text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] leading-[1.1]'>Therapieren<br/> statt operieren</h2>
                </div>
                <div className='dr-info flex gap-[20px] items-start'>
                  <div className='name w-[280px] text-right'>
                    <h4 className='font-black text-white text-[100px] leading-[1.1]'>Dr. kybun Joya</h4>
                  </div>
                  <div className='dr-img'>
                    <img className='rounded-xl' src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/photo-yzYAazAJs_1.jpg?v=1681808468" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-img w-full h-full absolute inset-0 z-[-1] rounded-xl">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-2/4"></div>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Picture_1_png.jpg?v=1680771114"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
