import React from 'react';
import {Breadcrumb, ArrowRight2, ArrowRight} from '~/components';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Slider from 'react-slick';

export default function blogDetails() {
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
      <div className="Breadcrumb-sec mb-[20px] lg:mb-[25px]">
        <div className="container">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-y-[10px] gap-x-[8px] md:gap-x-[16px] flex-wrap">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight2
                    className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                  />
                  <a
                    href="#"
                    className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                  >
                    Blog
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight2
                    className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                  />
                  <a
                    href="#"
                    className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                  >
                    Blog Article
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="hero-banner-section kontakt-banner-section  overflow-hidden">
        <div className="container">
          <div className="hero-banner-inner relative  pt-[35.3%] min-h-[350px]">
            <div className="bg-img w-full h-full absolute inset-0 z-[-1]  overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
              <img
                className="w-full h-full object-cover "
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Mask_group_1.jpg?v=1684130159"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="content-wrap-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
        <div className="!max-w-[1326px] mx-auto container">
          <div className="content-wrap-inner">
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[70px]">
              <div className="sliderbar-wrap w-full lg:w-[35%]">
                <div className="sliderbar-inner bg-[#EDEDED] rounded-[10px] p-[20px]">
                  <ul className="mb-[27px]">
                    <li className="title text-[24px] md:text-[28px] text-black font-bold mb-[20px]">
                      Übersicht
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Wie können Fersenschmerzen entstehen?</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Plantarfasziitis</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Achillessehnenentzündung</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Fersensporn</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Fußbeschwerden</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Tragen der falschen Schuhe</a>
                    </li>
                  </ul>
                  <ul className="mb-[27px]">
                    <li className="title text-[24px] md:text-[28px] text-black font-bold mb-[20px]">
                      Laufschuhe bei Fersenschmerzen finden
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Dämpfung</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Unterstützung des Fußgewölbes</a>
                    </li>
                    <li className="links text-[18px] md:text-[20px] text-black leading-[1.1]">
                      <a href="#">Breiter Zehenbereich</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-[65%] col-left content-col">
                <div className="content-inner">
                  <div className="date text-[18px] tracking-[-0.400697px] leading-[1.2] mb-[34px] text-[#898989] flex gap-x-[20px] gap-y-[10px]">
                    <span>21. April 2023</span>
                    <spanc className="block relative top-[1px] leading-[1px] text-[30px]">
                      .
                    </spanc>
                    <span>6 Min. Lesezeit</span>
                  </div>
                  <div className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px]">
                    <h2>
                      So findest du die besten Laufschuhe bei Fersenschmerzen
                    </h2>
                  </div>
                  <div className="sub-title text-[24px] md:text-[28px] xl:text-[30px] font-normal mb-[20px]">
                    <p>
                      Fersenschmerzen können deine Laufroutine durchkreuzen.
                      Suche im Falle von Fersenschmerzen nach Schuhen mit diesen
                      drei Merkmalen.
                    </p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[30px] xl:mb-[50px]">
                    <p>
                      Du möchtest eigentlich nur deine Laufroutine durchziehen,
                      aber deine Fersenschmerzen sind einfach zu stark?
                      Chronische Fersenschmerzen können es dir schwer machen,
                      deine Lauf-Fitness beizubehalten. Das hier könnte helfen:
                      Achte darauf, dass du die richtigen Schuhe trägst. Mit
                      Schmerz kann dein Körper dir signalisieren, dass du dich
                      mehr um ihn kümmern sollst. Die besten Schuhe bei
                      Fersenschmerzen bieten Dämpfung sowie Arch Support und
                      verfügen über einen breiten Zehenbereich sowie
                      Stoßdämpfung.Hier ist eine Übersicht der in diesem Artikel
                      erwähnten Schuhe:
                    </p>
                  </div>
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px]">
                    <p>Wie können Fersenschmerzen entstehen?</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Wenn du einen dumpfen oder stechenden Schmerz oder eine
                      Druckstelle spürst, ist es wichtig, das ernstzunehmen. All
                      das könnten Anzeichen für eine Erkrankung wie
                      Plantarfasziitis, einen Fersensporn oder eine
                      Achillessehnenentzündung sein. Fersenschmerzen können sich
                      beim Gehen, Walken oder Laufen verschlimmern, aber die
                      Schmerzen können auch konstant sein. Was verursacht
                      Fersenschmerzen?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-slider-wrap py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
              <div className="pro-slider-inner">
                <div className="flex flex-wrap justify-between gap-[20px] items-center">
                  <div className="title title text-black text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px]">
                    kybun Joya Schuhe anzeigen
                  </div>
                  <div className="slider-btn flex gap-[30px] items-center">
                    <span className="block text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      Alle anzeigen
                    </span>
                    <div className="products-swiper-buttons flex gap-[10px] xl:gap-[20px] z-[1]">
                      <div
                        id="swiper-button-next-product-info1"
                        className="swiper-button-next-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180"
                      >
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                      <div
                        id="swiper-button-prev-product-info1"
                        className="swiper-button-prev-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center"
                      >
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pro-slider-wrap mx-[-10px]">
                  <Swiper
                    modules={[
                      Navigation,
                      Scrollbar,
                      A11y,
                      Autoplay,
                      Pagination,
                    ]}
                    slidesPerView={1.2}
                    spaceBetween={0}
                    autoHeight="true"
                    navigation={{
                      prevEl: '#swiper-button-next-product-info1',
                      nextEl: '#swiper-button-prev-product-info1',
                    }}
                    className="h-full px-[10px]"
                    breakpoints={{
                      0: {
                        slidesPerView: 1.2,
                      },
                      768: {
                        slidesPerView: 2.2,
                      },
                      1280: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[70px]">
              <div className="sliderbar-wrap w-full lg:w-[35%]"></div>
              <div className="w-full lg:w-[65%] col-left content-col">
                <div className="content-inner">
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px]">
                    <p>Plantarfasziitis</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Laut der Mayo Clinic ist Plantarfasziitis die häufigste
                      Ursache für Fersenschmerzen. Die Plantarfaszie ist eine
                      Sehnenplatte im Bereich der Fußsohle und verbindet die
                      Ferse mit den Zehen. Wenn sich dieses Band entzündet, kann
                      es Schmerzen verursachen, die sich oftmals in der Ferse
                      bemerkbar machen.
                    </p>
                    <p>
                      Plantarfasziitis ist eine häufige Verletzung, die durch
                      wiederholte Überlastung entsteht. Insbesondere
                      Läufer:innen sind davon betroffen. Eine Studie, die 2012
                      in Sports Medicine veröffentlicht wurde, kam zu dem
                      Schluss, dass Plantarfasziitis bei 17,5 Prozent der
                      Läufer:innen vorkommt. Deshalb ist sie auch eine der
                      häufigsten durch Laufen verursachten Verletzungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[70px]">
              <div className="sliderbar-wrap w-full lg:w-[35%] mt-[30px]">
                <div className="sliderbar-inner bg-[#EDEDED] rounded-[10px] p-[20px]">
                  <div className="sub-title text-[24px] md:text-[28px] xl:text-[30px] font-normal mb-[20px]">
                    <p>Schon gewusst?</p>
                  </div>
                  <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Ein Fersensporn ist ein knöcherner Fortsatz, der um die
                      Ferse entstehen kann. Es handelt sich hierbei aber nicht
                      wirklich um einen Knochen, sondern eine Kalkablagerung,
                      die allerdings stechende Schmerzen verursachen kann.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[65%] col-left content-col">
                <div className="content-inner">
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] mt-[30px]">
                    <p>Fersensporn</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Ein Fersensporn ist ein knöcherner Fortsatz, der um die
                      Ferse entstehen kann. Es handelt sich hierbei aber nicht
                      wirklich um einen Knochen, sondern eine Kalkablagerung,
                      die allerdings stechende Schmerzen verursachen kann. Die
                      häufigste Ursache für Fersensporn ist das Tragen falscher
                      Schuhe oder das Ignorieren von Anzeichen für eine
                      Verletzung aufgrund von Überbelastung. Fersensporn
                      unterscheidet sich von Knochensporn und Hallux valgus.
                      Knochensporn ist Knochenwachstum und Hallux valgus ist
                      eine Knochenverformung. Auch wenn beide Verletzungen
                      Schmerzen im Fuß verursachen können, sind sie für
                      gewöhnlich nicht die Ursache für Fersenschmerzen.
                    </p>
                    <p>
                      Läufer:innen, die schon einmal Muskel- und Bänderzerrungen
                      hatten und sich nicht richtig von diesen erholt haben,
                      können anfälliger für Fersensporn sein. Es handelt sich
                      hierbei um eine Erkrankung, die mit Plantarfasziitis eng
                      verbunden ist und starke Fersenschmerzen verursachen kann.
                      Sie sollte von einer Podologin bzw. einem Podologen
                      untersucht werden.
                    </p>
                  </div>
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] mt-[30px]">
                    <p>Fußbeschwerden</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Häufige Fußbeschwerden wie angeborene Platt- oder Hohlfüße
                      können Fersenschmerzen verursachen. Hohlfüße können
                      instabile Füße und Knöchel hervorrufen, indem sich die
                      Füße zunehmend nach außen drehen. Dadurch wird die Ferse
                      zusätzlich beansprucht, was zu Schmerzen und Verletzungen
                      führen kann.
                    </p>
                    <p>
                      Plattfüße, auch Senkfüße genannt, können Überpronation
                      verursachen. Dabei rollen deine Füße beim Auftreten nach
                      innen. Fersenschmerzen können auf Plattfüße hinweisen,
                      denn das beim Auftreten verflachte Fußgewölbe bedeutet
                      zusätzliche Belastung und Beanspruchung der umliegenden
                      Bänder und Sehnen.
                    </p>
                  </div>
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] mt-[30px]">
                    <p>Tragen der falschen Schuhe</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Egal, ob du Plattfüße, ein hohes Fußgewölbe oder eine
                      andere Fußerkrankung wie beispielsweise Plantarfasziitis
                      hast und selbst wenn du gesunde Füße hast, ist es
                      elementar wichtig, die richtigen Schuhe zu tragen. Laufen
                      ist ein Sport mit hoher Belastung, weshalb Fersenschmerzen
                      so häufig bei Läufer:innen auftreten, wenn sie beim
                      Training die falschen Schuhe tragen.
                    </p>
                    <p>
                      Aber nicht nur die Laufschuhe sind entscheidend.
                      Walking-Schuhe oder Alltagsschuhe müssen deinen Füßen
                      ebenfalls den erforderlichen Halt bieten. Wenn du häufig
                      Sandalen, High Heels, Slipper, Schuhe mit einem schmalen
                      Zehenbereich oder schlecht passende Schuhe trägst, dann
                      hast du eventuell ein höheres Risiko für Fersenschmerzen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-slider-wrap py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
              <div className="pro-slider-inner">
                <div className="flex flex-wrap justify-between gap-[20px] items-center">
                  <div className="title title text-black text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px]">
                    kybun Joya Schuhe anzeigen
                  </div>
                  <div className="slider-btn flex gap-[30px] items-center">
                    <span className="block text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      Alle anzeigen
                    </span>
                    <div className="products-swiper-buttons flex gap-[10px] xl:gap-[20px] z-[1]">
                      <div
                        id="swiper-button-next-product-info2"
                        className="swiper-button-next-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180"
                      >
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                      <div
                        id="swiper-button-prev-product-info2"
                        className="swiper-button-prev-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center"
                      >
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pro-slider-wrap mx-[-10px]">
                  <Swiper
                    modules={[
                      Navigation,
                      Scrollbar,
                      A11y,
                      Autoplay,
                      Pagination,
                    ]}
                    slidesPerView={1.2}
                    spaceBetween={0}
                    autoHeight="true"
                    navigation={{
                      prevEl: '#swiper-button-next-product-info2',
                      nextEl: '#swiper-button-prev-product-info2',
                    }}
                    className="h-full px-[10px]"
                    breakpoints={{
                      0: {
                        slidesPerView: 1.2,
                      },
                      768: {
                        slidesPerView: 2.2,
                      },
                      1280: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[70px]">
              <div className="sliderbar-wrap w-full lg:w-[35%] mt-[80px]">
                <a href="#">
                  <div className="product-item pt-[5px]">
                    <div className="grid gap-[35px]">
                      <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                        <img
                          className="object-contain fadeIn absolute inset-0 w-full h-full"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-1 flex-col">
                        <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                          Rolle Navy M
                        </h3>
                        <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                          <p>
                            Bequem kann nicht auch elegant sein? Dann haben Sie
                            unser traditionelles und verspieltes Modell kybun
                            Rolle Navy noch nicht gesehen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-[65%] col-left content-col">
                <div className="content-inner">
                  <div className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] lg:mb-[30px] xl:mb-[40px]">
                    <p>Laufschuhe bei Fersenschmerzen finden</p>
                  </div>
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] mt-[30px]">
                    <p>Dämpfung</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Beim Laufen sind oft beide Füße gleichzeitig in der Luft.
                      Wenn sie dann auf den Boden auftreffen, bereitet sich dein
                      Körper auf den Aufprall vor. Deine Füße müssen dabei den
                      Aufprall abfedern und ableiten. Viele Menschen mit
                      Fersenschmerzen tragen Schuhe ohne ausreichende Dämpfung.
                      Oder sie tragen Schuhe, die vom vielen Laufen an der Ferse
                      abgenutzt sind. So oder so bieten ihnen die Schuhe nicht
                      mehr den benötigten Halt.
                    </p>
                    <p>
                      Verschaffe deinen Füßen zusätzlichen Halt, indem du Schuhe
                      mit einer Dämpfung für Stoßabsorption wie beispielsweise
                      Nike React Foam trägst. Die Nike React Foam-Technologie
                      gewährleistet eine weiche und federnde Dämpfung. Die
                      Dämpfung schützt die empfindlichen Fersen und die
                      Mittelsohle bei effektiver Stoßabsorption.
                    </p>
                  </div>
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] mt-[30px]">
                    <p>Unterstützung des Fußgewölbes</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Schuhe mit einem guten Arch Support können auch für etwas
                      Schmerzlinderung sorgen. Insbesondere wenn deine
                      Fersenschmerzen durch Plattfüße verursacht werden. Deine
                      Alltags-, Lauf- oder Walking-Schuhe sollten in der
                      Mittelsohle Arch Support bieten.
                    </p>
                    <p>
                      So erhalten Plattfüße die Struktur, die sie brauchen, um
                      die Belastung auf die umliegenden Bänder und Sehnen zu
                      reduzieren. Das sorgt dann auch automatisch dafür, dass
                      deine Knöchel stabiler sind, und reduziert dein Risiko für
                      Fersenschmerzen weiter. Suche nach Laufschuhen mit
                      Merkmalen für Struktur und Stabilität wie beispielsweise
                      Nike Zoom Structure Laufschuhe. Diese verfügen in der
                      Mittelsohle über Triple-Density-Dämpfung für dynamischen
                      Halt.Suche nach Schaumstoff, der weich aber stabil ist,
                      wie Nike React Foam. Dieser absorbiert bei jedem Lauf den
                      Stoß. Achte außerdem auf Arch Support und Halt an der
                      Ferse, damit deine Füße stabil sind, egal bei welcher
                      Bewegung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[70px]">
              <div className="sliderbar-wrap w-full lg:w-[35%] mt-[30px]">
                <div className="sliderbar-inner bg-[#EDEDED] rounded-[10px] p-[20px]">
                  <div className="sub-title text-[24px] md:text-[28px] xl:text-[30px] font-normal mb-[20px]">
                    <p>Schon gewusst?</p>
                  </div>
                  <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Ein Fersensporn ist ein knöcherner Fortsatz, der um die
                      Ferse entstehen kann. Es handelt sich hierbei aber nicht
                      wirklich um einen Knochen, sondern eine Kalkablagerung,
                      die allerdings stechende Schmerzen verursachen kann.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[65%] col-left content-col">
                <div className="content-inner">
                  <div className="text-black text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[20px] mt-[30px]">
                    <p>Breiter Zehenbereich</p>
                  </div>
                  <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>
                      Viele Schuhe wie High Heels oder Schuhe für festliche
                      Anlässe habe einen schmalen Zehenbereich. Das schränkt die
                      Bewegungen der Zehen ein und kann in den Sehnen für
                      Schmerzen sorgen, die dann den Fuß entlang bis zur Ferse
                      laufen. Entscheide dich für Schuhe, die deinen Füßen
                      genügend Platz und natürliche Bewegungsfreiheit bieten.
                      Das gilt auch für Menschen, die von Natur aus breite Füße
                      haben.Schuhe, die für breite Füße designt wurden, bieten
                      mehr Platz.
                    </p>
                    <p>
                      Probier doch mal die Nike Free-Technologie aus. Diese
                      Schuhe geben dir dank ihres großzügigen Zehenbereichs beim
                      Laufen ein Barfußgefühl und deinen Füßen genug Platz zum
                      Bewegen. Die auxetische Mittelsohle dehnt sich bei
                      Belastung aus und bildet nach, wie der Körper und der Fuß
                      auf Belastung reagieren. Sie absorbiert Stöße und bietet
                      gleichzeitig Platz für die Ausdehnung der Füße in Länge
                      und Breite (in etwa eine Größe in der Länge und zwei in
                      der Breite), zu der es bei jedem Laufstil von Athlet:innen
                      kommt.
                    </p>
                  </div>
                  <div className="dr-info-wrap mt-[30px] lg::mt-[50px]">
                    <div className="title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[20px] lg:mb-[30px] xl:mb-[40px]">
                      <h4>Unsere Experte</h4>
                    </div>
                    <div className="item-inner flex flex-wrap gap-[20px] lg:gap-[40px]">
                      <div className="dr-img w-[100px] h-[100px] md:w-[190px] md:h-[190px] rounded-full relative overflow-hidden">
                        <img
                          className="absolute w-full h-full inset-0"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/csm_Susanne_Michel_89c4ae4c172.png?v=1682054112"
                          alt=""
                        />
                      </div>
                      <div className="dr-info w-full sm:w-[calc(100%_-_140px)]  md:w-[calc(100%_-_230px)]">
                        <h4 className="name text-[20px] md:text-[24px] xl:text-[33px] text-black font-bold">
                          Dr. med. Mitra Modaressi
                        </h4>
                        <h5 className="text-[16px] md:text-[24px] tracking-[-0.544698px] font-normal">
                          Swissestetix, Basel &amp; Wien
                        </h5>
                        <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#898989] tracking-[-0.400697px] font-normal leading-[1.4] flex-1 mt-[20px]">
                          <p>
                            Dr. med. Mitra Modaressi has a PhD in Nutritional
                            Sciences and is a Registered Dietitian. She received
                            her training from Penn State University and
                            University of Connecticut where she researched
                            dietary patterns, chemosensory perception and
                            community nutrition.
                          </p>
                        </div>
                        <div className="btn-wrap flex mt-[20px]">
                          <a
                            className="inline-block rounded-[100px] bg-black text-white text-center px-[45px] lg:px-[60px] py-[15px] lg:py-[18px] hover:bg-[#00795c] hover:text-white text-[14px] max-w-fit font-medium"
                            href=""
                          >
                            Beratung Starten
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-slider-wrap py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
              <div className="pro-slider-inner">
                <div className="flex flex-wrap justify-between gap-[20px] items-center">
                  <div className="title title text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px]">
                    kybun Joya Schuhe anzeigen
                  </div>
                  <div className="slider-btn flex gap-[30px] items-center">
                    <span className="block text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#00795C] tracking-[-0.400697px] font-normal leading-[1.4]">
                      Alle anzeigen
                    </span>
                    <div className="products-swiper-buttons flex gap-[10px] xl:gap-[20px] z-[1]">
                      <div
                        id="swiper-button-next-product-info3"
                        className="swiper-button-next-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180"
                      >
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                      <div
                        id="swiper-button-prev-product-info3"
                        className="swiper-button-prev-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center"
                      >
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pro-slider-wrap mx-[-10px]">
                  <Swiper
                    modules={[
                      Navigation,
                      Scrollbar,
                      A11y,
                      Autoplay,
                      Pagination,
                    ]}
                    slidesPerView={1.2}
                    spaceBetween={0}
                    autoHeight="true"
                    navigation={{
                      prevEl: '#swiper-button-next-product-info3',
                      nextEl: '#swiper-button-prev-product-info3',
                    }}
                    className="h-full px-[10px]"
                    breakpoints={{
                      0: {
                        slidesPerView: 1.2,
                      },
                      768: {
                        slidesPerView: 2.2,
                      },
                      1280: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide className="p-[10px]">
                      <a href="#">
                        <div className="product-item pt-[5px]">
                          <div className="grid gap-[35px]">
                            <div className="card-image aspect-square relative overflow-hidden shadow-[0_4.76252px_9.52504px_#0000001a]">
                              <img
                                className="object-contain fadeIn absolute inset-0 w-full h-full"
                                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/products/63d059ded98b91.jpg?v=1683821140"
                                alt=""
                              />
                            </div>
                            <div className="flex gap-1 flex-col">
                              <h3 className="max-w-prose whitespace-pre-wrap text-copy text-[18px] sm:text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title">
                                Rolle Navy M
                              </h3>
                              <div className="desc text-[15px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                <p>
                                  Bequem kann nicht auch elegant sein? Dann
                                  haben Sie unser traditionelles und verspieltes
                                  Modell kybun Rolle Navy noch nicht gesehen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-slide pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] relative">
        <div className="container">
          <h2 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            Verwandte Storys
          </h2>
          <div className="">
            <Slider {...settings}>
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
