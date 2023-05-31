import {useLocation, useMatches} from '@remix-run/react';

// @ts-expect-error types not available
import typographicBase from 'typographic-base';
import {countries} from '~/data/countries';
import { STORE_LOCALE} from '~/lib/const';

export function missingClass(string, prefix) {
  if (!string) {
    return true;
  }

  const regex = new RegExp(` ?${prefix}`, 'g');
  return string.match(regex) === null;
}

export function formatText(input) {
  if (!input) {
    return;
  }

  if (typeof input !== 'string') {
    return input;
  }

  return typographicBase(input, {locale: 'en-us'}).replace(
    /\s([^\s<]+)\s*$/g,
    '\u00A0$1',
  );
}

export function getExcerpt(text) {
  const regex = /<p.*>(.*?)<\/p>/;
  const match = regex.exec(text);
  return match?.length ? match[0] : text;
}

export function isNewArrival(date, daysOld = 30) {
  return (
    new Date(date).valueOf() >
    new Date().setDate(new Date().getDate() - daysOld).valueOf()
  );
}

export function isDiscounted(price, compareAtPrice) {
  if (compareAtPrice?.amount > price?.amount) {
    return true;
  }
  return false;
}

function resolveToFromType(
  {customPrefixes, pathname, type} = {
    customPrefixes: {},
  },
) {
  if (!pathname || !type) return '';

  /*
        MenuItemType enum
        @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
      */
  const defaultPrefixes = {
    BLOG: 'blogs',
    COLLECTION: 'collections',
    COLLECTIONS: 'collections',
    FRONTPAGE: 'frontpage',
    HTTP: '',
    PAGE: 'pages',
    CATALOG: 'collections/all',
    PRODUCT: 'products',
    SEARCH: 'search',
    SHOP_POLICY: 'policies',
  };

  const pathParts = pathname.split('/');
  const handle = pathParts.pop() || '';
  const routePrefix = {
    ...defaultPrefixes,
    ...customPrefixes,
  };

  switch (true) {
    // special cases
    case type === 'FRONTPAGE':
      return '/';

    case type === 'ARTICLE': {
      const blogHandle = pathParts.pop();
      return routePrefix.BLOG
        ? `/${routePrefix.BLOG}/${blogHandle}/${handle}/`
        : `/${blogHandle}/${handle}/`;
    }

    case type === 'COLLECTIONS':
      return `/${routePrefix.COLLECTIONS}`;

    case type === 'SEARCH':
      return `/${routePrefix.SEARCH}`;

    case type === 'CATALOG':
      return `/${routePrefix.CATALOG}`;

    // common cases: BLOG, PAGE, COLLECTION, PRODUCT, SHOP_POLICY, HTTP
    default:
      return routePrefix[type]
        ? `/${routePrefix[type]}/${handle}`
        : `/${handle}`;
  }
}

/*
  Parse each menu link and adding, isExternal, to and target
*/
function parseItem(customPrefixes = {}) {
  return function (item) {
    if (!item?.url || !item?.type) {
      // eslint-disable-next-line no-console
      console.warn('Invalid menu item.  Must include a url and type.');
      // @ts-ignore
      return;
    }
    
    // extract path from url because we don't need the origin on internal to attributes
    const {pathname, search} = new URL(item.url);

    /*
              Currently the MenuAPI only returns online store urls e.g — xyz.myshopify.com/..
              Note: update logic when API is updated to include the active qualified domain
            */
    const isInternalLink = /\.myshopify\.com/g.test(item.url);

    const parsedItem = isInternalLink
      ? // internal links
        {
          ...item,
          isExternal: false,
          target: '_self',
          to: (item.type == 'HTTP' && search) ? pathname+search : resolveToFromType({type: item.type, customPrefixes, pathname}),
        }
      : // external links
        {
          ...item,
          isExternal: true,
          target: '_blank',
          to: item.url,
        };

    return {
      ...parsedItem,
      items: item.items?.map(parseItem(customPrefixes)),
    };
  };
}

