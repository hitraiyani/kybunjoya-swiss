import React, {useRef, useEffect, useState} from 'react';
import {useFetcher, useLoaderData} from '@remix-run/react';
import {IconArrowBottom, Link} from '~/components';

export function Newsletter() {
  const {load, data} = useFetcher();
  const [isLoading, setIsLoading] = useState(false);
  let formRef = useRef();

  const handleSubscribe = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    console.log(event.target.email.value);
    await load(
      `/api/newsletter?email=${encodeURIComponent(event.target.email.value)}`,
    );
  };

  useEffect(() => {
    if (data?.status) {
      setIsLoading(false);
    }
    if (data?.status == true) {
      formRef.current?.reset();
    }
  }, [data]);

  return (
    <>
      <div className="max-w-full md:max-w-[348px] lg:max-w-[488px] 2xl:max-w-[748px]">
        <div className="footer-logo max-w-[150px] mb-[40px] md:hidden">
          <img
            className="w-full h-auto"
            src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/logo_2.png?v=1686818080"
            alt=""
          />
        </div>
        <div className="flex flex-wrap items-center ">
          <h3 className="text-[#00795C] w-full font-bold lg:text-[42px] text-[30px] mb-3">
            Abonnieren Sie unseren Newsletter
          </h3>
          <p className="font-normal  text-[#595959] w-full text-[19px]">
            Bleiben Sie auf dem Laufenden mit den neuesten Ereignissen.
          </p>
        </div>
        <form className="mt-12" ref={formRef} onSubmit={handleSubscribe}>
          <div className="max-w-full  relative">
            <input
              type="email"
              id="email"
              className="bg-transparent border-b-[1px] font-normal border-[#999999] text-[#000] text-base placeholder:text-[#CCCCCC] focus:ring-black-500 focus:border-black-500 block w-full p-0 focus:bordr-0 focus:outline-none focus:border-b-[1px] focus:border-[#000] dark:placeholder-gray-400  dark:focus:ring-black-500 dark:focus:border-black-500 pb-[10px] pr-[20px]"
              placeholder="Email"
              required
            />
            <button
              className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[#CCCCCC]"
              type="submit"
              disabled={isLoading}
            >
              <IconArrowBottom
                className={'rotate-[-90deg] w-[30px] h-[30px]'}
              />
            </button>
          </div>
          {data?.status == true && (
            <span className="text-green-700 mt-[5px] block">
              {' '}
              {data?.message}{' '}
            </span>
          )}
          {data?.status == false && (
            <span className="text-red-700 mt-[5px] block">
              {' '}
              {data?.message}{' '}
            </span>
          )}
        </form>
      </div>
      {/* <section className="newsletter-sec relative py-[40px] lg:py-[50px] overflow-hidden bg-[#CCE9FA]">
        <div className="container mx-auto relative z-[1]">
            <h2 className="text-[#003362] font-bold text-[20px] mb-[10px]">
            Newsletter
            </h2>
            <p className="max-w-[600px] text-[#003362] text-[16px] font-normal leading-[1.2]">
            Bleib informiert! Abonniere unseren Newsletter und erhalte exklusive Angebote und Neuigkeiten.
            </p>
            <form ref={formRef} onSubmit={handleSubscribe}>
            <div className="flex gap-[16px] max-w-[600px] mt-[20px]">
                <input
                type="email"
                name="email"
                className="form-control block w-full text-[16px] p-[12px] font-normal text-black bg-white bg-clip-padding border border-[#1F0062] rounded-[5px] transition ease-in-out focus:outline-none"
                placeholder="email@beispiel.com"
                />
                <button
                type="submit"
                disabled={isLoading}
                className="inline-block text-white font-medium text-[15px] px-[26px] py-[16px] leading-none w-fit border border-[#2767A3] bg-[#2767A3] hover:bg-[#003362] hover:border-[#003362] rounded-[61px]"
                >
                Abonnieren
                </button>
            </div>
            {data?.status == true && (
                <span className="text-green-700"> {data?.message} </span>
            )}
            {data?.status == false && (
                <span className="text-red-700"> {data?.message} </span>
            )}
            </form>
        </div>
        <div className="bg-img absolute inset-0 w-full h-full">
            <img
            className="w-full h-full object-contain object-right-top max-w-full m-auto inset-0"
            src="https://cdn.shopify.com/s/files/1/0729/7387/7546/files/Mask_group_2_1.png?v=1681206017"
            alt=""
            />
        </div>
        </section> */}
    </>
  );
}
