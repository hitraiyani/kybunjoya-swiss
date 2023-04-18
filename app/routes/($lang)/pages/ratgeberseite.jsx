import {ArrowRightLight} from '~/components';

export default function ratgeberseite() {
  return (
    <>
      <div className="container mt-[200px]">
        <section className="dr-info-tabs-section">
          <div className="dr-info-tabs-inner">
            <div className="flex flex-wrap gap-[46px]">
              <div className="content-info w-[510px]">
                <div className="title-wrap text-right max-w-[280px] ml-auto">
                  <h2 className='text-[#00795C] leading-none text-[100px] font-black'>Dr. kybun Joya</h2>
                </div>
                <div className="desc mt-[52px] text-[45px] tracking-[-0.97152px] text-right text-black leading-[1.2]">
                  <p>
                    Lokalisieren Sie Ihre Schmerzen und lernen Sie die <span className='text-[#00795C]'>kybun
                    Joya Therapie</span> für Ihr Leiden kennen.
                  </p>
                </div>
              </div>
              <div className="interactive-img-wrap w-[500px]">
                <div className="img-wrap w-full text-center">
                  <img className='m-auto'
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
                        <svg width={32} height={32} viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="22.6274" cy="23.4645" r={15} transform="rotate(-45 22.6274 23.4645)" stroke="black" strokeWidth={2} /> <line x1="33.9415" y1="34.7782" x2="41.0126" y2="41.8493" stroke="black" strokeWidth={2} /> </svg>
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
                <div className='tabs-wrap'>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
