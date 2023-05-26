import React from 'react';
import {ArrowRight2, IconDownload, Breadcrumb} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';


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
        handle: 'karriere',
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


export default function karriere() {
  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs('karriere','uberuns')}/>
      <div className="container mt-10 mb-[50px]">
        <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[30px] xl:mb-[42px] font-bold">
          Karriere
        </h1>
        <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[991px]">
          <p>
            Die kybun Joya Gruppe ist ein zukunftsträchtiges Schweizer
            Unternehmen, dass sich seit 1996 auf die Vermarktung von
            Gesundheitsschuhen spezialisiert hat, die Menschen hochwertige
            Lösungen für Probleme am Bewegungsapparat bietet.
          </p>
          <p>
            Bei uns arbeiten sie in einem dynamischen Firmenumfeld. Unsere
            kleinen Teams können schnellen Entscheidungen umsetzen, um flexibel
            auf Veränderungen im Markt reagieren zu können die das
            Unternehmensentwicklung mit sich bringt.
          </p>
        </div>
      </div>
      <section className="about-sec container mt-[48px]">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[45px]">
          <div className="img-col lg:w-[65%] overflow-hidden w-full">
            <iframe
              className="w-full aspect-[4/2]"
              src="https://www.youtube.com/embed/xt4tIj31Edk"
              frameborder="0"
            ></iframe>
          </div>
          <div className="content-col w-full lg:w-[35%] flex flex-col">
            <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
              <p>
                Als Unternehmen im Wachstum bieten wir unseren Mitarbeiterinnen
                spannende Herausforderungen und Karrieremöglichkeiten. Wir
                suchen engagierte und motivierte Mitarbeiterinnen, die unsere
                Vision teilen und gemeinsam mit uns die Zukunft gestalten
                möchten.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="vacancies-sec mt-[40px] lg:mt-[48px] mb-[40px] lg:mb-[60px]">
        <div className="container">
          <div className="vacancies-inner">
            <h4 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[22px] font-bold">
              Offene Stellen
            </h4>
            <div className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[40px] lg:mb-[60px] max-w-[645px]">
              <p>
                Es geht unserer Firma gut, weil wir die besten Mitarbeiterinnen
                und Mitarbeiter haben. Wir erschaffen ein Fundamente damit Sie
                Freude an der arbeiten haben. Wir fördern Sie und unterstützen
                Sie dabei, Ihre Berufung zu finden und die gottgegebenen Talente
                richtig einzusetzen. Wir freuen uns auf Ihre Bewerbung.
              </p>
            </div>
            <div className="vacancies-lists mt-[40px] lg:mt-[50px]">
              <ul className="last:border-b-[1px] last:border-[#000000]">
                <li className="py-[15px] md:py-[23px] px-[15px] md:px-[30px] xl:px-[50px] border-t-[1px] border-[#000000]">
                  <div className="vacancies-list-inner">
                    <div className="flex justify-between items-center gap-[20px]">
                      <div className="info flex flex-col">
                        <span className="block font-medium text-[24px] md:text-[30px] lg:text-[35px] text-black tracking-[-0.97152px] leading-none mb-[5px]">
                          vacancies
                        </span>
                        <span className="block font-normal text-[20px] md:text-[26px] lg:text-[30px] text-[#898989] tracking-[-0.97152px] leading-none">
                          Job Ort
                        </span>
                      </div>
                      <div className="btn-wrap flex">
                        <a
                          href="#"
                          className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                        >
                          Bewerben
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-[15px] md:py-[23px] px-[15px] md:px-[30px] xl:px-[50px] border-t-[1px] border-[#000000]">
                  <div className="vacancies-list-inner">
                    <div className="flex justify-between items-center gap-[20px]">
                      <div className="info flex flex-col">
                        <span className="block font-medium text-[24px] md:text-[30px] lg:text-[35px] text-black tracking-[-0.97152px] leading-none mb-[5px]">
                          vacancies
                        </span>
                        <span className="block font-normal text-[20px] md:text-[26px] lg:text-[30px] text-[#898989] tracking-[-0.97152px] leading-none">
                          Job Ort
                        </span>
                      </div>
                      <div className="btn-wrap flex">
                        <a
                          href="#"
                          className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                        >
                          Bewerben
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-[15px] md:py-[23px] px-[15px] md:px-[30px] xl:px-[50px] border-t-[1px] border-[#000000]">
                  <div className="vacancies-list-inner">
                    <div className="flex justify-between items-center gap-[20px]">
                      <div className="info flex flex-col">
                        <span className="block font-medium text-[24px] md:text-[30px] lg:text-[35px] text-black tracking-[-0.97152px] leading-none mb-[5px]">
                          vacancies
                        </span>
                        <span className="block font-normal text-[20px] md:text-[26px] lg:text-[30px] text-[#898989] tracking-[-0.97152px] leading-none">
                          Job Ort
                        </span>
                      </div>
                      <div className="btn-wrap flex">
                        <a
                          href="#"
                          className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                        >
                          Bewerben
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-[15px] md:py-[23px] px-[15px] md:px-[30px] xl:px-[50px] border-t-[1px] border-[#000000]">
                  <div className="vacancies-list-inner">
                    <div className="flex justify-between items-center gap-[20px]">
                      <div className="info flex flex-col">
                        <span className="block font-medium text-[24px] md:text-[30px] lg:text-[35px] text-black tracking-[-0.97152px] leading-none mb-[5px]">
                          vacancies
                        </span>
                        <span className="block font-normal text-[20px] md:text-[26px] lg:text-[30px] text-[#898989] tracking-[-0.97152px] leading-none">
                          Job Ort
                        </span>
                      </div>
                      <div className="btn-wrap flex">
                        <a
                          href="#"
                          className='"md:px-[35px] px-[30px] md:py-[18px] py-[15px] bg-black text-[16px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center'
                        >
                          Bewerben
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="btn-wrap justify-center mt-[20px] md:mt-[40px] xl:mt-[60px]">
              <a
                rel="noopener noreferrer"
                href="#"
                className="pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-white tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[15px] justify-center px-[20px] lg:px-[35px] py-[15px] lg:py-[20px] bg-black rounded-[100px] w-fit text-center items-center transition-all duration-700 hover:bg-[#00795c] hover:text-white download-link mx-auto"
              >
                <IconDownload
                  className={
                    'w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'
                  }
                />
                kybun Joya Werte & Kultur
              </a>
            </div>
          </div>
        </div>
      </section>
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
      seo {
        description
        title
      }
    }
  }
`;