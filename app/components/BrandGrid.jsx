import {useEffect, useState} from 'react';
import {AICO_API_URL, AICO_API_TOKEN, STORE_LOCALE} from '~/lib/const';
import Slider from 'react-slick';

export function BrandGrid({className}) {
  const [brandData, setbrandData] = useState([]);

  const loadBrandSlider = async () => {
    const brandResponse = await fetch(
      `${AICO_API_URL}brands?filter[isTopBrand]=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AICO_API_TOKEN}`,
        },
      },
    );
    const brandResponseData = await brandResponse.json();
    setbrandData(brandResponseData.data);
  };

  // const brandImages =
  //   data?.images?.references?.edges.map(
  //     (data) => data.node.image.url,
  //   );

  useEffect(() => {
    loadBrandSlider();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 5,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 2,
          centerPadding: '50px',
        },
      },
    ],
  };
  return (
    <section className={`${className} brand-sec`}>
      <div className="container">
        <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          Unsere Marken
        </h2>
        <div className="brand-wrap">
          <Slider {...settings}>
            {brandData.map((item, index) => {
              let brandImage = '';
              let brandRedirectUrl = '';
              if (item?.attributes?.translations != null) {
                const itemTrans = item?.attributes?.translations;
                for (var nc = 0; nc < itemTrans.length; nc++) {
                  if (itemTrans[nc].locale == STORE_LOCALE) {
                    brandImage = itemTrans[nc].image;
                    brandRedirectUrl = itemTrans[nc].videoUrl;
                    var prefix = 'http://';
                    if (
                      brandRedirectUrl &&
                      brandRedirectUrl.substr(0, prefix.length) !== prefix
                    ) {
                      brandRedirectUrl = prefix + brandRedirectUrl;
                    }
                  }
                }
              }
              return (
                <a
                  className="brand-logo opacity-50 hover:opacity-100 !w-[180px] md:!w-[200px]"
                  href={brandRedirectUrl}
                  key={index}
                >
                  <img
                    className="w-full h-full object-contain aspect-[4/1]"
                    src={brandImage}
                    alt=""
                  />
                </a>
              );
            })}
          </Slider>
          {/* {brandImages.map((image, index) => (
            <a className="brand-logo opacity-50 hover:opacity-100 w-28 sm:w-40 h-14" href="#" key={index}>
              <img
                className="w-full h-full object-contain"
                src={image}
                alt=""
              />
            </a>
        ))} */}
        </div>
      </div>
    </section>
  );
}
