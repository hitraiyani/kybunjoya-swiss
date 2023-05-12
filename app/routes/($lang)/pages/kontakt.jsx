import React from 'react';
import {Breadcrumb, ArrowRight2} from '~/components';
export default function kontakt() {
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
                    Kontakt
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="hero-banner-section kontakt-banner-section  overflow-hidden">
        <div className="hero-banner-inner relative">
          <div className="banner-info">
            <div className="flex flex-row items-end pt-[16.5%] pb-[50px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] justify-between min-h-[300px]">
              <div className="title-wrap">
                <h1 className="text-white text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold leading-[1.1]">
                  Wie können wir dir helfen?
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-img w-full h-full absolute inset-0 z-[-1]  overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
            <img
              className="w-full h-full object-cover "
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_122.png?v=1681807071"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="form-sec my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
        <div className="form-wrap container">
          <div className="form-row flex flex-col lg:flex-row gap-[30px]">
            <div className="col-left w-full lg:w-[40%]">
              <div className="col-inner">
                <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.4]">
                  <p>
                    Du kannst uns von Montag bis
                    <br /> Freitag zwischen 8:00 und <br />
                    18:00 (CET) anrufen
                  </p>
                  <p>
                    <a href="tel:+41 12 345 67 89">+41 12 345 67 89</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-right w-full lg:w-[60%]">
              <div className="col-inner">
                <div className="title-wrap">
                  <h2 className="text-[28px] md:text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[25px] text-black font-medium">
                    Allgemeine Anfragen
                  </h2>
                </div>
                <div className="form-wrap">
                  <div className="form-inner">
                    <form action="">
                      <div className="flex flex-col gap-[30px] md:gap-[50px] lg:gap-[70px] xl:gap-[94px]">
                        <div className="form-group flex gap-[20px]">
                          <div className="form-control flex-1">
                            <p className="note text-[15px] leading-[1.1] text-[#595959] font-normal w-full mb-[10px]">
                              Bitte wähle den Grund deiner Anfrage aus. *
                            </p>
                            <select
                              id="countries"
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-black border-b-[1px] focus:outline-none focus:shadow-none pr-[20px]"
                            >
                              <option selected="">
                                Product advice & sizing
                              </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group flex gap-[20px]">
                          <div className="form-control flex-1">
                            <input
                              type="text"
                              placeholder="Vorname *"
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-black border-b-[1px] focus:outline-none focus:shadow-none"
                            />
                          </div>
                          <div className="form-control flex-1">
                            <input
                              type="text"
                              placeholder="Nachname *"
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-black border-b-[1px] focus:outline-none focus:shadow-none"
                            />
                          </div>
                        </div>
                        <div className="form-group flex gap-[20px]">
                          <div className="form-control flex-1">
                            <input
                              type="email"
                              placeholder="Email Adresse *"
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-black border-b-[1px] focus:outline-none focus:shadow-none"
                            />
                          </div>
                        </div>
                        <div className="form-group flex gap-[20px]">
                          <div className="form-control flex-1">
                            <p className="note text-[15px] leading-[1.1] text-[#595959] font-normal w-full mb-[10px]">
                              Dein Land / Region *
                            </p>
                            <select
                              id="countries"
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-black border-b-[1px] focus:outline-none focus:shadow-none pr-[20px]"
                            >
                              <option selected="">Schweiz</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group flex gap-[20px]">
                          <div className="form-control flex-1">
                            <p className="note text-[15px] leading-[1.1] text-[#595959] font-normal w-full mb-[10px]">
                              Deine Nachricht *
                            </p>
                            <textarea
                              placeholder="Wie können wir dir helfen?"
                              name=""
                              id=""
                              cols="30"
                              rows="5"
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-black border-b-[1px] focus:outline-none focus:shadow-none"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="form-group flex gap-[20px] mt-[33px]">
                        <div className="form-control flex-1">
                          <button
                            type="submit"
                            className="inline-block rounded-[100px] bg-black text-white text-center px-[35px] lg:px-[60px] py-[15px] lg:py-[25px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit font-medium"
                          >
                            Abschicken
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
