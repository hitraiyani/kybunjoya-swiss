import {Image} from '@shopify/hydrogen';
import {Heading, Section, Link, ArrowRightLight} from '~/components';

export function GruppeSection({gruppeMenu}) {

  const quickLinkMenu = gruppeMenu?.items?.slice(0, 6);
  return (
    <Section className={'collectionsGrid-sec pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]'}>
      <div className="container">
      <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
           Gruppe
        </h2>
        <div className='quick-links-sec bg-[#EDEDED] mt-[28px]'>
        <div className="collectionsGrid-item flex flex-wrap">
            <Link to={gruppeMenu?.to} className="relative block overflow-hidden w-full lg:w-3/5">
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
                <span>Gruppe</span>
                <ArrowRightLight
                  className={
                    'w-12 h-12 border rounded-full p-2 text-white border-white transition-all'
                  }
                />
              </Heading>
            </Link>
            <div className='quick-link-wrap px-[20px] py-[30px] lg:px-[49px] lg:py-[30px] w-full lg:w-2/5'>
              <h2 className='title text-[#595959] text-[25px] mb-5 md:mb-[40px] xl:mb-[83px] font-medium'>Quick Links</h2>
              <div className='quick-link-list'>
                <ul>
                  {quickLinkMenu.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to={`${item.to}`} className='text-[24px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>{item.title}</Link>
                        </li>
                      )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
