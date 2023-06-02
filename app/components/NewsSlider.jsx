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
    <>
      <section className="heroSlider-sec mt-[21px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
        <div className="container">
          <div className="relative flex w-full image-container min-h-[320px] overflow-hidden">
            <img
              className="object-cover object-center w-full active"
              id="defaultActive"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/jeremy-lapak-CVvFVQ_-oUg-unsplash_111.png?v=1685708224"
            ></img>
            <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
            <div className="absolute slider-content bottom-[15px] md:bottom-[33px] left-0 right-0 w-full px-[15px] md:px-[33px] lg:px-[46px]">
              <h4 className="text-white desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] font-bold leading-[1.2] mb-[10px]">
                kybun Joya
              </h4>
              <h2 className="mb-[15px] text-white title text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold">
                Neues und Aktuelles
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="article-slide py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px] relative hidden">
        <div className="container">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            Neues und Aktuelles
          </h2>
          <div className="">
            <Slider {...settings}>
              {news?.map((item, index) => {
                return <SingleNewsSlide newItem={item} key={index} />;
              })}
            </Slider>
          </div>
          {/* <div id="swiper-button-prev-news">next</div>
        <div id="swiper-button-next-news">prev</div> */}
        </div>
      </section>
    </>
  );
}
