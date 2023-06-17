import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import {  ResponsiveIframe } from '~/components';
import { toHTML, getBreadCrumbs} from '~/lib/utils';
import {Link, Breadcrumb } from '~/components';
import { AICO_STOREFINDER_URL } from '~/lib/const';

const seo = ({data}) => ({
   title: 'Filialen',
   url : data?.url,
 });
 
 export const handle = {
   seo,
 };

export async function loader({ params, request, context }) {
     return json(
    {url: request.url},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function shopfinder() {
   return (
      <>
         <Breadcrumb crumbs={getBreadCrumbs(null,'shopfinder')}/>
         <ResponsiveIframe url={AICO_STOREFINDER_URL} />
      </>
   );
}