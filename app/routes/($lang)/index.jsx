import {defer} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {ProductSwimlane, FeaturedCollections, Hero, HeroSlider, CollectionsGrid} from '~/components';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {AnalyticsPageType} from '@shopify/hydrogen';

export async function loader({params, context}) {
  const {language, country} = context.storefront.i18n;

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  const {shop, hero} = await context.storefront.query(HOMEPAGE_SEO_QUERY, {
    variables: {handle: 'freestyle'},
  });

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

  return defer({
    shop,
    heroSlider,
    fourMainSection,
    articleSliders: await context.storefront.query(HOMEPAGE_ARTICLE_SLIDER_QUERY, {
        variables: {
          country,
          language,
        },
      }),
    // primaryHero: hero,
    // featuredProducts: context.storefront.query(
    //   HOMEPAGE_FEATURED_PRODUCTS_QUERY,
    //   {
    //     variables: {
    //       country,
    //       language,
    //     },
    //   },
    // ),
    // secondaryHero: context.storefront.query(COLLECTION_HERO_QUERY, {
    //   variables: {
    //     handle: 'backcountry',
    //     country,
    //     language,
    //   },
    // }),
    // featuredCollections: context.storefront.query(FEATURED_COLLECTIONS_QUERY, {
    //   variables: {
    //     country,
    //     language,
    //   },
    // }),
    // tertiaryHero: context.storefront.query(COLLECTION_HERO_QUERY, {
    //   variables: {
    //     handle: 'winter-2022',
    //     country,
    //     language,
    //   },
    // }),
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  });
}

export default function Homepage() {
  const {
    heroSlider,
    fourMainSection,
    articleSliders,
    // primaryHero,
    // secondaryHero,
    // tertiaryHero,
    // featuredCollections,
    // featuredProducts,
  } = useLoaderData();

  // TODO: skeletons vs placeholders
  const skeletons = getHeroPlaceholder([{}, {}, {}]);

  console.log("articleSliders", articleSliders);

  // TODO: analytics
  // useServerAnalytics({
  //   shopify: {
  //     pageType: ShopifyAnalyticsConstants.pageType.home,
  //   },
  // });

  return (
    <>
      <HeroSlider sliderMetaObject={heroSlider}/>
      {fourMainSection && (
        <Suspense>
          <Await resolve={fourMainSection}>
            {({data}) => {
              if (!data) return <></>;
              return (
                <CollectionsGrid
                  data={data}
                />
              );
            }}
          </Await>
        </Suspense>
      )}
      {/* {primaryHero && (
        <Hero {...primaryHero} height="full" top loading="eager" />
      )}
      {featuredProducts && (
        <Suspense>
          <Await resolve={featuredProducts}>
            {({products}) => {
              if (!products?.nodes) return <></>;
              return (
                <ProductSwimlane
                  products={products.nodes}
                  title="Featured Products"
                  count={4}
                />
              );
            }}
          </Await>
        </Suspense>
      )}

      {secondaryHero && (
        <Suspense fallback={<Hero {...skeletons[1]} />}>
          <Await resolve={secondaryHero}>
            {({hero}) => {
              if (!hero) return <></>;
              return <Hero {...hero} />;
            }}
          </Await>
        </Suspense>
      )}

      {featuredCollections && (
        <Suspense>
          <Await resolve={featuredCollections}>
            {({collections}) => {
              if (!collections?.nodes) return <></>;
              return (
                <FeaturedCollections
                  collections={collections.nodes}
                  title="Collections"
                />
              );
            }}
          </Await>
        </Suspense>
      )}

      {tertiaryHero && (
        <Suspense fallback={<Hero {...skeletons[2]} />}>
          <Await resolve={tertiaryHero}>
            {({hero}) => {
              if (!hero) return <></>;
              return <Hero {...hero} />;
            }}
          </Await>
        </Suspense>
      )} */}
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
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
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
    articles(first : 10,  sortKey: UPDATED_AT) {
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
      cta : field(key: "cta") {
        value
      }
      cta_label : field(key: "cta_label") {
        value
      }
      image : field(key: "image") {
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
      section_1_image : field(key: "section_1_image") {
        reference {
          ...Media
        }
      }
      section_1_button_text : field(key: "section_1_button_text") {
        value
      }
      section_1_button_redirect : field(key: "section_1_button_redirect") {
        value
      }
      section_2_image : field(key: "section_2_image") {
        reference {
          ...Media
        }
      }
      section_2_button_text : field(key: "section_2_button_text") {
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
      section_3_button_text : field(key: "section_3_button_text") {
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
      section_4_button_text : field(key: "section_4_button_text") {
        value
      }
      section_4_button_redirect : field(key: "section_4_button_redirect") {
        value
      }
    }
  }
`;
