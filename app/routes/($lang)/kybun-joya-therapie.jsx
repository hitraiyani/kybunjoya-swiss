import React from 'react';
import {ArrowRight2, ExpandingCardStyle3, Breadcrumb, Link} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url : data?.url,
});

export const handle = {
  seo,
};

export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'kybun-joya-therapie',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  return json(
    {page, url: request.url},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function kybunJoyaTherapie() {
  const {page} = useLoaderData();

  const kybunJoyaTherapie = page?.kybun_joya_therapie?.reference;

  const faqArr = kybunJoyaTherapie?.faq?.value
    ? JSON.parse(kybunJoyaTherapie?.faq?.value)
    : [];


  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs('kybunjoyatherapie', 'uberuns')} />
      <div className="banner-with-title">
        <div className="container">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            {kybunJoyaTherapie?.head_title?.value}
          </h1>
          {/* <div className="product-list-hero-img relative overflow-hidden pb-[35%] min-h-[200px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={kybunJoyaTherapie?.hero_image?.reference?.image?.url}
              alt=""
            />
          </div> */}
        </div>
      </div>
      <div className="about-us-section">
        <div className="container">
          <div className="flex flex-col gap-y-[20px] gap-x-[30px] 2xl:gap-x-[120px] xl:gap-x-[80px] lg:gap-x-[50px]">
            <div className="img-wrap md:w-[100%] overflow-hidden w-full">
              <div className="img-wrap min-h-[200px] pb-[50%] xl:pb-[45%] 2xl:pb-[37%]  relative overflow-hidden">
                <img
                  className="w-full h-full inset-0 object-cover absolute"
                  src={kybunJoyaTherapie?.hero_image?.reference?.image?.url}
                  alt=""
                />
              </div>
            </div>
            <div className="content-col w-full max-w-[1040px] md:w-[100%] flex flex-col justify-center">
              <div
                className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                dangerouslySetInnerHTML={{
                  __html: toHTML(kybunJoyaTherapie?.head_desc?.value),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-sec container mt-10">
        {/* <div
          className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[40px] lg:mb-[60px] max-w-[991px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(kybunJoyaTherapie?.head_desc?.value),
          }}
        ></div> */}
        <div className="last:border-b border-[#595959]">
          {faqArr.map((item, index) => {
            return (
              <ExpandingCardStyle3
                key={index}
                content={item.description}
                title={item.title}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="about-sec container pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="flex flex-col gap-y-[20px] gap-x-[30px] 2xl:gap-x-[120px] xl:gap-x-[80px] lg:gap-x-[50px] md:flex-row-reverse">
          <div className="img-col md:w-[50%] w-full">
            <div className="img-wrap pb-[100%] relative overflow-hidden">
              <img
                className="w-full h-full inset-0 object-cover absolute"
                src={
                  kybunJoyaTherapie?.holistic_section_image?.reference?.image
                    ?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="content-col w-full md:w-[50%] flex flex-col justify-center">
            <h2 className="mb-[15px] text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-medium">
              {kybunJoyaTherapie.holistic_section_title.value}
            </h2>
            <div
              className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[20px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(kybunJoyaTherapie?.holistic_section_desc?.value),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="about-sec container py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="flex flex-col md:flex-row gap-y-[20px] gap-x-[30px] 2xl:gap-x-[120px] xl:gap-x-[80px] lg:gap-x-[50px] items-center">
          <div className="img-wrap md:w-[50%] overflow-hidden w-full">
            <div className="img-wrap pb-[100%] md:pb-[60%] relative overflow-hidden">
              <img
                className="w-full h-full inset-0 object-cover absolute"
                src={
                  kybunJoyaTherapie?.about_section_image?.reference?.image?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="content-col w-full md:w-[50%] flex flex-col justify-center">
            <h2 className="mb-[15px] text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-medium">
              {kybunJoyaTherapie?.about_section_title?.value}
            </h2>
            <div
              className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[20px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(kybunJoyaTherapie?.about_section_desc?.value),
              }}
            ></div>
            <div className="btn-wrap">
              <Link
                to={kybunJoyaTherapie?.about_section_redirect_url?.value}
                className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[20px] md:px-[35px] py-[12px] md:py-[15px] hover:bg-black hover:text-white text-[14px] md:text-[18px] max-w-fit"
              >
                {kybunJoyaTherapie?.about_section_redirect_text?.value}
              </Link>
            </div>
          </div>
        </div>
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
      kybun_joya_therapie : metafield(namespace: "custom", key: "kybun_joya_therapie") {
        reference {
          ... on Metaobject {
            head_title : field(key: "head_title") {
              value
            }
            head_desc : field(key: "head_desc") {
              value
            }
            faq : field(key: "faq") {
              value
            }
            holistic_section_title : field(key: "holistic_section_title") {
              value
            }
            holistic_section_desc : field(key: "holistic_section_desc") {
              value
            }
            holistic_section_image : field(key: "holistic_section_image") {
              reference {
                ...Media
              }
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            about_section_image : field(key: "about_section_image") {
              reference {
                ...Media
              }
            }
            about_section_desc : field(key: "about_section_desc") {
              value
            }
            about_section_title : field(key: "about_section_title") {
              value
            }
            about_section_redirect_text : field(key: "about_section_redirect_text") {
              value
            }
            about_section_redirect_url : field(key: "about_section_redirect_url") {
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
