import { Image } from '@shopify/hydrogen';
import { Heading, Section, Link, ArrowRightLight } from '~/components';

export function CollectionsGrid({ data, ...props }) {
  return (
    <Section {...props} className={'my-8'}>
      <div className="container">
        <div className="grid grid-rows-3 grid-flow-col gap-3">
          <div className="row-span-4 bg-gray-200">
            <Link to={data?.section_1_button_redirect?.value}>
              <div className="relative">
                <Image
                  data={data?.section_1_image?.reference?.image}
                  className="logo-img mx-auto"
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base">
                <ArrowRightLight className={'w-5 h-5'} />
                {data?.section_1_button_text?.value}
              </Heading>
            </Link>
          </div>
          <div className="row-span-4 bg-gray-200">
            <Link to={data?.section_2_button_redirect?.value}>
              <div className="relative">
                <Image
                  data={data?.section_2_image?.reference?.image}
                  className="logo-img mx-auto"
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base">
                <ArrowRightLight className={'w-5 h-5'} />
                {data?.section_2_button_text?.value}
              </Heading>
            </Link>
          </div>
          <div className="row-span-2 col-span-2 bg-gray-200">
            <Link to={data?.section_3_button_redirect?.value}>
              <div className="relative">
                <Image
                  data={data?.section_3_image?.reference?.image}
                  className="logo-img mx-auto"
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base">
                <ArrowRightLight className={'w-5 h-5'} />
                {data?.section_3_button_text?.value}
              </Heading>
            </Link>
          </div>
          <div className="row-span-2 col-span-2 bg-gray-200">
            <Link to={data?.section_4_button_redirect?.value}>
              <div className="relative">
                <Image
                  data={data?.section_4_image?.reference?.image}
                  className="logo-img mx-auto"
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base">
                <ArrowRightLight className={'w-5 h-5'} />
                {data?.section_4_button_text?.value}
              </Heading>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
