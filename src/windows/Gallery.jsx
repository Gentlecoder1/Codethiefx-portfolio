import { Mail, Search, ArrowRightIcon, ArrowLeftIcon } from "lucide-react"
import clsx from "clsx"

import React, { useState, useEffect } from 'react'
import { photosLinks, gallery } from '#constants'
import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const Gallery = ({ isMaximized }) => {

    // Hook to detect mobile screen
    const [isMobile, setIsMobile] = useState(false);
    
    // check whether screen size is mobile
    useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const { openWindow } = useWindowStore();

    const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={isMaximized ? 'h-full flex flex-col' : ''}>
        <div id='window-header'>
            <WindowControls target="photos" />

            <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                <Mail className="icon" />
                <Search className="icon" />
            </div>
        </div>

        <div className={`bg-white w-full flex ${isMaximized ? 'flex-1 h-0' : 'h-full'}`}>

            <div className={`sidebar ${openSidebar ? 'w-full sm:w-48' : 'w-20 sm:w-48'} ${isMaximized ? 'h-full' : ''}`}>
                <div 
                    className="sm:hidden flex w-fit ml-auto cursor-pointer"
                >
                    {!openSidebar ? 
                        <ArrowRightIcon onClick={() => setOpenSidebar(true)} /> 
                        : 
                        <ArrowLeftIcon onClick={() => setOpenSidebar(false)} /> 
                    }
                    
                </div>

                <h2>Photos</h2>
                <ul>
                    {photosLinks.map(({ id, icon, title }) => (
                        <li key={id} className="">
                            <img src={icon} alt="" className="w-4" />
                            <p className="text-sm font-medium truncate">{title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className={`gallery max-h-fit overflow-y-auto ${!isMobile ? (isMaximized ? 'maximized' : '') : 'mobile'}`}>
                <ul>
                    {gallery.map(({ id, img }) => (
                        <li key={id} onClick={() => openWindow("imgfile", {
                            id,
                            name: "Gallery image",
                            icon: "/images/image.png",
                            kind: "file",
                            fileType: "img", 
                            imageUrl: img,
                        })}>
                            <img src={img} alt={id} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

const GalleryWindow = WindowWrapper(Gallery, 'photos')
export default GalleryWindow