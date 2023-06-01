import {useIsHomePath} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconClose,
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
  ScrollToTop,
  ArrowRight2,
  IconArrowBottom,
  ShopifyCookie
} from '~/components';
import {
  useParams,
  Form,
  Await,
  useMatches,
  useLocation,
} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Disclosure} from '@headlessui/react';
import {Suspense, useEffect, useMemo, useState} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {COOKIEBOT_KEY} from '~/lib/const';
import {Helmet} from 'react-helmet';

export function Layout({children, layout, locale}) {
  const isHome = useIsHomePath();

  const [isCookieAccepted, setisCookieAccepted] = useState(false);

  useEffect(() => {
    function handleCookiebotAccept(e) {
      if (Cookiebot.consent.marketing) {
        //Execute code that sets marketing cookies
        setisCookieAccepted(true);
      }
    }
    window.addEventListener('CookiebotOnAccept', handleCookiebotAccept, false);

    return () => {
      window.removeEventListener(
        'CookiebotOnAccept',
        handleCookiebotAccept,
        false,
      );
    };
  }, []);

  return (
    <>
      {isCookieAccepted ? <ShopifyCookie locale={locale} /> : ''}
      <Helmet>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={COOKIEBOT_KEY}
          data-blockingmode="auto"
          type="text/javascript"
        />
      </Helmet>
      <div className="">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
      </div>
      <Header
        title={layout?.shop.name ?? 'Hydrogen'}
        menu={layout?.headerMenu}
      />
      <main
        role="main"
        id="mainContent"
        className={`${isHome ? '!mt-[0]' : ''} mt-[120px] lg:mt-[190px]`}
      >
        {children}
      </main>
      <Footer menu={layout?.footerMenu} main_menu={layout?.headerMenu} />
    </>
  );
}

