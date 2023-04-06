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
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Disclosure} from '@headlessui/react';
import {Suspense, useEffect, useMemo} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';

export function Layout({children, layout}) {
  return (
    <>
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header
          title={layout?.shop.name ?? 'Hydrogen'}
          menu={layout?.headerMenu}
        />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      <Footer menu={layout?.footerMenu} />
    </>
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
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="right" heading="Menu" className="p-6 overflow-auto bg-white mobile-menu-Drawer">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {
  return (
    <div className='mega-menu-wrap'>
      <div className='nav-list'>
        <ul className='columns-3'>
          <li>
            <a href="#" className='title text-[#00795C] text-[26px] mb-[12px]'>Shopfinder</a>
          </li>
          <li>
            <a href="#" className='title text-[#00795C] text-[26px] mb-[12px]'>Produkte</a>
            <ul className='sub-menu'>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>kybun</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Joya</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Matten</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>UTR</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className='title text-[#00795C] text-[26px] mb-[12px]'>Ratgeber</a>
          </li>
          <li>
            <a href="#" className='title text-[#00795C] text-[26px] mb-[12px]'>Story</a>
          </li>
          <li>
            <a href="#" className='title text-[#00795C] text-[26px] mb-[12px]'>Gruppe</a>
            <ul className='sub-menu'>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Careers</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Schweizer Schuhproduktion</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Luftkissen Technologie</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Sustainability</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Brands</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Partner Werden</a></li>
              <li><a href="#" className='text-[16px] text-[#595959] block leading-none'>Kontakt</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    // <nav className="grid gap-4">
    //   {/* Top level menu items */}
    //   {(menu?.items || []).map((item) => (
    //     <span key={item.id} className="block">
    //       <Link
    //         to={item.to}
    //         target={item.target}
    //         onClick={onClose}
    //         className={({isActive}) =>
    //           isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
    //         }
    //       >
    //         <Text as="span" size="copy">
    //           {item.title}
    //         </Text>
    //       </Link>
    //     </span>
    //   ))}
    // </nav>
  );
}

function MobileHeader({title, isHome, openCart, openMenu}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome
          ? ''
          : ''
      } site-header fixed top-0 inset-x-0 z-50 bg-white ml-0 mr-0 lg:ml-20 lg:mr-20 lg:mt-[50px] mt-[0px] shadow-lg`}
    >
      <div className='container py-4 mx-auto'>
      <div className="flex items-center justify-between w-full gap-4">
        <Link
          className="w-40 md:w-60"
          to="/"
        >
          <img className='object-contain w-full h-full max-w-[218px]' src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/logo.png?v=1680591892" alt="" />
        </Link>
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8 menu-toogle-btn"
        >
          <IconMenu className={'menu-toggle-icon'} />
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
      className={`${
        isHome
          ? ''
          : ''
      } ${
        !isHome && y > 50 && ''
      } hidden`}
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

function Footer({menu}) {
  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      // className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
      //   bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
      className='pt-[64px] pb-[52px] bg-[#EDEDED] '
    >
      <div className='container'>
      <div className='flex justify-between gap-4'>
      <div className="w-full mx-auto">
        <div className="pr-0 xl:pr-16 xl:flex md:justify-between">
          <div className="pr-0 mb-6 md:mb-0 xl:pr-5">
              <div className="flex flex-wrap items-center ">
                  <h3 className='text-[#00795C] w-full font-bold lg:text-5xl text-3xl mb-3'>Updates in deine Inbox</h3>                 
                  <p className="font-normal  text-[#595959] w-full text-[19px]">Bleib auf dem laufenden mit den letzten Ereignissen.</p>
              </div>
              <form className='mt-12 mb-10' >
                <input type="email" id="email" class="bg-transparent border-b-[1px] font-normal border-[#999999] text-[#000] text-base placeholder:text-[#999] focus:ring-black-500 focus:border-black-500 block w-full max-w-[576px] max-w-sm-full p-0 focus:bordr-0 focus:outline-none focus:border-b-[1px] focus:border-[#000] dark:placeholder-gray-400  dark:focus:ring-black-500 dark:focus:border-black-500" placeholder="Email" required />
              </form>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-8 lg:grid-cols-3">
              <div>
                  <h2 className="mb-8 lg:text-[26px] text-[22px] font-bold capitalize text-[#00795C]">Shopfinder</h2>

                  <h2 className="mb-3 lg:text-[26px] text-[22px] font-bold capitalize text-[#00795C]">Produkte</h2>
                  
                  <ul className="font-normal text-base text-[#595959]">
                      <li className="mb-2">
                          <a href="#" className="hover:underline hover:text-[#00795C]">kybun</a>
                      </li>
                        <li className="mb-2">
                          <a href="#" className="hover:underline hover:text-[#00795C]">Joya</a>
                      </li>
                        <li className="mb-2">
                          <a href="#" className="hover:underline hover:text-[#00795C]">Matten</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline hover:text-[#00795C]">UTR</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-8 lg:text-[26px] text-[22px] font-bold capitalize text-[#00795C]">Ratgeber</h2>
                  <h2 className="mb-8 lg:text-[26px] text-[22px] font-bold capitalize text-[#00795C]">Story</h2>

                  
              </div>
              <div>
                  <h2 className="mb-3 lg:text-[26px] text-[22px] font-bold capitalize text-[#00795C]">Gruppe</h2>
                  <ul className="font-normal text-base text-[#595959]">
                      <li className='mb-2'>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Careers</a>
                      </li>
                      <li className='mb-2'>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Schweizer Schuhproduktion</a>
                      </li>
                      <li className='mb-2'>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Luftkissen Technologie</a>
                      </li>
                      <li className='mb-2'>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Sustainability</a>
                      </li>
                      <li className='mb-2'>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Brands</a>
                      </li>
                      <li className='mb-2'>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Partner Werden</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline hover:text-[#00795C]">Kontakt</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div className='mt-[40px] lg:mt-[-80px]'>
      <div className='flex mb-6'> 
         <p className="font-normal text-base text-[#595959] flex gap-4 items-center">
           <span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
              <path d="M0.732 1.12262C0.964193 0.890493 1.23984 0.706371 1.54319 0.580774C1.84655 0.455177 2.17167 0.390564 2.5 0.390625H15.5C16.163 0.390625 16.7989 0.654017 17.2678 1.12286C17.7366 1.5917 18 2.22758 18 2.89062V10.3906C18 11.0537 17.7366 11.6896 17.2678 12.1584C16.7989 12.6272 16.163 12.8906 15.5 12.8906H8.207L3.5 17.5976V12.8906H2.5C1.83696 12.8906 1.20107 12.6272 0.732233 12.1584C0.263392 11.6896 4.34504e-08 11.0537 4.34504e-08 10.3906V2.89062C-6.11675e-05 2.5623 0.0645516 2.23717 0.190149 1.93382C0.315746 1.63046 0.499868 1.35482 0.732 1.12262ZM2.5 1.39062C2.10218 1.39062 1.72064 1.54866 1.43934 1.82996C1.15804 2.11127 1 2.4928 1 2.89062V10.3906C1 10.7884 1.15804 11.17 1.43934 11.4513C1.72064 11.7326 2.10218 11.8906 2.5 11.8906H4.5V15.1836L7.793 11.8906H15.5C15.8978 11.8906 16.2794 11.7326 16.5607 11.4513C16.842 11.17 17 10.7884 17 10.3906V2.89062C17 2.4928 16.842 2.11127 16.5607 1.82996C16.2794 1.54866 15.8978 1.39062 15.5 1.39062H2.5ZM5 7.39062V5.89062H6V7.39062H5ZM8.5 7.39062V5.89062H9.5V7.39062H8.5ZM12 7.39062V5.89062H13V7.39062H12Z" fill="#595959"/>
              </svg>

          </span> <a href="#" className="hover:underline hover:text-[#00795C] font-normal text-base text-[#595959]">Chat </a>  </p> 
      </div>
      <div className='flex mb-11'> 
         <p className="font-normal text-base text-[#595959] flex gap-4 items-center">
           <span>
           <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
            <path d="M0 0.390625H18V12.3906H0V0.390625ZM1 2.40263V11.3906H17V2.40263L9 8.51962L1 2.40263ZM16.677 1.39062H1.323L9 7.26062L16.677 1.39062Z" fill="#595959"/>
          </svg>

          </span> <a href="#" className="hover:underline hover:text-[#00795C] font-normal text-base text-[#595959]">Contact us </a>  </p> 
      </div>
      <div className='flex mb-10'> 
         <p className="font-normal text-base text-[#595959] flex gap-4 items-center">
           <span>
            <img className='' src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/lang-icon.svg?v=1680775164" alt="" />
          </span> <a href="#" className="hover:underline hover:text-[#00795C] font-normal text-base text-[#595959]">Deutsch </a>  </p> 
      </div>
        <div className='flex mb-12'> 
          <span className="text-[15.94px] font-normal sm:text-center text-[#595959]">© kybun Joya 2023          </span>
      </div>      
      <div className="sm:flex sm:items-center sm:justify-between">         
          <ul className="font-normal text-base  text-[#595959] flex gap-3 lg:gap-9 flex-wrap">
                      <li>
                          <a href="https://customer-service.on-running.com/en-in/terms_and_conditions" className="hover:underline hover:text-[#00795C]">Terms & conditions</a>
                      </li>
                      <li>
                          <a href="https://customer-service.on-running.com/en-in/privacy_policy" className="hover:underline hover:text-[#00795C]">Privacy policy</a>
                      </li>
                      <li>
                          <a href="https://customer-service.on-running.com/en-in/accessibility" className="hover:underline hover:text-[#00795C]">Accessibility</a>
                      </li>
                      <li>
                          <a href="https://customer-service.on-running.com/en-in/company_information" className="hover:underline hover:text-[#00795C]">Imprint</a>
                      </li>
                      <li>
                          <a href="#https://hackerone.com/on" className="hover:underline hover:text-[#00795C]">Vulnerability reporting</a>
                      </li>
                      <li>
                          <a href="https://www.on-running.com/en-ca/" className="hover:underline hover:text-[#00795C]">Consent Settings</a>
                      </li>
                  </ul>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect width="50" height="50" rx="8" fill="#595959"/>
                <path d="M17.7785 14.8876C17.7785 16.4216 16.7515 17.7427 14.886 17.7427C13.1326 17.7427 12 16.498 12 14.964C12 13.3894 13.0985 12 14.8892 12C16.68 12 17.7428 13.313 17.7785 14.8876ZM12 38V19.2215H17.7785V37.9984L12 38ZM20.6661 25.6419C20.6661 23.4108 20.593 21.5453 20.5199 19.9349H25.7101L25.9685 22.4227H26.0774C26.8086 21.2527 28.601 19.5351 31.5991 19.5351C35.2554 19.5351 38 21.9824 38 27.2506V38H32.2215V28.0875C32.2215 25.7849 31.3456 24.0283 29.3339 24.0283C27.7999 24.0283 27.0312 25.2714 26.6283 26.2951C26.482 26.6607 26.4446 27.1726 26.4446 27.6861V37.9967H20.6661V25.6386V25.6419Z" fill="#F5F5F5"/>
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
