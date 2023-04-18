import {ExpandingCardStyle2} from '~/components';

export default function ratgeberseite() {
  return (
    <>
      <div className="container mt-[200px]">
        <section className="dr-info-tabs-section">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap gap-[46px]">
              <div className="content-info w-[510px]">
                <div className="title-wrap text-right max-w-[280px] ml-auto">
                  <h2 className="text-[#00795C] leading-none text-[100px] font-black">
                    Dr. kybun Joya
                  </h2>
                </div>
                <div className="desc mt-[52px] text-[45px] tracking-[-0.97152px] text-right text-black leading-[1.2]">
                  <p>
                    Lokalisieren Sie Ihre Schmerzen und lernen Sie die{' '}
                    <span className="text-[#00795C]">kybun Joya Therapie</span>{' '}
                    für Ihr Leiden kennen.
                  </p>
                </div>
              </div>
              <div className="interactive-img-wrap w-[500px]">
                <div className="img-wrap w-full text-center">
                  <img
                    className="m-auto"
                    src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/full-length-portrait-serious-old-lady-blue-shirt-white-pants-standing-with-hands-her-waist_1.png?v=1681814517"
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
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Neurologische Erkrankungen
                  </a>
                  <a
                    href="#link2"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Hüftschmerzen
                  </a>
                  <a
                    href="#link3"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Rückenschmerzen
                  </a>
                  <a
                    href="#link4"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Kniearthrose
                  </a>
                  <a
                    href="#link5"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Hüftarthrose
                  </a>
                  <a
                    href="#link6"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Hallux valgus Hallux rigidus
                  </a>
                  <a
                    href="#link7"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Achillessehnen-schmerzen
                  </a>
                  <a
                    href="#link8"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Fersensporn Fasziitis / Plantaris{' '}
                  </a>
                  <a
                    href="#link9"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
                  >
                    Fussfehlstellung
                  </a>
                  <a
                    href="#link10"
                    className="px-[20px] py-[26px] flex justify-center items-center text-center bg-white rounded-[10px] text-[25px] leading-[1.4] hover:text-white hover:bg-[#00795C] min-h-[116px] font-bold text-[#00795C] transition-all duration-500"
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
