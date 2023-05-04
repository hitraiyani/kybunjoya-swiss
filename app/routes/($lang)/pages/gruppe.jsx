import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import { toHTML} from '~/lib/utils';
import {Link} from '~/components';

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
      handle: 'gruppe',
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

export default function gorup() {

  const {page} = useLoaderData();

  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <section className="banner-with-title">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {page?.gruppe_page?.reference?.head_title?.value}
          </h1>
          <div className="product-list-hero-img relative overflow-hidden rounded-xl pb-[35%] min-h-[400px]">
            <img
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              src={page?.gruppe_page?.reference?.hero_image?.reference?.image?.url}
              alt=""
            />
          </div>
        </section>
        <section className="rich-text-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold">
                {page?.gruppe_page?.reference?.values_section_title?.value}
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[57px]">
              <div className="col-left w-full lg:w-[50%]">
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(page?.gruppe_page?.reference?.values_section_left_short_desc?.value),
                  }}
                 >
                </div>
                <div className="box bg-[#EDEDED] rounded-[10px] p-[30px] lg:px-[39px] lg:py-[45px] mt-[32px]">
                  <div className="flex flex-col lg:flex-row">
                    <div className="title-wrap w-full lg:w-[40%]">
                      <h3
                        className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.4] mb-[20px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(page?.gruppe_page?.reference?.values_section_left_sub_short_desc?.value),
                        }}
                      >
                      </h3>
                    </div>
                    <div className="desc w-full lg:w-[60%]"
                      >
                        <ul className="list-disc list-outside flex flex-col gap-[15px] text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4] pl-[20px] lg:pl-[40px]"
                          dangerouslySetInnerHTML={{
                            __html: (page?.gruppe_page?.reference?.values_section_left_desc?.value),
                          }}
                        >
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="title-wrap">
                  <h3
                    className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.4] mb-[20px]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.gruppe_page?.reference?.values_section_right_short_desc?.value),
                    }}
                  >
                  </h3>
                </div>
                <div className="desc">
                  <ul className="list-disc list-outside flex flex-col gap-[15px] text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4] pl-[20px] lg:pl-[40px]"
                     dangerouslySetInnerHTML={{
                      __html: (page?.gruppe_page?.reference?.values_section_right_desc?.value),
                    }}
                  >
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <div className="rich-text-inner">
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[73px]">
              <div className="col-left w-full lg:w-[40%]">
                <div className="title-wrap">
                  <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold">
                    {page?.gruppe_page?.reference?.work_section_title?.value}
                  </h2>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                   dangerouslySetInnerHTML={{
                    __html: toHTML(page?.gruppe_page?.reference.work_section_desc.value),
                  }}
                >
                </div>
              </div>
              <div className="col-right w-full lg:flex-1">
                <div className="img-wrap">
                  <img
                    src={page?.gruppe_page?.reference?.work_section_image?.reference?.image?.url}
                    className="w-full rounded-[10px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[80px]">
          <div className="rich-text-inner">
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[20px]">
              <div className="col-left w-full lg:w-[400px]">
                <div className="img-wrap h-full">
                  <img
                    className="w-full rounded-[10px] h-auto lg:h-full object-cover"
                    src={page?.gruppe_page?.reference?.culture_employee_section_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-right w-full lg:flex-1">
                <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[50px]">
                  <div className="w-full lg:w-[50%]">
                    <div className="title-wrap">
                      <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] 0racking-[-1.05984px] mb-[20px] font-bold">
                        {page?.gruppe_page?.reference?.culture_employee_section_title_1?.value}
                      </h2>
                    </div>
                    <div className="desc">
                      <ul className="list-disc list-outside flex flex-col gap-[15px] text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4] pl-[20px] lg:pl-[40px]"
                          dangerouslySetInnerHTML={{
                            __html: (page?.gruppe_page?.reference.culture_employee_section_desc_1?.value),
                          }}
                        >
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <div className="title-wrap">
                      <h2 className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] lg:mb-[24px] leading-[1.1]">
                        {page?.gruppe_page?.reference?.culture_employee_section_title_2?.value}
                      </h2>
                    </div>
                    <div className="desc text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                         dangerouslySetInnerHTML={{
                          __html: (page?.gruppe_page?.reference.culture_employee_section_desc_2?.value),
                        }}
                    >
                    </div>
                  </div>
                </div>
                <div className="w-full mt-[20px] md:mt[30px] xl:mt-[40px] max-w-[770px]">
                  <div className="title-wrap">
                    <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-0-1.05984px] mb-[20px] font-bold"
                       dangerouslySetInnerHTML={{
                        __html: (page?.gruppe_page?.reference.culture_employee_section_title_3.value),
                      }}
                    >
                    </h2>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: (page?.gruppe_page?.reference.culture_employee_section_desc_3?.value),
                      }}
                    >
                    </p>
                  </div>
                    <div className="btn-wrap flex justify-start mt-[20px] md:mt-[30px] xl:mt-[42px]">
                      <Link
                        to={page?.gruppe_page?.reference.culture_employee_section_cta?.value}
                        className="w-fit px-[30px] py-[15px] bg-black rounded-[100px] transition-all !text-white text-[18px] tracking-[-0.400697px] hover:bg-[#00795c] font-normal"
                      >
                        Mehr Lernen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <div className="rich-text-inner">
            <div className="w-full">
              <div className="title-wrap">
                <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] font-bold">
                  {page?.gruppe_page?.reference?.kybun_joya_therapie_section_title?.value}
                </h2>
              </div>
            </div>
            <div className="hero-img relative overflow-hidden rounded-xl pb-[21.5%] min-h-[300px] mb-[48px]">
              <img
                src={page?.gruppe_page?.reference?.kybun_joya_therapie_section_image?.reference?.image?.url}
                alt=""
                className="absolute rounded-xl inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[73px]">
              <div className="col-left w-full lg:w-[50%]">
                <div className="desc text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                >
                  <span
                     dangerouslySetInnerHTML={{
                      __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_desc?.value),
                    }}
                  >
                  </span>
                  <div className="title-wrap mt-[30px]">
                    <h3 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.4] mb-[20px]">
                      {page?.gruppe_page?.reference?.kybun_joya_therapie_section_trampolineffekt_title?.value}
                    </h3>
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_trampolineffekt_desc?.value),
                    }}
                  >
                  </span>
                  <div className="title-wrap mt-[30px]">
                    <h3 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.4] mb-[20px]">
                      {page?.gruppe_page?.reference?.kybun_joya_therapie_section_sensationelle_wirkung_title?.value}
                    </h3>
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_sensationelle_wirkung_desc_1?.value),
                    }}
                  >
                  </span>
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <div className="desc text-[16px] md:text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_sensationelle_wirkung_desc_2?.value),
                    }}
                  >
                  </span>
                  <div className="title-wrap mt-[30px]">
                    <h3 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.4] mb-[20px]">
                      {page?.gruppe_page?.reference?.kybun_joya_therapie_section_ganzheitliche_title?.value}
                    </h3>
                  </div>
                  <span
                     dangerouslySetInnerHTML={{
                      __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_ganzheitliche_desc_1?.value),
                    }}
                  >
                  </span>
                  <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[44px] mt-[24px]">
                    <div className="desc w-full lg:w-[50%]"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_ganzheitliche_desc_2?.value),
                      }}
                    >
                    </div>
                    <div className="title-wrap w-full lg:w-[50%]">
                      <h3
                        className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.4] mb-[20px]"
                        dangerouslySetInnerHTML={{
                          __html: toHTML(page?.gruppe_page?.reference?.kybun_joya_therapie_section_ganzheitliche_desc_3?.value),
                        }}
                       >
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
          <div className="rich-text-inner">
            <div className="flex flex-col lg:flex-row-reverse gap-y-[30px] gap-x-[50px]">
              <div className="col-left w-full lg:w-[40%]">
                <div className="title-wrap">
                  <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold">
                    {page?.gruppe_page?.reference?.footer_group_title?.value}
                  </h2>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                   dangerouslySetInnerHTML={{
                    __html: toHTML(page?.gruppe_page?.reference?.footer_group_desc?.value),
                  }}
                 >
                </div>
                <div className="title-wrap">
                  <h2 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-41.2] mb-[20px] mt-[30px]"
                     dangerouslySetInnerHTML={{
                      __html: (page?.gruppe_page?.reference?.footer_group_sub_title?.value),
                    }} 
                  >
                  </h2>
                </div>
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                   dangerouslySetInnerHTML={{
                    __html: toHTML(page?.gruppe_page?.reference?.footer_group_sub_desc?.value),
                  }}
                >
                </div>
              </div>
              <div className="col-right w-full lg:flex-1">
                <div className="img-wrap h-full">
                  <img
                    className="w-full rounded-[10px] h-full object-cover"
                    src={page?.gruppe_page?.reference?.footer_group_image?.reference?.image?.url}
                    alt=""
                  />
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
      gruppe_page : metafield(namespace: "custom", key: "gruppe_page") {
        reference {
          ... on Metaobject {
            handle
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            head_title : field(key: "head_title") {
              value
            }
            values_section_title : field(key: "values_section_title") {
              value
            }
            values_section_left_short_desc : field(key: "values_section_left_short_desc") {
              value
            }
            values_section_left_sub_short_desc : field(key: "values_section_left_sub_short_desc") {
              value
            }
            values_section_left_desc : field(key: "values_section_left_desc") {
              value
            }
            values_section_right_short_desc : field(key: "values_section_right_short_desc") {
              value
            }
            values_section_right_desc : field(key: "values_section_right_desc") {
              value
            }
            work_section_title : field(key: "work_section_title") {
              value
            }
            work_section_desc : field(key: "work_section_desc") {
              value
            }
            work_section_image : field(key: "work_section_image") {
              reference {
                ...Media
              }
            }
            culture_employee_section_image : field(key: "culture_employee_section_image") {
              reference {
                ...Media
              }
            }
            culture_employee_section_title_1 : field(key: "culture_employee_section_title_1") {
              value
            }
            culture_employee_section_desc_1 : field(key: "culture_employee_section_desc_1") {
              value
            }
            culture_employee_section_title_2 : field(key: "culture_employee_section_title_2") {
              value
            }
            culture_employee_section_desc_2 : field(key: "culture_employee_section_desc_2") {
              value
            }
            culture_employee_section_title_3 : field(key: "culture_employee_section_title_3") {
              value
            }
            culture_employee_section_desc_3 : field(key: "culture_employee_section_desc_3") {
              value
            }
            culture_employee_section_cta : field(key: "culture_employee_section_cta") {
              value
            }
            kybun_joya_therapie_section_title : field(key: "kybun_joya_therapie_section_title") {
              value
            }
            kybun_joya_therapie_section_image : field(key: "kybun_joya_therapie_section_image") {
              reference {
                ...Media
              }
            }
            kybun_joya_therapie_section_desc : field(key: "kybun_joya_therapie_section_desc") {
              value
            }
            kybun_joya_therapie_section_trampolineffekt_title : field(key: "kybun_joya_therapie_section_trampolineffekt_title") {
              value
            }
            kybun_joya_therapie_section_trampolineffekt_desc : field(key: "kybun_joya_therapie_section_trampolineffekt_desc") {
              value
            }
            kybun_joya_therapie_section_sensationelle_wirkung_title : field(key: "kybun_joya_therapie_section_sensationelle_wirkung_title") {
              value
            }
            kybun_joya_therapie_section_sensationelle_wirkung_desc_1 : field(key: "kybun_joya_therapie_section_sensationelle_wirkung_desc_1") {
              value
            }
            kybun_joya_therapie_section_sensationelle_wirkung_desc_2 : field(key: "kybun_joya_therapie_section_sensationelle_wirkung_desc_2") {
              value
            }
            kybun_joya_therapie_section_ganzheitliche_title : field(key: "kybun_joya_therapie_section_ganzheitliche_title") {
              value
            }
            kybun_joya_therapie_section_ganzheitliche_desc_1 : field(key: "kybun_joya_therapie_section_ganzheitliche_desc_1") {
              value
            }
            kybun_joya_therapie_section_ganzheitliche_desc_2 : field(key: "kybun_joya_therapie_section_ganzheitliche_desc_2") {
              value
            }
            kybun_joya_therapie_section_ganzheitliche_desc_3 : field(key: "kybun_joya_therapie_section_ganzheitliche_desc_3") {
              value
            }
            footer_group_title : field(key: "footer_group_title") {
              value
            }
            footer_group_desc : field(key: "footer_group_desc") {
              value
            }
            footer_group_sub_desc : field(key: "footer_group_sub_desc") {
              value
            }
            footer_group_sub_title : field(key: "footer_group_sub_title") {
              value
            }
            footer_group_image : field(key: "footer_group_image") {
              reference {
                ...Media
              }
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