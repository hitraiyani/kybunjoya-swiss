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
    <section className="article-slide py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
      <div className="container">
        <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          Neues und Aktuelles
        </h2>
        <Swiper
          className="article-slider"
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
          navigation
          spaceBetween="20"
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
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
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
              var badgeLabel = '';
              var brandName = '';
              if (newItem?.attributes?.brands.length > 0) {
                var brand = newItem?.attributes?.brands[0];
                for (var nc = 0; nc < brand.translations.length; nc++) {
                  if (brand.translations[nc].locale == STORE_LOCALE) {
                    var brandName = brand.translations[nc].webName
                      ? brand.translations[nc].webName
                      : brand.translations[nc].name;
                      badgeLabel = brandName.charAt(0).toUpperCase() + brandName.slice(1);
                  }
                }
              }
              var catName = '';
              
              // if (newItem?.attributes?.newsCategory != null) {
              //   var cat = newItem?.attributes?.newsCategory;
              //   for (var nc = 0; nc < cat.translations.length; nc++) {
              //     if (cat.translations[nc].locale == STORE_LOCALE) {
              //       var catName = cat.translations[nc].webName
              //         ? cat.translations[nc].webName
              //         : cat.translations[nc].name;
              //         if (badgeLabel != '') {
              //           badgeLabel+= "/"+catName;
              //         }
              //     }
              //   }
              // }
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
                      <p className="right-[15px] absolute top-[15px]"
                      >
                      <span className='text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize' style={ badgeLabel == 'Kybun' ? { backgroundColor : "#980A2B"} : {}}>{badgeLabel}</span>
                      </p>
                    </Link>
                  </div>
                  <div className="max-w-[85%]">
                    <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                      {newItem?.attributes?.name}
                    </p>
                    <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
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
