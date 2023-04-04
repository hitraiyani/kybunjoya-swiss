import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';

export function CollectionsGrid({collections, title = '', ...props}) {
  return (
    <Section {...props} heading={title} className={'my-8'}>
      <div className="container">
        <div className="grid grid-rows-3 grid-flow-col gap-3">
          {/* <div className="row-span-3">
          <Link to={`#`}>
            <div className="card-image bg-primary/5 aspect-[3/2]">
              <Image
                data={{
                  url: 'https://cdn.shopify.com/s/files/1/0739/7172/8705/files/logo.svg?v=1680004853',
                  width: 82,
                  height: 36,
                  altText: '93',
                }}
                className="logo-img mx-auto"
                loaderOptions={{
                  scale: 2,
                  crop: 'center',
                }}
                alt="93"
              />
            </div>
            <Heading size="copy">asdadsa</Heading>
          </Link>
        </div> */}
          <div className="row-span-4 bg-gray-200">
            <Link to={`#`}>
              <div className="relative">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Screenshot_173.png?v=1680600063',
                    width: 82,
                    height: 36,
                    altText: '93',
                  }}
                  className="logo-img mx-auto"
                  loaderOptions={{
                    scale: 2,
                    crop: 'center',
                  }}
                  alt="93"
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base">
                <ArrowRightLight className={'w-5 h-5'} />
                Producte
              </Heading>
            </Link>
          </div>
          <div className="row-span-4 bg-gray-200">02</div>
          <div className="row-span-2 col-span-2 bg-gray-200">03</div>
          <div className="row-span-2 col-span-2 bg-gray-200">04</div>
        </div>
      </div>
    </Section>
  );
}
