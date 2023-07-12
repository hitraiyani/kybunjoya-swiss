import {Button} from './Button';
import {FeaturedSection} from './FeaturedSection';
import {PageHeader, Text} from './Text';

export function NotFound({type = 'page'}) {
  const heading = `We’ve lost this ${type}`;
  const description = `We couldn’t find the ${type} you’re looking for. Try checking the URL or heading back to the home page.`;

  return (
    <>
      {/* <PageHeader heading={heading}>
        <Text width="narrow" as="p">
          {description}
        </Text>
        <Button width="auto" variant="secondary" to={'/'}>
          Take me to the home page
        </Button>
      </PageHeader>
      <FeaturedSection /> */}
      <section className="heroSlider-sec mt-[21px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
      <div className="container">
        <div className="relative flex w-full image-container pb-[100%] md:pb-[60%] lg:pb-[50%] xl:pb-[40%] 2xl:pb-[32%] overflow-hidden">
          <img
            className="object-cover object-center w-full h-full active absolute inset-0"
            id="defaultActive"
            src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/jeremy-lapak-CVvFVQ_-oUg-unsplash_111.png?v=1685708224"
          ></img>
          <div className="absolute inset-x-0 bottom-0 w-full img-overlay h-full md:h-2/4"></div>
          <div className="absolute slider-content bottom-[15px] md:bottom-[33px] left-0 right-0 w-full px-[15px] md:px-[33px] lg:px-[46px] max-w-[642px]">
            <h2 className="text-white title text-[35px] lg:text-[40px] xl:text-[50px] tracking-[-1.05984px] font-bold">
            Seite nicht gefunden
            </h2>
            <div className="desc text-white text-[16px] lg:text-[21px] tracking-[-0.400697px] leading-[1.3] font-[400] max-w-[930px] mt-[10px] xl:mt-[28px]">
              <p> Wir konnten die von Ihnen gesuchte Seite nicht finden. Überprüfen Sie die URL oder kehren Sie zur Startseite zurück. </p>
            </div>
            <div className="btn-wrap mt-[15px] xl:mt-[28px]">
              <a href="/" className="inline-block rounded-[100px] bg-[#00795c] text-white text-center px-[20px] md:px-[35px] py-[12px] md:py-[15px] hover:bg-black hover:text-white text-[14px] md:text-[18px] max-w-fit">Home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
