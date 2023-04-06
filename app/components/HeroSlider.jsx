import {Link} from '~/components';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {toHTML} from '~/lib/utils';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function HeroSlider({sliderMetaObject}) {
  const sliderImages =
    sliderMetaObject?.data?.image?.references?.edges.map(
      (data) => data.node.image.url,
    );

  return (
    <section className={`heroSlider-sec`}>

      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        loop="true"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        autoplay="false"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="prodcut-items">
              <div className="prodcut-item" key={index}>
                <div className="flex flex-co w-full h-screen relative">
                  <img
                    className="object-cover object-center w-full" id="home_slider_image"
                    src={image}
                  ></img>
                  <div className="img-overlay absolute w-full h-2/4 inset-x-0 bottom-0"></div>
                  <div className="slider-content absolute bottom-12 lg:bottom-28 left-5 md:left-20">
                    <h2 className="title text-white font-extrabold mb-6" dangerouslySetInnerHTML={{
                      __html: toHTML(sliderMetaObject?.data?.title?.value),
                    }}>
                    </h2>
                    <h4 className="sub-title text-white font-medium mb-6 " dangerouslySetInnerHTML={{
                      __html: toHTML(sliderMetaObject?.data?.sub_title?.value),
                    }}>
                    </h4>
                    <Link
                      to={`${sliderMetaObject?.data?.cta?.value}`}
                      className="btn bg-white text-black font-medium text-lg lg:py-6 lg:px-14 py-4 px-8 hover:bg-black hover:text-white inline-block transition-all"
                    >
                     {sliderMetaObject?.data?.cta_label?.value}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
