import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {ResponsiveIframe} from '~/components';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Link, Breadcrumb} from '~/components';
import {AICO_STOREFINDER_URL} from '~/lib/const';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url: data?.url,
});

export const handle = {
  seo,
};

export async function loader({params, request, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'shop-details',
      language: context.storefront.i18n.language,
    },
  });
  const searchParams = new URL(request.url).searchParams;
  const shop_id = searchParams.get('shop_id');
  return json(
    {page, url: request.url, locale: context.storefront.i18n.language, shop_id},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function shopfinder() {
  const {locale, shop_id} = useLoaderData();

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs(null, 'shopfinder')} />
      <ResponsiveIframe
        url={`https://kybunjoya.aico.swiss/storage/kj-storelocator-static/shop-details.html?shop_id=${shop_id}`}
      />
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
