import {Disclosure, Transition} from '@headlessui/react';
import {Text, IconClose} from '~/components';

export function ExpandingCardStyle2({title, content,id}) {
  return (
    <Disclosure as="div" className="grid w-full" id={id}>
      {({open}) => (
        <>
          <Disclosure.Button           
            className={`${
              open ? 'active rounded-br-[0] rounded-bl-[0] rounded-tr-[10px] rounded-tl-[10px]' : 'rounded-[10px]'
            }  px-[20px] py-[20px] bg-[#00795C] outline-none focus:outline-none transition-all duration-700`}
          >
            <div className="flex items-center gap-x-3 justify-between">
              <Text
                as="h5"
                className="text-white text-left text-[30px] xl:text-[35px] font-bold flex-1 leading-none"
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
            enterTo={`max-h-[100vh]`}
            leave="transition-all duration-500"
            leaveFrom="max-h-[100vh]"
            leaveTo="max-h-0"
          >
            <Disclosure.Panel
              className="editor-content p-[20px] tracking-[-0.400697px] text-[25px] font-normal leading-[1.4]"
              static
            >
              <p dangerouslySetInnerHTML={{__html: content}}></p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
