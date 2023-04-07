import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ExpandingCard} from '~/components';

export default function quickLink() {
  return (
    <>
      <div className="container">
        <div className="title-wrap mt-[120px] lg:mt-[200px]">
          <h2 className="title text-[#00795C] tracking-[-2.07729px] text-[35px] md:text-[45px] lg:text-[75px] xl:text-[95px] mb-[35px] md:mb-[45px] lg::mb-[65px] xl:mb-[85px]">
            Erlebnis
          </h2>
        </div>
      </div>
      <div className="banner container">
        <div className="banner-row">
          <img
            className="object-cover rounded-xl w-full"
            src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_1.png?v=1680845220"
            alt=""
          />
        </div>
      </div>
      <div className="about-sec container mt-[48px]">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[63px]">
          <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
              slidesPerView={1}
              navigation={false}
              loop="false"
              autoplay="false"
              pagination={{clickable: true}}
              className="h-full overflow-visible rounded-xl flex flex-col"
            >
              <SwiperSlide>
                <img
                  className="h-full object-cover  rounded-xl block"
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Images.jpg?v=1680858582"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-full object-cover  rounded-xl block"
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/jeremy-lapak-CVvFVQ_-oUg-unsplash_1.png?v=1680858463"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[35px] lg:text-[40px] xl:text-[55px] text-[#00795C] leading-[1.2] tracking-[-2.07729px] mb-[15px]">
              Schuhe hautnah erleben
            </h2>
            <h3 className="subtitle text-[18px] lg:text-[23px] text-balck leading-[1.3] mb-[20px] font-[400]">
              Werfen Sie einen Blick hinter die Kulissen und erleben Sie wie der
              Schweizer Luftkissen-Schuh mit der elastisch-federnden Sohle in
              bis zu 40 Arbeitsschritten mit viel Handarbeit hergestellt wird.
            </h3>
            <a
              href="#"
              className="inline-block rounded-[100px] bg-black text-white
             text-center px-[59px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-[224px]"
            >
              Jetzt Buchen
            </a>
            <div className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] mt-[30px] md:mt-[50px] xl:mt-[135px] font-[400]">
              <p>
                Die von Karl Müller, Erfinder des bis heute millionenfach
                verkauften MBT Schuhs, eigens entwickelte kybun Schuh Hightech
                Produktionsanlage, spiegelt die führende Innovationsstärke,
                Präzision und Qualität der Schweiz wieder.
              </p>
              <p>
                Die kybun MechanoTherapie ist die Weiterentwicklung vom
                Abroll-Gedanken des MBT Schuhs zum walk-on-air Konzept von
                kybun. Die dazu entwickelten und patentierten Produkte
                ermöglichen das Wohlgefühl und die Wirkung des
                elastisch-federnden Naturbodens in den Alltag des zivilisierten
                Menschen zu bringen.
              </p>
              <p>
                Zur Zeit wird in 27 Ländern der kybun Schuh – der Schweizer
                Luftkissen-Schuh – vertrieben, von vielen Ärzten,
                Physiotherapeuten, etc. empfohlen und von 100‘000-tausenden
                zufriedenen Kunden weltweit getragen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-sec container mt-10">
        <h3 className="title uppercase text-[18px] leading-[1.2] pb-[10px] border-b border-[#595959] font-normal">
          Häufige Fragen
        </h3>
        <ExpandingCard
          content="Die von Karl Müller, Erfinder des bis heute millionenfach verkauften MBT Schuhs, eigens entwickelte kybun Schuh Hightech Produktionsanlage, spiegelt die führende Innovationsstärke, Präzision und Qualität der Schweiz wieder."
          title="Öffnungszeiten"
        />
        <ExpandingCard
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
          title="Stonierungen"
        />
        <ExpandingCard
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
          title="Addresse"
        />
        <ExpandingCard
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
          title="Anreise"
        />
      </div>
      <div className="video-sec container mt-[40px] xl:mt-[87px] mb-[50px] lg:mb-[80px] xl:mb-[134px]">
        <div className="title-wrap">
          <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] mb-[20px] xl:mb-[44px]">
            Unsere Neueröffnung im Überblick
          </h2>
          <div className="video-wrap">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/yAoLSRbwxL8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="btn-wrap">
            <a
              href="#"
              className="inline-block rounded-[100px] bg-black text-white
             text-center px-[59px] py-[15px] hover:bg-[#00795c] hover:text-white text-[18px] mt-[20px] xl:mt-[48px]"
            >Jetzt Buchen</a>
          </div>
        </div>
      </div>
    </>
  );
}
