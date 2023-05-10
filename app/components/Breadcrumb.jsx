import React from 'react'
import {
  ArrowRight2,
  Link
} from '~/components';

export function Breadcrumb({crumbs}) {
  return (
     <div
      className={`Breadcrumb-sec mb-[20px] lg:mb-[25px]`}
    >
      <div className="container">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-y-[10px] gap-x-[8px] md:gap-x-[16px] flex-wrap">
            {crumbs.map((item, index) => {
                return (
                  <li className="inline-flex items-center" key={index}>
                    {index > 0 ?  <ArrowRight2 className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'} /> : ''}
                    <Link
                      to={item.to}
                      className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                    >
                        {item.title}
                    </Link>
                  </li>
                )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}
