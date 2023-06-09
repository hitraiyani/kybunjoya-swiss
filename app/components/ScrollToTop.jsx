import React, {useState, useEffect} from 'react';
import {FaAngleUp} from '~/components';

export function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <div
          className="fixed right-[20px] md:right-[40px] bottom-[20px] xl:bottom-[40px] lg:right-[60px] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[74px] xl:h-[74px] rounded-full bg-black hover:bg-[#00795c] text-white flex items-center justify-center cursor-pointer z-[999]"
          onClick={goToTop}
        >
          <FaAngleUp className="icon-position icon-style w-[15px] lg:w-[18px] xl:w-[20px] h-auto" />
        </div>
      )}
    </div>
  );
}
