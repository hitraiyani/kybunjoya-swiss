import { Link, Heading } from '~/components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toHTML } from '~/lib/utils';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function ArticleSlider({ articles }) {
    return (
        <section>
            <div className="container">
                <h3 className='text-[#00795C] w-full font-bold text-2xl mb-3'>Neues und Aktuelles</h3>   
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    slidesPerView={3}
                    navigation
                    loop="true"
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    autoplay="false"
                >
                    <div className="grid grid-cols-3">
                        {articles?.edges?.map((article, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div >
                                        <Link to={`#`} className="relative block overflow-hidden">
                                        <div className="img-wrap">
                                        <img
                                                className="object-cover object-center"
                                                src={article.node.image.url}
                                            ></img>
                                        </div>
                                        </Link>
                                    </div>
                                    <p>{article.node.title}</p><br/>
                                    <p>{article.node.content}</p>
                                </SwiperSlide>
                            
                            );
                        })}
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
