import React, {useState, useEffect} from 'react';
import {json} from '@shopify/remix-oxygen';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  ArrowRight,
  ArrowRightLight,
  Link,
  IconClose,
  IconDownload,
  Breadcrumb,
  IconArrowRight,
} from '~/components';
import {useLoaderData, useLocation} from '@remix-run/react';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {
  toHTML,
  truncate,
  getAicoMetaByKeyName,
  getYoutubeId,
  getBreadCrumbs,
  productTranslate,
} from '~/lib/utils';
import {flattenConnection} from '@shopify/hydrogen';
import {STORE_LOCALE, AICO_API_IMAGE_PREFIX} from '~/lib/const';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url: data?.url,
});

export const handle = {
  seo,
};
export async function loader({request, params, context}) {
  const {productHandle} = params;
  const {product, dr_kybun_joya_article} = await context.storefront.query(
    PRODUCT_QUERY,
    {
      variables: {
        handle: productHandle,
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    },
  );
  if (!product) {
    throw new Response(null, {status: 404});
  }

  return json(
    {
      product,
      dr_kybun_joya_article,
      url: request.url,
      locale: context.storefront.i18n.language,
    },
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function ratgeberSeiteFersensporn() {
  const {locale, product, dr_kybun_joya_article} = useLoaderData();
  const aicoProductData = product;
  const aicoDrKybunJoyaProductTags = [];
  let drKybunJoyaTagHeading = '';
  aicoProductData?.tags?.forEach((item) => {
    if (item.includes(`attribute_${locale?.toLocaleLowerCase()}_kybun`)) {
      if (!drKybunJoyaTagHeading) {
        //drKybunJoyaTagHeading = item.split('_').at(-2);
      }
      aicoDrKybunJoyaProductTags.push(item.split('_').at(-1));
    }
  });
  const aicoProductTagsUrsachen = [];
  let ursachenTagHeading = '';
  aicoProductData?.tags?.forEach((item) => {
    if (item.includes(`attribute_${locale?.toLocaleLowerCase()}_Ursachen`)) {
      if (!ursachenTagHeading) {
        //ursachenTagHeading = item.split('_').at(-2);
      }
      aicoProductTagsUrsachen.push(item.split('_').at(-1));
    }
  });

  const aicoTestimonialsData = aicoProductData?.testimonials_data?.value
    ? JSON.parse(aicoProductData.testimonials_data.value)
    : [];
  const aicoKnowledgeBasesData = aicoProductData?.knowledgebases_data?.value
    ? JSON.parse(aicoProductData.knowledgebases_data.value)
    : [];
  let productPdfTitle = '';
  let productPdfUrl = '';
  if (aicoKnowledgeBasesData.length > 0) {
    productPdfTitle = aicoKnowledgeBasesData[0]?.title;
    if (aicoKnowledgeBasesData[0]?.file) {
      productPdfUrl = aicoKnowledgeBasesData[0]?.file;
    } else if (aicoKnowledgeBasesData[0]?.image) {
      productPdfUrl = AICO_API_IMAGE_PREFIX + aicoKnowledgeBasesData[0]?.image;
    }
  }
  // const aicoContentBuilders = aicoProductData?.aico_content_builders?.value ? JSON.parse(aicoProductData.aico_content_builders.value) : [];
  // let aicoCotentBuilderHtml = '';
  // if (aicoContentBuilders.length) {
  //   if (aicoContentBuilders[0]['values'][0]['contentBuilder']) {
  //     aicoCotentBuilderHtml = aicoContentBuilders[0]['values'][0]['contentBuilder']['value'];
  //   }
  // }

  // const dkj_videourl_de_ch = getAicoMetaByKeyName(
  //   aicoProductData?.aico_custom_fields_de_ch?.value,
  //   'dkj_videourl_de_ch',
  // );
  // const videoId = getYoutubeId(dkj_videourl_de_ch);

  let dkj_name_international, rtgb_textursachen, rtgb_textkybunjoyatherapie, klaviyo_formular, klaviyo_formular_img, title_formular;
  let text_formular = []
  klaviyo_formular_img = aicoProductData?.drkybunjoya_bookletfront?.value
  if (locale.toLocaleLowerCase() == 'en') {
    title_formular ="Therapy brochure"
    text_formular[0]="The therapy brochure describes the condition, explains its causes and symptoms and outlines how our philosophy and products can help."
    text_formular[1]="Integrated exercises are designed to enhance the effect of our products and to alleviate the pain."
    //klaviyo_formular = "klaviyo-form-"+aicoProductData?.drkybunjoya_klformid_EN?.value;
    klaviyo_formular = "klaviyo-form-undefined"
    dkj_name_international = getAicoMetaByKeyName(
      aicoProductData?.aico_custom_fields_en?.value,
      'dkj_name_international_en',
    );
    rtgb_textursachen = getAicoMetaByKeyName(
      aicoProductData?.aico_custom_fields_en?.value,
      'rtgb_textursachen_en',
    );

    rtgb_textkybunjoyatherapie = getAicoMetaByKeyName(
      aicoProductData?.aico_custom_fields_en?.value,
      'rtgb_textkybunjoyatherapie_en',
    );
  } else {
    title_formular ="Therapiebroschüre"
    text_formular[0] = "Die Therapiebroschüre beschreibt die Krankheit, zeigt deren Ursachen sowie Symptome auf und erklärt, wie unsere Philosophie und Produkte helfen können."
    text_formular[1] = "Mit integrierten Übungen soll die Wirkung unserer Produkte verstärkt und die Schmerzen gelindert werden."

    klaviyo_formular = "klaviyo-form-"+aicoProductData?.drkybunjoya_klformid_DE?.value;

    dkj_name_international = getAicoMetaByKeyName(
      aicoProductData?.aico_custom_fields_de_ch?.value,
      'dkj_name_international_de_ch',
    );

    rtgb_textursachen = getAicoMetaByKeyName(
      aicoProductData?.aico_custom_fields_de_ch?.value,
      'rtgb_textursachen_de_ch',
    );

    rtgb_textkybunjoyatherapie = getAicoMetaByKeyName(
      aicoProductData?.aico_custom_fields_de_ch?.value,
      'rtgb_textkybunjoyatherapie_de_ch',
    );
  }

  // const dkj_videotitel_de_ch = getAicoMetaByKeyName(
  //   aicoProductData?.aico_custom_fields_de_ch?.value,
  //   'dkj_videotitel_de_ch',
  // );

  // const dkj_videobeschreibung_de_ch = getAicoMetaByKeyName(
  //   aicoProductData?.aico_custom_fields_de_ch?.value,
  //   'dkj_videobeschreibung_de_ch',
  // );

  // const rtgb_textnachbutton_de_ch = getAicoMetaByKeyName(
  //   aicoProductData?.aico_custom_fields_de_ch?.value,
  //   'rtgb_textnachbutton_de_ch',
  // );

  const [downloadLinks, setDownloadLinks] = useState([]);

  useEffect(() => {
    if (aicoProductData?.documents?.value) {
      var container = document.createElement('div');
      container.innerHTML = aicoProductData.documents.value;
      var downlinks = container.querySelectorAll('a');
      let downListArr = [];
      downlinks.forEach((link) => {
        downListArr.push({href: link.href, title: link.innerText.trim()});
      });
      setDownloadLinks(downListArr);
    }
    var klaviyoElements = document.querySelectorAll('.klaviyo-form');
    function add_klaviyo() {
      var _learnq = window._learnq || [];
      _learnq.push(['identify', {
        'dr_kybun_formular':'chao',
      }]);
      var klaviyoElements = document.querySelectorAll('.klaviyo-form');
      klaviyoElements.forEach(function (element) {
        element.removeEventListener('click', add_klaviyo);
      });
    }
    klaviyoElements.forEach(function (element) {
      element.addEventListener('click', add_klaviyo);
    });


    // const downloadLinks = document.querySelectorAll('.download-link');
    // downloadLinks.forEach((link) => {
    //   link.addEventListener('click', (event) => {
    //     event.preventDefault(); // Prevent the default link behavior

    //     const pdfUrl = link.href;
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', pdfUrl, true);
    //     xhr.responseType = 'blob';
    //     xhr.onload = () => {
    //       if (xhr.status === 200) {
    //         const blob = new Blob([xhr.response], {type: 'application/pdf'});
    //         const url = URL.createObjectURL(blob);
    //         const downloadLink = document.createElement('a');
    //         downloadLink.setAttribute('download', '');
    //         downloadLink.href = url;
    //         document.body.appendChild(downloadLink);
    //         downloadLink.click();
    //         document.body.removeChild(downloadLink);
    //       }
    //     };
    //     xhr.send();
    //   });
    // });
  }, []);

  const {pathname} = useLocation();
  const breadCrumbsData = getBreadCrumbs(null, 'ratgeberdetailpage');
  breadCrumbsData.push({title: aicoProductData?.title, to: pathname});
  return (
    <>
      <Breadcrumb crumbs={breadCrumbsData} />
      <div className="container">
        <section className="rich-text-sec flex flex-col md:flex-row gap-y-[20px] gap-x-[40px] xl:gap-x-[60px] 2xl:gap-x-[100px] items-center" id="section_1">
          <div className={`w-full ${klaviyo_formular!="klaviyo-form-undefined" ? 'lg:w-2/3' : 'lg:w-full'} h-full`}>
            <div className="rich-text-inner">
              <div className="flex flex-col gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[60px]">
                <div className="col-left w-full">
                  <div className="w-full mb-[12px]">
                    <div className="title-wrap">
                      <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px] mb-[30px] max-w-[870px] mx-auto">
                        {/* {productTranslate(aicoProductData, 'title', locale)} */}
                        {aicoProductData?.title}
                      </h2>
                      <div className="max-w-[1200px] mx-auto">
                        <div className="product-list-hero-img relative overflow-hidden pb-[55%] xl:pb-[45%] 2xl:pb-[35%] min-h-[230px] w-full">
                          <img
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={aicoProductData?.featuredImage?.url}
                            alt=""
                          />
                        </div>
                      </div>
                      {dkj_name_international && (
                        <h3 className="text-[24px] md:text-[28px] xl:text-[30px] text-[#00795C] font-bold leading-[1.2] mb-[20px]">
                          {dkj_name_international}
                        </h3>
                      )}
                    </div>
                  </div>
                  {/* <div
                    className="1 desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[870px] mx-auto mt-[44px]"
                    dangerouslySetInnerHTML={{
                      __html: productTranslate(
                        aicoProductData,
                        'description',
                        locale,
                      ),
                    }}
                  ></div> */}
                  <div
                    className="1 desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[870px] mx-auto mt-[44px]"
                    dangerouslySetInnerHTML={{
                      __html: aicoProductData?.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="rich-text-inner">
              <div className="flex flex-col gap-y-[30px] lg:gap-x-[50px] xl:gap-x-[60px]">
                <div className="col-left w-full max-w-[870px] mx-auto">
                  <div className="desc text-[16px] md:text-[16px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[32px]">

                    {aicoProductTagsUrsachen.length > 0 && (
                      <>
                        <h2 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] mb-[20px] font-medium">
                          {dr_kybun_joya_article?.causes_title?.value}
                        </h2>
                        {rtgb_textursachen && <p>{rtgb_textursachen}</p>}
                        <ul className="list-style2 list-style3">
                          {aicoProductTagsUrsachen.map((item, index) => {
                            return (
                              <li className="list-style-red" key={index}>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                    {aicoDrKybunJoyaProductTags.length > 0 && (
                      <>
                        <h2 className="text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] mb-[20px] font-medium">
                          {dr_kybun_joya_article?.kybun_joya_therapy_title?.value}
                        </h2>
                        {rtgb_textkybunjoyatherapie && (
                          <p>{rtgb_textkybunjoyatherapie}</p>
                        )}
                        <ul className="list-style2 list-style3">
                          {aicoDrKybunJoyaProductTags.map((item, index) => {
                            return (
                              <li className="list-style-green" key={index}>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </div>
                  {downloadLinks.length > 0 && (
                    <>
                      {downloadLinks.map((item, index) => {
                        return (
                          <div className="btn-wrap mt-[20px]" key={index}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={item.href}
                              className="download-link pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-black tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[25px] justify-center w-fit text-left items-center transition-all duration-700 hover:text-[#00795c] download-link underline"
                            >
                              <IconDownload className={'w-[20px] h-[20px]'} />
                              {item.title}
                            </a>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {klaviyo_formular!="klaviyo-form-undefined" ?
          <div className='w-full lg:w-1/3 h-full'>
            <div>
              <h2 className='text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] mb-[20px] font-medium'>{title_formular}</h2>
              <div className='mb-[20px]'><img src={klaviyo_formular_img}/></div>
              <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[10px]'>{text_formular[0]}</p>
              <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[10px]'>{text_formular[1]}</p>
              <div className={klaviyo_formular}></div>
            </div>
          </div>
          : null}
        </section>

        <section className="about-us-sec pb-[40px] mt-20 md:py-[60px] lg:py-[80px] xl:py-[100px]">
          <div className="inner-row">
            <div className="flex flex-col md:flex-row gap-y-[20px] gap-x-[40px] xl:gap-x-[60px] 2xl:gap-x-[100px] items-center">
              <div className="col-left w-full lg:w-[50%]">
                <div className="img-wrap relative block overflow-hidden pb-[100%] md:pb-[65%] w-full">
                  <img
                    className="h-full w-full absolute inset-0 transition hover:duration-500 object-cover"
                    src={
                      dr_kybun_joya_article?.shopfinder_section_image?.reference
                        ?.image?.url
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-right w-full lg:w-[50%]">
                <h2 className="mb-[15px] text-black text-[24px] md:text-[30px] lg:text-[35px] leading-[1.1] tracking-[-0.97152px] font-medium">
                  {dr_kybun_joya_article?.shopfinder_section_title?.value}
                </h2>
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] mb-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      dr_kybun_joya_article?.shopfinder_section_desc?.value,
                    ),
                  }}
                ></div>
                <div className="btn-wrap">
                  <Link
                    to={
                      dr_kybun_joya_article?.shopfinder_section_button_redirect
                        ?.value
                    }
                    className="inline-block rounded-[100px] bg-[#00795c] text-white
                    text-center px-[35px] py-[15px] hover:bg-black hover:text-white text-[18px] max-w-fit"
                  >
                    {
                      dr_kybun_joya_article?.shopfinder_section_button_text
                        ?.value
                    }
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrap mt-[40px] md:mt-[60px] lg:mt-[80px] flex gap-[20px] justify-center flex-col items-center">
            <Link
              to={dr_kybun_joya_article?.back_to_topic_overview_link?.value}
              className="download-link pro-btn text-[16px] md:text-[20px] lg:text-[21px] leading-none text-black tracking-[-0.400697px] font-normal flex gap-[5px] lg:gap-[20px] justify-center w-fit text-left items-center transition-all duration-700 hover:text-[#00795c] download-link hover:underline mb-[15px]"
            >
              <IconArrowRight
                className={
                  'w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'
                }
              />
              {dr_kybun_joya_article?.back_to_topic_overview_text?.value}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

const PRODUCT_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      title
      tags
      descriptionHtml
      description
      title_de_ch: metafield(namespace: "custom_fields", key: "title_de_ch") {
        value
      }
      title_en: metafield(namespace: "custom_fields", key: "title_en") {
        value
      }
      description_de_ch: metafield(namespace: "custom_fields", key: "description_de_ch") {
        value
      }
      description_en: metafield(namespace: "custom_fields", key: "description_en") {
        value
       }
      featuredImage {
        url
        altText
        width
        height
      }
      drkybunjoya_klformid_DE: metafield(namespace: "aico", key: "drkybunjoya_klformid"){
        value
      }
      drkybunjoya_klformid_EN: metafield(namespace: "aico", key: "drkybunjoya_klformidEN"){
        value
      }
      drkybunjoya_bookletfront: metafield(namespace: "aico", key: "drkybunjoya_bookletfront"){
        value
      }
      aico_content_builders: metafield(namespace: "aico", key: "aico_content_builders") {
        value
      }
      aico_custom_fields_de_ch: metafield(namespace: "aico", key: "aico_custom_fields_de_ch") {
        value
      }
      aico_custom_fields_en: metafield(namespace: "aico", key: "aico_custom_fields_en") {
        value
      }
      description_de_ch: metafield(namespace: "custom_fields", key: "description_de_ch") {
        value
      }
      description_en: metafield(namespace: "custom_fields", key: "description_en") {
        value
      }
      testimonials_data: metafield(namespace: "custom_fields", key: "testimonials_data") {
        value
      }
      knowledgebases_data: metafield(namespace: "custom_fields", key: "knowledgebases_data") {
        value
      }
      documents: metafield(namespace: "custom_fields", key: "documents") {
        value
      }
    }
    dr_kybun_joya_article: metaobject(id: "gid://shopify/Metaobject/7606731073") {
      shopfinder_section_title: field(key: "shopfinder_section_title") {
        value
      }
      shopfinder_section_desc: field(key: "shopfinder_section_desc") {
        value
      }
      shopfinder_section_image: field(key: "shopfinder_section_image") {
        reference {
          ...Media
        }
      }
      shopfinder_section_button_text: field(key: "shopfinder_section_button_text") {
        value
      }
      shopfinder_section_button_redirect: field(key: "shopfinder_section_button_redirect") {
        value
      }
      back_to_topic_overview_text: field(key: "back_to_topic_overview_text") {
        value
      }
      back_to_topic_overview_link: field(key: "back_to_topic_overview_link") {
        value
      }
      causes_title: field(key: "causes_title") {
        value
      }
      kybun_joya_therapy_title: field(key: "kybun_joya_therapy_title") {
        value
      }
    }
  }
`;
