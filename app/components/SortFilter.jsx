import React, {useMemo, useState, useEffect} from 'react';
import {Menu} from '@headlessui/react';

import {Heading, IconFilters, IconCaret, IconXMark, Text} from '~/components';
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from '@remix-run/react';
import {useDebounce} from 'react-use';
import {Disclosure} from '@headlessui/react';

export function SortFilter({
  filters,
  appliedFilters = [],
  appliedCustomFilters = [],
  children,
  collections = [],
}) {
  
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="items-center justify-between w-full hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            'relative flex items-center justify-center w-8 h-8 focus:ring-primary/5'
          }
        >
          <IconFilters />
        </button>
        <SortMenu />
      </div>
      <div className="flex flex-col w-full">
        <div
          className={`transition-all duration-200  ${
            isOpen
              ? 'opacity-100 w-full'
              : 'opacity-0 md:min-w-[0px] md:w-[0px] pr-0 max-h-0 md:max-h-full'
          }`}
        >
          <FiltersDrawer
            collections={collections}
            filters={filters}
            appliedFilters={appliedFilters}
            appliedCustomFilters={appliedCustomFilters}
          />
        </div>
        <div className="w-full mb-[100px]">{children}</div>
      </div>
    </>
  );
}

export function FiltersDrawer({
  filters = [],
  appliedFilters = [],
  appliedCustomFilters = [],
  collections = [],
}) {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [prevQueryString, setPrevQueryString] = useState('');
 

  useEffect(() => {
    if (location.search !== prevQueryString) {
      const topOffset = document.querySelector('#filter_by')?.getBoundingClientRect()?.top;
      window.scrollTo({ top: topOffset - 50, behavior: 'smooth' });
      setPrevQueryString(location.search);
    }
  },[location.search, prevQueryString]);

  const handleFilterClick = (event) => {
    event.preventDefault();
    const queryString = event.currentTarget.search;
    console.log(queryString);
    navigate(queryString, { scroll: false });
  }

  const filterMarkup = (filter, option) => {
    switch (filter.type) {
      case 'PRICE_RANGE':
        const min =
          params.has('minPrice') && !isNaN(Number(params.get('minPrice')))
            ? Number(params.get('minPrice'))
            : undefined;

        const max =
          params.has('maxPrice') && !isNaN(Number(params.get('maxPrice')))
            ? Number(params.get('maxPrice'))
            : undefined;

        return <PriceRangeFilter min={min} max={max} appliedCustomFilters={appliedCustomFilters} />;

      default:
        const to = getFilterLink(filter, option.input, params, location, appliedCustomFilters);
        return (
          <Link
            onClick={handleFilterClick}
            className={`${appliedCustomFilters.includes(option.label) ? 'active' : ''} hover:text-[#00795c]`}
            prefetch="intent"
            to={to}
          >
            {option.label}
          </Link>
        );
    }
  };

  const [isActive, setIsActive] = useState(false);
  const filterHandleclick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  const refs = React.useMemo(() => {
    return (
      filters.map(() => {
        return React.createRef();
      }) ?? []
    );
  }, []);

  function handleClosingOthers(id) {
    const otherRefs = refs.filter((ref) => {
      return ref.current?.getAttribute("data-id") !== id;
    });

    /*otherRefs.forEach((ref) => {
      const isOpen = ref.current?.getAttribute("data-open") === "true";
      if (isOpen) {
        ref.current?.click();
      }
    });*/
  }

  return (
    <>
      <nav className="py-8" id="filter_by">
        <Heading as="h4" size="lead" className="pb-4 hidden">
          Filter By
        </Heading>
        <div className="flex flex-wrap gap-[30px]">
          {filters.map(
            (filter, idx) =>
              filter.values.length > 1 && (
                <Disclosure as="div" key={filter.id} className="w-auto relative">
                  {({open}) => (
                    <>
                      <Disclosure.Button 
                        className={`px-[30px] py-[15px]  font-normal tracking-[-0.400697px] border border-black text-[25px] rounded-[100px] hover:bg-black hover:text-white ${open ? 'text-white bg-black active' : 'text-black bg-white'}`}
                         ref={refs[idx]}
                         data-id={filter.id}
                         data-open={open}
                         onClick={() => {
                            handleClosingOthers(filter.id)
                         }}
                      >
                        <Text size="lead" className={'font-normal'}>{filter.label}</Text>
                        {/* <IconCaret direction={open ? 'up' : 'down'} /> */}
                      </Disclosure.Button>
                      <Disclosure.Panel key={filter.id} className={'absolute top-[100%] bg-[#ffffff] mt-[5px] rounded-[10px] z-[1]'} >
                        <ul key={filter.id} className="px-[20px] py-[20px] min-w-max w-[150px] filter-list">
                          {filter.values?.map((option) => {
                            return (
                              <li key={option.id} className="pb-[10px] tracking-[-0.400697px] text-[25px] font-normal last:pb-[0]">
                                {filterMarkup(filter, option)}
                              </li>
                            );
                          })}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ),
          )}
        </div>
      </nav>
    </>
  );
}

function AppliedFilters({filters = []}) {
  const [params] = useSearchParams();
  const location = useLocation();
  return (
    <>
      <Heading as="h4" size="lead" className="pb-4">
        Applied filters
      </Heading>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          return (
            <Link
              to={getAppliedFilterLink(filter, params, location)}
              className="flex px-2 border rounded-full gap"
              key={`${filter.label}-${filter.urlParam}`}
            >
              <span className="flex-grow">{filter.label}</span>
              <span>
                <IconXMark />
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

function getAppliedFilterLink(filter, params, location) {
  const paramsClone = new URLSearchParams(params);
  if (filter.urlParam.key === 'variantOption') {
    const variantOptions = paramsClone.getAll('variantOption');
    const filteredVariantOptions = variantOptions.filter(
      (options) => !options.includes(filter.urlParam.value),
    );
    paramsClone.delete(filter.urlParam.key);
    for (const filteredVariantOption of filteredVariantOptions) {
      paramsClone.append(filter.urlParam.key, filteredVariantOption);
    }
  } else {
    paramsClone.delete(filter.urlParam.key);
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}

function getSortLink(sort, params, location) {
  params.set('sort', sort);
  return `${location.pathname}?${params.toString()}`;
}

function getFilterLink(filter, rawInput, params, location, appliedCustomFilters) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(filter.type, rawInput, paramsClone, appliedCustomFilters);
  return `${location.pathname}?${newParams.toString()}`;
}

const PRICE_RANGE_FILTER_DEBOUNCE = 500;

function PriceRangeFilter({max, min}) {
  const location = useLocation();
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState(min ? String(min) : '');
  const [maxPrice, setMaxPrice] = useState(max ? String(max) : '');

  useDebounce(
    () => {
      if (
        (minPrice === '' || minPrice === String(min)) &&
        (maxPrice === '' || maxPrice === String(max))
      )
        return;

      const price = {};
      if (minPrice !== '') price.min = minPrice;
      if (maxPrice !== '') price.max = maxPrice;

      const newParams = filterInputToParams('PRICE_RANGE', {price}, params, appliedCustomFilters);
      navigate(`${location.pathname}?${newParams.toString()}`);
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice],
  );

  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };

  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-4">
        <span>from</span>
        <input
          name="maxPrice"
          className="text-black"
          type="text"
          defaultValue={min}
          placeholder={'$'}
          onChange={onChangeMin}
        />
      </label>
      <label>
        <span>to</span>
        <input
          name="minPrice"
          className="text-black"
          type="number"
          defaultValue={max}
          placeholder={'$'}
          onChange={onChangeMax}
        />
      </label>
    </div>
  );
}

function filterInputToParams(type, rawInput, params, appliedCustomFilters) {
  const input = typeof rawInput === 'string' ? JSON.parse(rawInput) : rawInput;
  const appliedCustomFiltersArr = JSON.parse(JSON.stringify(appliedCustomFilters));
  switch (type) {
    case 'PRICE_RANGE':
      if (input.price.min) params.set('minPrice', input.price.min);
      if (input.price.max) params.set('maxPrice', input.price.max);
      break;
    case 'LIST':
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === 'string') {
          params.set(key, value);
        } else if (typeof value === 'boolean') {
          params.set(key, value.toString());
        } else {
          const {name, value: val} = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append('variantOption', newVariant);
          }
          const allFilteredVariants = params.getAll(`variantOption`);
          if (appliedCustomFiltersArr.includes(val)) {
            const index = allFilteredVariants.indexOf(newVariant);
            if (index > -1) {
              allFilteredVariants.splice(index,1)
            }
          }
          params.delete('variantOption');
          allFilteredVariants.forEach((value) => {
            params.append('variantOption', value);
          });

        }
      });
      break;
  }

  return params;
}

export default function SortMenu() {
  const items = [
    {label: 'Featured', key: 'featured'},
    {
      label: 'Price: Low - High',
      key: 'price-low-high',
    },
    {
      label: 'Price: High - Low',
      key: 'price-high-low',
    },
    {
      label: 'Best Selling',
      key: 'best-selling',
    },
    {
      label: 'Newest',
      key: 'newest',
    },
  ];
  const [params] = useSearchParams();
  const location = useLocation();
  const activeItem = items.find((item) => item.key === params.get('sort'));

  return (
    <Menu as="div" className="relative z-40">
      <Menu.Button className="flex items-center">
        <span className="px-2">
          <span className="px-2 font-medium">Sort by:</span>
          <span>{(activeItem || items[0]).label}</span>
        </span>
        <IconCaret />
      </Menu.Button>

      <Menu.Items
        as="nav"
        className="absolute right-0 flex flex-col p-4 text-right rounded-sm bg-contrast"
      >
        {items.map((item) => (
          <Menu.Item key={item.label}>
            {() => (
              <Link
                className={`block text-sm pb-2 px-3 ${
                  activeItem?.key === item.key ? 'font-bold' : 'font-normal'
                }`}
                to={getSortLink(item.key, params, location)}
              >
                {item.label}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
