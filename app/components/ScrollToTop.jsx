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
          className="fixed right-[20px] md:right-[40px] bottom-[20px] sm:bottom-[50px] md:bottom-[80px] lg:bottom-[100px] xl:bottom-[150px] lg:right-[60px] w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[120px] xl:h-[120px] rounded-full bg-black hover:bg-[#00795c] text-white flex items-center justify-center cursor-pointer z-[999]"
          onClick={goToTop}
        >
          <FaAngleUp className="icon-position icon-style w-[15px] lg:w-[20px] xl:w-[23px] h-auto" />
        </div>
      )}
    </div>
  );
}
