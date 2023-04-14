import {Link, Heading} from '~/components';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {toHTML, truncate} from '~/lib/utils';
import {STORE_LOCALE} from '~/lib/const';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function NewsSlider({news}) {
  return (
    <section className="article-slide">
      <div className="container">
        <h3 className="text-[#00795C] w-full font-bold text-[35px] lg:text-[55px]  mb-3 mt-16">
          Neues und Aktuelles
        </h3>
        <Swiper
          className="article-slider"
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          slidesPerView={3}
          navigation
          loop="true"
          spaceBetween="16"
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          autoplay="false"
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 xl:grid-cols-3">
            {news?.map((newItem, index) => {
              let imgSrc = newItem?.attributes?.optimizedImage;
              if (newItem.attributes.optimizedImage == null) {
                imgSrc = newItem.attributes.image;
              } else if (newItem.attributes.image == null) {
                imgSrc = '';
              }
              var catName = '';
              if (newItem?.attributes?.newsCategory != null) {
                var cat = newItem?.attributes?.newsCategory;
                for (var nc = 0; nc < cat.translations.length; nc++) {
                  if (cat.translations[nc].locale == STORE_LOCALE) {
                    var catName = cat.translations[nc].webName
                      ? cat.translations[nc].webName
                      : cat.translations[nc].name;
                  }
                }
              }
              return (
                <SwiperSlide key={index}>
                  <div>
                    <Link
                      to={`/pages/news/${newItem.attributes.urlHandle}`}
                      className="relative block overflow-hidden mb-5"
                    >
                      <div className="img-wrap">
                        <img
                          className="object-cover object-center w-full rounded-md aspect-square drop-shadow-md"
                          src={imgSrc}
                        ></img>
                      </div>
                      <p className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none top-0 right-0 w-fit py-[10px] px-[16px] rounded-tr-md absolute shadow-md">
                        Brand {catName ? `/ ${catName}` : ''}
                      </p>
                    </Link>
                  </div>
                  <div className="max-w-[85%]">
                    <p className=" text-[24px] text-black lg:text-[35px] w-full font-bold leading-[1.2] mb-[15px]">
                      {newItem?.attributes?.name}
                    </p>
                    <p className=" text-[14px]  text-black lg:text-[15px] w-full font-normal">
                      {truncate(newItem?.attributes?.excerpt)}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
