import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ArrowRight, ArrowRightLight} from '~/components';

export default function ratgeberSeiteFersensporn() {
  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <div className="page-title">
          <h1 className="title text-[#00795C] text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] mb-[30px] lg:mb-[43px] leading-none font-black">
            Dr. kybun Joya
          </h1>
        </div>
        <section className="rich-text-with-slider">
          <div className="rich-text-inner">
            <div className="w-full mb-[12px]">
              <div className="title-wrap">
                <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px]">
                  Fersensporn
                </h2>
                <h3
                  className="text-[35px] text-[#00795C] font-bold
                leading-[1.2]"
                >
                  Plantarfasziitis (Fasciitis plantaris)
                </h3>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[93px]">
              <div className="col-left w-[65%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <p>
                    Der Fersensporn und die chronische Fasciitis plantaris sind
                    die häufigsten Folgen dauerhafter Überlastung der Fusssohlen
                    in den Industrienationen. Harte Böden und unflexibles,
                    stützendes Schuhwerk, sorgen dafür, dass ein Grossteil der
                    Last beim Gehen und Stehen von der Ferse getragen werden
                    muss.Das führt oftmals langfristig zu Schmerzen und
                    Beschwerden im Fersenbereich.Die Lösungen der Medizin und
                    der Schuhindustrie sind entweder extrem teuer oder
                    verschlimmern die Situation langfristig eher, da nicht die
                    Ursachen bekämpft werden, sondern nur die Symptome.
                  </p>
                </div>
                <div className="box bg-[#EDEDED] rounded-[10px] px-[63px] py-[49px] mt-[43px]">
                  <h3 className="text-[35px] xl:text-[45px] text-[#00795C] font-bold leading-[1.2] tracking-[-0.97152px] mb-[33px]">
                    Übersicht
                  </h3>
                  <h4 className="text-[28px] text-[#00795C] font-medium leading-[1.1] tracking-[-0.97152px] mb-[10px]">
                    kybun Joya & Fersensporn
                  </h4>
                  <ul className="list-style2 desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[32px]">
                    <li>
                      Fersensporn / Plantarfasziitis (Fasciitis plantaris)
                    </li>
                    <li>Ursachen</li>
                    <li>Langzeitfolgen</li>
                    <li>Konventionelle Therapie</li>
                    <li>kybun Wirkungsprinzip - Proaktiv handeln</li>
                  </ul>
                  <h4 className="text-[28px] text-[#00795C] font-medium leading-[1.1] tracking-[-0.97152px] mb-[10px]">
                    Anwendertipps & Übungen
                  </h4>
                  <ul className="list-style2 desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[32px]">
                    <li>Erstreaktionen</li>
                    <li>kybun-Übungen</li>
                    <li>Anwendungstipps</li>
                  </ul>
                  <h4 className="text-[28px] text-[#00795C] font-medium leading-[1.1] tracking-[-0.97152px] mb-[10px]">
                    Fach- und Kundenmeinungen
                  </h4>
                  <ul className="list-style2 desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                    <li>Medienberichte / Studien</li>
                    <li>Meinungen / Kundenaussagen</li>
                  </ul>
                </div>
              </div>
              <div className="col-right w-[35%]">
                <div className="video-info">
                  <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                    <iframe
                      className="absolute w-full h-full inset-0 object-cover bg-cover"
                      src="https://www.youtube.com/embed/yAoLSRbwxL8"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="info mt-[12px]">
                    <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.4]">
                      Schmerzfrei trotz Fersensporn
                    </h4>
                    <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      <p>
                        Ulrike Rausch leidet an Fersensporn. Um die Schmerzen zu
                        lindern sucht sie vier Fachärzte auf. Diese konnten ihr
                        nicht helfen.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="video-info-slider mt-[31px]">
                  <div className="video-slider-inner relative">
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y, Autoplay]}
                      slidesPerView={2}
                      spaceBetween={20}
                      navigation={{
                        nextEl: '.swiper-button-next-video',
                        prevEl: '.swiper-button-prev-video',
                      }}
                      loop="true"
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      className="h-full overflow-visible rounded-xl flex flex-col"
                    >
                      <SwiperSlide>
                        <div className="video-info">
                          <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                            <iframe
                              className="absolute w-full h-full inset-0 object-cover bg-cover"
                              src="https://www.youtube.com/embed/yAoLSRbwxL8"
                              title="YouTube video player"
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                          <div className="info mt-[12px]">
                            <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.4]">
                              Schmerzfrei trotz Fersensporn
                            </h4>
                            <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Ulrike Rausch leidet an Fersensporn. Um die
                                Schmerzen zu lindern sucht sie vier Fachärzte
                                auf. Diese konnten ihr nicht helfen.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="video-info">
                          <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                            <iframe
                              className="absolute w-full h-full inset-0 object-cover bg-cover"
                              src="https://www.youtube.com/embed/yAoLSRbwxL8"
                              title="YouTube video player"
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                          <div className="info mt-[12px]">
                            <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.4]">
                              Schmerzfrei trotz Fersensporn
                            </h4>
                            <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Ulrike Rausch leidet an Fersensporn. Um die
                                Schmerzen zu lindern sucht sie vier Fachärzte
                                auf. Diese konnten ihr nicht helfen.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="video-info">
                          <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                            <iframe
                              className="absolute w-full h-full inset-0 object-cover bg-cover"
                              src="https://www.youtube.com/embed/yAoLSRbwxL8"
                              title="YouTube video player"
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                          <div className="info mt-[12px]">
                            <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.4]">
                              Schmerzfrei trotz Fersensporn
                            </h4>
                            <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                              <p>
                                Ulrike Rausch leidet an Fersensporn. Um die
                                Schmerzen zu lindern sucht sie vier Fachärzte
                                auf. Diese konnten ihr nicht helfen.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="absolute top-[16%] z-[1] rounded-full swiper-button-next-video border-[5px] border-[rgba(0,_148,_112,_0.3)] left-[-24px]">
                      <div className="rounded-full w-[45px] h-[45px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center rotate-180">
                        <ArrowRight
                          className={'relative left-[1px] w-[20px] h-[20px]'}
                        />
                      </div>
                    </div>
                    <div className="absolute top-[16%] z-[1] rounded-full swiper-button-prev-video border-[5px] border-[rgba(0,_148,_112,_0.3)] right-[-24px]">
                      <div className="rounded-full w-[45px] h-[45px] text-white hover:bg-black hover:text-white after:text-[30px] bg-[#00795c] flex items-center justify-center">
                        <ArrowRight
                          className={'relative left-[2px] w-[20px] h-[20px]'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relevante-links-sec mt-[140px]">
          <div className="title-wrap">
            <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[20px] lg:mb-[30px] leading-[1.1]">
              Relevante Links
            </h2>
          </div>
          <div className="flex flex-row gap-[20px]">
            <div className="col-left w-[50%]">
              <div className="flex gap-[20px] h-full">
                <div className="item w-[50%] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] rounded-[10px] h-full">
                  <div className="box h-full flex flex-col items-center px-[20px] py-[15px]">
                    <div className="img-title-wrap flex flex-col mb-[10px] h-full justify-center">
                      <img
                        className="max-w-full h-[50px] object-contain"
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Logo_kybun_Wordmark_1c_black_rgb_2.png?v=1681905588"
                        alt=""
                      />
                      <h4 className="text-[35px] text-[#00795C] font-bold leading-[1.2] text-center mt-[5px]">
                        Online shop
                      </h4>
                    </div>
                    <div className="link-wrap mt-auto w-full">
                      <a
                        className="text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                        href="#"
                      >
                        Jetzt Entdecken
                        <ArrowRightLight className={'w-[30px] h-[30px]'} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item w-[50%] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] rounded-[10px] h-full">
                  <div className="box h-full flex flex-col items-center px-[20px] py-[15px]">
                    <div className="img-title-wrap flex flex-col mb-[10px] h-full justify-center">
                      <img
                        className="max-w-full h-[50px] object-contain"
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Joya-Logo-PNG_1.png?v=1681905588"
                        alt=""
                      />
                      <h4 className="text-[35px] text-[#00795C] font-bold leading-[1.2] text-center mt-[5px]">
                        Online shop
                      </h4>
                    </div>
                    <div className="link-wrap mt-auto w-full">
                      <a
                        className="text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                        href="#"
                      >
                        Jetzt Entdecken
                        <ArrowRightLight className={'w-[30px] h-[30px]'} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-right w-[50%]">
              <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                <h4 className="text-[35px] text-white font-bold leading-[1.2] text-left px-[20px] py-[17px]">
                  kybun Joya Produkte erleben?
                </h4>
              </div>
              <div className="flex gap-[20px] px-[20px] py-[15px] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] rounded-bl-[10px] rounded-br-[10px]">
                <div className="item w-[50%]">
                  <h4 className="desc text-[25px] text-[#00795C] font-bold leading-none mb-[10px]">
                    Shopfinder
                  </h4>
                  <div className="img-wrap relative overflow-hidden rounded-[10px] h-[186px]">
                    <img
                      className="absolute w-full h-full inset-0 object-cover"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/stgallen_shopfront_eaac67e4-f12f-41cd-aef6-4c4fa529140d.png?v=1681906268"
                      alt=""
                    />
                  </div>
                  <div className="link-wrap mt-[10px]">
                    <a
                      className="text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                      href="#"
                    >
                      Jetzt finden
                      <ArrowRightLight className={'w-[30px] h-[30px]'} />
                    </a>
                  </div>
                </div>
                <div className="item w-[50%]">
                  <h4 className="desc text-[25px] text-[#00795C] font-bold leading-none mb-[10px]">
                    kybun Schuhe 2 Wochen testen
                  </h4>
                  <div className="img-wrap relative overflow-hidden rounded-[10px] h-[186px]">
                    <img
                      className="absolute w-full h-full inset-0 object-cover"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/PD04789_-_XL_partnerships_group_image.png_1.png?v=1681906268"
                      alt=""
                    />
                  </div>
                  <div className="link-wrap mt-[10px]">
                    <a
                      className="text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black"
                      href="#"
                    >
                      Schuhe testen
                      <ArrowRightLight className={'w-[30px] h-[30px]'} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rich-text-sec mt-[80px]">
          <div className="rich-text -inner max-w-[1077px]">
            <div className="title-wrap">
              <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[20px] lg:mb-[40px] leading-[1.1]">
                kybun Joya & Fersensporn
              </h2>
              <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                Definition
              </h4>
            </div>
            <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
              <p>
                <strong>Fasciitis</strong> <br />
                PlantarisEine Entzündung an der Fusssohle, genauer, am
                Ansatzpunkt der Plantarsehne zum Fersenbein. Als Folge einer
                längerfristigen Entzündung kann sich ein knöchernes Überbein
                (Sporn) bilden, dann reden wir vom Fersensporn.
              </p>
              <p>
                <strong>Haglund-ExostoseEine</strong> <br />
                verstärkte Verknöcherung des hinteren oberen Sehnenansatzes der
                Ferse mit Beschwerden durch Druck des Schuhrandes.
              </p>
              <p>
                Es spielt keine Rolle, wo sich der Sporn / die Verknöcherung
                befindet. Die Therapie ist für beide Krankheitsbilder die
                gleiche: Wichtig ist, dass der Fuss abrollt und die
                verkürzte/verklebte Muskulatur/Sehnen mobilisiert werden. Für
                das eignen sich die kybun Schuhe und Matten bestens.
              </p>
            </div>
          </div>
        </section>
        <section className="rich-text-sec mt-[80px]">
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                Ursachen
              </h4>
            </div>
            <div className="flex lg:flex-row flex-col gap-y-[30px] gap-x-[77px] w-full">
              <div className="col-left w-[50%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                  <p>
                    <strong>Klassische Sicht</strong>
                  </p>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <img
                    className="max-w-full rounded-[10px] float-right ml-[15px] mb-[15px] w-[320px] h-[320px] object-cover"
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/csm_Fersensporn-xray_8cada7347f_1.png?v=1681909312"
                    alt=""
                  />
                  <p>
                    Die Entzündung der Plantarfaszie ist eine Reaktion des
                    Körpers auf eine Überlastung in diesem Bereich. Die Ursache
                    bei Fasciitis Plantaris liegt meistens bei einer zu grossen
                    Belastung auf den schmerzhaften Punkt. Folglich verkürzt und
                    verklebt die Plantarfaszie (der Körper möchte sie verstärken
                    um der Überbelastung entgegenzuwirken) und folglich kommt
                    noch mehr Druck auf die schmerzhafte Stelle.
                  </p>

                  <p>
                    Eine Hauptursache für ein Verkürzen der Plantarsehne ist die
                    Bewegungseinschränkung der Füsse im Alltag. Da wir uns
                    meistens auf hartem Untergrund wie Beton fortbewegen und
                    dazu noch unbewegliches Schuhwerk tragen (z.B Businessschuhe
                    mit steifen Sohlen oder Absatzschuhe), werden die Füsse in
                    ihrer Bewegungsfreiheit stark eingeschränkt. Da dadurch die
                    meisten Fussgelenke nie richtig gebraucht werden, erscheinen
                    diese dem Körper überflüssig und er beginnt, die von Natur
                    aus sehr beweglich konstruierten Füsse, dem zivilisieren
                    Alltag anzupassen indem er sie stabilisiert bzw.
                    "versteift".
                  </p>
                </div>
              </div>
              <div className="col-right w-[50%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[15px]">
                  <p>
                    <strong>Aus Sicht der Faszien</strong>
                  </p>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <img
                    className="max-w-full rounded-[10px] float-right ml-[15px] mb-[15px] border-[2px] border-[#EDEDED] w-[320px] h-[320px] object-contain p-[20px]"
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/csm_fersensporn-causes-faszien_9c1751ebd6_1.png?v=1681909764"
                    alt=""
                  />
                  <p>
                    Der ganze Körper ist umhüllt von Faszien, welche miteinander
                    verbunden sind. So ist auch der schmerzende Bereich des
                    Fersensporns über die ganze hintere Myo-Fasziale Kette
                    miteinander verbunden. Sind in einem oder mehreren Bereichen
                    dieser Kette Verklebungen und/oder Verkürzungen vorhanden,
                    so herrscht unnatürlich viel Zug in die ganze Linie. Diese
                    Verklebungen und Verkürzungen entstehen durch das
                    unnatürliche Gehen und Stehen auf den harten, flachen
                    Alltagsböden, sowie langes Sitzen. Haben wir durch die
                    Zugverhältnisse langfristig eine starke Belastung auf die
                    Fusssohle (Plantarfaszie) wird die Knochenhaut (Periost
                    bestehend aus Faszien), welche die Ferse umgibt vom Knochen
                    weggezogen.{' '}
                  </p>
                  <p>
                    Die Reaktion des Körpers ist nun, dass er den entstehenden
                    Hohlraum mit zusätzlichem Knochenmaterial auffüllen möchte.
                    Das macht er mit sogenannten Osteoblasten (knochenbildende
                    Zellen). Der Knochen wächst also in die Richtung, wo ihm
                    seine Hülle «weggezogen» wird. Ein Fersensporn
                    (Verknöcherung) entsteht. Die Schmerzen an sich werden nicht
                    vom Fersensporn (bzw. von der Verknöcherung) direkt
                    ausgelöst (da dies eigentlich ein natürlicher Vorgang ist),
                    sondern die Schmerzen entstehen, wenn der Sporn einem
                    sensiblen Nerv in die Quere kommt.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-y-[30px] gap-x-[77px] w-full mt-[72px]">
              <div className="col-left w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    Langzeitfolgen
                  </h4>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <p>
                    Durch monatelange Schmerzen, ohne Therapie des Ursprungs,
                    entwickelt der Körper Ausweichmechanismen um die
                    schmerzhafte Stelle am Fuss zu entlasten. Der gesunde Fuss
                    wird vermehrt belastet, der Betroffene beginnt zu hinken und
                    dies führt zu Fehlbelastungen in anderen Gelenken (Knie,
                    Hüft, Rücken...). Jeder Mensch reagiert anders, es gibt
                    somit viele verschiedene Ausweichmechanismen, die ein
                    Betroffener entwickeln kann; das heisst, es können
                    verschiedene Gelenke überlastet werden.
                  </p>
                </div>
              </div>
              <div className="col-right w-[50%]">
                <div className="title-wrap">
                  <h4 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[45px] tracking-[-0.97152px] mb-[20px] leading-[1.1] font-medium">
                    Konventionelle Therapie
                  </h4>
                </div>
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <p>
                    Die meisten Ärzte verordnen ein Polsterkissen, das unter die
                    Ferse gelegt wird.Manchmal werden auch orthopädische
                    Schuh-Einlagen verordnet.In der Physiotherapie wird
                    Fersensporn u.a. mit Ultraschall und/oder Elekrotherapie,
                    Triggerpunkt-Therapie oder Massage behandelt. Die Fuss- und
                    Unterschenkelmuskulatur wird aktiv mit Übungen gedehnt und
                    gekräftigt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