/*
  Recursively adds `to` and `target` attributes to links based on their url
  and resource type.
  It optionally overwrites url paths based on item.type
*/
export function parseMenu(menu, customPrefixes = {}) {
  if (!menu?.items) {
    // eslint-disable-next-line no-console
    console.warn('Invalid menu passed to parseMenu');
    // @ts-ignore
    return menu;
  }

  return {
    ...menu,
    items: menu.items.map(parseItem(customPrefixes)),
  };
}

export const INPUT_STYLE_CLASSES =
  'appearance-none rounded dark:bg-transparent border focus:border-primary/50 focus:ring-0 w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline';

export const getInputStyleClasses = (isError) => {
  return `${INPUT_STYLE_CLASSES} ${
    isError ? 'border-red-500' : 'border-primary/20'
  }`;
};

export function statusMessage(status) {
  const translations = {
    ATTEMPTED_DELIVERY: 'Attempted delivery',
    CANCELED: 'Canceled',
    CONFIRMED: 'Confirmed',
    DELIVERED: 'Delivered',
    FAILURE: 'Failure',
    FULFILLED: 'Fulfilled',
    IN_PROGRESS: 'In Progress',
    IN_TRANSIT: 'In transit',
    LABEL_PRINTED: 'Label printed',
    LABEL_PURCHASED: 'Label purchased',
    LABEL_VOIDED: 'Label voided',
    MARKED_AS_FULFILLED: 'Marked as fulfilled',
    NOT_DELIVERED: 'Not delivered',
    ON_HOLD: 'On Hold',
    OPEN: 'Open',
    OUT_FOR_DELIVERY: 'Out for delivery',
    PARTIALLY_FULFILLED: 'Partially Fulfilled',
    PENDING_FULFILLMENT: 'Pending',
    PICKED_UP: 'Displayed as Picked up',
    READY_FOR_PICKUP: 'Ready for pickup',
    RESTOCKED: 'Restocked',
    SCHEDULED: 'Scheduled',
    SUBMITTED: 'Submitted',
    UNFULFILLED: 'Unfulfilled',
  };
  try {
    return translations?.[status];
  } catch (error) {
    return status;
  }
}

/**
 * Errors can exist in an errors object, or nested in a data field.
 */
export function assertApiErrors(data) {
  const errorMessage = data?.customerUserErrors?.[0]?.message;
  if (errorMessage) {
    throw new Error(errorMessage);
  }
}

export const DEFAULT_LOCALE = Object.freeze({
  ...countries.default,
  pathPrefix: '',
});

export function getLocaleFromRequest(request) {
  const url = new URL(request.url);
  const firstPathPart =
    '/' + url.pathname.substring(1).split('/')[0].toLowerCase();

  return countries[firstPathPart]
    ? {
        ...countries[firstPathPart],
        pathPrefix: firstPathPart,
      }
    : {
        ...countries['default'],
        pathPrefix: '',
      };
}

export function usePrefixPathWithLocale(path) {
  const [root] = useMatches();
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;

  return `${selectedLocale.pathPrefix}${
    path.startsWith('/') ? path : '/' + path
  }`;
}

export function useIsHomePath() {
  const {pathname} = useLocation();
  const [root] = useMatches();
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const strippedPathname = pathname.replace(selectedLocale.pathPrefix, '');
  return strippedPathname === '/';
}

/**
 * Validates that a url is local
 * @param url
 * @returns `true` if local `false`if external domain
 */
export function isLocalPath(url) {
  try {
    // We don't want to redirect cross domain,
    // doing so could create fishing vulnerability
    // If `new URL()` succeeds, it's a fully qualified
    // url which is cross domain. If it fails, it's just
    // a path, which will be the current domain.
    new URL(url);
  } catch (e) {
    return true;
  }

  return false;
}

