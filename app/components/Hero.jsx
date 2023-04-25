import clsx from 'clsx';
import { MediaFile } from '@shopify/hydrogen';
import { Heading, Text, Link } from '~/components';
import { toHTML } from '~/lib/utils';

export function Hero({
  hereMetaObj
}) {
  const menuBannerImageMapping = hereMetaObj.data?.menu_image_mapping?.value ? JSON.parse(hereMetaObj.data.menu_image_mapping.value) : {};

  return (
    <div className="heroSlider-sec">
      <div className="prodcut-items">
        <div className="prodcut-item">
          <div className="relative flex w-full h-screen flex-co image-container">
            <img
              className="object-cover object-center w-full active"
              id="defaultActive"
              src={hereMetaObj?.data?.image?.references?.edges[0]?.node?.image?.url}
            ></img>
            {
              Object.keys(menuBannerImageMapping).map((oneKey, i) => {
                return (
                  <img
                    key={i}
                    data-image={oneKey}
                    className="object-cover object-center w-full "
                    src={menuBannerImageMapping[oneKey]}
                  ></img>
                )
              })
            }
            
            <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-2/4"></div>
            <div className="absolute slider-content bottom-12 lg:bottom-28 left-0 right-0 w-full container">
                <h1 className="mb-[15px] text-white title text-[40px] md:text-[50px] xl:text-[60px] leading-[-1.05984px] font-bold"  dangerouslySetInnerHTML={{
                      __html: toHTML(hereMetaObj?.data?.title?.value),
                    }}></h1>
                <h4 className="mb-[20px] text-white sub-title text-[24px] md:text-[32.96px] font-normal" dangerouslySetInnerHTML={{
                      __html: toHTML(hereMetaObj?.data?.sub_title?.value),
                    }}></h4>
                <Link
                  to={`${hereMetaObj?.data?.cta?.value}`}
                  className="inline-block md:px-[60px] px-[40px] py-[20px] md:py-[25px] md:text-[18px] text-[16px] font-medium text-black transition-all bg-white btn hover:bg-black hover:text-white leading-none"
                >{hereMetaObj?.data?.cta_label?.value}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


