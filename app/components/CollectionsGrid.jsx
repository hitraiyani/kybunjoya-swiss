import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';

export function CollectionsGrid({collections, title = '', ...props}) {
  return (
    <Section {...props} heading={title} className={'collectionsGrid-sec'}>
      <div className="container">
        <h1 className='text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] mb-6'>Themenwelten</h1>
        <div className="md:grid md:grid-rows-2 xl:grid-rows-2 md:grid-flow-col gap-7 flex flex-col">
          <div className="collectionsGrid-item relative">
            <Link to={`#`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/204_01031-weather_jacket-ss23-stratosphere_pearl-w-4x5-c-g4_png.png?v=1680769903',
                  }}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
                <span>Produkte</span>
                <ArrowRightLight
                  className={
                    'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                  }
                />
              </Heading>
            </Link>
          </div>
          <div className="collectionsGrid-item relative">
            <Link to={`#`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/homepage-shop_card-apparel-ss23-1_jpg.png?v=1680769904',
                  }}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
                <span>Verkaufstellen</span>
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
              to={`#`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/SS22_Ultralight_Mid_Sock_WhiteBlack_MW_Editorial_03_jpg.png?v=1680769903',
                  }}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
                <span>
                  Dr. kybun Joya <br />
                  Ratgeber
                </span>
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
              to={`#`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/SS22_Ultralight_Mid_Sock_WhiteBlack_MW_Editorial_03.jpg_1.png?v=1680769903',
                  }}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <div className="flex absolute bottom-0 left-0 p-5 w-full items-end h-full">
                <div className="content-img relative overflow-hidden w-2/4 h-full">
                  <Image
                    data={{
                      url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Mask_group.png?v=1680773998',
                    }}
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white leading-none p-5 btn w-2/4 gap-5">
                  <span>Vision & Story</span>
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
        <div className='quick-links-sec bg-[#EDEDED] mt-[28px]'>
        <div className="collectionsGrid-item flex flex-wrap">
            <Link to={`#`} className="relative block overflow-hidden w-full lg:w-3/5">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/SS22_Cloudmonster_Mood_Acai_Lavender_2_jpg.png?v=1680769904',
                  }}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
                <span>Produkte</span>
                <ArrowRightLight
                  className={
                    'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                  }
                />
              </Heading>
            </Link>
            <div className='quick-link-wrap px-[20px] py-[30px] lg:px-[49px] lg:py-[30px] w-full lg:w-2/5'>
              <h2 className='title text-[#595959] text-[25px] md:mb-[40px] xl:mb-[83px] font-medium'>Quick Links</h2>
              <div className='quick-link-list'>
                <ul>
                  <li><a href="" className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>Careers</a></li>
                  <li><a href="" className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>Schweizer Schuhproduktion</a></li>
                  <li><a href="" className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>Luftkissen Technologie</a></li>
                  <li><a href="" className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>Sustainability</a></li>
                  <li><a href="" className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>Brands</a></li>
                  <li><a href="" className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>Partner Werden</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
