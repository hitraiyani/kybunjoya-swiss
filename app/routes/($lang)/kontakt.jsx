import React, {useState, useEffect, useRef} from 'react';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Form, useActionData} from '@remix-run/react';
import {toHTML, getBreadCrumbs} from '~/lib/utils';
import {MEDIA_FRAGMENT} from '~/data/fragments';
import {Link, Breadcrumb, ArrowRight2} from '~/components';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
  url : data?.url,
});

export const handle = {
  seo,
};

const badRequest = (data) => json(data, {status: 400});

export const action = async ({request, context, params}) => {
  const {session, storefront} = context;
  const formData = await request.formData();
  

  const contact_reason = formData.get('contact_reason');
  const localeIsoCode = formData.get('localeIsoCode');
  const first_name = formData.get('first_name');
  const last_name = formData.get('last_name');
  const email = formData.get('email');
  const telephone_number = formData.get('telephone_number');
  const firm = formData.get('firm');
  const country = formData.get('country');
  const message = formData.get('message');

  if (
    !first_name ||
    !last_name ||
    !email ||
    !country ||
    !message ||
    typeof first_name !== 'string' ||
    typeof last_name !== 'string' ||
    typeof email !== 'string' ||
    typeof country !== 'string' ||
    typeof message !== 'string'
  ) {
    return badRequest({
      formError: 'Bitte füllen Sie alle erforderlichen Felder aus.',
      first_name : !first_name,
      last_name : !last_name,
      email : !email,
      country : !country,
      message : !message,
      firm : contact_reason != 'Kunde' && !firm,
    });
  }
  if (contact_reason != 'Kunde') {
    if (!firm || typeof firm !== 'string') {
      return badRequest({
        formError: 'Bitte füllen Sie alle erforderlichen Felder aus.',
        first_name : !first_name,
        last_name : !last_name,
        email : !email,
        country : !country,
        message : !message,
        firm : contact_reason != 'Kunde' && !firm,
      });
    }
  }

  const contactForm = {
    first_name,
    last_name,
    email,
    firm : firm ? firm : '',
    telephone_number,
    country,
    ISOCode:localeIsoCode,
    message
  }
  if (!firm) {
    delete contactForm.firm;
  }

  console.log("contactForm", contactForm)

  const rawResponse = await fetch(
    'https://hook.eu1.make.com/89qqsv5wr1wx15tnflwa4rbgutuap0o9',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactForm),
    },
  );

  const response = await rawResponse;
  
  let emailSend = false;
  if (response.status == 200) {
      emailSend = true;
  } 

  return json({isSubmitted: true, emailSend});
};

