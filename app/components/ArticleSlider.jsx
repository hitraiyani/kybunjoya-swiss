import { Link, Heading } from '~/components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toHTML } from '~/lib/utils';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function ArticleSlider({ articles }) {
    return (
<<<<<<< Updated upstream
        <section className='mb-16 article-slide'>
=======
        <section className='article-slide'>
>>>>>>> Stashed changes
            <div className="container">
                <h3 className='text-[#00795C] w-full font-bold text-[35px] lg:text-[55px]  mb-3 mt-16'>Neues und Aktuelles</h3>   
                <Swiper className="article-slider"
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    slidesPerView={3}
                    navigation
                    loop="true"
                    spaceBetween= "16"
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
                        {articles?.edges?.map((article, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div >
                                        <Link to={`#`} className="relative block overflow-hidden">
                                        <div className="img-wrap">
                                        <img
                                                className="object-cover object-center w-full max-h-[300px] h-[300px] 2xl:max-h-[573px] xl:max-h-[400px] xl:h-[573px] lg:max-h-[300px] lg:h-[300px] md:max-h-[300px] md:h-[300px] rounded-md	drop-shadow-md"
                                                src={article.node.image.url}
                                            ></img>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className='max-w-[85%]'>
                                        <p className=' text-[24px] text-black lg:text-[35px] w-full font-bold'>{article.node.title}</p>
                                        <p  className=' text-[14px]  text-black lg:text-[15px] w-full font-normal'>{article.node.content}</p>
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
