import { Link, Heading } from '~/components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toHTML } from '~/lib/utils';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function ArticleSlider({ articles }) {

    console.log("sliderMetaObject", articles);
    const sliderImages = [];

    return (
        <section>
            <Heading as="h1" width="narrow" size="heading" className="inline-block">
                    Neues und Aktuelles
            </Heading>
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
                                <div className="collectionsGrid-item relative">
                                    <Link to={`#`} className="relative block h-10 overflow-hidden">
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
        </section>
    );
}
