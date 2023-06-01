import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Breadcrumb, Link} from '~/components';
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
      handle: 'unternehmen',
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

export default function unternehmen() {

  const {page} = useLoaderData();
  const unternehmenReference = page?.unternehmen?.reference;

  return (
    <>
      <Breadcrumb
        crumbs={getBreadCrumbs(null,'unternehmen')}
      />
      <section className="banner-with-title">
        <div className="container">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
             {unternehmenReference?.head_title?.value}
          </h1>
          <div className="product-list-hero-img relative overflow-hidden pb-[35%] aspect-[3/2] md:aspect-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={unternehmenReference?.hero_image?.reference?.image?.url}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="aboutus-section mt-[40px] lg:mt-[62px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] max-w-[1030px] mx-auto">
        <div className="container">
          <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[40px] md:mb-[50px] lg:mb-[70px] xl:mb-[86px]"
            dangerouslySetInnerHTML={{
              __html: toHTML(
                unternehmenReference?.main_desc?.value,
              ),
            }}
          >
          </div>
          
          <div className='img-wrap mb-[20px] lg:mb-[35px]'>
            <img className='max-w-full h-auto w-full' src={unternehmenReference?.quote_section_image?.reference?.image?.url} alt="" />
          </div>
          <div className='desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px]'
              dangerouslySetInnerHTML={{
                __html: toHTML(
                  unternehmenReference?.quote_section_desc?.value,
                ),
              }}
          >
          </div>
          <div className='sub-title mb-[25px]'>
            <h4 className='text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-normal'>
              {unternehmenReference?.quote_section_title?.value}
            </h4>
          </div>
          <div className='btn-wrap'>
            <Link to={unternehmenReference?.quote_section_button_redirect?.value} className='inline-block rounded-[100px] bg-black text-white
                 text-center px-[35px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit' href="#">
                    {unternehmenReference?.quote_section_button_text?.value}
            </Link>
          </div>
        </div>
      </section>
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
      unternehmen : metafield(namespace: "custom", key: "unternehmen") {
        reference {
          ... on Metaobject {
            head_title : field(key: "head_title") {
              value
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            main_desc : field(key: "main_desc") {
              value
            }
            quote_section_title : field(key: "quote_section_title") {
              value
            }
            quote_section_desc : field(key: "quote_section_desc") {
              value
            }
            quote_section_button_text : field(key: "quote_section_button_text") {
              value
            }
            quote_section_button_redirect : field(key: "quote_section_button_redirect") {
              value
            }
            quote_section_image : field(key: "quote_section_image") {
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
