import React from 'react';
import {json} from '@shopify/remix-oxygen';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ArrowRight, ArrowRightLight, Link} from '~/components';
import {useLoaderData} from '@remix-run/react';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import { toHTML} from '~/lib/utils';

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
      handle: 'ratgeber-seite-fersensporn',
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





export default function ratgeberSeiteFersensporn() {

  const {page} = useLoaderData();

  const mainVideoSection = page?.ratgeber_seite_fersensporn?.reference?.main_video_section?.value ? JSON.parse(page?.ratgeber_seite_fersensporn?.reference?.main_video_section?.value) : {};
  const mainVideoSliderSection = page?.ratgeber_seite_fersensporn?.reference?.main_video_slider_section?.value ? JSON.parse(page?.ratgeber_seite_fersensporn?.reference?.main_video_slider_section?.value) : [];

  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <div className="page-title">
          <h1 className="title text-[#00795C] text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] mb-[30px] lg:mb-[43px] leading-none font-black">
            {page?.ratgeber_seite_fersensporn?.reference?.head_title?.value}
          </h1>
        </div>
        <section className="rich-text-with-slider">
          <div className="rich-text-inner">
            <div className="w-full mb-[12px]">
              <div className="title-wrap">
                <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px]">
                  {page?.ratgeber_seite_fersensporn?.reference?.head_title_sub?.value}
                </h2>
                <h3
                  className="text-[30px] text-[#00795C] font-bold leading-[1.2] mb-[20px]"
                >
                  {page?.ratgeber_seite_fersensporn?.reference?.head_title_sub_secondary?.value}
                </h3>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[93px]">
              <div className="col-left w-[65%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
                   dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber_seite_fersensporn?.reference?.head_desc?.value),
                  }}
                >
                </div>
                <div className="box bg-[#EDEDED] rounded-[10px] px-[63px] py-[49px] mt-[43px]">
                  <h3 className="text-[35px] xl:text-[40px] text-[#00795C] font-bold leading-[1.2] tracking-[-0.97152px] mb-[33px]">
                      {page?.ratgeber_seite_fersensporn?.reference?.overview_title?.value}
                  </h3>
                  <span 
                    dangerouslySetInnerHTML={{
                      __html: (page?.ratgeber_seite_fersensporn?.reference?.overview_desc?.value),
                    }}
                  >
                  </span>
                </div>
              </div>
              <div className="col-right w-[35%]">
                <div className="video-info">
                {
                      mainVideoSection?.video_url && (
                        <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                            <iframe
                                className="absolute w-full h-full inset-0 object-cover bg-cover"
                                src={mainVideoSection?.video_url}
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                        </div>
                      )
                  }
                  <div className="info mt-[12px]">
                    <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px]">
                      {mainVideoSection?.video_title}
                    </h4>
                    <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                      <p>
                        {mainVideoSection?.video_desc}
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
                       {mainVideoSliderSection.length > 0 && mainVideoSliderSection.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="video-info">
                                <div className="video-wrap w-full aspect-video rounded-[10px] relative overflow-hidden">
                                  <iframe
                                    className="absolute w-full h-full inset-0 object-cover bg-cover"
                                    src={item?.video_url}
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  />
                                </div>
                                <div className="info mt-[12px]">
                                  <h4 className="desc text-[25px] text-[#00795C] tracking-[-0.400697px] font-bold leading-[1.2] mb-[5px]">
                                    {item?.video_title}
                                  </h4>
                                  <div className="desc text-[18px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                                    <p>
                                    {item?.video_desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                       })}
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
            <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
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



const PAGE_QUERY = `#graphql
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      ratgeber_seite_fersensporn : metafield(namespace: "custom", key: "ratgeber_seite_fersensporn") {
        reference {
          ... on Metaobject {
            handle
            head_title : field(key: "head_title") {
              value
            }
            head_title_sub : field(key: "head_title_sub") {
              value
            }
            head_title_sub_secondary : field(key: "head_title_sub_secondary") {
              value
            }
            head_desc : field(key: "head_desc") {
              value
            }
            overview_title : field(key: "overview_title") {
              value
            }
            overview_desc : field(key: "overview_desc") {
              value
            }
            main_video_section : field(key: "main_video_section") {
              value
            }
            main_video_slider_section : field(key: "main_video_slider_section") {
              value
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