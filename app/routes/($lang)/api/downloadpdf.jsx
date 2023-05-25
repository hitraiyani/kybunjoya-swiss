import {json} from '@shopify/remix-oxygen';
import {flattenConnection} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

/**
 * Fetch a given set of products from the storefront API
 * @param count
 * @param query
 * @param reverse
 * @param sortKey
 * @returns Product[]
 * @see https://shopify.dev/api/storefront/2023-01/queries/products
 */
export async function loader({request, context: {storefront}}) {
  
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const pdfUrl = searchParams.get('url') ?? '';

  const response = await fetch(pdfUrl);
  const pdfBuffer = await response.arrayBuffer();

  const headers = {
    'Content-Disposition': 'attachment; filename="your-file-name.pdf"',
    'Content-Type': 'application/pdf',
  };

  const buffer = new Uint8Array(pdfBuffer);
  return new Response(buffer, { status: 200, headers });
}



// no-op
export default function downloadPdfApiRoute() {
  return null;
}
