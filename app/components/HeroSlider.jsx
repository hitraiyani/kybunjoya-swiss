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
    className={`-mt-nav aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]`}
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
                <div className="flex flex-co w-full h-96">
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

