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
            <div className="absolute slider-content bottom-12 lg:bottom-28 left-5 md:left-20">
                <h2 className="mb-6 font-extrabold text-white title"  dangerouslySetInnerHTML={{
                      __html: toHTML(hereMetaObj?.data?.title?.value),
                    }}></h2>
                <h4 className="mb-6 font-medium text-white sub-title" dangerouslySetInnerHTML={{
                      __html: toHTML(hereMetaObj?.data?.sub_title?.value),
                    }}></h4>
                <Link
                  to={`${hereMetaObj?.data?.cta?.value}`}
                  className="inline-block px-8 py-4 text-lg font-medium text-black transition-all bg-white btn lg:py-6 lg:px-14 hover:bg-black hover:text-white"
                >{hereMetaObj?.data?.cta_label?.value}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