export function toHTML(content) {
	let parsed = JSON.parse(content);
	let html = '';
	parsed.children.forEach((node) => {
		switch (node.type) {
			case 'heading':
				html += `<h${node.level}>${node.children[0].value}</h${node.level}>`;
				break;
			case 'list':
				html += `<${node.listType === 'unordered' ? 'ul' : 'ol'}>`;
				node.children.forEach((item) => {
					html += `<li>${item.children[0].value}</li>`;
				});
				html += `<${node.listType === 'unordered' ? '/ul' : '/ol'}>`;
				break;
			case 'paragraph':
				html += `<p>`;
				node.children.forEach((item) => {
					if (item.type === 'text' && item.bold) {
						html += `<strong>${item.value}</strong>` + ' ';
					} else if (item.type === 'text' && item.italic) {
						html += `<em>${item.value}</em>` + ' ';
					} else if (item.type === 'text') {
						html += `${item.value}` + ' ';
					}
					if (item.type === 'link' && item.bold) {
						html +=
							`<a href="${item.url}" target="${item.target}"><strong>${item.children[0].value}</strong></a>` +
							' ';
					} else if (item.type === 'link' && item.italic) {
						html +=
							`<a href="${item.url}" target="${item.target}"><em>${item.children[0].value}</em></a>` +
							' ';
					} else if (item.type === 'link') {
						html +=
							`<a href="${item.url}" target="${item.target}">${item.children[0].value}</a>` + ' ';
					}
				});
				html += `</p>`;
				break;
		}
	});
	return html.replace(/\n/g, "<br />");
}

export function truncate(str, num = 155) {
  if (typeof str !== 'string') return '';
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num - 3) + '...';
}

