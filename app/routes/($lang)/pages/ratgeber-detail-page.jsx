import {ExpandingCardStyle2, Link, IconClose, Breadcrumb} from '~/components';
import React, {Fragment, useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
});

export const handle = {
  seo,
};
const PAGINATION_SIZE = 40;
export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'ratgeber-detail-page',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const pageCollectionTitle =
    page?.ratgeber_detail?.reference?.page_collection?.reference?.title;

  const {sub_collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: {
      searchTerm: `title:\\"${pageCollectionTitle}\\"`,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  const collectionHandle = 'all-products';

  const searchParams = new URL(request.url).searchParams;

  const knownFilters = ['productVendor', 'productType'];
  const available = 'available';
  const variantOption = 'variantOption';
  const {sortKey, reverse} = getSortValuesFromParam(searchParams.get('sort'));
  const cursor = searchParams.get('cursor');

  const filters = [{productType: 'Dr. kybun Joya'}];

  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      handle: collectionHandle,
      pageBy: PAGINATION_SIZE,
      cursor,
      filters,
      sortKey,
      reverse,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  return json(
    {page, collection, sub_collections, pageCollectionTitle},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}
export default function ratgeberseite() {
  const {page, collection, sub_collections, pageCollectionTitle} =
    useLoaderData();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredKybunJoyaProducts = collection?.products?.nodes.filter(
    (product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    },
  );

  const buttonAccordionMapping = page?.ratgeber_detail?.reference
    ?.button_accordion_mapping?.value
    ? JSON.parse(page.ratgeber_detail.reference.button_accordion_mapping.value)
    : [];

  const productSliderData = page?.ratgeber_detail?.reference?.product_slider_data?.value ? JSON.parse(page?.ratgeber_detail?.reference?.product_slider_data?.value) : [];

  useEffect(() => {
    document.querySelectorAll('.my-achor-link').forEach(function (link) {
      link.addEventListener('mouseover', function (e) {
        e.preventDefault();

        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          icon.classList.remove('active');
        });

        const hashId = this.hash.substring(1);

        const kgIcon = document.getElementById(
          hashId.replace('link', 'kb-body-icon-'),
        );
        kgIcon?.classList?.add('active');
      });
      link.addEventListener('mouseout', function (e) {
        e.preventDefault();
        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          let activeLink = document.getElementsByClassName(
            'my-achor-link active',
          )[0];
          if (activeLink) {
            const [hash, query] = activeLink.href.split('#')[1].split('?');
            const iconId = hash.replace('link', 'kb-body-icon-');
            if (icon.id != iconId) {
              icon.classList.remove('active');
            } else {
              icon.classList.add('active');
            }
          } else {
            icon.classList.remove('active');
          }
        });
      });
    });

    document.querySelectorAll('.my-achor-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.my-achor-link').forEach(function (link) {
          link.classList.remove('active');
        });

        document.querySelectorAll('.kb-body-icon').forEach(function (icon) {
          icon.classList.remove('active');
        });

        if (this.getAttribute('hreflink')) {
          window.location.href = this.getAttribute('hreflink');
          return true;
        }

        // add active class to clicked element
        this.classList.add('active');

        const hashId = this.hash.substring(1);

        const kgIcon = document.getElementById(
          hashId.replace('link', 'kb-body-icon-'),
        );
        kgIcon?.classList?.add('active');

        document
          .querySelectorAll('.kb-accordion')
          .forEach(function (accordion) {
            if (
              accordion.id != hashId &&
              accordion.getAttribute('data-headlessui-state') == 'open'
            ) {
              accordion?.querySelector('button')?.click();
            }
          });
        var myElement = document.querySelector('#' + hashId);
        if (
          myElement &&
          myElement?.getAttribute('data-headlessui-state') != 'open'
        ) {
          myElement?.querySelector('button')?.click();
        }

        setTimeout(() => {
          var target = this.hash;
          var $target = document.querySelector(target);
          var scrollDistance = $target.offsetTop - 90;

          window.scrollTo({
            top: scrollDistance,
            behavior: 'smooth',
          });
        }, 500);
      });
    });
  }, []);

  return (
    <>
      {/* <Breadcrumb crumbs={getBreadCrumbs(null, 'ratgeber')} /> */}
      <section className="dr-info-tabs-section">
        <div className="container">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap flex-col gap-x-[46px] justify-center md:justify-start">
              <div className="content-info w-full xl:flex-[1]">
                <div className="title-wrap text-left">
                  <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
                    {page?.ratgeber_detail?.reference?.head_title?.value}
                  </h2>
                  <div className="product-list-hero-img relative overflow-hidden pb-[29%] min-h-[270px]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover object-left-top"
                      src={page?.ratgeber_detail?.reference?.hero_image?.reference?.image?.url}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="desc mt-[20px] mx-auto lg:mt-[30px] xl:mt-[52px] text-[28px] md:text-[30px] lg:text-[35px] 2xl:text-[40px] tracking-[-0.97152px]  text-left xl:text-right text-black leading-[1.2] hidden"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_detail?.reference?.head_content?.value,
                    ),
                  }}
                ></div>
                <div
                  className="desc  mt-[20px] lg:mt-[40px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[870px]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      page?.ratgeber_detail?.reference?.head_new_desc?.value,
                    ),
                  }}
                ></div>
              </div>
              <div className="interactive-img-wrap mx-auto block w-[320px] !hidden">
                <div className="img-wrap w-full text-center relative">
                  <img
                    className="m-auto"
                    src={
                      page?.ratgeber_detail?.reference?.head_interactive_image
                        ?.reference?.image?.url
                    }
                    alt=""
                  />
                  <div className="interactive-list w-full left-[-90px] top-0 h-full absolute">
                    <div
                      className="absolute top-0 left-[240px] kb-body-icon"
                      id="kb-body-icon-1"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div
                      className="absolute top-[300px] left-[220px] kb-body-icon"
                      id="kb-body-icon-3"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div
                      className="absolute top-[330px] left-[130px] kb-body-icon"
                      id="kb-body-icon-5"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div
                      className="absolute top-[330px] left-[281px] kb-body-icon"
                      id="kb-body-icon-2"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div
                      className="absolute top-[510px] left-[261px] kb-body-icon"
                      id="kb-body-icon-4"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div
                      className="absolute bottom-[110px] left-[180px] kb-body-icon"
                      id="kb-body-icon-6"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                    <div
                      className="absolute bottom-[80px] left-[250px] kb-body-icon"
                      id="kb-body-icon-7"
                    >
                      <IconClose className="transition-transform transform-gpu duration-200 w-[65px] h-[65px] text-black p-[10px] border border-[#DEDEDE] rounded-full bg-white bg-opacity-50 rotate-45 stroke-[1] hover:bg-[#009470] hover:border-[#009470]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col tabs-wrap xl:flex-[1]">
                <div className="search-bar hidden">
                  <form action="">
                    <div className="relative">
                      <button
                        type="submit"
                        className="text-black absolute inset-y-0 left-[28px] flex items-center"
                      >
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 53 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {' '}
                          <circle
                            cx="22.6274"
                            cy="23.4645"
                            r={15}
                            transform="rotate(-45 22.6274 23.4645)"
                            stroke="black"
                            strokeWidth={2}
                          />{' '}
                          <line
                            x1="33.9415"
                            y1="34.7782"
                            x2="41.0126"
                            y2="41.8493"
                            stroke="black"
                            strokeWidth={2}
                          />{' '}
                        </svg>
                      </button>
                      <input
                        type="search"
                        placeholder="Suchen"
                        name="q"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] py-[20px] 2xl:py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                      />
                    </div>
                  </form>
                </div>
                {/* <div className="mt-[40px] lg:mt-[60px] xl:mt-[80px] border-t-[1px] border-black pt-[30px] lg:pt-[40px] xl:pt-[60px]"> */}
                <div className="mt-[33px] border-black">
                  <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold hidden">
                    {page?.ratgeber_detail?.reference?.product_list_title?.value}
                  </h2>
                  <div className="scroll-links-wrap flex flex-wrap gap-x-[20px] lg:gap-x-[30px] xl:gap-x-[40px] 2xl:gap-x-[78px] gap-y-[20px] lg:gap-y-[30px] xl:gap-y-[40px] 2xl:gap-y-[64px]">
                    {filteredKybunJoyaProducts.map((product, index) => {
                      return (
                        <Link
                          key={index}
                          to={`/products/custom-product/${product.handle}`}
                          className="w-[calc(50%_-_10px)] lg:w-[calc(33.33%_-_20px)] xl:w-[calc(33.33%_-_26.66px)] 2xl:w-[calc(33.33%_-_52px)] p-[15px] xl:px-[20px] xl:py-[26px] flex justify-center items-center text-center bg-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[36px] leading-[1.4] hover:text-white hover:bg-[#00795C] xl:min-h-[116px] font-bold text-[#00795C] transition-all duration-500 rounded-[10px] min-h-[86px]"
                        >
                          {product.title}
                        </Link>
                      );
                    })}
                    {/* {buttonAccordionMapping?.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={`#link${index + 1}`}
                        hreflink={item.hreflink}
                        className="p-[15px] xl:px-[20px] xl:py-[26px] flex justify-center items-center text-center bg-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[21px] leading-[1.4] hover:text-white hover:bg-[#00795C] xl:min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                      >
                        {item.button_name}
                      </a>
                    );
                  })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-items-section pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="container !pr-0">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            { page?.ratgeber_detail?.reference?.product_slider_title?.value }
          </h2>
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
            slidesPerView={2.5}
            spaceBetween={20}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              767: {
                slidesPerView: 2.1,
              },
              1280: {
                slidesPerView: 2.3,
              },
              1500: {
                slidesPerView: 2.5,
              },
            }}
            className=""
          >
            {productSliderData.length > 0 && (
                productSliderData.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="popular-item">
                          <div className="img-wrap overflow-hidden pb-[60%] mb-[15px] relative">
                            <img
                              className="absolute inset-0 w-full h-full object-cover"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                            <p>{item.title}</p>
                          </div>
                          <Link
                            to={item.redirect_button_link}
                            className="inline-block rounded-[100px] bg-[#00795c] text-white
                          text-center px-[35px] py-[15px] hover:bg-black hover:text-white text-[18px] max-w-fit"
                          >
                            {item.redirect_button_text}
                          </Link>
                        </div>
                      </SwiperSlide>
                    );
                })
            )}
          </Swiper>
        </div>
      </section>
      <section className="dr-faq-sec mx-auto my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
        <div className="container flex flex-col gap-[20px]">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            { page?.ratgeber_detail?.reference?.product_sub_list_title?.value }
          </h2>
          {sub_collections?.nodes?.map((item, index) => {
            if (item.title != pageCollectionTitle) {
              return (
                <ExpandingCardStyle2
                  key={index}
                  id={`link${index + 1}`}
                  content={''}
                  products={item?.products?.edges}
                  title={item.title.replace(pageCollectionTitle, '').trim()}
                />
              );
            }
          })}

          {/* {buttonAccordionMapping?.map((item, index) => {
            console.log("item",item);
            if (!item.accordion_title) return <></>;
            return (
              <ExpandingCardStyle2
                key={index}
                id={`link${index + 1}`}
                content={item.accordion_content}
                title={item.accordion_title}
              />
            );
          })} */}
          <div className="info-bottom mt-[20px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px] hidden">
            <div className="title-wrap">
              <h3 className="text-center tracking-[-0.97152px] text-[28px] md:text-[30px] lg:text-[2 leading-[1.1] font-medium">
                {page?.ratgeber_detail?.reference?.cta_text?.value}
              </h3>
            </div>
            <div className="link-wrap flex justify-center mt-[20px] lg:mt-[40px]">
              <Link
                className="block rounded-[100px] bg-black text-white
            text-center px-[60px] py-[20px] md:py-[25px] hover:bg-[#00795c] hover:text-white text-[16px] md:text-[18px] max-w-fit font-normal leading-none"
                to={
                  page?.ratgeber_detail?.reference?.cta_button_redirect?.value
                }
              >
                {page?.ratgeber_detail?.reference?.cta_button_text?.value}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="search-bar-section mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
        <div className="container">
          <div className="search-bar max-w-[991px] mx-auto">
            <form action="">
              <div className="relative">
                <button
                  type="submit"
                  className="text-black absolute inset-y-0 left-[28px] flex items-center"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 53 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {' '}
                    <circle
                      cx="22.6274"
                      cy="23.4645"
                      r={15}
                      transform="rotate(-45 22.6274 23.4645)"
                      stroke="black"
                      strokeWidth={2}
                    />{' '}
                    <line
                      x1="33.9415"
                      y1="34.7782"
                      x2="41.0126"
                      y2="41.8493"
                      stroke="black"
                      strokeWidth={2}
                    />{' '}
                  </svg>
                </button>
                <input
                  type="search"
                  placeholder="Suchen"
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] py-[20px] 2xl:py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="two-box-sec mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="col w-full lg:w-[50%]">
              <div className="col-inner shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] h-full flex flex-col">
                <div className="img-wrap relative overflow-hidden pb-[28%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      page?.ratgeber_detail?.reference
                        ?.footer_main_left_section_image?.reference?.image?.url
                    }
                    alt=""
                  />
                </div>
                <div className="info-col p-[15px] md:p-[25px] lg:p-[30px] xl:p-[40px] md:!pt-[25px] max-w-[663px] mx-auto h-full flex flex-col">
                  <h4
                    className="text-[24px] md:text-[28px] xl:text-[30px] text-black font-[500] leading-[1.2] text-center"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_detail?.reference
                          ?.footer_main_left_section_desc?.value,
                      ),
                    }}
                  ></h4>
                  <div className="btn-wrap flex justify-center mt-auto">
                    <Link
                      to={
                        page?.ratgeber_detail?.reference
                          ?.footer_main_left_section_cta?.value
                      }
                      className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[40px] lg:px-[59px] py-[20px] lg:py-[25px] hover:bg-black hover:text-white text-[16px] lg:text-[18px] max-w-fit mt-[10px] leading-none"
                    >
                      {
                        page?.ratgeber_detail?.reference
                          ?.footer_main_left_section_cta_label?.value
                      }
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col w-full lg:w-[50%]">
              <div className="col-inner shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] h-full flex flex-col">
                <div className="img-wrap relative overflow-hidden pb-[28%]">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={
                      page?.ratgeber_detail?.reference
                        ?.footer_main_right_section_image?.reference?.image?.url
                    }
                    alt=""
                  />
                </div>
                <div className="info-col p-[15px] md:p-[25px] lg:p-[30px] xl:p-[40px] md:!pt-[25px] max-w-[663px] mx-auto h-full flex flex-col">
                  <h4
                    className="text-[24px] md:text-[28px] xl:text-[30px] text-black font-[500] leading-[1.2] text-center"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(
                        page?.ratgeber_detail?.reference
                          ?.footer_main_right_section_desc?.value,
                      ),
                    }}
                  ></h4>
                  <div className="btn-wrap flex justify-center mt-auto">
                    <Link
                      to={
                        page?.ratgeber_detail?.reference
                          ?.footer_main_right_section_cta?.value
                      }
                      className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[40px] lg:px-[59px] py-[20px] lg:py-[25px] hover:bg-black hover:text-white text-[16px] lg:text-[18px] max-w-fit mt-[10px] leading-none"
                    >
                      {
                        page?.ratgeber_detail?.reference
                          ?.footer_main_right_section_cta_label?.value
                      }
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="four-boxes-section my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
          <div className="four-boxes-inner">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px]">
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[24px] md:text-[28px] xl:text-[30px] font-bold leading-none p-[20px]">
                      {page?.ratgeber_detail?.reference?.footer_section_title_1?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] lg:pb-[40px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.4]"
                     dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber_detail?.reference?.footer_section_content_1?.value),
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[24px] md:text-[28px] xl:text-[30px] font-bold leading-none p-[20px]">
                    {page?.ratgeber_detail?.reference?.footer_section_title_2?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] lg:pb-[40px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.4]"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber_detail?.reference?.footer_section_content_2?.value),
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[24px] md:text-[28px] xl:text-[30px] font-bold leading-none p-[20px]">
                    {page?.ratgeber_detail?.reference?.footer_section_title_3?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] lg:pb-[40px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.4]"
                     dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber_detail?.reference?.footer_section_content_3?.value),
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[24px] md:text-[28px] xl:text-[30px] font-bold leading-none p-[20px]">
                    {page?.ratgeber_detail?.reference?.footer_section_title_4?.value}
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] lg:pb-[40px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.4]"
                     dangerouslySetInnerHTML={{
                      __html: toHTML(page?.ratgeber_detail?.reference?.footer_section_content_4?.value),
                    }}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
    </>
  );
}

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $pageBy,
        after: $cursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`;

const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      ratgeber_detail : metafield(namespace: "custom", key: "ratgeber_detail") {
        reference {
          ... on Metaobject {
            handle
            head_interactive_image : field(key: "head_interactive_image") {
              reference {
                ...Media
              }
            }
            head_title : field(key: "head_title") {
              value
            }
            head_content : field(key: "head_content") {
              value
            }
            head_new_desc : field(key: "head_new_desc") {
              value
            }
            cta_text : field(key: "cta_text") {
              value
            }
            cta_button_text : field(key: "cta_button_text") {
              value
            }
            cta_button_redirect : field(key: "cta_button_redirect") {
              value
            }
            button_accordion_mapping : field(key: "button_accordion_mapping") {
              value
            }
            footer_section_title_1 : field(key: "footer_section_title_1") {
              value
            }
            footer_section_content_1 : field(key: "footer_section_content_1") {
              value
            }
            footer_section_redirect_1 : field(key: "footer_section_redirect_1") {
              value
            }
            footer_section_title_2 : field(key: "footer_section_title_2") {
              value
            }
            footer_section_content_2 : field(key: "footer_section_content_2") {
              value
            }
            footer_section_redirect_2 : field(key: "footer_section_redirect_2") {
              value
            }
            footer_section_title_3 : field(key: "footer_section_title_3") {
              value
            }
            footer_section_content_3 : field(key: "footer_section_content_3") {
              value
            }
            footer_section_redirect_3 : field(key: "footer_section_redirect_3") {
              value
            }
            footer_section_title_4 : field(key: "footer_section_title_4") {
              value
            }
            footer_section_content_4 : field(key: "footer_section_content_4") {
              value
            }
            footer_section_redirect_4 : field(key: "footer_section_redirect_4") {
              value
            }
            footer_main_left_section_desc : field(key: "footer_main_left_section_desc") {
              value
            }
            footer_main_left_section_image : field(key: "footer_main_left_section_image") {
              reference {
                ...Media
              }
            }
            footer_main_left_section_cta : field(key: "footer_main_left_section_cta") {
              value
            }
            footer_main_left_section_cta_label : field(key: "footer_main_left_section_cta_label") {
              value
            }
            footer_main_right_section_desc : field(key: "footer_main_right_section_desc") {
              value
            }
            footer_main_right_section_image : field(key: "footer_main_right_section_image") {
              reference {
                ...Media
              }
            }
            footer_main_right_section_cta : field(key: "footer_main_right_section_cta") {
              value
            }
            footer_main_right_section_cta_label : field(key: "footer_main_right_section_cta_label") {
              value
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            product_list_title : field(key: "product_list_title") {
              value
            }
            product_slider_title : field(key: "product_slider_title") {
              value
            }
            product_slider_data : field(key: "product_slider_data") {
              value
            }
            product_sub_list_title : field(key: "product_sub_list_title") {
              value
            }
            page_collection : field(key: "page_collection") {
              reference {
                ... on Collection {
                  title
                  handle
                }
              }
            }
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`;

const COLLECTIONS_QUERY = `#graphql
  query Collections(
    $country: CountryCode
    $language: LanguageCode
    $searchTerm: String
  ) @inContext(country: $country, language: $language) {
    sub_collections : collections (first : 250,  query: $searchTerm) {
      nodes {
        id
        title
        handle
        products(first: 50, sortKey : TITLE) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    }
  }
`;

function getSortValuesFromParam(sortParam) {
  switch (sortParam) {
    case 'price-high-low':
      return {
        sortKey: 'PRICE',
        reverse: true,
      };
    case 'price-low-high':
      return {
        sortKey: 'PRICE',
        reverse: false,
      };
    case 'best-selling':
      return {
        sortKey: 'BEST_SELLING',
        reverse: false,
      };
    case 'newest':
      return {
        sortKey: 'CREATED',
        reverse: true,
      };
    case 'featured':
      return {
        sortKey: 'MANUAL',
        reverse: false,
      };
    default:
      return {
        sortKey: 'RELEVANCE',
        reverse: false,
      };
  }
}
