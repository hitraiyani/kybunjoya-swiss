import clsx from 'clsx';
import {flattenConnection, Image, Money, useMoney} from '@shopify/hydrogen';
import {Text, Link, AddToCartButton, IconCart} from '~/components';
import {isDiscounted, isNewArrival, truncate} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  let cardLabel;

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {image, price, compareAtPrice} = firstVariant;

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  return (
    <div className="flex flex-col gap-2 product-item">
      <Link
        onClick={onClick}
        to={`/products/${product.handle}`}
        prefetch="intent"
      >
        <div className={clsx('grid gap-4', className)}>
          <div className="card-image aspect-square relative rounded-xl overflow-hidden">
            {image && (
              <Image
                className="object-contain fadeIn absolute inset-0 w-full h-full rounded-xl"
                widths={[320]}
                sizes="320px"
                loaderOptions={{
                  crop: 'master',
                  scale: 2,
                  width: 320,
                  height: 400,
                }}
                data={image}
                alt={image.altText || `Picture of ${product.title}`}
                loading={loading}
              />
            )}
            {/* <Text
              as="label"
              size="fine"
              className="absolute top-0 right-0 text-notice text-[18px] text-black py-[15px] px-[35px] leading-none rounded-[100px] bg-[#EDEDED] font-normal m-[20px]"
            >
              {cardLabel}
            </Text> */}
            {/* <button className="pro-btn text-[18px] text-white tracking-[-0.400697px] font-normal gap-[10px] px-[30px] py-[15px] bg-black rounded-[100px] absolute bottom-[34px] max-w-fit left-0 right-0 m-auto items-center opacity-0 transition-all duration-700 hover:bg-[#00795c] hidden">
              <IconCart />
              Zum Shop
            </button> */}
          </div>
          <div className="flex gap-1 flex-col">
            <Text
              className="text-[24px] md:text-[28px] xl:text-[30px] text-black font-bold pro-title"
              as="h3"
            >
              {product.title}
            </Text>
            <div className="flex gap-4">
              <Text className="flex gap-4 !text-black text-[16px] font-normal">
                <Money withoutTrailingZeros data={price} />
                {isDiscounted(price, compareAtPrice) && (
                  <CompareAtPrice
                    className={'opacity-50 line-through'}
                    data={compareAtPrice}
                  />
                )}
              </Text>
            </div>
            {/* {product.description && (
              <div className="desc text-[15px] font-normal mt-[5px] !text-black max-w-[375px]">
                <p> {truncate(product.description, 100)}</p>
              </div>
            )} */}
            <button className="pro-btn text-[16px] lg:text-[18px] text-white tracking-[-0.400697px] font-normal flex gap-[10px] px-[20px] lg:px-[30px] py-[12px] lg:py-[15px] bg-black rounded-[100px] max-w-fit items-center transition-all duration-700 hover:bg-[#00795c] mt-[10px]">
              <IconCart />
              Zum Shop
            </button>
          </div>
        </div>
      </Link>
      {quickAdd && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="secondary"
          className="mt-2"
          analytics={{
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price),
          }}
        >
          <Text as="span" className="flex items-center justify-center gap-2">
            Add to Bag
          </Text>
        </AddToCartButton>
      )}
    </div>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