export async function loader({request, params, context}) {
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'kontakt',
      language: context.storefront.i18n.language,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  return json(
    {page, url: request.url},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function kontakt() {
  const {page} = useLoaderData();
  const pageReference = page?.kontakt?.reference;

  const [contactReason, setContactReason] = useState('');
  const actionData = useActionData();
  const isSubmitted = actionData?.isSubmitted;
  const emailSend = actionData?.emailSend;

  const [isoCode, setIsoCode] = useState("");

  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage;
    const code = userLocale.slice(0, 2);
    setIsoCode(code);
  }, []);


  let formRef = useRef();
  useEffect(() => {
    if (isSubmitted) {
      formRef.current?.reset();
    }
  }, [isSubmitted]);

  return (
    <>
      <Breadcrumb crumbs={getBreadCrumbs(null, 'kontakt')} />
      <section className="hero-banner-section ratgeber-banner-section  overflow-hidden">
        <div className="container">
          <div className="hero-banner-inner relative">
            <div className="banner-info">
              <div className="flex flex-row items-end pt-[22%] pb-[20px] md:pb-[50px] px-[20px] md:px-[40px] justify-between min-h-[300px]">
                <div className="title-wrap">
                  <h1 className="text-white text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold leading-[1.1]">
                    {pageReference?.hero_title?.value}
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-img w-full h-full absolute inset-0 z-[-1]  overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
              <img
                className="w-full h-full object-cover"
                src={pageReference?.hero_image?.reference?.image?.url}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="form-sec my-[40px] md:my-[60px] lg:my-[80px] xl:my-[100px]">
        <div className="form-wrap container">
          <div className="form-row flex flex-col lg:flex-row gap-[30px] max-w-[1168px] mx-auto">
            <div className="col-left w-full lg:w-[40%] hidden">
              <div className="col-inner">
                <div
                  className="desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.4]"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(
                      pageReference?.left_side_kontakt_text?.value,
                    ),
                  }}
                ></div>
              </div>
            </div>
            <div className="col-right w-full">
              <div className="col-inner">
                <div className="title-wrap">
                  <h2 className="text-[28px] md:text-[30px] lg:text-[35px] tracking-[-0.97152px] mb-[25px] text-black font-medium">
                    {pageReference?.kontakt_title?.value}
                  </h2>
                  <div className='desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal leading-[1.4] max-w-[715px]'>
                    <p>{pageReference?.kontakt_sub_title?.value}</p>
                  </div>
                </div>
                <div className="form-wrap mt-[30px] sm:mt-[40px] lg:mt-[60px]">
                  <div className="form-inner">
                    <Form ref={formRef} method="post">
                      {isSubmitted && (
                        <>
                          {emailSend ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-[20px]">
                              <h2 className="text-green-700">
                                Nachricht gesendet.
                              </h2>
                            </div>
                          ) : (
                            <h2 className="text-4xl mb-2 text-red-600">
                              Etwas ist schief gelaufen, bitte versuchen Sie es
                              später noch einmal.
                            </h2>
                          )}
                        </>
                      )}
                      {actionData?.formError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-[20px]">
                          <p>{actionData.formError}</p>
                        </div>
                      )}
                      <input type="hidden" name="localeIsoCode" value={isoCode} />
                      <div className="flex flex-col gap-[30px] md:gap-[50px] lg:gap-[70px] xl:gap-[94px]">
                        <div className="form-group flex gap-[20px]">
                          <div className="form-control flex-1">
                            {/* <p className="note text-[15px] leading-[1.1] text-[#595959] font-normal w-full mb-[10px]">
                              Bitte wähle den Grund deiner Anfrage aus. *
                            </p> */}
                            <select
                              name="contact_reason"
                              onChange={(e) => {
                                setContactReason(e.target.value);
                              }}
                              className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-b-[1px] focus:outline-none focus:shadow-none !rounded-none pr-[20px]"
                            >
                              <option value={''}>Ich bin ...</option>
                              <option value="Kunde">Endkunde</option>
                              <option value="B2B">Geschäftskunde</option>
                              {/* <option value="Investoren">Investoren</option> */}
                            </select>
                          </div>
                        </div>
                        {contactReason && (
                          <>
                            <div className="form-group flex gap-[20px]">
                              <div className="form-control flex-1">
                                <input
                                  type="text"
                                  name="first_name"
                                  placeholder="Vorname"
                                  className={`text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] ${actionData?.first_name ? "placeholder-red-400 border-red-400" : "placeholder-[#333333] border-b-black"} border-b-[1px] focus:outline-none focus:shadow-none !rounded-none`}
                                />
                              </div>
                              <div className="form-control flex-1">
                                <input
                                  type="text"
                                  name="last_name"
                                  placeholder="Nachname"
                                  className={`text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] ${actionData?.last_name ? "placeholder-red-400 border-red-400" : "placeholder-[#333333] border-b-black"} border-b-[1px] focus:outline-none focus:shadow-none !rounded-none`}
                                />
                              </div>
                            </div>
                            <div className="form-group flex gap-[20px]">
                              <div className="form-control flex-1">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email Adresse"
                                  className={`text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] ${actionData?.email ? "placeholder-red-400 border-red-400" : "placeholder-[#333333] border-b-black"} border-b-[1px] focus:outline-none focus:shadow-none !rounded-none`}
                                />
                              </div>
                              {contactReason &&
                                (contactReason == 'B2B' ||
                                  contactReason == 'Investoren') && (
                                  <div className="form-control flex-1">
                                    <input
                                      type="text"
                                      name="firm"
                                      placeholder="Firma"
                                      className={`text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] ${actionData?.firm ? "placeholder-red-400 border-red-400" : "placeholder-[#333333] border-b-black"} border-b-[1px] focus:outline-none focus:shadow-none !rounded-none`}
                                    />
                                  </div>
                                )}
                            </div>
                            <div className="form-group flex gap-[20px]">
                              <div className="form-control flex-1">
                                <input
                                  type="text"
                                  name="telephone_number"
                                  placeholder="Telefonnummer (empfolen)"
                                  className="placeholder-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] border-b-black border-b-[1px] focus:outline-none focus:shadow-none !rounded-none"
                                />
                              </div>
                              </div>
                            <div className="form-group flex gap-[20px]">
                              <div className="form-control flex-1">
                                <p className="note text-[15px] leading-[1.1] text-[#595959] font-normal w-full mb-[10px]">
                                  Dein Land / Region
                                </p>
                                <select
                                  name="country"
                                  className={` text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px] ${actionData?.country ? "placeholder-red-400 border-red-400" : "placeholder-[#333333] border-b-black"} border-b-[1px] focus:outline-none focus:shadow-none !rounded-none pr-[20px]`}
                                >
                                  <option value="Schweiz">Schweiz</option>
                                  <option value="United States">United States</option>
                                  <option value="Canada">Canada</option>
                                  <option value="France">France</option>
                                  <option value="Germany">Germany</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group flex gap-[20px]">
                              <div className="form-control flex-1">
                                <p className="note text-[15px] leading-[1.1] text-[#595959] font-normal w-full mb-[10px]">
                                  Deine Nachricht
                                </p>
                                <textarea
                                  placeholder="Wie können wir dir helfen?"
                                  name="message"
                                  id=""
                                  cols="30"
                                  rows="5"
                                  className={` ${actionData?.message ? "placeholder-red-400 border-red-400" : "placeholder-[#333333] border-b-black"} text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-black tracking-[-0.400697px] font-normal w-full pb-[10px]  border-b-[1px] focus:outline-none focus:shadow-none !rounded-none`}
                                ></textarea>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {contactReason && (
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
                      )}
                    </Form>
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

const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      kontakt : metafield(namespace: "custom", key: "kontakt") {
        reference {
          ... on Metaobject {
            handle
            hero_title : field(key: "hero_title") {
              value
            }
            hero_image : field(key: "hero_image") {
              reference {
                ...Media
              }
            }
            left_side_kontakt_text : field(key: "left_side_kontakt_text") {
              value
            }
            kontakt_title : field(key: "kontakt_title") {
              value
            }
            kontakt_sub_title : field(key: "kontakt_sub_title") {
              value
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
