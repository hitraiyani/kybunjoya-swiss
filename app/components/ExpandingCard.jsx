import {Disclosure, Transition} from '@headlessui/react';
import {Text, IconClose} from '~/components';

export function ExpandingCard({title, content}) {
  return (
    <Disclosure as="div" className="grid w-full gap-2 border-[#595959]  border-b">
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
                className="text-sub text-black text-left text-[24px] md:text-[30px] xl:text-[40px] font-medium flex-1 leading-[1.2]"
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
            enterTo={`max-h-[300px]`}
            leave="transition-all duration-500"
            leaveFrom="max-h-[300px]"
            leaveTo="max-h-0"
          >
            <Disclosure.Panel
              className="editor-content pb-[50px] px-[25px] grid gap-2 text-lg font-normal max-w-[700px]"
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
