import React from 'react';

export default function unternehmen() {
  return (
    <>
      <div className="Breadcrumb-sec mb-[20px] lg:mb-[25px]">
        <div className="container">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-y-[10px] gap-x-[8px] md:gap-x-[16px] flex-wrap">
              <li className="inline-flex items-center">
                <a
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="inline-flex items-center">
                <svg
                  className="w-[21px] h-[21px] mr-[8px] md:mr-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  {' '}
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{' '}
                </svg>
                <a
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                  href="#"
                >
                  Unternehmen
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="banner-with-title">
        <div className="container">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
            Unternehmen
          </h1>
          <div className="product-list-hero-img relative overflow-hidden pb-[35%] min-h-[400px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_1_2.png?v=1685082146"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="aboutus-section mt-[40px] lg:mt-[62px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] max-w-[1030px] mx-auto">
        <div className="container">
          <div className="desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[40px] md:mb-[50px] lg:mb-[70px] xl:mb-[86px]">
            <p>
              Seit 1996 beschäftigt sich die kybun Joya Gruppe,
              Schuhtechnologien zu entwickeln, die Menschen qualitative und
              hochwertige Lösungen für Probleme am Bewegungsapparat bieten.
            </p>
            <p>
              Die kybun Joya Gruppe besteht aus den Schuhmarken kybun, Joya und
              Kandahar, aus den zwei Fachhandelskonzepten «Passt!» und «kybun |
              Joya» sowie einem weltweiten Entwicklungs- und Produktionsnetzwerk
              für Gesundheitsschuhe.
            </p>
            <p>
              Die kybun Joya Gruppe beschäftigt über 200 Mitarbeiter, die Hälfte
              davon in der Schweiz. Dir Firma produziert 400’000 Paar Schuhe im
              Jahr. Die Firma ist in über 40 Ländern vertreten, mit über 1.200
              Verkaufspunkten.
            </p>
          </div>
          <div className='img-wrap mb-[20px] lg:mb-[35px]'>
            <img className='max-w-full h-auto w-full' src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Screenshot_2023-05-30_at_1.36_1.png?v=1685521959" alt="" />
          </div>
          <div className='desc text-black text-[16px] lg:text-[21px] leading-[1.3] font-[400] mb-[25px]'>
            <p>Das Unternehmen wird vom CEO Karl Müller und Claudio Minder geleitet. Sie sind Autor vom Buch, The Joya Way. Markus Bartholet ergänz als Vorstand das Unternehmerduo.  </p>
          </div>
          <div className='sub-title mb-[25px]'>
            <h4 className='text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-normal'>Buchtip “The Joya Way”</h4>
          </div>
          <div className='btn-wrap'>
            <a className='inline-block rounded-[100px] bg-black text-white
                 text-center px-[35px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit' href="#">Entdecken</a>
          </div>
        </div>
      </section>
    </>
  );
}
