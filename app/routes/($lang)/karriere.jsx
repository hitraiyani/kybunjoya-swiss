import React, {useEffect} from 'react';
import {ArrowRight2, IconDownload, Breadcrumb, Link} from '~/components';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';

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
  const {page} = useLoaderData();

  const karriere = page?.karriere?.reference;
  const offeneStellData = karriere?.offene_stelle_data?.value
    ? JSON.parse(karriere?.offene_stelle_data?.value)
    : [];

  useEffect(() => {
    const downloadLinks = document.querySelectorAll('.download-link');
    downloadLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        const pdfUrl = link.href;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', pdfUrl, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
          if (xhr.status === 200) {
            const blob = new Blob([xhr.response], {type: 'application/pdf'});
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', '');
            downloadLink.href = url;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        };
        xhr.send();
      });
    });
  }, []);

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs('karriere', 'uberuns')} />
      <div className="container">
        <h1 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] mb-[20px] xl:mb-[42px] font-bold">
          {karriere?.head_title?.value}
        </h1> 
      </div>
      <section className="about-sec container">
        <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[45px] items-center">
          <div className="img-col lg:flex-1 overflow-hidden w-full">
            {/* <iframe
              className="w-full aspect-[4/2]"
              src={karriere?.video_url?.value}
              frameBorder="0"
            ></iframe> */}
            <video
              className="w-full aspect-[4/2] object-cover"
              width="{320}"
              height="{240}"
              controls
              // autoPlay
              // loop
              // muted
              // playsInline
            >
              <source
                src={karriere?.video_tag_mp_4_url?.value}
                type="video/mp4"
              />
              <source
                src={karriere?.video_tag_ogg_url?.value}
                type="video/ogg"
              />
              <img
                src={karriere?.video_tag_image_url?.value}
                title="Your browser does not support the <video> tag"
              />
            </video>
          </div>
          <div className="content-col w-full lg:w-[273px] flex flex-col">
            <div
              className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4]"
              dangerouslySetInnerHTML={{
                __html: toHTML(karriere?.head_desc_part_2?.value),
              }}
            ></div>
          </div>
        </div>
        {/* <div
          className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[910px] mt-[40px] md:mt-[50px]"
          dangerouslySetInnerHTML={{
            __html: toHTML(karriere?.head_desc_part_1?.value),
          }}
        ></div> */}
      </section>
      <section className="vacancies-sec mt-[40px] lg:mt-[48px] mb-[40px] lg:mb-[60px]">
        <div className="container">
          <div className="vacancies-inner">
            <h4 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] mb-[22px] font-bold">
              {karriere?.offene_stellen_section_title?.value}
            </h4>
            <div
              className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[40px] lg:mb-[60px] max-w-[712px]"
              dangerouslySetInnerHTML={{
                __html: toHTML(karriere?.offene_stellen_section_desc?.value),
              }}
            ></div>
            <div className="vacancies-lists mt-[40px] lg:mt-[50px]">
              <ul className="last:border-b-[1px] last:border-[#000000]">
                {offeneStellData.length > 0 &&
                  offeneStellData.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="py-[20px] md:py-[23px] px-[15px] md:px-[30px] xl:px-[50px] border-t-[1px] border-[#000000]"
                      >
                        <div className="vacancies-list-inner">
                          <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between sm:items-center gap-[20px]">
                            <div className="info flex flex-col flex-1">
                              <span className="block font-medium text-[24px] lg:text-[30px] text-black tracking-[-0.97152px] leading-none mb-[10px]">
                                {item?.offene_stelle}
                              </span>
                              <span className="block font-normal text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#898989] tracking-[-0.97152px] leading-none">
                                {item?.job_ort}
                              </span>
                            </div>
                            <div className="btn-wrap flex w-fit">
                              <Link
                                href="#"
                                target="_blank"
                                to={item?.bewerben_link}
                                className="md:px-[35px] px-[20px] md:py-[18px] py-[12px] bg-[#00795c] text-[14px] md:text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-black hover:!text-white text-center"
                              >
                                {item?.bewerben}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="btn-wrap justify-start items-start mt-[20px] md:mt-[40px] xl:mt-[60px] flex flex-col gap-[20px] md:gap-[20px] xl:gap-[30px]">
              <h4 className="text-[#00795C] text-[30px] lg:text-[35px] xl:text-[40px] tracking-[-1.05984px] font-bold">
                Downloads
              </h4>
              {/* <a
                rel="noopener noreferrer"
                href={karriere?.footer_2_cta?.reference?.url}
                target="_blank"
                className="download-link pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-black tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[25px] justify-center w-fit text-left items-center transition-all duration-700 hover:text-[#00795c] download-link underline"
              >
                <IconDownload
                  className={
                    'w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] text-black'
                  }
                />
                {karriere?.footer_2_cta_label?.value}
              </a> */}
              <a
                rel="noopener noreferrer"
                href={karriere?.footer_cta?.reference?.url}
                target="_blank"
                className="download-link pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-black tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[25px] justify-center w-fit text-left items-center transition-all duration-700 hover:text-[#00795c] download-link underline"
              >
                <IconDownload
                  className={
                    'w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] text-black'
                  }
                />
                {karriere?.footer_cta_label?.value}
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
      karriere : metafield(namespace: "custom", key: "karriere") {
        reference {
          ... on Metaobject {
            head_title : field(key: "head_title") {
              value
            }
            head_desc_part_1 : field(key: "head_desc_part_1") {
              value
            }
            head_desc_part_2 : field(key: "head_desc_part_2") {
              value
            }
            video_url : field(key: "video_url") {
              value
            }
            video_tag_mp_4_url : field(key: "video_tag_mp_4_url") {
              value
            }
            video_tag_ogg_url : field(key: "video_tag_ogg_url") {
              value
            }
            video_tag_image_url : field(key: "video_tag_image_url") {
              value
            }
            offene_stellen_section_title : field(key: "offene_stellen_section_title") {
              value
            }
            offene_stellen_section_desc : field(key: "offene_stellen_section_desc") {
              value
            }
            offene_stelle_data : field(key: "offene_stelle_data") {
              value
            }
            footer_cta_label : field(key: "footer_cta_label") {
              value
            }
            footer_cta : field(key: "footer_cta") {
              reference {
                ... on GenericFile {
                    id
                    url
                }
              }
            }
            footer_2_cta_label : field(key: "footer_2_cta_label") {
              value
            }
            footer_2_cta : field(key: "footer_2_cta") {
              reference {
                ... on GenericFile {
                    id
                    url
                }
              }
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
