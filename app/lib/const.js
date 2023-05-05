export const PAGINATION_SIZE = 8;
export const DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 4;
export const ATTR_LOADING_EAGER = 'eager';
export const AICO_API_URL = 'https://app.aico.swiss/19947/api/v1/';
//export const AICO_API_URL = 'https://kjmvp.aico.swiss/api/v1/';
export const AICO_API_IMAGE_PREFIX = 'https://kjmvp.aico.swiss/storage/';
export const AICO_API_TOKEN = 'bgdGl9qrG33Ice5KwRavIwklKT61faTnhyCHiQ6n';
export const STORE_LOCALE = 'de_CH';

export function getImageLoadingPriority(
  index,
  maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT,
) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : undefined;
}
