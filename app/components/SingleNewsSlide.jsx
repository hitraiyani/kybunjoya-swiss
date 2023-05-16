import React from 'react'
import {STORE_LOCALE} from '~/lib/const';
import {Link} from '~/components';
import {truncate} from '~/lib/utils';

export function SingleNewsSlide({newItem}) {
    let imgSrc = newItem?.attributes?.optimizedImage;
    if (newItem.attributes.optimizedImage == null) {
    imgSrc = newItem.attributes.image;
    } else if (newItem.attributes.image == null) {
    imgSrc = '';
    }
    var badgeLabel = '';
    var brandName = '';
    if (newItem?.attributes?.brands.length > 0) {
    var brand = newItem?.attributes?.brands[0];
    for (var nc = 0; nc < brand.translations.length; nc++) {
        if (brand.translations[nc].locale == STORE_LOCALE) {
        var brandName = brand.translations[nc].webName
            ? brand.translations[nc].webName
            : brand.translations[nc].name;
        badgeLabel =
            brandName.charAt(0).toUpperCase() + brandName.slice(1);
        }
    }
    }
    var catName = '';

    // if (newItem?.attributes?.newsCategory != null) {
    //   var cat = newItem?.attributes?.newsCategory;
    //   for (var nc = 0; nc < cat.translations.length; nc++) {
    //     if (cat.translations[nc].locale == STORE_LOCALE) {
    //       var catName = cat.translations[nc].webName
    //         ? cat.translations[nc].webName
    //         : cat.translations[nc].name;
    //         if (badgeLabel != '') {
    //           badgeLabel+= "/"+catName;
    //         }
    //     }
    //   }
    // }
  return (
    <>
        <div key={newItem.id}>
        <Link
            to={`/pages/news/${newItem.attributes.urlHandle}`}
            className="relative block overflow-hidden mb-5"
        >
            <div className="img-wrap">
            <img
                className="object-cover object-center w-full aspect-square drop-shadow-md"
                src={imgSrc}
            ></img>
            </div>
            <p className="right-[15px] absolute top-[15px]">
            <span
                className="text-[16px] text-white font-normal mb-[5px] bg-[#00795C] leading-none  w-fit block py-[10px] px-[16px] rounded-[10px] shadow-md capitalize"
                style={
                badgeLabel == 'Kybun'
                    ? {backgroundColor: '#980A2B'}
                    : {}
                }
            >
                {badgeLabel}
            </span>
            </p>
        </Link>
        </div>
        <div className="max-w-[85%]">
        <p className=" text-black lg:text-[25px] w-full font-bold leading-[1.2] mb-[15px]">
            {newItem?.attributes?.name}
        </p>
        <p className="text-[16px] md:text-[18px] text-black  w-full font-normal leading-[-0.400697px]">
            {truncate(newItem?.attributes?.excerpt)}
        </p>
        </div>
    </>
  )
}
