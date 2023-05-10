import {useEffect, useState} from 'react';
import {AICO_API_URL, AICO_API_TOKEN, STORE_LOCALE} from '~/lib/const';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

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
  const [slidesPerView, setSlidesPerView] = useState(false);
  const handleTransitionEnd = (swiper) => {    
    if (swiper.activeIndex === 0 || (swiper.slides.length === swiper.activeIndex) ) {
      setSlidesPerView(false);
    } else {
      setSlidesPerView(true);
    }

  };

  return (
    <section className={`${className} brand-sec`}>
      <div className="container">
        <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          Unsere Marken
        </h2>
        <div className="brand-wrap flex flex-row flex-wrap gap-7 lg:gap-10 xl:gap-16 items-center justify-center">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
            spaceBetween={20}
            onSlideChange={handleTransitionEnd}
            centeredSlides= {slidesPerView}
            slidesPerView="auto"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // breakpoints={{
            //   0: {
            //     autoplay: {
            //       delay:2500
            //     }
            //   },
            //   1280: {
            //     autoplay: "true"
            //   },
            // }}
          >
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
                <SwiperSlide key={index} className='!w-[150px] md:!w-[200px]'>
                  <a
                    className="brand-logo opacity-50 hover:opacity-100"
                    href={brandRedirectUrl}
                    key={index}
                  >
                    <img
                      className="w-full h-full object-contain aspect-[4/1]"
                      src={brandImage}
                      alt=""
                    />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
