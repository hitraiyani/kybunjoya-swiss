import {Image} from '@shopify/hydrogen';
import {Heading, Section, Grid, Link, ArrowRightLight} from '~/components';

export function CollectionsGrid({collections, title = '', ...props}) {
  return (
    <Section {...props} heading={title} className={'my-8 collectionsGrid-sec'}>
      <div className="container">
        <div className="md:grid md:grid-rows-2 xl:grid-rows-2 md:grid-flow-col gap-7 flex flex-col">
          <div className="collectionsGrid-item relative">
            <Link to={`#`} className="relative block w-full h-96 overflow-hidden">
              <div className="img-wrap">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Screenshot_173.png?v=1680600063'
                  }}
                  className="h-full w-full absolute inset-0 hover:scale-110 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base absolute bottom-5 left-5 btn">
                <ArrowRightLight className={'w-5 h-5'} />
                Produkte
              </Heading>
            </Link>
          </div>
          <div className="collectionsGrid-item relative">
            <Link to={`#`} className="relative block w-full h-96 overflow-hidden">
              <div className="img-wrap">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Screenshot_174.png?v=1680600063'
                  }}
                  className="h-full w-full absolute inset-0 hover:scale-110 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base absolute bottom-5 left-5 btn">
                <ArrowRightLight className={'w-5 h-5'} />
                Verkaufsstellen
              </Heading>
            </Link>
          </div>
          <div className="collectionsGrid-item relative">
            <Link to={`#`} className="relative block w-full h-full overflow-hidden">
              <div className="img-wrap"> 
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Screenshot_176.png?v=1680604329'
                  }}
                  className="h-full w-full absolute inset-0 hover:scale-110 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base absolute bottom-5 left-5 btn">
                <ArrowRightLight className={'w-5 h-5'} />
                Ihr Ratgeber
              </Heading>
            </Link>
          </div>
          <div className="collectionsGrid-item relative">
            <Link to={`#`} className="relative block w-full h-full overflow-hidden">
              <div className="img-wrap">
                <Image
                  data={{
                    url: 'https://cdn.shopify.com/s/files/1/0742/9688/5569/files/vison_history_section.png?v=1680602992'
                  }}
                  className="h-full w-full absolute inset-0 hover:scale-110 transition hover:duration-500 object-cover object-center"
                  alt=""
                />
              </div>
              <Heading className="flex gap-2 items-center rounded-lg bg-white hover:bg-gray-50 shadow-lg p-3 max-w-xs font-normal text-base absolute bottom-5 left-5 btn">
                <ArrowRightLight className={'w-5 h-5'} />
                Vision / History
              </Heading>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
