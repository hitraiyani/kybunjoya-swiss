import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';
import { toHTML } from '~/lib/utils';

export function CollectionsGrid({data, gruppeMenu}) {

  const quickLinkMenu = gruppeMenu?.items?.slice(0, 6);
  return (
    <Section className={'collectionsGrid-sec'}>
      <div className="container">
        <h1 className='text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] mb-6'>{data?.main_title?.value}</h1>
        <div className="md:grid md:grid-rows-2 xl:grid-rows-2 md:grid-flow-col gap-7 flex flex-col">
          <div className="collectionsGrid-item relative">
            <Link to={`${data?.section_1_button_redirect?.value}`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.section_1_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
                <span dangerouslySetInnerHTML={{
                  __html: toHTML(data?.section_1_text?.value),
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
            <Link to={`${data?.section_2_button_redirect?.value}`} className="relative block w-full overflow-hidden">
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.section_2_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
              <span dangerouslySetInnerHTML={{
                  __html: toHTML(data?.section_2_text?.value),
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
             to={`${data?.section_3_button_redirect?.value}`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.section_3_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white absolute bottom-0 left-0 p-5 btn gap-5 leading-none">
               <span dangerouslySetInnerHTML={{
                  __html: toHTML(data?.section_3_text?.value),
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
              to={`${data?.section_4_button_redirect?.value}`}
              className="relative block w-full h-full overflow-hidden"
            >
              <div className="img-wrap w-full h-full absolute inset-0">
                <Image
                  data={data?.section_4_image?.reference.image}
                  className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
              <div className="flex absolute bottom-0 left-0 p-5 w-full items-end h-full">
                <div className="content-img relative overflow-hidden w-2/4 h-full">
                  <Image
                    data={data?.section_4_mask_image?.reference.image}
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <Heading className="flex flex-col font-normal text-[30px] lg:text-[34px] xl:text-[45px] text-white leading-none p-5 btn w-2/4 gap-5">
                <span dangerouslySetInnerHTML={{
                  __html: toHTML(data?.section_4_text?.value),
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
                          <Link to={`${item.to}`} className='text-[30px] md:text-[30px] lg:text-[34px] xl:text-[50px] text-black hover:text[#00795C] block tracking-[-0.97152px] leading-none mb-5'>{item.title}</Link>
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
