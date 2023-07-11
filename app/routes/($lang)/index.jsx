import {defer} from '@shopify/remix-oxygen';
import {Suspense, useEffect, useState} from 'react';
import {Await, useLoaderData, useMatches} from '@remix-run/react';
import {
  Hero,
  CollectionsGrid,
  BrandGrid,
  NewsSlider,
  GruppeSection,
  PursueSection,
  NewsBanner
} from '~/components';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {AICO_API_URL, AICO_API_TOKEN, QUICK_LINK_MENU_TITLE} from '~/lib/const';


const seo = ({data}) => ({
  url : data?.url,
});

export const handle = {
  seo,
};

export async function loader({params,request, context}) {
  const {language, country} = context.storefront.i18n;

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}`.toLowerCase()
  ) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  // const {shop} = await context.storefront.query(HOMEPAGE_SEO_QUERY, {
  //   variables: {handle: 'freestyle'},
  // });

  const heroSlider = await context.storefront.query(
    HOMEPAGE_HERO_SLIDER_QUERY,
    {
      variables: {metaObjectId: 'gid://shopify/Metaobject/1980825921'},
    },
  );

  const fourMainSection = context.storefront.query(
    HOMEPAGE_FOUR_MAIN_SECTION_QUERY,
    {
      variables: {metaObjectId: 'gid://shopify/Metaobject/2003108161'},
    },
  );

  const pursueSection = context.storefront.query(
    HOMEPAGE_PURSUE_SECTION_SECTION_QUERY,
    {
      variables: {metaObjectId: 'gid://shopify/Metaobject/2353365313'},
    },
  );

  const newsBannerSection = context.storefront.query(
    HOMEPAGE_NEWS_BANNER_QUERY,
    {
      variables: {metaObjectId: 'gid://shopify/Metaobject/2362212673'},
    },
  );
  // const brandIcons = context.storefront.query(
  //   HOMEPAGE_BRAND_ICONS_QUERY,
  //   {
  //     variables: {metaObjectId: 'gid://shopify/Metaobject/2168619329'},
  //   },
  // );

  return defer({
    
    heroSlider,
    fourMainSection,
    pursueSection,
    newsBannerSection,
    url: request.url,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  });
}

export default function Homepage() {
  const {
    heroSlider,
    fourMainSection,
    pursueSection,
    newsBannerSection
  } = useLoaderData();
  const [root] = useMatches();

  const [newsSliderData, setNewsSliderData] = useState();

  const skeletons = getHeroPlaceholder([{}, {}, {}]);


  return (
    <>
      <Hero hereMetaObj={heroSlider}/>
      
      {fourMainSection && (
        <Suspense>
          <Await resolve={fourMainSection}>
            {({data}) => {
              if (!data) return <></>;
              return <CollectionsGrid data={data} />;
            }}
          </Await>
        </Suspense>
      )}

      {newsBannerSection && (
        <Suspense>
          <Await resolve={newsBannerSection}>
            {({data}) => {
              if (!data) return <></>;
              return <NewsBanner data={data} />;
            }}
          </Await>
        </Suspense>
      )}
      
      {pursueSection && (
        <Suspense>
          <Await resolve={pursueSection}>
            {({data}) => {
              if (!data) return <></>;
              return <PursueSection data={data} />;
            }}
          </Await>
        </Suspense>
      )}

    </>
  );
}

const COLLECTION_CONTENT_FRAGMENT = `#graphql
  ${MEDIA_FRAGMENT}
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
`;

const HOMEPAGE_SEO_QUERY = `#graphql
  query collectionContent($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    shop {
      name
      description
    }
  }
`;

const COLLECTION_HERO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
  }
`;

// @see: https://shopify.dev/api/storefront/latest/queries/products
export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

export const HOMEPAGE_ARTICLE_SLIDER_QUERY = `#graphql
  query homepageArticleSliderQuery($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    articles(first : 10) {
      edges {
        node {
          handle
          image {
              id
              altText
              url
              width
              height
            }
          publishedAt
          title
          content
        }
      }
    }
  }
`;

