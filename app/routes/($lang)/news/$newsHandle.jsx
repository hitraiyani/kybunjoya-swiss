import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {useEffect, useState} from 'react';
import invariant from 'tiny-invariant';
import {PageHeader, Section} from '~/components';
import {
  AICO_API_URL,
  AICO_API_TOKEN,
  STORE_LOCALE,
  ATTR_LOADING_EAGER,
} from '~/lib/const';
import {newsDescription} from '~/lib/utils';
import styles from '~/styles/news.css';

// const seo = ({data}) => ({
//   title: data?.article?.seo?.title,
//   description: data?.article?.seo?.description,
//   titleTemplate: '%s | Journal',
// });

// export const handle = {
//   seo,
// };

export async function loader({params, context}) {
  const {language, country} = context.storefront.i18n;
  invariant(params.newsHandle, 'Missing journal handle');
  const newsResponse = await fetch(
    `${AICO_API_URL}news?filter[urlHandle]=${params.newsHandle}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${AICO_API_TOKEN}`,
      },
    },
  );
  const news = await newsResponse.json();

  if (!news?.data) {
    throw new Response(null, {status: 404});
  }
  const newsObj = news?.data[0]?.attributes;
  newsObj.handle = params.newsHandle;
  newsObj.lang = `${language}`.toLowerCase()+`_${country}`;

  newsObj.formattedpublishDate = new Intl.DateTimeFormat(
    `${language}-${country}`,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  ).format(new Date(newsObj?.publishDate));

  return json(
    {newsObj},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

const seo = ({data}) => {
  return {
    titleTemplate: `News - ${data?.newsObj?.pageTitle ? data?.newsObj?.pageTitle : data?.newsObj?.name}`,
  };
};

export const handle = {
  seo,
};

export const links = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.136/dist/aico-components/aico-components.css',
    },
  ];
};

export default function Article() {
  const {newsObj} = useLoaderData();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const newsContent = newsDescription(newsObj?.contentBuilder);
  console.log(STORE_LOCALE)
  var catName = '';
  if (newsObj.newsCategory != null) {
    var cat = newsObj.newsCategory;
    for (var nc = 0; nc < cat.translations.length; nc++) {
      if (cat.translations[nc].locale == STORE_LOCALE) {
        var catName = cat.translations[nc].webName
          ? cat.translations[nc].webName
          : cat.translations[nc].name;
      }
    }
  }

  useEffect(() => {
    // Load jQuery script
    const scriptJquery = document.createElement('script');
    const aicoCompESM = document.createElement('script');
    const aicoComp = document.createElement('script');
    scriptJquery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    scriptJquery.async = true;
    scriptJquery.onload = () => {
      setScriptsLoaded((prevState) => ({...prevState, jqueryLoaded: true}));
      aicoCompESM.src =
        'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.136/dist/aico-components/aico-components.esm.js';
      aicoCompESM.async = true;
      aicoCompESM.type = "module";
      document.body.appendChild(aicoCompESM);
      aicoComp.src =
      'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.136/dist/esm/aico-components.js';
      aicoComp.async = true;
      aicoComp.type = "nomodule";
      document.body.appendChild(aicoComp);
    };
    document.body.appendChild(scriptJquery);

    return () => {
      // Clean up the script tags when the component unmounts
      document.body.removeChild(scriptJquery);
      document.body.removeChild(aicoCompESM);
      document.body.removeChild(aicoComp);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="title-wrap mt-[85px] lg:mt-[85px]"></div>
      </div>
      <div className="container mx-auto mb-[24px]">
        <div id="news-details-container">
        <aico-fetch-article-detail aico-url="https://kybunjoya.aico.swiss/api/v1/" aico-bearer-token="2JoIqPu1xfHhCPrVIdJa0LwuK7rnqtoPUGlyLkeG16d78cb3" article-url-handle={newsObj.handle} locale={newsObj.lang}></aico-fetch-article-detail>
        </div>
      </div>
    </>
  );
}
