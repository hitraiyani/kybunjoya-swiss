import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useMatches,
} from '@remix-run/react';
import {ShopifySalesChannel, Seo} from '@shopify/hydrogen';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import {Layout} from './components/Layout';
import {GenericError} from './components/GenericError';
import {NotFound} from './components/NotFound';
import tailwind from './styles/tailwind-build.css';

import {DEFAULT_LOCALE, parseMenu} from './lib/utils';
import invariant from 'tiny-invariant';
import {useAnalytics} from './hooks/useAnalytics';

import swiper from 'swiper/css';
import swiper_navigation from 'swiper/css/navigation';
import swiper_pagination from 'swiper/css/pagination';
import swiper_scrollbar from 'swiper/css/scrollbar';

// Import css files
import slick_css from "slick-carousel/slick/slick.css";
import slick_themecss from "slick-carousel/slick/slick-theme.css";

const seo = ({data, pathname}) => ({
  title: data?.layout?.shop?.name,
  titleTemplate: '%s',
  description: data?.layout?.shop?.description,
  handle: '@shopify',
  url: `https://hydrogen.shop${pathname}`,
});

export const handle = {
  seo,
};


export const links = () => {
  return [
    {rel: 'stylesheet', href: tailwind},
    {rel: 'stylesheet', href: styles},
    {rel: 'stylesheet', href: swiper},
    {rel: 'stylesheet', href: swiper_navigation},
    {rel: 'stylesheet', href: swiper_pagination},
    {rel: 'stylesheet', href: swiper_scrollbar},
    {rel: 'stylesheet', href: slick_css},
    {rel: 'stylesheet', href: slick_themecss},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const [cartId, layout] = await Promise.all([
    context.session.get('cartId'),
    getLayoutData(context),
  ]);
  

  return defer({
    layout,
    selectedLocale: context.storefront.i18n,
    cart: cartId ? getCart(context, cartId) : undefined,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: layout.shop.id,
    },
  });
}


