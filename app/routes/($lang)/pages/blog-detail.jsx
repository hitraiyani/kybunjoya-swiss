import React from 'react';
import {Breadcrumb, ArrowRight2, ArrowRight} from '~/components';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

export default function blogDetails() {
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
              <div className="sliderbar-wrap w-[35%]">
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
              <div className="w-[65%] col-left content-col">
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
                      <div id="swiper-button-next-product-info" className="swiper-button-next-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180">
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                      <div id="swiper-button-prev-product-info" className="swiper-button-prev-product-info rounded-full w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center">
                        <ArrowRight
                          className={
                            'relative left-[3px] w-[25px] h-[25px] xl:w-[30px] xl:h-[30px]'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                  slidesPerView={1.2}
                  spaceBetween={0}
                  autoHeight="true"
                  navigation={{
                    prevEl: '#swiper-button-next-product-info',
                    nextEl: '#swiper-button-prev-product-info',
                  }}
                  className="h-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1.2,
                    },
                    1024: {
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
                            <div className="desc text-[16px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Bequem kann nicht auch elegant sein? Dann haben
                                Sie unser traditionelles und verspieltes Modell
                                kybun Rolle Navy noch nicht gesehen.
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
      </section>
    </>
  );
}
