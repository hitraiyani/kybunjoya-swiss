import {json} from '@shopify/remix-oxygen';
import {flattenConnection} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {KLAVIYO_API_URL, KLAVIYO_LIST_SEGMENT, KLAVIYO_PRIVATE_API_KEY } from '~/lib/const';

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
  const email = searchParams.get('email') ?? '';
  const responseData = {
    status : false,
    message : 'E-Mail ist obligatorisch.'
  }
  console.log("email from API", email);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  // if (email) {
  //   if (!isValidEmail(email)) {
  //     responseData.status = false;
  //     responseData.message = 'Email ist ungültig.';
  //   } else {
  //       try {
  //           const response = await fetch(`${KLAVIYO_API_URL}/list/${KLAVIYO_LIST_SEGMENT}/subscribe`, {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               api_key: KLAVIYO_PRIVATE_API_KEY,
  //               profiles: [
  //                 {
  //                   email: email,
  //                 },
  //               ],
  //             }),
  //           });
  //           if (!response.ok) {
  //               responseData.status = false;
  //               responseData.message = 'Failed to subscribe to the newsletter.';
  //           } else {
  //               responseData.status = true;
  //               responseData.message = 'Newsletter erfolgreich abonniert.';
  //           }
  //       } catch (error) {
  //         responseData.status = false;
  //         responseData.message = 'Failed to subscribe to the newsletter.';
  //       }
  //   }
  // }
  
  return json({
    ...responseData,
  });
}



// no-op
export default function NewsLetterApiRoute() {
  return null;
}
