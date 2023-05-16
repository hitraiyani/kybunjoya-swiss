import {useState, useEffect} from 'react';
import {Breadcrumb, SingleNewsSlide} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData } from '@remix-run/react';
import Slider from 'react-slick';
import { getBreadCrumbs } from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import {getNews} from '~/lib/aicoService';

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
      handle: 'blog',
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

export default function blog() {
  const {page} = useLoaderData();
  const [newsSliderData, setNewsSliderData] = useState();
  const blogMetaReference = page?.blog?.reference;
  console.log("page", blogMetaReference);

  useEffect(() => {
      getNews(10).then((result) => {
          console.log("result", result);
          setNewsSliderData(result);
      });
  },[]);

  let settings1 = {
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
  let settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '80px',
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
      <Breadcrumb crumbs={getBreadCrumbs(null,'blog')}/>
      <section className="blog-bannersec hero-banner-section  overflow-hidden">
        <div className="container">
          <div className="hero-banner-inner relative">
            <div className="banner-info">
              <div className="flex flex-col pt-[25.5%] pb-[50px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] min-h-[350px] justify-end gap-[30px] 2xl:gap-0">
                <div className="title-wrap">
                  <h1 className="text-white text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold leading-[1.1]">
                      { blogMetaReference?.hero_title?.value }
                  </h1>
                </div>
                <div className="scroll-to-section 2xl:px-[120px] 2xl:mt-[-40px]">
                  <ul className="flex flex-wrap gap-y-[15px] gap-x-[25px] md:gap-x-[30px] lg:gap-x-[40px] xl:gap-x-[60px] 2xl:gap-x-[80px] 2xl:justify-center">
                    <li>
                      <a
                        className="text-[21px] md:text-[25px] lg:text-[30px] leading-[1.1] text-white border-b-[2px] lg:border-b-[5px] border-transparent hover:text-white hover:border-white"
                        href="#Neues-und-Aktuelles"
                      >
                        { blogMetaReference?.section_1_title?.value }
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[21px] md:text-[25px] lg:text-[30px] leading-[1.1] text-white border-b-[2px] lg:border-b-[5px] border-transparent hover:text-white hover:border-white"
                        href="#Technologie"
                      >
                        { blogMetaReference?.section_2_title?.value }
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[21px] md:text-[25px] lg:text-[30px] leading-[1.1] text-white border-b-[2px] lg:border-b-[5px] border-transparent hover:text-white hover:border-white"
                        href="#Science"
                      >
                        { blogMetaReference?.section_3_title?.value }
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[21px] md:text-[25px] lg:text-[30px] leading-[1.1] text-white border-b-[2px] lg:border-b-[5px] border-transparent hover:text-white hover:border-white"
                        href="#Lifestyle"
                      >
                        { blogMetaReference?.section_4_title?.value }
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-img w-full h-full absolute inset-0 z-[-1]  overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
              <img
                className="w-full h-full object-cover"
                src={blogMetaReference?.hero_image?.reference?.image?.url}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="article-slide py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px] relative">
        <div className="container">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            { blogMetaReference?.section_1_title?.value }
          </h2>
          <div className="">
            <Slider {...settings1}>
                {newsSliderData?.data && newsSliderData?.data.map((item, index) => {
                    return <SingleNewsSlide newItem={item} key={index} />
                })}
            </Slider>
          </div>
        </div>
      </section>
      <section className="img-with-content">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[30px] xl:gap-x-[65px] items-center">
            <div className="img-col w-full lg:w-[60%]">
              <div className="img-wrap">
                <img
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/blog-1.jpg?v=1683892321"
                  alt=""
                />
              </div>
            </div>
            <div className="content-col w-full lg:w-[40%]">
              <h3 className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                Joya verstärkt Team in Österreich
              </h3>
              <div className="desc text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                <p>
                  Mit Thomas Schmitzer und Gabriel Schörkhuber erhält das Team
                  von kybun Verstärkung – für eine weiterhin kompetente und
                  verlässliche Betreuung in ganz Österreich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="img-with-content mt-[30px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[30px] xl:gap-x-[65px] items-center">
            <div className="content-col w-full lg:w-[40%]">
              <h3 className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                Joya verstärkt Team in Österreich
              </h3>
              <div className="desc text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                <p>
                  Mit Thomas Schmitzer und Gabriel Schörkhuber erhält das Team
                  von kybun Verstärkung – für eine weiterhin kompetente und
                  verlässliche Betreuung in ganz Österreich.
                </p>
              </div>
            </div>
            <div className="img-col w-full lg:w-[60%]">
              <div className="img-wrap">
                <img
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/blog-1.jpg?v=1683892321"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-slide py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] relative">
        <div className="container">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          { blogMetaReference?.section_2_title?.value }
          </h2>
          <div className="">
            <Slider {...settings1}>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
            </Slider>
          </div>
        </div>
      </section>
      <section className="article-slide py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] relative">
        <div className="container">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          { blogMetaReference?.section_3_title?.value }
          </h2>
          <div className="">
            <Slider {...settings2}>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-[4/2] drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
            </Slider>
          </div>
        </div>
      </section>
      <section className="article-slide py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] relative">
        <div className="container">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
              { blogMetaReference?.section_4_title?.value }
          </h2>
          <div className="">
            <Slider {...settings1}>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
              <>
                <div>
                  <a href="#" className="relative block overflow-hidden mb-5">
                    <div className="img-wrap">
                      <img
                        className="object-cover object-center w-full aspect-square drop-shadow-md"
                        src="https://kjmvp.aico.swiss/storage/images/optimized_640ef21b406541-girafe-26-ian-2020-shutterstock-77031904-descopera.jpg"
                      ></img>
                    </div>
                    <p className="right-[15px] absolute top-[15px]">
                      <span
                        className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                        // style={
                        //   badgeLabel == 'Kybun'
                        //     ? {backgroundColor: '#980A2B'}
                        //     : {}
                        // }
                      >
                        Kybun
                      </span>
                    </p>
                  </a>
                </div>
                <div className="max-w-[85%]">
                  <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
                    Joya verstärkt Team in Österreich
                  </p>
                  <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
                    The northern giraffe (Giraffa camelopardalis), also known as
                    three-horned giraffe,[2] is the type species of giraffe, G.
                    camelopardalis, and is native t...
                  </p>
                </div>
              </>
            </Slider>
          </div>
        </div>
      </section>
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
      blog : metafield(namespace: "custom", key: "blog") {
        reference {
          ... on Metaobject {
            handle
            hero_title : field(key: "hero_title") {
              value
            }
            section_1_title : field(key: "section_1_title") {
              value
            }
            section_2_title : field(key: "section_2_title") {
              value
            }
            section_3_title : field(key: "section_3_title") {
              value
            }
            section_4_title : field(key: "section_4_title") {
              value
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
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
