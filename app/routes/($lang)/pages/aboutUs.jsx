import React from 'react';

export default function aboutUs() {
  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <section className="video-banner-with-title pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[50px]">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[60px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            kybun Joya Story{' '}
          </h1>
          <div className="video-wrap relative overflow-hidden rounded-xl pb-[35%] min-h-[400px] w-full">
            <iframe
              className="absolute w-full h-full inset-0 object-cover bg-cover"
              src="https://www.youtube.com/embed/yAoLSRbwxL8"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
        <section className="timeline-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <div className="title-wrap">
            <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[20px] md:mb-[30px] xl:mb-[42px] font-bold text-center">
              Story
            </h2>
          </div>
          <div className="w-full">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical bar running through middle */}
              <div className="hidden md:block w-[2px] bg-[#DEDEDE] absolute h-full left-1/2 transform -translate-x-1/2" />
              {/* Left section, set by justify-start and sm:pr-8 */}
              <div className="timeline-items">
                <div className="py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] timeline-item">
                  <div className="flex flex-col md:flex-row gap-y-[20px]">
                    <div className="img-wrap w-full md:w-[50%]">
                      <div className="overflow-hidden pb-[59%] relative rounded-[10px] w-full">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar213__2.png?v=1682329227"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="content-wrap w-full md:w-[50%]">
                      <h3 className="text-[#000000] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[5px] font-bold leading-[1.1]">
                        Titel
                      </h3>
                      <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                        Im Jahr 1996 erfand Dipl. Ing. ETH Karl Müller den MBT
                        Schuh und revolutionierte mit dieser «abrollenden Sohle»
                        die Schuhindustrie.
                      </div>
                    </div>
                    <div className="text-white bg-[#00795C] px-[30px] py-[5px] tracking-[-0.97152px] leading-none text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] absolute left-1/2 -translate-y-4 md:translate-y-0 transform -translate-x-1/2 flex items-center justify-center rounded-[110px] font-medium w-fit">
                      <span>1996</span>
                    </div>
                  </div>
                </div>
                {/* Right section, set by justify-end and sm:pl-8 */}
                <div className="py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] timeline-item">
                  <div className="flex flex-col md:flex-row gap-y-[20px]">
                    <div className="img-wrap w-full md:w-[50%]">
                      <div className="overflow-hidden pb-[59%] relative rounded-[10px] w-full">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar213__2.png?v=1682329227"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="content-wrap w-full md:w-[50%]">
                      <h3 className="text-[#000000] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[5px] font-bold leading-[1.1]">
                        Titel
                      </h3>
                      <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                        Nach dem Verkauf von MBT in September 2006 entwickelte
                        Karl Müller die elastisch-federnde Trampolin-Sohle
                        seiner neuen Marke kybun. Zeitgleich entwickelte sein
                        Sohn, Karl IV, gemeinsam mit seinem Geschäftspartner die
                        Schuhtechnologie von Joya.
                      </div>
                    </div>
                    <div className="text-white bg-[#00795C] px-[30px] py-[5px] tracking-[-0.97152px] leading-none text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] absolute left-1/2 -translate-y-4 md:translate-y-0 transform -translate-x-1/2 flex items-center justify-center rounded-[110px] font-medium w-fit">
                      <span>2006</span>
                    </div>
                  </div>
                </div>
                {/* Left section, set by justify-start and sm:pr-8 */}
                <div className="py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] timeline-item">
                  <div className="flex flex-col md:flex-row gap-y-[20px]">
                    <div className="img-wrap w-full md:w-[50%]">
                      <div className="overflow-hidden pb-[59%] relative rounded-[10px] w-full">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar213__2.png?v=1682329227"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="content-wrap w-full md:w-[50%]">
                      <h3 className="text-[#000000] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-1.05984px] mb-[5px] font-bold leading-[1.1]">
                        Titel
                      </h3>
                      <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                        Fusion zur kybun Joya Gruppe 2022
                      </div>
                    </div>
                    <div className="text-white bg-[#00795C] px-[30px] py-[5px] tracking-[-0.97152px] leading-none text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] absolute left-1/2 -translate-y-4 md:translate-y-0 transform -translate-x-1/2 flex items-center justify-center rounded-[110px] font-medium w-fit">
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrap flex justify-center mt-[20px] md:mt-[30px] xl:mt-[42px]">
            <a
              className="w-fit px-[30px] py-[15px] bg-black rounded-[100px] transition-all !text-white text-[18px] md:text-[20px] lg:text-[25px] tracking-[-0.400697px] hover:bg-[#00795c] font-normal"
              href="/"
            >
              Mehr Anzeigen
            </a>
          </div>
        </section>
        <section className="about-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <h2 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
            Einblick in unsere Produkte
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
            <div className="content-col flex-1 flex flex-col">
              <h4 className="text-[35px] lg:text-[40px] xl:text-[55px] text-[#00795C] leading-[1.2] tracking-[-1.05984px] mb-[17px] font-medium">
                Unser Produkt
              </h4>
            </div>
            <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
              <img
                className="h-full object-cover  rounded-xl block"
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_5.png?v=1682331650"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="about-sec py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px]">
          <h2 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
            Was uns antreibt
          </h2>
          <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
            <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
              <img
                className="h-full object-cover  rounded-xl block"
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_6.png?v=1682332215"
                alt=""
              />
            </div>
            <div className="content-col flex-1 flex flex-col">
              <h4 className="text-[35px] lg:text-[40px] xl:text-[55px] text-[#00795C] leading-[1.2] tracking-[-1.05984px] mb-[17px] font-medium">
                Unsere Mission
              </h4>
              <div className="desc text-black text-[16px] lg:text-[25px] leading-[1.3] font-[400]">
                <p>
                  Mit dem kybun Schuh erleben Sie gleich von Beginn an das
                  einzigartige walk-on-air Gefühl. «Im kybun Schuh gehen Sie
                  nicht, Sie schweben. Das walk-on-air Gefühl ist einmalig»,
                  erklärt Karl Müller. Im kybun Schuh ruht der Fuss direkt auf
                  der elastisch-federnden Sohle, welche dem Fuss die maximale
                  Bewegungsfreiheit bietet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-sec pt-[20px] md:pt-[30px] lg:pt-[40px] xl:pt-[50px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <h2 className="text-[#000000] text-[18px] mb-[30px] xl:mb-[44px] pb-[20px] uppercase border-b border-black font-normal">
            Wissenschaft
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
            <div className="content-col flex-1 flex flex-col">
              <h4 className="text-[35px] lg:text-[40px] xl:text-[55px] text-[#00795C] leading-[1.2] tracking-[-1.05984px] mb-[17px] font-medium">
                CloudTech
              </h4>
              <div className="desc text-black text-[16px] lg:text-[25px] leading-[1.3] font-[400]">
                <p>
                  Mit dem kybun Schuh erleben Sie gleich von Beginn an das
                  einzigartige walk-on-air Gefühl. «Im kybun Schuh gehen Sie
                  nicht, Sie schweben. Das walk-on-air Gefühl ist einmalig»,
                  erklärt Karl Müller. Im kybun Schuh ruht der Fuss direkt auf
                  der elastisch-federnden Sohle, welche dem Fuss die maximale
                  Bewegungsfreiheit bietet.
                </p>
                <p>
                  Diese Elastizität und Flexibilität in alle Richtungen ist ein
                  ausgezeichnetes Training für die Muskulatur und Sie werden
                  spüren, wie gut sie absorbiert, dämpft und sich Ihrer Fussform
                  anpasst. Ob beim Arbeiten oder zu Hause, zu einer Wanderung
                  oder einem Spaziergang durch die Stadt, der kybun Schuh ist so
                  angenehm zu tragen, dass Sie ihn nie wieder ausziehen wollen.
                </p>
              </div>
            </div>
            <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
              <img
                className="h-full object-cover  rounded-xl block"
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/ss23-tennis-athletes-iga-swiatek-editorials-19-Mar23__2_.jpg_7.png?v=1682343242"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
