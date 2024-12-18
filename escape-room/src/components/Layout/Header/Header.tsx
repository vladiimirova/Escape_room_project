import Logo from './HeaderComponents/Logo';
import Nav from './HeaderComponents/Nav';
import Contact from './HeaderComponents/Contact';
import React, { useState, useEffect } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  let prevScrollY = 0;

  useEffect(function() {
    const handleScroll = function() {
      if (window.scrollY > prevScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      prevScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full font-raleway font-600 text-white z-50 flex justify-center h-[74px] transition-transform duration-200 ${
        isVisible ? 'transform-none' : '-translate-y-[100%]'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center pl-[32px] pr-[33px]">
          <Logo />
          <Nav />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Header;
