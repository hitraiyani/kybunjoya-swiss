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
  ];
};

export default function Article() {
  const {newsObj} = useLoaderData();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const newsContent = newsDescription(newsObj?.contentBuilder);

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
    const scriptSlick = document.createElement('script');
    scriptJquery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    scriptJquery.async = true;
    scriptJquery.onload = () => {
      setScriptsLoaded((prevState) => ({...prevState, jqueryLoaded: true}));

      // Load Slick script
      scriptSlick.src =
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      scriptSlick.async = true;
      scriptSlick.onload = () => {
        setScriptsLoaded((prevState) => ({...prevState, slickLoaded: true}));
      };
      document.body.appendChild(scriptSlick);
    };
    document.body.appendChild(scriptJquery);

    return () => {
      // Clean up the script tags when the component unmounts
      document.body.removeChild(scriptJquery);
      document.body.removeChild(scriptSlick);
    };
  }, []);

  useEffect(() => {
    if (scriptsLoaded?.jqueryLoaded && scriptsLoaded?.slickLoaded) {
      // Initialize Slick slider
      setTimeout(() => {
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          //arrows: true,
          asNavFor: '.slider-nav',
          adaptiveHeight: true,
        });
        $('.slider-nav').slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          centerMode: true,
          focusOnSelect: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 5,
              },
            },
          ],
        });
      }, 300);
    }
  }, [scriptsLoaded]);

  return (
    <>
      <div className="container mx-auto">
        <div className="title-wrap mt-[85px] lg:mt-[85px]"></div>
      </div>
      <div className="container mx-auto">
        <div id="news-details-container">
          <div className="news-content-wrapper">
            <div className="flex flex-wrap gap-2 text-[16px] text-black">
              <span>Brand {catName ? `/ ${catName}` : ''}</span>
              <span>
                {newsObj?.formattedpublishDate}
              </span>
            </div>
            {newsObj.image && (
              <div className='new--main-img img-wrap relative overflow-hidden rounded-md pb-[30%] mt-[20px] min-h-[350px]'>
                <Image
                  data={{
                    url: newsObj.image,
                  }}
                  className="rounded-md absolute inset-0 w-full h-full object-cover"
                  widths={[400, 800, 1200]}
                  width="100px"
                  loading={ATTR_LOADING_EAGER}
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                />
              </div>
            )}
            <div className="page-width page-width--narrow">
              <div className="title-wrapper">
                <h2>{newsObj?.name}</h2>
              </div>
              <div dangerouslySetInnerHTML={{__html: newsContent}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