export default function App() {
  const data = useLoaderData();
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;
  const hasUserConsent = true;

  //useAnalytics(hasUserConsent, locale);

  return (
    <html lang={locale.language}>
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout
          layout={data.layout}
          key={`${locale.language}-${locale.country}`}
          locale={locale}
        >
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const [root] = useMatches();
  const caught = useCatch();
  const isNotFound = caught.status === 404;
  const locale = root.data?.selectedLocale ?? DEFAULT_LOCALE;

  return (
    <html lang={locale.language}>
      <head>
        <title>{isNotFound ? 'Not found' : 'Error'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout
          layout={root?.data?.layout}
          key={`${locale.language}-${locale.country}`}
        >
          {isNotFound ? (
            <NotFound type={caught.data?.pageType} />
          ) : (
            <GenericError
              error={{message: `${caught.status} ${caught.data}`}}
            />
          )}
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}) {
  const [root] = useMatches();
  const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;

  return (
    <html lang={locale.language}>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout layout={root?.data?.layout}>
          <GenericError error={error} />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layoutMenus(
    $language: LanguageCode
    $headerMenuHandle: String!
    $footerMenuHandle: String!
  ) @inContext(language: $language) {
    shop {
      id
      name
      description
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
  }
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
`;

async function getLayoutData({storefront}) {
  const HEADER_MENU_HANDLE = 'main-menu';
  const FOOTER_MENU_HANDLE = 'footer';

  const data = await storefront.query(LAYOUT_QUERY, {
    variables: {
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
      language: storefront.i18n.language,
    },
  });

  invariant(data, 'No data returned from Shopify API');

  /*
        Modify specific links/routes (optional)
        @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
        e.g here we map:
          - /blogs/news -> /news
          - /blog/news/blog-post -> /news/blog-post
          - /collections/all -> /products
      */
  const customPrefixes = {BLOG: '', CATALOG: 'products'};
  
  // const tempHeaderMenu = {
  //   "id": "gid://shopify/Menu/231974633793",
  //   "items": [
  //     {
  //       "id": "gid://shopify/MenuItem/544372031809",
  //       "resourceId": "gid://shopify/Page/116347437377",
  //       "tags": [],
  //       "title": "Produkte",
  //       "type": "PAGE",
  //       "url": "https://kybunjoya-swiss.myshopify.com/pages/products",
  //       "items": []
  //     },
  //     {
  //       "id": "gid://shopify/MenuItem/544372228417",
  //       "resourceId": "gid://shopify/Page/120569528641",
  //       "tags": [],
  //       "title": "kybun Joya Story",
  //       "type": "PAGE",
  //       "url": "https://kybunjoya-swiss.myshopify.com/pages/heritage",
  //       "items": []
  //     },
  //     {
  //       "id": "gid://shopify/MenuItem/544373014849",
  //       "resourceId": "gid://shopify/Page/119344857409",
  //       "tags": [],
  //       "title": "Filialen",
  //       "type": "PAGE",
  //       "url": "https://kybunjoya-swiss.myshopify.com/pages/shopfinder",
  //       "items": []
  //     },
  //     {
  //       "id": "gid://shopify/MenuItem/544372064577",
  //       "resourceId": "gid://shopify/Page/116722336065",
  //       "tags": [],
  //       "title": "Dr. kybun Joya",
  //       "type": "PAGE",
  //       "url": "https://kybunjoya-swiss.myshopify.com/pages/pages/dr-kybun-joya",
  //       "items": []
  //     },
  //     {
  //       "id": "gid://shopify/MenuItem/544372687169",
  //       "resourceId": "gid://shopify/Page/120567333185",
  //       "tags": [],
  //       "title": "Über uns",
  //       "type": "PAGE",
  //       "url": "https://kybunjoya-swiss.myshopify.com/pages/uber-uns",
  //       "items": [
  //         {
  //           "id": "gid://shopify/MenuItem/544372719937",
  //           "resourceId": "gid://shopify/Page/121076089153",
  //           "tags": [],
  //           "title": "Unternehmen",
  //           "type": "PAGE",
  //           "url": "https://kybunjoya-swiss.myshopify.com/pages/unternehmen"
  //         },
  //         {
  //           "id": "gid://shopify/MenuItem/544373047617",
  //           "resourceId": "gid://shopify/Page/115421249857",
  //           "tags": [],
  //           "title": "Schweizer Produktion",
  //           "type": "PAGE",
  //           "url": "https://kybunjoya-swiss.myshopify.com/pages/schweizer-produktion"
  //         },
  //         {
  //           "id": "gid://shopify/MenuItem/544373080385",
  //           "resourceId": "gid://shopify/Page/120583618881",
  //           "tags": [],
  //           "title": "kybun Joya Therapie",
  //           "type": "PAGE",
  //           "url": "https://kybunjoya-swiss.myshopify.com/pages/kybun-joya-therapie"
  //         },
  //         {
  //           "id": "gid://shopify/MenuItem/544373113153",
  //           "resourceId": "gid://shopify/Page/120591647041",
  //           "tags": [],
  //           "title": "Karriere",
  //           "type": "PAGE",
  //           "url": "https://kybunjoya-swiss.myshopify.com/pages/karriere"
  //         }
  //       ]
  //     }
  //   ]
  // }
  const headerMenu = data?.headerMenu
    ? parseMenu(data?.headerMenu, customPrefixes)
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(data.footerMenu, customPrefixes)
    : undefined;

  return {shop: data.shop, headerMenu, footerMenu};
}

const CART_QUERY = `#graphql
  query CartQuery($cartId: ID!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartFragment
    }
  }

  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...MoneyFragment
              }
              price {
                ...MoneyFragment
              }
              requiresShipping
              title
              image {
                ...ImageFragment
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...MoneyFragment
      }
      totalAmount {
        ...MoneyFragment
      }
      totalDutyAmount {
        ...MoneyFragment
      }
      totalTaxAmount {
        ...MoneyFragment
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
    }
  }

  fragment MoneyFragment on MoneyV2 {
    currencyCode
    amount
  }

  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
`;

export async function getCart({storefront}, cartId) {
  invariant(storefront, 'missing storefront client in cart query');

  const {cart} = await storefront.query(CART_QUERY, {
    variables: {
      cartId,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
    cache: storefront.CacheNone(),
  });

  return cart;
}