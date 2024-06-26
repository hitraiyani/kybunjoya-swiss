export const PAGINATION_SIZE = 8;
export const DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 4;
export const ATTR_LOADING_EAGER = 'eager';
export const QUICK_LINK_MENU_TITLE = 'Über uns';
//export const AICO_API_URL = 'https://app.aico.swiss/19947/api/v1/';
export const AICO_API_URL = 'https://kybunjoya.aico.swiss/api/v1/';
export const AICO_API_IMAGE_PREFIX = 'https://kybunjoya.aico.swiss/storage/';
export const AICO_API_TOKEN = '2JoIqPu1xfHhCPrVIdJa0LwuK7rnqtoPUGlyLkeG16d78cb3';
export const STORE_LOCALE = 'de_CH';
export const AICO_STOREFINDER_URL =
  'https://kybunjoya.aico.swiss/storage/kj-storelocator-static/';
// export const AICO_STOREFINDER_URL = 'https://kjmvp.aico.swiss/storage/kj-storelocator-static';
export const COOKIEBOT_KEY = '7fc4d639-5f7d-4892-8f2d-314f2b72870c';
export const KLAVIYO_API_URL = 'https://a.klaviyo.com/api/v2';
export const KLAVIYO_LIST_SEGMENT = 'X7Tyuf';
export const KLAVIYO_PRIVATE_API_KEY = 'pk_911ea93636e5544089fa38ee0769b057c1';
export const SHOP_TITLE = 'kybun Joya - Therapieren statt Operieren';

export function getImageLoadingPriority(
  index,
  maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT,
) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : undefined;
}
