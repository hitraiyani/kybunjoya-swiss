import React from 'react';
import {ArrowRight2, ExpandingCardStyle3, Breadcrumb} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';

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
      handle: 'kybun-joya-therapie',
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
          <div className="product-list-hero-img relative overflow-hidden pb-[35%]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={kybunJoyaTherapie?.hero_image?.reference?.image?.url}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="faq-sec container mt-10">
        <div
          className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[40px] lg:mb-[60px] max-w-[991px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(kybunJoyaTherapie?.head_desc?.value),
          }}
        ></div>
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
      <div className="about-sec container py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[30px]">
          <div className="img-wrap lg:w-[50%] overflow-hidden w-full">
            <img
              className="w-full h-auto"
              src={
                kybunJoyaTherapie?.about_section_image?.reference?.image?.url
              }
              alt=""
            />
          </div>
          <div className="content-col w-full lg:w-[50%] flex flex-col">
            <div
              className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
              dangerouslySetInnerHTML={{
                __html: toHTML(kybunJoyaTherapie?.about_section_desc?.value),
              }}
            ></div>
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