export function newsDescription(contentBuilder) {
  let html = '<div class="description-wrapper">';
  if (contentBuilder != null) {
    var rows = contentBuilder.rows;
    if (rows.length > 0) {
      for (var row = 0; row < rows.length; row++) {
        var columns = rows[row].columns;
        var isFullWidth = '';
        if (rows[row].order != null) {
          var rowOrder = rows[row].order;
        } else {
          var rowOrder = '0';
        }
        if (rows[row].isFullWidth == 1) {
          isFullWidth = 'fullwidth';
        }
        if (columns.length > 0) {
          var totalColumns = columns.length;
        } else {
          var totalColumns = 0;
        }
        html += '<div class="content-row row__' + (row + 1) + ' ' + isFullWidth + ' total-columns-' + totalColumns + '" style="order:' + rowOrder + '">';
        if (columns.length > 0) {
          for (var column = 0; column < columns.length; column++) {
            var contentContainer = columns[column].contentContainer;
            html += '<div class="content-column column__' + (column + 1) + '">';
            if (contentContainer != null) {
              var contents = contentContainer.contents;
              if (contents.length > 0) {
                for (var content = 0; content < contents.length; content++) {
                  var isSplit = contents[content].isSplit;;
                  var contentData = contents[content].contentData;
                  var contentType = contents[content].type;
                  if (contents[content].containerOrder != null) {
                    var containerOrder = contents[content].containerOrder;
                  } else {
                    var containerOrder = '0';
                  }
                  if (contentData != null) {
                    html += '<div class="content content__' + (content + 1) + '" style="order:' + containerOrder + '">';

                    var translations = contentData.translations;
                    if (typeof contentData.translations !== 'undefined') {
                      // Language translation forloop
                      for (var t = 0; t < translations.length; t++) {
                        var translation = translations[t];
                        if (translation.locale == STORE_LOCALE) {
                          if (contentType == 'HEADING') {
                            if (contentData.textColor != '') {
                              var textColor = 'color:' + contentData.textColor;
                            } else { var textColor = ''; }
                            html += '<div class="content-type-title">';
                            html += '<' + contentData.titleSize + ' style="' + textColor + '">';
                            html += translation.title;
                            html += '</' + contentData.titleSize + '>';
                            if (translation.description != '') {
                              html += '<p>' + translation.description + '</p>';
                            }
                            html += '</div>';
                          } // end if contentType HEADING


                          if (contentType == 'TITLE') {
                            if (contentData.textColor != '') {
                              var textColor = 'color:' + contentData.titleColor;
                            } else { var textColor = ''; }
                            html += '<div class="content-type-title">';
                            html += '<' + contentData.size + ' style="' + textColor + '">';
                            html += translation.title;
                            html += '</' + contentData.size + '>';

                            html += '</div>';
                          } // end if contentType title


                          if (contentType == 'TEXT') {
                            var description = translation.text;
                            if (translation.optimizedPicture != null) {
                              var picture = translation.optimizedPicture;
                            } else if (translation.picture != null) {
                              var picture = translation.picture;
                            } else {
                              var picture = '';
                            }

                            html += '<div class="content-type-text">';

                            if (picture == '') {
                              if (translation.title != null) {
                                if (contentData.textColor != '' && contentData.textColor != null) {
                                  var textColor = 'color:' + contentData.textColor;
                                } else { var textColor = ''; }
                                if (contentData.fontSize != '' && contentData.fontSize != null) {
                                  var textSize = 'font-size:' + contentData.fontSize + 'px;';
                                } else { var textSize = '' }

                                html += '<' + contentData.titleSize + ' style="' + textSize + textColor + '">' + translation.title + '</' + contentData.titleSize + '>';
                              }
                            }
                            if (description != null) {
                              if (contentData.fontSize != '' && contentData.fontSize != null) {
                                var textSize = 'font-size:' + contentData.fontSize + 'px;';
                              } else { var textSize = '' }
                              if (contentData.fontFamily != '' && contentData.fontFamily != null) {
                                var textFontFamily = 'font-family:' + contentData.fontFamily + 'px;';
                              } else { var textFontFamily = '' }
                              html += '<div style="' + textSize + textFontFamily + '"><p>' + description + '</p></div>';
                            }

                            if (picture != '') {
                              html += '<div class="image-container image-width--' + contentData.pictureSize + ' image-text--' + contentData.picturePosition + '" style="text-align:' + contentData.picturePosition + '">';
                              html += '<div class="image-container-inner">';
                              html += '<img src="' + picture + '" alt="" class="lazyload" loading="lazy">';
                              if (translation.pictureLabel != null) {
                                html += '<span class="caption">' + translation.pictureLabel + '</span>';
                              }
                              html += '</div>';
                              html += '</div>';
                            }
                            html += '</div>';
                          } // end if contentType text

                          if (contentType == 'BULLET') {
                            html += '<div class="content-type-bullet">';
                            html += '<' + contentData.titleSize + '>' + translation.title + '</' + contentData.titleSize + '>';
                            html += '<p>' + translation.text + '</p>';

                            if (contentData.bulletBullets.length > 0) {
                              html += '<ul>';
                              for (var b = 0; b < contentData.bulletBullets.length; b++) {
                                var translations = contentData.bulletBullets[b].translations;
                                if (translations.length > 0) {
                                  for (var t = 0; t < translations.length; t++) {
                                    var translation = contentData.bulletBullets[b].translations[t];
                                    if (translation.locale == STORE_LOCALE) {
                                      html += '<li>' + translation.text + '</li>';
                                    }
                                  }
                                }
                              }
                              html += '</ul>';
                            }
                            html += '</div>';
                          } // end if contentType Bullet

                          if (contentType == 'TABLE') {

                            html += '<div class="content-type-table">';
                            html += '<' + contentData.titleSize + '>' + translation.title + '</' + contentData.titleSize + '>';
                            html += '<p>' + translation.additionalText + '</p>';

                            if (contentData.tableRows != '' && contentData.tableRows != null) {
                              html += '<table class="table table-styled">';
                              for (var b = 0; b < contentData.tableRows.length; b++) {
                                var rowColumns = contentData.tableRows[b].rowColumns;
                                if (rowColumns.length > 0) {
                                  html += '<tr>';
                                  for (var rc = 0; rc < rowColumns.length; rc++) {
                                    var translations = rowColumns[rc].translations;
                                    for (var t = 0; t < translations.length; t++) {
                                      var translation = translations[t];

                                      if (translation.locale == STORE_LOCALE) {
                                        html += '<td>' + translation.columnData + '</td>';
                                      }
                                    }
                                  }
                                  html += '</tr>';
                                }
                              }
                              html += '</table>';

                            }

                            html += '</div>';
                          } // end if contentType TABLE

                          if (contentType == 'HTML') {

                            html += '<div class="content-type-html">';
                            html += '<p>' + translation.text + '</p>';
                            html += '</div>';
                          } // end if contentType html

                          if (contentType == 'LINK') {

                            html += '<div class="content-type-link">';
                            if (translation.title != '' && translation.title != null) {
                              if (contentData.fontSize != '' && contentData.fontSize != null) {
                                var textSize = 'font-size:' + contentData.fontSize + 'px;';
                              } else { var textSize = '' }

                              html += '<h3 style="' + textSize + '">' + translation.title + '</h3>';
                            }
                            if (translation.linkText != '' && translation.linkText != null) {
                              var btnLinkClass = '';
                              if (contentData.isButtonLink == '1') {
                                btnLinkClass = 'button button-link';
                                html += '<style>.button-link{background-color: ' + contentData.backgroundButtonColor + ';color:' + contentData.textButtonColor + '}.button-link:hover{background-color:' + contentData.hoverColor + ';}</style>';
                              }
                              html += '<a href="' + translation.link + '" class="' + btnLinkClass + '">';
                              if (translation.linkText != '') {
                                html += translation.linkText;
                              }
                              html += '</a>';
                            }
                            if (translation.imageUrl != '' && translation.imageUrl != null) {

                              html += '<div class="image-container image-width--' + contentData.pictureSize + ' image-text--' + contentData.picturePosition + '" style="text-align:' + contentData.picturePosition + '">';
                              html += '<div class="image-container-inner">';
                              html += '<a href="' + translation.link + '">';
                              html += '<img src="' + translation.imageUrl + '" alt="" class="lazyload" loading="lazy">';
                              html += '</a>';
                              html += '</div>';
                              html += '</div>';


                            }
                            html += '</div>';
                          } // end if contentType link

                          if (contentType == 'VIDEO') {

                            var videourl = contentData.videoUrl;
                            if (videourl == '' || videourl == null) {
                              var videourl = contentData.localVideoUrl;
                            }

                            if (videourl != '' && videourl != null) {
                              var videoId = youtube_parser(videourl.trim());

                              if (videoId != false) {
                                html += '<div class="content-type-video">';
                                html += '<iframe title="' + translation.title + '" src="https://www.youtube.be/embed/' + videoId + '?feature=oembed&amp;enablejsapi=1&amprel=0;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
                                html += '</div>';
                              } else {
                                html += '<div class="content-type-video">';
                                html += '<video controls><source src="' + videourl + '" type="video/mp4"></iframe>';
                                html += '</div>';
                              }
                            }

                          } // end if contentType video

                          if (contentType == 'CONTENT_CARD') {
                            html += '<div class="content-type-content-card">';
                            html += '<' + contentData.titleSize + '>';
                            html += translation.title;
                            html += '</' + contentData.titleSize + '>';
                            if (translation.text != '') {
                              html += '<p>' + translation.text + '</p>';
                            }
                            if (contentData.picture != '' && contentData.picture) {
                              html += '<img src="' + contentData.picture + '" class="lazyload" loading="lazy">'
                            }
                            html += '</div>';
                          } // end if contentType CONTENT_CARD

                          if (contentType == 'COLLECTION') {
                            cole++;
                            html += '<div class="content-type-collection">';
                            html += '<' + contentData.titleSize + '>';
                            html += translation.title;
                            html += '</' + contentData.titleSize + '>';

                            if (translation.description != null) {
                              html += '<p>' + translation.description + '</p>';
                            }

                            var item = {};
                            item['limit'] = contentData.nrOfProductsVisible;

                            var shopData = contentData.collection.shopData;
                            for (var sd = 0; sd < shopData.length; sd++) {
                              if (contentData.collection.shopData[sd].shopAPIDomain == '{{ shop.permanent_domain }}') {
                                item['handle'] = contentData.collection.shopData[sd].urlHandle;
                              }
                            }
                            collectionHandle.push(item);
                            html += '<div class="product-container" id="product-wrapper-' + cole + '"></div>';
                            html += '</div>';
                          }

                        } // end lang compare
                      } // end translation loop
                    } // Translation code

                    if (contentType == 'CAROUSEL') {
                      html += '<div class="content-type-carousel">';
                      html += '<div id="news-media-wrapper" class="news-media-wrapper">';
                      if (contentData.contentCarouselImages.length > 0) {
                        var album_image = contentData.contentCarouselImages;
                        if (album_image.length > 9) {
                          slidetoshow = 9;
                        }
                        html += '<div class="news-slider slider-for">';
                        for (var ai = 0; ai < album_image.length; ai++) {
                          html += '<div class="news-images">';
                          html += '<img src="' + album_image[ai].picture + '" class="lazyload" alt="">';

                          for (var coroa = 0; coroa < album_image[ai].translations.length; coroa++) {
                            var translation = album_image[ai].translations[coroa];
                            if (translation.locale == STORE_LOCALE) {

                              if (translation.title != null) {
                                html += '<span class="caption">' + translation.title + '</span>';
                              }

                            }

                          }


                          html += '</div>';
                        }
                        html += '</div>'; // end slider-for
                        html += '<div class="news-thumbnail slider-nav">';

                        for (var ai = 0; ai < album_image.length; ai++) {
                          var imgSrc = '';

                          if (album_image[ai].picture != null) {
                            imgSrc = album_image[ai].picture;
                          } else {
                            imgSrc = album_image[ai].picture;
                          }
                          html += '<div class="news-thumbnail-images">';
                          html += '<img src="' + imgSrc + '" alt="" class="lazyload" width="150">';
                          html += '</div>';
                        }
                        html += '</div>';

                        html += '</div>';
                        html += '</div>';
                      } // end if contentType album
                    } //end carousal

                    if (contentType == 'ALBUM') {
                      html += '<div id="news-media-wrapper-1" class="news-media-wrapper content-type-content-album" data-album="album-content-' + (content + 1) + '">';

                      var album_image = contentData.album.images;

                      html += '<div class="news-slider slider-for">';

                      if (album_image.length > 9) {
                        slidetoshow = 9;
                      }

                      for (var ai = 0; ai < album_image.length; ai++) {
                        var imgSrc = '';

                        if (album_image[ai].optimizedImage != null) {
                          imgSrc = album_image[ai].optimizedImage;
                        } else {
                          imgSrc = album_image[ai].url;
                        }

                        html += '<div class="news-images" data-order="' + album_image[ai].order + '">';
                        html += '<img src="' + imgSrc + '" class="lazyload" alt="">';

                        for (var coroa = 0; coroa < album_image[ai].translations.length; coroa++) {
                          var translation = album_image[ai].translations[coroa];
                          if (translation.locale == STORE_LOCALE) {

                            if (translation.alternative_text != null) {
                              html += '<span class="caption">' + translation.alternative_text + '</span>';
                            }

                          }
                        }


                        html += '</div>';
                      }
                      html += '</div>';

                      html += '<div class="news-thumbnail slider-nav">';

                      for (var ai = 0; ai < album_image.length; ai++) {
                        var imgSrc = '';

                        if (album_image[ai].optimizedImage != null) {
                          imgSrc = album_image[ai].optimizedImage;
                        } else {
                          imgSrc = album_image[ai].url;
                        }
                        html += '<div class="news-thumbnail-images" data-thumbnail-order="' + album_image[ai].order + '">';
                        html += '<img src="' + imgSrc + '" class="lazyload" alt="" width="150">';
                        html += '</div>';
                      }
                      html += '</div>';

                      html += '</div>';

                    } // endif album

                    if (contentType == 'TESTIMONIAL') {
                      var testimonialImage = contentData.testimonial.image;
                      html += '<div class="content-type-testimonial">';
                      html += '<div class="testimonial-wrapper">';
                      html += '<div class="testimonial-inner">';

                      html += `<div class="wie_quote_main_block">
                                  <div class="wie_quote_info">
                                    <p>${contentData.testimonial.text}</p>
                                  </div>`;
                      if (testimonialImage != null && testimonialImage != '') {
                        html += `<div class="wie_quote_logo_block">
                                    <img src="${testimonialImage}" alt="" class="lazyload">
                                    `;
                      }
                      html += '</div>';
                      html += '</div>';
                      html += '</div>';
                      html += '</div>';
                    } // end TESTIMONIAL
                    if (contentType == 'DOCUMENT') {
                      html += '<div class="content-type-document">';
                      if (contentData.document != '' && contentData.document != null) {
                        html += '<style>';
                        html += '.document-button{ background-color:' + contentData.buttonBackgroundColor + ';color:' + contentData.buttonTextColor + ';border: 1px solid ' + contentData.buttonBorderColor + ';padding: 10px;     text-decoration: none;}';
                        html += '.document-button:hover{ background-color:' + contentData.buttonHoverColor + ';}';
                        html += '</style>';
                        if (contentData.isDocumentDisplayedAsButton == 1) {
                          var btnClass = 'document-button';
                        } else {
                          var btnClass = '';
                        }
                        html += '<a href="https://aicofcz.s3.eu-central-1.amazonaws.com/' + contentData.document + '" class="' + btnClass + '">' + contentData.title + '</a>';
                      }
                      html += '</div>';
                    } // end if contentType DOCUMENT

                    if (contentType == 'DIVIDER') {
                      html += '<div class="content-type-divider">';
                      html += '<hr>';
                      html += '</div>';
                    } // end if contentType DIVIDER

                    html += '</div>'; // end content

                  } // end if contentData
                } // end for content
              } // end if content.length
            } // end if contentContainer
            html += '</div>'; // end content-column
          } // end for column
        } // end if column.length
        html += '</div>'; // end content-row  
      } // end for rows
    } // end if rows.length
  }
  html += '</div>';
  return html;
}

