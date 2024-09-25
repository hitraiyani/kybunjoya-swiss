import {json} from '@shopify/remix-oxygen';
import {defer} from '@shopify/remix-oxygen';
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

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}`.toLowerCase()
  ) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  return defer({
    language
  });
}
export const links = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.179/dist/aico-components/aico-components.css',
    },
  ];
};

export default function Article({context}) {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const {
    language 
  } = useLoaderData();
  let lang_localize;
  if( language == "DE"){
    lang_localize = "de_CH"

  } else if( language == "EN") {
    lang_localize = "en"
  }
  useEffect(() => {
    // Load jQuery script
    const scriptJquery = document.createElement('script');
    const aicoCompESM = document.createElement('script');
    const aicoComp = document.createElement('script');
    scriptJquery.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
    scriptJquery.async = true;
    scriptJquery.onload = () => {
      setScriptsLoaded((prevState) => ({...prevState, jqueryLoaded: true}));
      aicoCompESM.src =
        'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.179/dist/aico-components/aico-components.esm.js';
      aicoCompESM.async = true;
      aicoCompESM.type = "module";
      document.body.appendChild(aicoCompESM);
      aicoComp.src =
      'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.179/dist/esm/aico-components.js';
      aicoComp.async = true;
      aicoComp.type = "nomodule";
      document.body.appendChild(aicoComp);
    };
    document.body.appendChild(scriptJquery);
    addNewsListener();
    return () => {
      // Clean up the script tags when the component unmounts
    };

  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="title-wrap mt-[85px] lg:mt-[85px]"></div>
      </div>
      <div className="container blog-page-articles-container mx-auto mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
        <h1 className="title-blog-page text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">News</h1>
        <aico-news-list aico-url="
        https://kybunjoya.aico.swiss/api/v1/"
        aico-bearer-token="2JoIqPu1xfHhCPrVIdJa0LwuK7rnqtoPUGlyLkeG16d78cb3" page-size="8" news-brand-ids="7" next-button-text="" news-channels="B2C" previous-button-text="" locale={lang_localize}></aico-news-list>
      </div>
    </>
  );
}
 
// const getCookieValue = (name) => (
//    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
//  )
//  $( document ).ready(function() {
  
//    $( document ).ready(function() {
//      setTimeout(addNewsListener, 1000);
//    });
  
  
//  });
  
 function addNewsListener() {
   const newsList = document.querySelector('aico-news-list');
   newsList.addEventListener('articleClick', event => {
      //navigateToArticle(event.detail);
    event.preventDefault();
    window.location = "https://kybunjoya.swiss/news/"+event.detail.attributes.urlHandle;
  });
 }

 