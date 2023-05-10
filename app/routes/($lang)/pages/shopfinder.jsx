import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { flattenConnection, AnalyticsPageType } from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import { PageHeader, Section, Text, SortFilter, Link } from '~/components';
import { ProductGrid } from '~/components/ProductGrid';
import { PRODUCT_CARD_FRAGMENT } from '~/data/fragments';

export async function loader({ params, request, context }) {

    return json({
    });
}

export default function Collection() {
    const { collection, collections, appliedFilters } = useLoaderData();

    return (
        <>
<div className="container">
   <div className="title-wrap">
      <h2 className="text-[#00795C] text-[35px] lg:text-[40px] xl:text-[55px] tracking-[-0.97152px] mb-6 ">
         Shopfinder
      </h2>
   </div>
</div>
<div className="about-sec container mt-[50px]">
   <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[30px] xl:gap-x-[64px]">
      <div className="content-col flex-1 flex flex-col justify-center">
         <div
            className="desc text-black text-[16px] lg:text-[25px] leading-[1.3] font-[400] mb-[30px] lg:mb-[50px]"
            >
            Wir glauben, dass der menschliche Bewegungsapparat so konstruiert ist, dass er bis ins hohe Alter sportlich aktiv und gesund bleiben kann, und dass Pflegeheime nur in seltenen Fällen notwendig wären. Wir sind überzeugt, dass geläufige Bewegungsbeschwerden – an denen mindestens 1/3 aller Menschen ab 65 regelmäßig leiden, dank gesunder Bewegung im Alltag und Begleitung durch geschulte kybun Joya Therapeuten in den meisten Fällen nachhaltig vermieden werden können.
         </div>
      </div>
      <div className="content-col flex-1 flex flex-col">
         <div
            className="desc text-black text-[16px] lg:text-[25px] leading-[1.3] font-[400] mb-[30px] lg:mb-[50px]"
            >
            <div className='box-border absolute  bg-gray-200'>
               In unseren kybun Joya Shops finden Sie:
               <ul>
                  <li>Therapieren statt operieren bei über 50 medizinischen Diagnosen</li>
                  <li>kostenlos erlebbare Therapiemethoden in den kybun Joya Shops</li>
                  <li>Individuelle Einzelberatung zu spezifischen medizinischen Fragen (Anliegen)</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="container">
   <h2 className="text-[#00795C] text-[25px] mb-6 ">
      kybun Joya Shops In Der Nähe
   </h2>
   <div className="flex flex-col xl:flex-row gap-[50px] items-start">
      <div className="item flex flex-col sm:flex-row gap-[20px] w-full xl:w-[50%] items-start">
         <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <img
               className="h-full object-cover block aspect-[2.5/2]"
               src={'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/kybunjoya_arbon-1.png?v=1681740273'}
               alt=""
               />
         </div>
         <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[25px] text-[#000000] leading-[1.2] tracking-[-0.40] mb-[15px] font-normal">
               Kybun Joya Center Arbon-Hamel
            </h2>
            <div
               className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
               >
               5 km
               Stickereistrasse 4 (im Hamel)9320, Arbon
            </div>
            <div className="flex mt-auto justify-between items-center flex-wrap gap-[15px]">
               <Link
                  to=""
                  className="px-[20px] py-[10px] bg-black text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
                  >
               Directions
               </Link>
            </div>
         </div>
      </div>
      <div className="item flex flex-col sm:flex-row gap-[20px] w-full xl:w-[50%] items-start">
         <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <img
               className="h-full object-cover block aspect-[2.5/2]"
               src={'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Z_580960e4ea-9x6.png?v=1681740273'}
               alt=""
               />
         </div>
         <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[25px] text-[#000000] leading-[1.2] tracking-[-0.40] mb-[15px] font-normal">
               Kybun Joya Center Arbon-Hamel
            </h2>
            <div
               className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
               >
               5 km
               Stickereistrasse 4 (im Hamel)9320, Arbon
            </div>
            <div className="flex mt-auto justify-between items-center flex-wrap gap-[15px]">
               <Link
                  to=""
                  className="px-[20px] py-[10px] bg-black text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
                  >
               Directions
               </Link>
            </div>
         </div>
      </div>
      <div className="item flex flex-col sm:flex-row gap-[20px] w-full xl:w-[50%] items-start">
         <div className="img-col flex-1 overflow-hidden lg:w-auto w-full">
            <img
               className="h-full object-cover block aspect-[2.5/2]"
               src={'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/stgallen_shopfront.png?v=1681740273'}
               alt=""
               />
         </div>
         <div className="content-col flex-1 flex flex-col justify-center">
            <h2 className="text-[25px] text-[#000000] leading-[1.2] tracking-[-0.40] mb-[15px] font-normal">
               Kybun Joya Center Arbon-Hamel
            </h2>
            <div
               className="desc text-black text-[16px] lg:text-[18px] leading-[1.3] font-[400]"
               >
               5 km
               Stickereistrasse 4 (im Hamel)9320, Arbon
            </div>
            <div className="flex mt-auto justify-between items-center flex-wrap gap-[15px]">
               <Link
                  to=""
                  className="px-[20px] py-[10px] bg-black text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
                  >
               Directions
               </Link>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="container mt-[60px] lg:!pr-0">
   <div className="flex gap-[20px] flex-col lg:flex-row">
      <div className="content-col w-full lg:w-[50%] flex flex-col bg-[#EDEDED] rounded-[10px]">
         <div className="img-col w-full overflow-hidden">
            <div className="h-full overflow-visible flex flex-col">
               <img
                  className="object-cover rounded-[10px] w-full h-full"
                  src={'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/snazzy-image_1.png?v=1681741796'}
                  alt=""
                  />
            </div>
            {/* 
            <h2 className="text-[24px] lg:text-[30px] xl:text-[35px] text-[#00795C] leading-[1.2] mb-[5px]">
               {page?.main_title?.value}
            </h2>
            <div
            className="desc text-black text-[20x] xl:text-[25px] lg:text-[18px] leading-[1.3] font-[400]"
            dangerouslySetInnerHTML={{
            __html: toHTML(page?.short_description?.value),
            }}
            >
         </div>
         <h2 className="text-[20px] lg:text-[25px] text-[#00795C] leading-[1.2] mb-[5px] mt-[47px]">
            {page?.head_title?.value}
         </h2>
         <div
         className="desc text-black text-[20x] xl:text-[25px] lg:text-[18px] leading-[1.3] font-[400] mb-[20px]"
         dangerouslySetInnerHTML={{
         __html: toHTML(page?.long_description?.value),
         }}
         >
      </div>
      <div className="flex mt-auto justify-between items-center flex-wrap gap-[15px]">
         <Link
            to=""
            className="px-[35px] py-[22px] bg-black text-[18px] font-medium text-white rounded-[100px] w-fit hover:bg-[#00795c] hover:!text-white text-center"
            >
         Mehr über Technologie
         </Link>
         <div className="products-swiper-buttons relative flex gap-[10px] xl:gap-[20px]">
            <div
               className="swiper-button-next-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center rotate-180"
               ><ArrowRight className={'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'} /></div>
            <div
               className="swiper-button-prev-product-gallery rounded-full w-[50px] h-[50px] xl:w-[74px] xl:h-[74px] text-black hover:bg-black hover:text-white after:text-[30px] bg-[#DEDEDE] flex items-center justify-center"
               ><ArrowRight className={'relative left-[3px] w-[25px] h-[30px] xl:w-[40px] xl:h-[40px]'} /></div>
         </div>
      </div>
      */}
   </div>
</div>
</div>
</div>
</>
  );
}