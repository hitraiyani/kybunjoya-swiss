import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import { toHTML} from '~/lib/utils';
import {Link, ArrowRightLight} from '~/components';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
});

export const handle = {
  seo,
};

export async function loader({request, params, context}) {
  
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'ratgeber',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  return json(
    {page},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function ratgeber() {
  const {page} = useLoaderData();

  console.log("page", (page.ratgeber.reference));


  return (
    <>
      <div className="container mt-[200px]">
        <section className="page-title">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-0.97152px] mb-6">
            {page?.title}
          </h1>
        </section>
        <section className="hero-banner-section ratgeber-banner-section rounded-xl overflow-hidden">
          <div className="hero-banner-inner relative">
            <div className='banner-info'>
              <div className='flex flex-wrap items-end px-[72px] py-[57px] justify-between'>
                <div className='title-wrap'>
                  <h2 className='text-white text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] leading-[1.1]'
                  dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber?.reference?.hero_banner_title?.value),
                  }}
                  ></h2>
                </div>
                <div className='dr-info flex gap-[20px] items-start'>
                  <div className='name w-[280px] text-right'>
                    <h4 className='font-black text-white text-[100px] leading-[1.1]'>{page?.ratgeber?.reference?.hero_inner_banner_title?.value}</h4>
                  </div>
                  <div className='dr-img'>
                    <img className='rounded-xl' src={page?.ratgeber?.reference?.hero_inner_banner?.reference?.image?.url} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-img w-full h-full absolute inset-0 z-[-1] rounded-xl overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-2/4"></div>
              <img
                className="w-full h-full object-cover rounded-xl"
                src={page?.ratgeber?.reference?.hero_banner?.reference?.image?.url}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className='about-sec mt-[105px]'>
          <div className='about-sec-inner flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[50px]'>
            <div className='img-col w-[50%]'>
              <img className='w-full rounded-xl' src={page?.ratgeber?.reference?.start_consultation_image?.reference?.image?.url} alt="" />
            </div>
            <div className='content-info w-[50%]'>
              <h4 className='text-[45px] tracking-[-0.97152px] font-medium leading-[1.1]'
                  dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber?.reference?.start_consultation_text?.value),
                  }}
              ></h4>
              <Link
                className='inline-block rounded-[100px] bg-black text-white
              text-center px-[59px] py-[25px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit mt-[26px] leading-none'
                to={page?.ratgeber?.reference?.start_consultation_button_redirect?.value}
              >
                {page?.ratgeber?.reference?.start_consultation_button_text?.value}
              </Link>
            </div>
          </div>
        </section>
        <section className="four-boxes-section my-[81px]">
          <div className="four-boxes-inner">
            <div className="grid grid-cols-4 gap-[20px]">
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                    {page?.ratgeber?.reference?.footer_section_title_1?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber?.reference?.footer_section_content_1?.value),
                    }}
                  >
                  </div>
                  <Link
                    to={page?.ratgeber?.reference?.footer_section_redirect_1?.value}
                    className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                    {page?.ratgeber?.reference?.footer_section_title_2?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber?.reference?.footer_section_content_2?.value),
                    }}
                  >
                  </div>
                  <Link
                    to={page?.ratgeber?.reference?.footer_section_redirect_2?.value}
                    className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                  {page?.ratgeber?.reference?.footer_section_title_3?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber?.reference?.footer_section_content_3?.value),
                    }}
                  >
                  </div>
                  <Link
                    to={page?.ratgeber?.reference?.footer_section_redirect_3?.value}
                    className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                    {page?.ratgeber?.reference?.footer_section_title_4?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber?.reference?.footer_section_content_4?.value),
                    }}
                  >
                  </div>
                  <Link
                    to={page?.ratgeber?.reference?.footer_section_redirect_4?.value}
                    className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      ratgeber : metafield(namespace: "custom", key: "ratgeber") {
        reference {
          ... on Metaobject {
            handle
            hero_banner : field(key: "hero_banner") {
              reference {
                ...Media
              }
            }
            hero_inner_banner : field(key: "hero_inner_banner") {
              reference {
                ...Media
              }
            }
            hero_inner_banner_title : field(key: "hero_inner_banner_title") {
              value
            }
            hero_banner_title : field(key: "hero_banner_title") {
              value
            }
            start_consultation_text : field(key: "start_consultation_text") {
              value
            }
            start_consultation_button_text : field(key: "start_consultation_button_text") {
              value
            }
            start_consultation_button_redirect : field(key: "start_consultation_button_redirect") {
              value
            }
            start_consultation_image : field(key: "start_consultation_image") {
              reference {
                ...Media
              }
            }
            footer_section_title_1 : field(key: "footer_section_title_1") {
              value
            }
            footer_section_content_1 : field(key: "footer_section_content_1") {
              value
            }
            footer_section_redirect_1 : field(key: "footer_section_redirect_1") {
              value
            }
            footer_section_title_2 : field(key: "footer_section_title_2") {
              value
            }
            footer_section_content_2 : field(key: "footer_section_content_2") {
              value
            }
            footer_section_redirect_2 : field(key: "footer_section_redirect_2") {
              value
            }
            footer_section_title_3 : field(key: "footer_section_title_3") {
              value
            }
            footer_section_content_3 : field(key: "footer_section_content_3") {
              value
            }
            footer_section_redirect_3 : field(key: "footer_section_redirect_3") {
              value
            }
            footer_section_title_4 : field(key: "footer_section_title_4") {
              value
            }
            footer_section_content_4 : field(key: "footer_section_content_4") {
              value
            }
            footer_section_redirect_4 : field(key: "footer_section_redirect_4") {
              value
            }
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`;
