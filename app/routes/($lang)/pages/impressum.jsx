import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';

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
      handle: 'copy-of-impressum',
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

export default function impressum() {
  const {page} = useLoaderData();
  
  return (
    <>
      <section className="rich-text-section pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="container">
          <div className="row max-w-[867px] mx-auto">
            <div className="col-inner">
              <div className="title-wrap">
                <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] 2xl:mb-[65px] font-bold">
                    {page?.title}
                </h1>
              </div>
              <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400]"
                dangerouslySetInnerHTML={{__html: page.body}}
              >
              </div>
            </div>
          </div>
        </div>
      </section>
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
      seo {
        description
        title
      }
    }
  }
`;
