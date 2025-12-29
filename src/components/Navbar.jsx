import dayjs from 'dayjs'

import React, { useState, useEffect } from 'react'
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  // check whether screen size is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      // Show navbar when cursor is within 10px of top
      if (e.clientY <= 10) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsVisible(false);
    }
  };

  return (
    <nav 
      className={`relative  ${!isMobile ? (isVisible ? 'nav-visible' : 'nav-hidden') : 'fixed w-full'}`}
      onMouseLeave={handleMouseLeave}
    >
        <div>
            <img src="/images/logo.svg" alt="logo" className="w-5 h-5 sm:w-auto sm:h-auto" />
            <p className='font-bold text-xs sm:text-base truncate'>Codetheifx</p>

            <ul>
                {navLinks.map(({ id, name, type }) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ThemeToggle />

            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar