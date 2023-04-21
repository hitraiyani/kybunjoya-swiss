import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import { toHTML } from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ExpandingCard, Link} from '~/components';
import {MEDIA_FRAGMENT} from '~/data/fragments';

const seo = ({data}) => ({
    title: data?.page?.seo?.title,
    description: data?.page?.seo?.description,
  });
  
  export const handle = {
    seo,
  };
  
  export async function loader({request, params, context}) {
    
    const {page} = await context.storefront.query(PAGE_QUERY, {
        variables: {
          handle: 'schweizer-schuhpropktion',
          language: context.storefront.i18n.language,
        },
      });
  
    if (!page) {
      throw new Response(null, {status: 404});
    }
  
    return json(
      {page},
      {
        headers: {
          // TODO cacheLong()
        },
      },
    );
  }

export default function schweizerSchuhpropktion() {
    const {page} = useLoaderData();


    const sliderImages =
    page?.slider_images?.references?.edges.map(
      (data) => data.node.image.url,
    );

    const faqArr = page?.faq?.value ? JSON.parse(page.faq.value) : [];

    return (
        <>
          <div className="container">
            <div className="title-wrap mt-[120px] lg:mt-[200px]">
              <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[60px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
                {page?.head_title?.value}
              </h2>
            </div>
          </div>
          <div className="banner container">
            <div className="banner-row">
              <img
                className="object-cover rounded-xl w-full"
                src={page?.hero_image?.reference?.image?.url}
                alt=""
              />
            </div>
          </div>
          <div className="about-sec container mt-[48px]">
            <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px]">
              <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1}
                  navigation={false}
                  loop="false"
                  autoplay="false"
                  pagination={{clickable: true}}
                  className="h-full overflow-visible rounded-xl flex flex-col"
                >
                    {sliderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                            className="h-full object-cover  rounded-xl block"
                            src={image}
                            alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="content-col flex-1 flex flex-col justify-center">
                <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold">
                  {page?.main_title?.value}
                </h2>
                <h3 className="subtitle text-[18px] lg:text-[23px] text-balck leading-[1.3] mb-[20px] font-[400]"
                    dangerouslySetInnerHTML={{
                        __html: toHTML(page?.short_description?.value),
                      }}
                >
                </h3>
                <Link to={page?.book_now_link?.value} className="inline-block rounded-[100px] bg-black text-white
                 text-center px-[35px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit">
                    Jetzt Buchen
                </Link>
                <div className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] mt-[30px] md:mt-[40px] xl:mt-[60px] font-[400]"
                    dangerouslySetInnerHTML={{
                        __html: toHTML(page?.long_description?.value),
                      }}
                >
                </div>
              </div>
            </div>
          </div>
            {faqArr.length > 0 && (
                <div className="faq-sec container mt-10">
                <h3 className="title uppercase text-[18px] leading-[1.2] pb-[10px] border-b border-[#595959] font-normal">
                Häufige Fragen
                </h3>
                {faqArr.map((item) => (
                    <ExpandingCard
                    content={item.answer}
                    title={item.question}
                    />
                ))}
                </div>
            )}
          <div className="video-sec container mt-[40px] xl:mt-[87px] mb-[50px] lg:mb-[80px] xl:mb-[134px]">
            <div className="title-wrap">
              <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold">
                {page?.video_section_title?.value}
              </h2>
              <div className="video-wrap">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src={page?.video_section_url?.value}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="btn-wrap">
               <Link to={page?.book_now_link?.value} className="inline-block rounded-[100px] bg-black text-white
                 text-center px-[35px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit mt-[20px] xl:mt-[48px]">
                    Jetzt Buchen
               </Link>
              </div>
            </div>
          </div>
        </>
      );
}


const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      hero_image: metafield(namespace: "custom", key: "hero_image") {
        reference {
          ...Media
        }
      }
      slider_images: metafield(namespace: "custom", key: "slider_images") {
        references(first: 5) {
            edges {
                node {
                ...Media
                }
            }
        }
      }
      main_title: metafield(namespace: "custom", key: "main_title") {
        value
      }
      long_description: metafield(namespace: "custom", key: "long_description") {
        value
      }
      short_description: metafield(namespace: "custom", key: "short_description") {
        value
      }
      book_now_link: metafield(namespace: "custom", key: "book_now_link") {
        value
      }
      head_title: metafield(namespace: "custom", key: "head_title") {
        value
      }
      video_section_title: metafield(namespace: "custom", key: "video_section_title") {
        value
      }
      video_section_url: metafield(namespace: "custom", key: "video_section_url") {
        value
      }
      faq: metafield(namespace: "custom", key: "faq") {
        value
      }
      seo {
        description
        title
      }
    }
  }
`;
