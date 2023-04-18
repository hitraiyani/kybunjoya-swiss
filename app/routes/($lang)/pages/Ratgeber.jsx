import {ArrowRightLight} from '~/components';

export default function ratgeber() {
  return (
    <>
      <div className="container mt-[200px]">
        <section className="page-title">
          <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-0.97152px] mb-6">
            Ratgeber
          </h1>
        </section>
        <section className="hero-banner-section ratgeber-banner-section rounded-xl overflow-hidden">
          <div className="hero-banner-inner relative">
            <div className="banner-info">
              <div className="flex flex-wrap items-end px-[72px] py-[57px] justify-between">
                <div className="title-wrap">
                  <h2 className="text-white text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] leading-[1.2]">
                    Therapieren
                    <br /> statt operieren
                  </h2>
                </div>
                <div className="dr-info flex gap-[20px] items-start">
                  <div className="name w-[280px] text-right">
                    <h4 className="font-black text-white text-[100px] leading-[1]">
                      Dr. kybun Joya
                    </h4>
                  </div>
                  <div className="dr-img">
                    <img
                      className="rounded-xl"
                      src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/photo-yzYAazAJs_1.jpg?v=1681808468"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-img w-full h-full absolute inset-0 z-[-1] rounded-xl overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-2/4"></div>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Picture_1_png.jpg?v=1680771114"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="about-sec mt-[105px]">
          <div className="about-sec-inner flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[50px]">
            <div className="img-col w-[50%]">
              <img
                className="w-full rounded-xl"
                src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/jeremy-lapak-CVvFVQ_-oUg-unsplash_1.jpg?v=1681809606"
                alt=""
              />
            </div>
            <div className="content-info w-[50%]">
              <h4 className="text-[45px] tracking-[-0.97152px] font-medium leading-[1.1]">
                <span className="text-[#00795c]">
                  «Therapieren statt operieren»
                </span>
                ist unsere Mission. Welche Schmerzen plagen Sie? Erfahren und
                erleben Sie, wie die
                <span className="text-[#00795c]">kybun Joya Therapie</span> Ihre
                Gesundheit unterstützt und fördert.
              </h4>
              <a
                href="#"
                className="inline-block rounded-[100px] bg-black text-white
                 text-center px-[59px] py-[25px] hover:bg-[#00795c] hover:text-white text-[18px] max-w-fit mt-[26px] leading-none"
              >
                Beratung Starten
              </a>
            </div>
          </div>
        </section>
        <section className="four-boxes-section my-[81px]">
          <div className="four-boxes-inner">
            <div className="grid grid-cols-4 gap-[20px]">
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                    Medizin
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>Medizinische Themen <br/>im Überblick</p>
                  </div>
                  <a href="#" className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'  
                      }
                    />
                  </a>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                  Wirkungsweise
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>Wie kann das Gehen und Stehen auf weich-elastisch-federndem Material Ihre Gesundheit unterstützen?</p>
                  </div>
                  <a href="#" className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </a>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                  Gesundheit-Events
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>Hier erfahren Sie, wann der nächste Gesundheits-event in ihrer Nähe stattfindet.</p>
                  </div>
                  <a href="#" className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </a>
                </div>
              </div>
              <div className="item flex flex-col rounded-[10px]">
                <div className="title-wrap bg-[#00795C] rounded-tl-[10px] rounded-tr-[10px]">
                  <h4 className="text-white text-[35px] font-bold leading-none p-[20px]">
                  Studien
                  </h4>
                </div>
                <div className="content-info px-[20px] pt-[12px] pb-[20px] bg-[#EDEDED] rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-[8px] h-full">
                  <div className="desc text-[25px] tracking-[-0.400697px] font-normal leading-[1.4]">
                    <p>Erhalten Sie Hintergrundinfos zu unseren Studien und Gütersiegeln.</p>
                  </div>
                  <a href="#" className='text-[#00795C] flex justify-end items-center gap-[8px] text-[25px] tracking-[-0.400697px] font-normal  mt-auto hover:!text-black'>
                    Mehr erfahren
                    <ArrowRightLight
                      className={
                        'w-[30px] h-[30px]'
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
