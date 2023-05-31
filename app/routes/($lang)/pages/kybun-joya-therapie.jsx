import React from 'react';
import {ArrowRight2, ExpandingCardStyle3, Breadcrumb} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';

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
          <div className='product-list-hero-img relative overflow-hidden pb-[35%]'>
            <img className='absolute inset-0 w-full h-full object-cover' src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_1_5.png?v=1685527064" alt="" />
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
        {faqArr.map((item, index) => {
          return (
            <ExpandingCardStyle3
              key={index}
              content={item.description}
              title={item.title}
            />
          );
        })}
      </div>
      <div className='about-sec container py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]'>
        <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[30px]'>
          <div className='img-wrap lg:w-[50%] overflow-hidden w-full'>
            <img className='w-full h-auto' src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Map.png?v=1685529112" alt="" />
          </div>
          <div className='content-col w-full lg:w-[50%] flex flex-col'>
            <div className='desc text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[35px] text-black tracking-[-0.400697px] font-normal leading-[1.4]'>
              <p>Über 4 Millionen begeisterte Kunden weltweit bestätigen die außergewöhnliche Wirkung. Wo würden ihre Füße und ihr ganzer Körper wohl lieber gehen, barfuß auf weich-elastisch-federndem Moos, oder eingepackt in flachen Schuhen auf dem harten Asphalt? Gönnen sie ihren Füßen nur das Allerbeste, denn sie tragen Sie noch ihr ganzes Leben. </p>
            </div>
          </div>
        </div>
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
