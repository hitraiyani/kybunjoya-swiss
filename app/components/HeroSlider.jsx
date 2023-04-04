import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import {Heading, Text, Link, ProductCard, Section} from '~/components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function HeroSlider({
    sliderImageMetaObject
}) {

  const sliderImages = sliderImageMetaObject?.data?.image?.references?.edges.map((data) => data.node.image.url);

  
  return (
    <section
    className={`heroSlider-sec`}
    >
      <Swiper
              modules={[Navigation,Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="prodcut-items">
              <div className='prodcut-item' key={index}>
                <div className="flex flex-co w-full h-32 sm:h-48 md:h-60 lg:h-96">
                    <img className='object-cover object-center w-full' src={image}></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      </Swiper>
     
    </section>
  );
}

