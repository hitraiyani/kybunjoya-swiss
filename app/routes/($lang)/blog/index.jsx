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


export const links = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.142/dist/aico-components/aico-components.css',
    },
  ];
};

export default function Article() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

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
        'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.142/dist/aico-components/aico-components.esm.js';
      aicoCompESM.async = true;
      aicoCompESM.type = "module";
      document.body.appendChild(aicoCompESM);
      aicoComp.src =
      'https://cdn.jsdelivr.net/npm/@aiconomy/aico-components@0.0.142/dist/esm/aico-components.js';
      aicoComp.async = true;
      aicoComp.type = "nomodule";
      document.body.appendChild(aicoComp);
    };
    document.body.appendChild(scriptJquery);
    addNewsListener();
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
        <h1>AICO News Test</h1>
        <aico-news-list aico-url="
        https://kybunjoya.aico.swiss/api/v1/"
        aico-bearer-token="2JoIqPu1xfHhCPrVIdJa0LwuK7rnqtoPUGlyLkeG16d78cb3" page-size="4" news-brand-ids="6" next-button-text="Nächste Seite" previous-button-text="Vorherige Seite" locale="de_CH"></aico-news-list>

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

 