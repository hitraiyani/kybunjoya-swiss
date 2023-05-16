import {Link, Heading, ArrowRight, SingleNewsSlide} from '~/components';
import Slider from 'react-slick';
import {toHTML, truncate} from '~/lib/utils';
import {STORE_LOCALE} from '~/lib/const';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function NewsSlider({news}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
          centerMode: true,
        },
      },
    ],
  };
  return (
    <section className="article-slide py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px] relative">
      <div className="container">
        <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          Neues und Aktuelles
        </h2>
        <div className="">
          <Slider {...settings}>
            {news?.map((item, index) => {
               return <SingleNewsSlide newItem={item} key={index} />
            })}
          </Slider>
        </div>
        {/* <div id="swiper-button-prev-news">next</div>
        <div id="swiper-button-next-news">prev</div> */}
      </div>
    </section>
  );
}
