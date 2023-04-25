import {ExpandingCardStyle2, Link, IconClose} from '~/components';
import React, {Fragment, useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import {toHTML} from '~/lib/utils';

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
      handle: 'ratgeber-detail-page',
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
export default function ratgeberseite() {
  const {page} = useLoaderData();

  const buttonAccordionMapping = page?.ratgeber_detail?.reference
    ?.button_accordion_mapping?.value
    ? JSON.parse(page.ratgeber_detail.reference.button_accordion_mapping.value)
    : [];

  useEffect(() => {
    document.querySelectorAll('.my-achor-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.my-achor-link').forEach(function (link) {
          link.classList.remove('active');
        });

        // add active class to clicked element
        this.classList.add('active');

        const hashId = this.hash.substring(1);

        var myElement = document.querySelector('#' + hashId);
        myElement?.querySelector('button')?.click();

        var target = this.hash;
        var $target = document.querySelector(target);
        var scrollDistance = $target.offsetTop - 90;

        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <section className="dr-info-tabs-section">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap flex-col md:flex-row gap-y-[30px] gap-x-[46px] justify-center md:justify-start">
              <div className="content-info w-full xl:flex-[1]">
                <div className="title-wrap text-left xl:text-right xl:max-w-[280px] ml-auto">
                  <h2 className="text-[#00795C] leading-none text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] font-black">
                    {page?.ratgeber_detail?.reference?.head_title?.value}
                  </h2>
                </div>

                <div
                  className="desc mt-[20px] mx-auto lg:mt-[30px] xl:mt-[52px] text-[28px] md:text-[30px] lg:text-[40px] tracking-[-0.97152px]  text-left xl:text-right text-black leading-[1.2]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_detail?.reference?.head_content?.value,
                    ),
                  }}
                ></div>
              </div>
              <div className="interactive-img-wrap mx-auto block w-[320px]">
                <div className="img-wrap w-full text-center relative">
                  <img
                    className="m-auto"
                    src={
                      page?.ratgeber_detail?.reference?.head_interactive_image
                        ?.reference?.image?.url
                    }
                    alt=""
                  />
                  <div className="interactive-list w-full left-[-90px] top-0 h-full absolute">
                    <div className="absolute top-0 left-[240px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[300px] left-[220px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[330px] left-[130px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[330px] left-[281px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute top-[510px] left-[261px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute bottom-[110px] left-[180px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div className="absolute bottom-[80px] left-[250px]">
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col tabs-wrap xl:flex-[1]">
                <div className="search-bar">
                  <form action="">
                    <div className="relative">
                      <button
                        type="submit"
                        className="text-black absolute inset-y-0 left-[28px] flex items-center"
                      >
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 53 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {' '}
                          <circle
                            cx="22.6274"
                            cy="23.4645"
                            r={15}
                            transform="rotate(-45 22.6274 23.4645)"
                            stroke="black"
                            strokeWidth={2}
                          />{' '}
                          <line
                            x1="33.9415"
                            y1="34.7782"
                            x2="41.0126"
                            y2="41.8493"
                            stroke="black"
                            strokeWidth={2}
                          />{' '}
                        </svg>
                      </button>
                      <input
                        type="search"
                        placeholder="Suchen"
                        name="q"
                        className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] py-[20px] xl:py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                      />
                    </div>
                  </form>
                </div>
                <div className="scroll-links-wrap grid grid-cols-2 min-[1701px]:gap-x-[40px] max-[1700px]:gap-[20px] min-[1701px]:gap-y-[45px] gap-[20px] mt-[30px] xl:mt-[59px]">
                  {buttonAccordionMapping?.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={`#link${index + 1}`}
                        className="p-[15px] xl:px-[20px] xl:py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] xl:min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                      >
                        {item.button_name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dr-faq-sec !max-w-[870px] mx-auto flex flex-col gap-[20px] my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
          {buttonAccordionMapping?.map((item, index) => {
            if (!item.accordion_title) return <></>;
            return (
              <ExpandingCardStyle2
                key={index}
                id={`link${index + 1}`}
                content={item.accordion_content}
                title={item.accordion_title}
              />
            );
          })}
          <div className="info-bottom mt-[20px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px]">
            <div className="title-wrap">
              <h3 className="text-center tracking-[-0.97152px] text-[28px] md:text-[30px] lg:text-[2 leading-[1.1] font-medium">
                {page?.ratgeber_detail?.reference?.cta_text?.value}
              </h3>
            </div>
            <div className="link-wrap flex justify-center mt-[20px] lg:mt-[40px]">
              <Link
                className="block rounded-[100px] bg-black text-white
            text-center px-[60px] py-[20px] md:py-[25px] hover:bg-[#00795c] hover:text-white text-[16px] md:text-[18px] max-w-fit font-normal leading-none"
                to={
                  page?.ratgeber_detail?.reference?.cta_button_redirect?.value
                }
              >
                {page?.ratgeber_detail?.reference?.cta_button_text?.value}
              </Link>
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
      ratgeber_detail : metafield(namespace: "custom", key: "ratgeber_detail") {
        reference {
          ... on Metaobject {
            handle
            head_interactive_image : field(key: "head_interactive_image") {
              reference {
                ...Media
              }
            }
            head_title : field(key: "head_title") {
              value
            }
            head_content : field(key: "head_content") {
              value
            }
            cta_text : field(key: "cta_text") {
              value
            }
            cta_button_text : field(key: "cta_button_text") {
              value
            }
            cta_button_redirect : field(key: "cta_button_redirect") {
              value
            }
            button_accordion_mapping : field(key: "button_accordion_mapping") {
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
