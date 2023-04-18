import {ExpandingCardStyle2} from '~/components';
import React, {Fragment, useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
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
      handle: 'ratgeber-detail-page',
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
export default function ratgeberseite() {
  const {page} = useLoaderData();

  const [hashValue, sethashValue] = useState(null);

  useEffect(() => {
    document.querySelectorAll('.my-achor-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.my-anchor-link').forEach(function(link) {
          link.classList.remove('active');
        });
    
        // add active class to clicked element
        this.classList.add('active');

        var target = this.hash;
        var $target = document.querySelector(target);
        var scrollDistance = $target.offsetTop - 90;
    
        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth'
        });
      });
    });
    // window.addEventListener("hashchange", function () {
    //   if (window.location.hash) {
    //       sethashValue(window.location.hash);
    //   }
    // });
  },[]);

  return (
    <>
      <div className="container mt-[200px]">
        <section className="dr-info-tabs-section">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap gap-[46px]">
              <div className="content-info w-[510px]">
                <div className="title-wrap text-right max-w-[280px] ml-auto">
                  <h2 className='text-[#00795C] leading-none text-[100px] font-black'>{page?.ratgeber_detail?.reference?.head_title?.value}</h2>
                </div>
                
                <div className="desc mt-[52px] text-[45px] tracking-[-0.97152px] text-right text-black leading-[1.2]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(page?.ratgeber_detail?.reference?.head_content?.value),
                  }}
                >
                </div>
              </div>
              <div className="interactive-img-wrap w-[500px]">
                <div className="img-wrap w-full text-center">
                  <img className='m-auto'
                    src={page?.ratgeber_detail?.reference?.head_interactive_image?.reference?.image?.url}
                    alt=""
                  />
                </div>
              </div>
              <div className="right-col tabs-wrap flex-1 pt-[150px]">
                <div className="search-bar">
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
                        className="text-left transition border-transparent appearance-none focus:outline-0 placeholder:text-[#00795C] text-[#00795C] block pl-[62px] pr-[20px] rounded-[100px] bg-[#EDEDED] text-[25px] py-[28px] tracking-[-0.400697px] font-normal leading-none w-full"
                      />
                    </div>
                  </form>
                </div>
                <div className="scroll-links-wrap grid grid-cols-2 gap-x-[40px] gap-y-[45px] mt-[59px]">
                  <a
                    href="#link1"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Neurologische Erkrankungen
                  </a>
                  <a
                    href="#link2"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Hüftschmerzen
                  </a>
                  <a
                    href="#link3"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Rückenschmerzen
                  </a>
                  <a
                    href="#link4"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Kniearthrose
                  </a>
                  <a
                    href="#link5"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Hüftarthrose
                  </a>
                  <a
                    href="#link6"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Hallux valgus Hallux rigidus
                  </a>
                  <a
                    href="#link7"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Achillessehnen-schmerzen
                  </a>
                  <a
                    href="#link8"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Fersensporn Fasziitis / Plantaris{' '}
                  </a>
                  <a
                    href="#link9"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Fussfehlstellung
                  </a>
                  <a
                    href="#link10"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500 my-achor-link"
                  >
                    Weitere Indikationen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dr-faq-sec mt-[44px] !max-w-[870px] mx-auto mb-[115px] flex flex-col gap-[20px]">
          <ExpandingCardStyle2
            id="link1"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Füsse"
          />
          <ExpandingCardStyle2
          id="link2"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Beine"
          />
          <ExpandingCardStyle2
          id="link3"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Rücken / Rumpf / Kopf"
          />
          <ExpandingCardStyle2
          id="link4"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Knie"
          />
          <ExpandingCardStyle2
          id="link5"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Hüfte"
          />
          <ExpandingCardStyle2
          id="link6"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Systemische Erkrankungen"
          />
          <ExpandingCardStyle2
          id="link7"
            content="<ul>
            <li>Fersensporn / Plantar Fasciitis / Fasziitisplantaris</li>
            <li>Vorfussschmerzen</li>
            <li>Fussbrennen</li>
            <li>Grosszehen Arthrose / Hallux valgus</li>
            <li>Fussfehlstellungen</li>
            <li>Einschlafende Zehen / Kribbeln / Taubheitsgefühl</li>
            <li>Hornhaut / Reib- /Druckstellen / Blasen</li>
            <li>Metatarsalgie</li>
            <li>Fussgelenks- /Knöchel- /Sprunggelenksprobleme</li>
            <li>Versteiftes Fuss-/Sprunggelenk</li>
            <li>Schweissfüsse / Fussgeruch / Kalte Füsse</li>
            <li>Einlagen im kybun Schuh - Ja, Nein?</li>
            </ul>"
            title="Sonstige Indikatoren"
          />
          <div className='info-bottom mt-[151px]'>
            <div className='title-wrap'>
              <h3 className='text-center tracking-[-0.97152px] text-[45px] leading-[1.1] font-medium'>Sie vermissen ein Krankheitsbild oder möchten persönlich beraten werden?</h3>
            </div>
            <div className='link-wrap flex justify-center mt-[40px]'>
              <a href="#" className='block rounded-[100px] bg-black text-white
                 text-center px-[60px] py-[25px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit font-normal leading-none'>Schreiben Sie Uns</a>
            </div>
          </div>
        </section>
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