export function getAicoMetaByKeyName(data,key) {
  if (!Array.isArray(data)) {
    data = JSON.parse(data);
  }
  let obj = data.find(o => o.key === key)
  return obj?.value;
}

export function getYoutubeId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
   return match[2];
  } else {
   return 'error';
  }
}

const roots = {
  home: {title: 'Home', to: '/'},
  schweizerSchuhproduktion: {title: 'Schweizer Produktion', to: '/pages/schweizer-schuhpropktion'},
  uberuns: {title: 'Über uns', to: '/pages/uber-uns'},
  kybunjoyatherapie: {title: 'kybun Joya Therapie', to: '/pages/kybun-joya-therapie'},
  karriere: {title: 'Karriere', to: '/pages/karriere'},
  produkte: {title: 'Produkte', to: '/pages/products'},
  ratgeber: {title: 'Ratgeber', to: '/pages/ratgeber'},
  beratung: {title: 'Beratung', to: '/pages/ratgeberseite'},
  heritage: {title: 'Heritage', to: '/pages/aboutus'},
  kontakt: {title: 'Kontakt', to: '/pages/kontakt'},
  shopfinder: {title: 'Shopfinder', to: '/pages/shopfinder'},
  blog: {title: 'Blog', to: '/pages/blog'}
};

export function getBreadCrumbs(
  currentPage,
  root = 'home'
) {
  const initial = [roots[root]];
  if (initial[0].title !== 'home') initial.unshift(roots['home']);
  if (currentPage) initial.push(roots[currentPage] ? roots[currentPage] : {title: currentPage});

  return initial;
}