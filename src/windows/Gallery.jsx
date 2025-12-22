import { Mail, Search } from "lucide-react"
import clsx from "clsx"

import { photosLinks, gallery } from '#constants'
import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
// import { locations } from "#constants"

const Gallery = ({ isMaximized }) => {

    const { openWindow } = useWindowStore();
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
            <div className={`sidebar ${isMaximized ? 'h-full' : ''}`}>
                <h2>Photos</h2>
                <ul>
                    {photosLinks.map(({ id, icon, title }) => (
                        <li key={id}>
                            <img src={icon} alt="" />
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="gallery max-h-[600px] overflow-y-auto">
                <ul className={`${isMaximized ? 'h-full overflow-auto' : ''}`}>
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