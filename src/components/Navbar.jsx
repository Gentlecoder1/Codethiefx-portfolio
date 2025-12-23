import dayjs from 'dayjs'

import React from 'react'
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

  const { openWindow } = useWindowStore();

  return (
    <nav>
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