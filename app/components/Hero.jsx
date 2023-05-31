import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import {Heading, Text, Link} from '~/components';
import {toHTML} from '~/lib/utils';

export function Hero({hereMetaObj}) {
  const menuBannerImageMapping = hereMetaObj.data?.menu_image_mapping?.value
    ? JSON.parse(hereMetaObj.data.menu_image_mapping.value)
    : {};

  return (
    <div className="heroSlider-sec">
      <div className="prodcut-items">
        <div className="prodcut-item">
          <div className="relative flex w-full h-[50vh] sm:h-[60vh] md:h-[82vh] flex-co image-container min-h-[450px]">
            <img
              className="object-cover object-center w-full active"
              id="defaultActive"
              src={
                hereMetaObj?.data?.image?.references?.edges[0]?.node?.image?.url
              }
            ></img>
            {Object.keys(menuBannerImageMapping).map((oneKey, i) => {
              return (
                <img
                  key={i}
                  data-image={oneKey}
                  className="object-cover object-center w-full "
                  src={menuBannerImageMapping[oneKey]}
                ></img>
              );
            })}

            <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
            <div className="absolute slider-content bottom-[40px] lg:bottom-[58px] left-0 right-0 w-full container">
              <h1
                className="mb-[15px] text-white title text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold"
                dangerouslySetInnerHTML={{
                  __html: toHTML(hereMetaObj?.data?.title?.value),
                }}
              ></h1>
              <h4 className="text-white desc text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] tracking-[-0.400697px] font-normal leading-[1.2] flex gap-[10px] items-center">
                <span className="w-[36px] h-[36px] overflow-hidden relative">
                  <img className="inset-0 absolute object-contain w-full h-full block" src={hereMetaObj?.data?.sub_title_image?.reference?.image?.url
              } />
                </span>
                <span
                   dangerouslySetInnerHTML={{
                    __html: toHTML(hereMetaObj?.data?.sub_title?.value),
                  }}
                ></span>
              </h4>
              <Link
                to={`${hereMetaObj?.data?.cta?.value}`}
                className="inline-block md:px-[60px] px-[40px] py-[20px] md:py-[25px] md:text-[18px] text-[16px] font-medium text-black transition-all bg-white btn hover:bg-black hover:text-white leading-none !hidden"
              >
                {hereMetaObj?.data?.cta_label?.value}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