// @see: https://shopify.dev/api/storefront/latest/queries/collections
export const FEATURED_COLLECTIONS_QUERY = `#graphql
  query homepageFeaturedCollections($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collections(
      first: 4,
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

const HOMEPAGE_HERO_SLIDER_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query homeStyleGuide($metaObjectId: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    data : metaobject(id : $metaObjectId) {
      handle
      id
      type
      title : field(key: "title") {
        value
      }
      sub_title : field(key: "sub_title") {
        value
      }
      video_tag_mp_4_url : field(key: "video_tag_mp_4_url") {
        value
      }
      video_tag_ogg_url : field(key: "video_tag_ogg_url") {
        value
      }
      video_tag_image_url : field(key: "video_tag_image_url") {
        value
      }
      sub_title_image : field(key: "sub_title_image") {
        reference {
          ...Media
        }
      }
    }
  }
`;

const HOMEPAGE_BRAND_ICONS_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query homeStyleGuide($metaObjectId: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    data : metaobject(id : $metaObjectId) {
      handle
      id
      type
      images : field(key: "images") {
        references(first: 15) {
          edges {
            node {
              ...Media
            }
          }
        }
      }
    }
  }
`;

const HOMEPAGE_FOUR_MAIN_SECTION_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query homeStyleGuide($metaObjectId: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    data : metaobject(id : $metaObjectId) {
      handle
      id
      type
      main_title : field(key: "main_title") {
        value
      }
      section_1_text : field(key: "section_1_text") {
        value
      }
      section_1_image : field(key: "section_1_image") {
        reference {
          ...Media
        }
      }
      section_1_button_redirect : field(key: "section_1_button_redirect") {
        value
      }
      section_2_image : field(key: "section_2_image") {
        reference {
          ...Media
        }
      }
      section_2_text : field(key: "section_2_text") {
        value
      }
      section_2_button_redirect : field(key: "section_2_button_redirect") {
        value
      }
      section_3_image : field(key: "section_3_image") {
        reference {
          ...Media
        }
      }
      section_3_text : field(key: "section_3_text") {
        value
      }
      section_3_button_redirect : field(key: "section_3_button_redirect") {
        value
      }
      section_4_image : field(key: "section_4_image") {
        reference {
          ...Media
        }
      }
      section_4_mask_image : field(key: "section_4_mask_image") {
        reference {
          ...Media
        }
      }
      section_4_text : field(key: "section_4_text") {
        value
      }
      section_4_button_redirect : field(key: "section_4_button_redirect") {
        value
      }
    }
  }
`;


const HOMEPAGE_PURSUE_SECTION_SECTION_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query homeStyleGuide($metaObjectId: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    data : metaobject(id : $metaObjectId) {
      handle
      id
      type
      main_title : field(key: "main_title") {
        value
      }
      section_1_text : field(key: "section_1_text") {
        value
      }
      section_1_image : field(key: "section_1_image") {
        reference {
          ...Media
        }
      }
      section_1_button_text : field(key: "section_1_button_text") {
        value
      }
      section_2_image : field(key: "section_2_image") {
        reference {
          ...Media
        }
      }
      section_2_text : field(key: "section_2_text") {
        value
      }
      section_2_button_text : field(key: "section_2_button_text") {
        value
      }
      section_3_image : field(key: "section_3_image") {
        reference {
          ...Media
        }
      }
      section_3_text : field(key: "section_3_text") {
        value
      }
      section_3_button_text : field(key: "section_3_button_text") {
        value
      }
      section_4_image : field(key: "section_4_image") {
        reference {
          ...Media
        }
      }
      section_4_text : field(key: "section_4_text") {
        value
      }
      section_4_button_text : field(key: "section_4_button_text") {
        value
      }
    }
  }
`;

const HOMEPAGE_NEWS_BANNER_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query homeStyleGuide($metaObjectId: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    data : metaobject(id : $metaObjectId) {
      handle
      id
      type
      title : field(key: "title") {
        value
      }
      sub_title : field(key: "sub_title") {
        value
      }
      banner_image : field(key: "banner_image") {
        reference {
          ...Media
        }
      }
    }
  }
`;
