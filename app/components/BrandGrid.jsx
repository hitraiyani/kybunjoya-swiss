import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import {Heading, Text, Link, ProductCard, Section} from '~/components';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function BrandGrid() {
  return (
    <section className={`brand-sec`}>
      <div className="container">
        <div className="brand-wrap flex flex-row flex-wrap gap-7 lg:gap-10 xl:gap-16 items-center justify-center py-16">
          <a className="brand-logo opacity-50 hover:opacity-100 w-40 h-14" href="#">
            <img
              className="w-full h-full object-contain"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Logo_kybun_Wordmark_1c_black_rgb_1.png?v=1680768381"
              alt=""
            />
          </a>
          <a className="brand-logo opacity-50 hover:opacity-100 w-40 h-14" href="#">
            <img
              className="w-full h-full object-contain"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Joya-Logo-PNG.png?v=1680768381"
              alt=""
            />
          </a>
          <a className="brand-logo opacity-50 hover:opacity-100 w-40 h-14" href="#">
            <img
              className="w-full h-full object-contain"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Layer_1_copy_2.png?v=1680768381"
              alt=""
            />
          </a>
          <a className="brand-logo opacity-50 hover:opacity-100 w-40 h-14" href="#">
            <img
              className="w-full h-full object-contain"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Layer_1_copy_3.png?v=1680768381"
              alt=""
            />
          </a>
          <a className="brand-logo opacity-50 hover:opacity-100 w-40 h-14" href="#">
            <img
              className="w-full h-full object-contain"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Layer_1_copy_4.png?v=1680768381"
              alt=""
            />
          </a>
          <a className="brand-logo opacity-50 hover:opacity-100 w-40 h-14" href="#">
            <img
              className="w-full h-full object-contain"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Layer_1_copy_5.png?v=1680768381"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}
