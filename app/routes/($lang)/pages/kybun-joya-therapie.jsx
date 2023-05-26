import React from 'react';
import {ArrowRight2, ExpandingCard, Breadcrumb} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import { toHTML, getBreadCrumbs } from '~/lib/utils';

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

  const faqArr = kybunJoyaTherapie?.faq?.value ? JSON.parse(kybunJoyaTherapie?.faq?.value) : [];
  

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs('kybunjoyatherapie','uberuns')}/>
      <div className="faq-sec container mt-10 mb-[50px]">
        <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          {kybunJoyaTherapie?.head_title?.value}
        </h1>
        <div className='desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[40px] lg:mb-[60px] max-w-[991px]'
          dangerouslySetInnerHTML={{
            __html: toHTML(kybunJoyaTherapie?.head_desc?.value),
          }}
        >
        </div>
        {
          faqArr.map((item, index) => {
            return (
              <ExpandingCard
                key={index}
                content={item.description}
                title={item.title}
              />
            )
          })
        }
      </div>
    </>
  );
}



const PAGE_QUERY = `#graphql
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