function Breadcrumb() {
  const isHome = useIsHomePath();

  return (
    <div
      className={`${
        isHome ? 'hidden' : ''
      } Breadcrumb-sec mb-[20px] lg:mb-[25px]`}
    >
      <div className="container">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-y-[10px] gap-x-[8px] md:gap-x-[16px] flex-wrap">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
              >
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ArrowRight2
                  className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                />
                <a
                  href="#"
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                >
                  Ratgeber
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ArrowRight2
                  className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                />
                <a
                  href="#"
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                >
                  Beratung
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ArrowRight2
                  className={'w-[21px] h-[21px] mr-[8px] md:mr-[16px]'}
                />
                <a
                  href="#"
                  className="tracking-[-0.400697px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] font-normal text-black leading-none hover:text-[#00795C]"
                >
                  Fersensporn
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

function Header({title, menu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({isOpen, onClose, menu}) {
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    });
  }, []);
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      openFrom="right"
      heading="Menu"
      className={`p-6 overflow-auto bg-white mobile-menu-Drawer ${
        isScrolled ? 'header-sticky' : ''
      }`}
    >
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {
  const {pathname, search} = useLocation();
  useEffect(() => {
    const links = document.querySelectorAll('.kybunjoya-menu-hover');
    const images = document.querySelectorAll('.image-container img');
    const defaultActive = document.querySelector('#defaultActive');

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        const image = link.dataset.image;
        images.forEach((img) => {
          if (image === img.dataset.image) {
            img?.classList.add('active');
          } else {
            img?.classList.remove('active');
          }
        });
        setTimeout(() => {
          let hasActive = false;
          images.forEach((img) => {
            if (img?.classList.contains('active')) {
              hasActive = true;
            }
          });
          if (!hasActive) {
            defaultActive?.classList.add('active');
          }
        }, 10);
      });

      link.addEventListener('mouseout', () => {
        images.forEach((img) => {
          img?.classList.remove('active');
        });
        defaultActive?.classList.add('active');
      });
    });
  }, []);

  return (
    <div className="mega-menu-wrap">
      <div className="nav-list">
        <ul className="columns-1 md:columns-3">
          {(menu?.items || []).map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.to}
                  target={item.target}
                  className={`kybunjoya-menu-hover title text-[#00795C] text-[26px] mb-[12px] outline-none ${
                    item.to == pathname ? 'is-active' : ''
                  } `}
                  data-image={item.title}
                  onClick={onClose}
                >
                  {item.title}
                </Link>
                {item.items.length > 0 && (
                  <SubMegaMenu menu_items={item.items} onClose={onClose} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function SubMegaMenu({menu_items, onClose}) {
  const {pathname, search} = useLocation();
  return (
    <ul className="sub-menu">
      {(menu_items || []).map((item, key) => {
        return (
          <li key={key}>
            <Link
              to={item.to}
              target={item.target}
              className={`text-[16px] text-[#595959] block leading-none ${
                item.to == pathname + search ? 'is-active' : ''
              } `}
              onClick={onClose}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MobileHeader({title, isHome, openCart, openMenu, isMenuOpen}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    });
  }, []);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome ? '' : ''
      } site-header fixed top-0 inset-x-0 z-50  ml-0 mr-0 lg:ml-[60px] lg:mr-[60px] xl:ml-[80px] xl:mr-[80px] lg:mt-[50px] mt-[0px] ${
        isScrolled ? 'header-sticky' : ''
      }`}
    >
      <div className="container py-4 mx-auto bg-white shadow-lg lg:rounded-lg">
        <div className="flex items-center justify-between w-full gap-4">
          <Link className="w-40 md:w-60" to="/">
            <img
              className="object-contain w-full h-full max-w-[218px]"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/logo.png?v=1680591892"
              alt=""
            />
          </Link>
          <button
            onClick={openMenu}
            className="relative flex items-center justify-center menu-toogle-btn gap-[10px] text-[20px] lg:text-[24px] xl:text-[32.96px] text-[#00795C] font-normal"
          >
            Menu{' '}
            {isMenuOpen ? (
              <IconClose aria-label="Close panel" />
            ) : (
              <IconMenu className={'menu-toggle-icon'} />
            )}
          </button>
          {/* <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form> */}
        </div>
      </div>

      {/* <div className="flex items-center justify-end w-full gap-4">
        <Link
          to="/account"
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconAccount />
        </Link>
        <CartCount isHome={isHome} openCart={openCart} />
      </div> */}
    </header>
  );
}

function DesktopHeader({isHome, menu, openCart, title}) {
  const params = useParams();
  const {y} = useWindowScroll();
  return (
    <header
      role="banner"
      className={`${isHome ? '' : ''} ${!isHome && y > 50 && ''} hidden`}
    >
      <div className="flex gap-12">
        <Link className="font-bold" to="/" prefetch="intent">
          {title}
        </Link>
        <nav className="flex gap-8">
          {/* Top level menu items */}
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1">
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="flex items-center gap-2"
        >
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
          >
            <IconSearch />
          </button>
        </Form>
        <Link
          to="/account"
          className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
        >
          <IconAccount />
        </Link>
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function CartCount({isHome, openCart}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({openCart, dark, count}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          className={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function FooterMainMenuSub({sub_menu_item}) {
  return (
    <ul className="font-normal text-base text-[#595959] sub-menu">
      {sub_menu_item.map((subItem, index) => (
        <li className="mb-2" key={index}>
          <Link
            to={subItem.to}
            target={subItem.target}
            className="hover:underline hover:text-[#00795C]"
          >
            {subItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Footer({menu, main_menu}) {
  const chunkSize = 2;
  const mainMenuChunk = [];
  for (let i = 0; i < main_menu?.items?.length; i += chunkSize) {
    mainMenuChunk.push(main_menu?.items.slice(i, i + chunkSize));
  }

  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];
  const footerMenuToggle = (event) => {
    event.currentTarget.parentNode.classList.toggle('active');
  };
  return (
    <>
      <Section
        divider={isHome ? 'none' : 'top'}
        as="footer"
        role="contentinfo"
        // className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        //   bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
        className="pt-[64px] pb-[52px] bg-[#EDEDED] site-footer"
      >
        <div className="container relative">
          <ScrollToTop />
          <div className="flex justify-between gap-4">
            <div className="w-full mx-auto">
              <div className="pr-0 xl:pr-16 xl:flex md:justify-between">
                <div className="pr-0 mb-6 md:mb-0 xl:pr-5">
                  <div className="flex flex-wrap items-center ">
                    <h3 className="text-[#00795C] w-full font-bold lg:text-[42px] text-[30px] mb-3">
                      Updates in deine Inbox
                    </h3>
                    <p className="font-normal  text-[#595959] w-full text-[19px]">
                      Bleib auf dem laufenden mit den letzten Ereignissen.
                    </p>
                  </div>
                  <form className="mt-12 mb-10">
                    <div className="max-w-[576px] max-w-sm-full relative">
                      <input
                        type="email"
                        id="email"
                        className="bg-transparent border-b-[1px] font-normal border-[#999999] text-[#000] text-base placeholder:text-[#CCCCCC] focus:ring-black-500 focus:border-black-500 block w-full p-0 focus:bordr-0 focus:outline-none focus:border-b-[1px] focus:border-[#000] dark:placeholder-gray-400  dark:focus:ring-black-500 dark:focus:border-black-500 pb-[10px] pr-[20px]"
                        placeholder="Email"
                        required
                      />
                      <button className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[#CCCCCC]">
                        <IconArrowBottom
                          className={'rotate-[-90deg] w-[30px] h-[30px]'}
                        />
                      </button>
                    </div>
                  </form>
                  <div className="flex mb-11">
                    <p className="font-normal text-base text-[#595959] flex gap-4 items-center">
                      {/* <span>
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                      >
                        <path
                          d="M0 0.390625H18V12.3906H0V0.390625ZM1 2.40263V11.3906H17V2.40263L9 8.51962L1 2.40263ZM16.677 1.39062H1.323L9 7.26062L16.677 1.39062Z"
                          fill="#595959"
                        />
                      </svg>
                    </span>{' '} */}
                      <Link
                        to={'/pages/kontakt'}
                        className="hover:underline hover:text-[#00795C] font-normal text-base text-[#595959]"
                      >
                        Kontakt
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-[10px] md:gap-[20px] md:block md:columns-3 footer-menu-items">
                  { main_menu.items && main_menu.items.map((item,index) => {
                      return (
                        <div key={index}>
                            <span  className="nav-item relative">

                              <h2 className="mb-[20px] lg:text-[26px] text-[20px] font-bold capitalize text-[#00795C] pr-[40px] md:pr-0">
                                    <Link
                                      to={item.to}
                                      target={item.target}
                                      className="kybunjoya-menu-hover title text-[#00795C] text-[20px] lg:text-[26px] mb-[12px] outline-none"
                                      data-image={item.title}
                                    >
                                      {item.title}
                                    </Link>
                                  </h2>
                                  {item.items.length > 0 && (
                                  <>
                                    <div
                                      onClick={footerMenuToggle}
                                      className="toggle-menu-icon text-[#00795C] absolute top-0 right-0 w-[40px] h-[30px] flex items-center justify-end md:hidden cursor-pointer"
                                    >
                                      <IconArrowBottom
                                        className={
                                          'w-[30px] h-[30px] transition-all duration-500'
                                        }
                                      />
                                    </div>
                                    <FooterMainMenuSub
                                      sub_menu_item={item.items}
                                    />
                                  </>
                                )}
                            </span>
                        </div>
                      )
                  })}
                  </div>
                <div>
                    
                </div>
                {/* <div className="grid grid-cols-2 gap-y-0 gap-8 lg:gap-8 lg:grid-cols-3">
                  {(mainMenuChunk || []).map((menuitem, index) => {
                    return (
                      <div key={index}>
                        {menuitem.map((item, subIndex) => {
                          return (
                            <span key={subIndex} className="nav-item relative">
                              <h2 className="mb-[20px] lg:text-[26px] text-[20px] font-bold capitalize text-[#00795C] pr-[40px] md:pr-0">
                                <Link
                                  to={item.to}
                                  target={item.target}
                                  className="kybunjoya-menu-hover title text-[#00795C] text-[26px] mb-[12px] outline-none"
                                  data-image={item.title}
                                >
                                  {item.title}
                                </Link>
                              </h2>
                              {item.items.length > 0 && (
                                <>
                                  <div
                                    onClick={footerMenuToggle}
                                    className="toggle-menu-icon text-[#00795C] absolute top-0 right-0 w-[40px] h-[30px] flex items-center justify-end md:hidden cursor-pointer"
                                  >
                                    <IconArrowBottom
                                      className={
                                        'w-[30px] h-[30px] transition-all duration-500'
                                      }
                                    />
                                  </div>
                                  <FooterMainMenuSub
                                    sub_menu_item={item.items}
                                  />
                                </>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    );
                  })}
                </div> */}
              </div>
              <div className="mt-[40px]">
                {/* <div className="flex mb-6">
                  <p className="font-normal text-base text-[#595959] flex gap-4 items-center">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M0.732 1.12262C0.964193 0.890493 1.23984 0.706371 1.54319 0.580774C1.84655 0.455177 2.17167 0.390564 2.5 0.390625H15.5C16.163 0.390625 16.7989 0.654017 17.2678 1.12286C17.7366 1.5917 18 2.22758 18 2.89062V10.3906C18 11.0537 17.7366 11.6896 17.2678 12.1584C16.7989 12.6272 16.163 12.8906 15.5 12.8906H8.207L3.5 17.5976V12.8906H2.5C1.83696 12.8906 1.20107 12.6272 0.732233 12.1584C0.263392 11.6896 4.34504e-08 11.0537 4.34504e-08 10.3906V2.89062C-6.11675e-05 2.5623 0.0645516 2.23717 0.190149 1.93382C0.315746 1.63046 0.499868 1.35482 0.732 1.12262ZM2.5 1.39062C2.10218 1.39062 1.72064 1.54866 1.43934 1.82996C1.15804 2.11127 1 2.4928 1 2.89062V10.3906C1 10.7884 1.15804 11.17 1.43934 11.4513C1.72064 11.7326 2.10218 11.8906 2.5 11.8906H4.5V15.1836L7.793 11.8906H15.5C15.8978 11.8906 16.2794 11.7326 16.5607 11.4513C16.842 11.17 17 10.7884 17 10.3906V2.89062C17 2.4928 16.842 2.11127 16.5607 1.82996C16.2794 1.54866 15.8978 1.39062 15.5 1.39062H2.5ZM5 7.39062V5.89062H6V7.39062H5ZM8.5 7.39062V5.89062H9.5V7.39062H8.5ZM12 7.39062V5.89062H13V7.39062H12Z"
                          fill="#595959"
                        />
                      </svg>
                    </span>{' '}
                    <a
                      href="#"
                      className="hover:underline hover:text-[#00795C] font-normal text-[15px] text-[#595959]"
                    >
                      Chat{' '}
                    </a>{' '}
                  </p>
                </div> */}
                <div className="space-x-6 sm:justify-center mb-10 flex sm:hidden">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <rect width="50" height="50" rx="8" fill="#595959" />
                        <path
                          d="M17.7785 14.8876C17.7785 16.4216 16.7515 17.7427 14.886 17.7427C13.1326 17.7427 12 16.498 12 14.964C12 13.3894 13.0985 12 14.8892 12C16.68 12 17.7428 13.313 17.7785 14.8876ZM12 38V19.2215H17.7785V37.9984L12 38ZM20.6661 25.6419C20.6661 23.4108 20.593 21.5453 20.5199 19.9349H25.7101L25.9685 22.4227H26.0774C26.8086 21.2527 28.601 19.5351 31.5991 19.5351C35.2554 19.5351 38 21.9824 38 27.2506V38H32.2215V28.0875C32.2215 25.7849 31.3456 24.0283 29.3339 24.0283C27.7999 24.0283 27.0312 25.2714 26.6283 26.2951C26.482 26.6607 26.4446 27.1726 26.4446 27.6861V37.9967H20.6661V25.6386V25.6419Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </a>
                  </div>
                <div className="flex mb-10">
                  <p className="font-normal text-base text-[#595959] flex gap-4 items-center">
                    <span>
                      <img
                        className=""
                        src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Clip_path_group.png?v=1682401790"
                        alt=""
                      />
                    </span>{' '}
                    <a
                      href="#"
                      className="hover:underline hover:text-[#00795C] font-normal text-base text-[#595959]"
                    >
                      DE{' '}
                    </a>{' '}
                  </p>
                </div>
                <div className="flex mb-12">
                  <ul className="font-normal text-base  text-[#595959] flex gap-3 lg:gap-9 flex-col sm:flex-row flex-wrap">
                    {(menu?.items || []).map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.to}
                          className="hover:underline hover:text-[#00795C]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-[15.94px] font-normal sm:text-center text-[#595959]">
                    © kybun Joya {new Date().getFullYear()}{' '}
                  </span>
                  <div className="mt-4 space-x-6 sm:justify-center sm:mt-0 hidden sm:flex">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <rect width="50" height="50" rx="8" fill="#595959" />
                        <path
                          d="M17.7785 14.8876C17.7785 16.4216 16.7515 17.7427 14.886 17.7427C13.1326 17.7427 12 16.498 12 14.964C12 13.3894 13.0985 12 14.8892 12C16.68 12 17.7428 13.313 17.7785 14.8876ZM12 38V19.2215H17.7785V37.9984L12 38ZM20.6661 25.6419C20.6661 23.4108 20.593 21.5453 20.5199 19.9349H25.7101L25.9685 22.4227H26.0774C26.8086 21.2527 28.601 19.5351 31.5991 19.5351C35.2554 19.5351 38 21.9824 38 27.2506V38H32.2215V28.0875C32.2215 25.7849 31.3456 24.0283 29.3339 24.0283C27.7999 24.0283 27.0312 25.2714 26.6283 26.2951C26.482 26.6607 26.4446 27.1726 26.4446 27.6861V37.9967H20.6661V25.6386V25.6419Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterMenu menu={menu} />
      <CountrySelector /> 
      <div
        className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project.
      </div> */}
      </Section>
    </>
  );
}

const FooterLink = ({item}) => {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
};

function FooterMenu({menu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      {(menu?.items || []).map((item) => (
        <section key={item.id} className={styles.section}>
          <Disclosure>
            {({open}) => (
              <>
                <Disclosure.Button className="text-left md:cursor-default">
                  <Heading className="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span className="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 ? (
                  <div
                    className={`${
                      open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                    } overflow-hidden transition-all duration-300`}
                  >
                    <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                      <Disclosure.Panel static>
                        <nav className={styles.nav}>
                          {item.items.map((subItem) => (
                            <FooterLink key={subItem.id} item={subItem} />
                          ))}
                        </nav>
                      </Disclosure.Panel>
                    </Suspense>
                  </div>
                ) : null}
              </>
            )}
          </Disclosure>
        </section>
      ))}
    </>
  );
}
