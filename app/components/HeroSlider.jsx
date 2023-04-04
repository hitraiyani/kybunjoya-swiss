import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import {Heading, Text, Link, ProductCard, Section} from '~/components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function HeroSlider({
  height,
  top
}) {
  const imageSlider = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300'

  ];
  return (
    <div className="container mx-auto overflow-x-hidden">
            <div className="flex flex-wrap">
                <div  className={` md:grid-flow-row  md:p-0 md:overflow-x-auto`}>
                <Swiper
                        modules={[Navigation,Scrollbar, A11y, Autoplay]}
                        slidesPerView={1}
                        navigation
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                    {imageSlider.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className='prodcut-item' key={index}>
                        <img className="object-fill w-full h-96"  src={product}></img>
                        </div>
                    </SwiperSlide>
                    ))}
                    
                </Swiper>   
                </div>
            </div>
        </div>
  );
}

