import {Disclosure, Transition} from '@headlessui/react';
import {Text, IconClose, Link} from '~/components';

export function ExpandingCardStyle2({title, content, id, products = []}) {
  return (
    <Disclosure as="div" className="grid w-full kb-accordion" id={id}>
      {({open}) => (
        <>
          <Disclosure.Button
            className={`${
              open
                ? 'active rounded-br-[0] rounded-bl-[0] rounded-tr-[10px] rounded-tl-[10px]'
                : 'rounded-[10px]'
            }  px-[20px] py-[20px] bg-[#00795C] outline-none focus:outline-none transition-all duration-700`}
          >
            <div className="flex items-center gap-x-3 justify-between">
              <Text
                as="h5"
                className="text-white text-left text-[24px] md:text-[28px] xl:text-[30px] font-bold flex-1 line leading-tight"
                dangerouslySetInnerHTML={{__html: title}}
              ></Text>
              <IconClose
                className={`${
                  open ? '' : 'rotate-[45deg]'
                } transition-transform transform-gpu duration-200 w-[32px] h-[32px] text-white p-[5px] border border-white rounded-full`}
              />
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            className="overflow-hidden bg-[#FFFFFF] shadow-[0px_0px_0.9821px_2px_rgba(0,0,0,0.05),0px_3.9284px_7.8568px_1px_rgba(0,0,0,0.1)] rounded-br-[10px] rounded-bl-[10px]"
            enter="transition-all duration-500"
            enterFrom="max-h-0"
            enterTo={`max-h-[200vh]`}
            leave="transition-all duration-500"
            leaveFrom="max-h-[200vh]"
            leaveTo="max-h-0"
          >
            <Disclosure.Panel
              className="editor-content p-[20px] tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal leading-[1.4] flex flex-col lg:flex-row gap-[20px] lg:gap-[30px]"
              static
            >
              <div className="img-wrap flex-[1] relative overflow-hidden hidden">
                <img
                  className="w-full h-auto max-w-full"
                  src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_1_3.png?v=1685085390"
                  alt=""
                />
              </div>
              <ul className="flex-[1.2]">
                {products?.length > 0 &&
                  products.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/products/custom-product/${item?.node?.handle}`}
                        >
                          {item?.node?.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
