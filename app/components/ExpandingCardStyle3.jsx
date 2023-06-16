import {Disclosure, Transition} from '@headlessui/react';
import {Text, IconClose} from '~/components';

export function ExpandingCardStyle3({title, content, image}) {
  return (
    <Disclosure as="div" className="grid w-full gap-2 border-[#595959]  border-t">
      {({open}) => (
        <>
          <Disclosure.Button
            className={`${
              open ? 'active' : ''
            }  py-[25px] px-[20px] px-5outline-none focus:outline-none`}
          >
            <div className="flex items-center gap-x-3 justify-between">
              <Text
                as="h5"
                className="text-sub text-black text-left text-[24px] md:text-[30px] font-medium flex-1 leading-[1.2]"
                dangerouslySetInnerHTML={{__html: title}}
              ></Text>
              <IconClose
                className={`${
                  open ? '' : 'rotate-[45deg]'
                } transition-transform transform-gpu duration-200 w-[32px] h-[32px] text-black p-[5px] border border-black rounded-full`}
              />
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            className="overflow-hidden"
            enter="transition-all duration-500"
            enterFrom="max-h-0"
            enterTo={`max-h-[200vh]`}
            leave="transition-all duration-500"
            leaveFrom="max-h-[200vh]"
            leaveTo="max-h-0"
          >
            <Disclosure.Panel
              className="editor-content px-[20px] pb-[40px] lg:pb-[50px] pt-0 tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal leading-[1.4] flex flex-col-reverse lg:flex-row gap-y-[20px] 2xl:gap-x-[120px] xl:gap-x-[80px] lg:gap-x-[50px] underline-offset-[6px]"
              static
            >
              <div className='flex-[1]' dangerouslySetInnerHTML={{__html: content}}></div>
              {image && (
                <div className="img-wrap flex-[1] relative overflow-hidden">
                  <img
                    className="w-full h-auto max-w-full"
                    src={image}
                    alt=""
                  />
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
