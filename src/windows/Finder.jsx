import { Search } from "lucide-react"
import clsx from "clsx"

import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
import { locations } from "#constants"
import useLocationStore from "#store/location"

const Finder = ({ isMaximized }) => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if(item.fileType === "pdf") return openWindow("resume");
        if(item.kind === "folder") return setActiveLocation(item);
        if(['fig', 'url'].includes(item.fileType) && item.href) 
            return window.open(item.href, "_blank", "noopener,noreferrer");
        
        openWindow(`${item.fileType}${item.kind}`, item);
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items?.map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation?.id ? "active" : "not-active",
                        )}
                    >
                        <img 
                            src={item.icon}        
                            className="w-4" 
                            alt={item.name}
                        />
                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )

  return (
    <div className={isMaximized ? 'h-full flex flex-col' : ''}>
        <div id='window-header'>
            <WindowControls target="finder" />
            <Search className="icon" />
        </div>

        <div className={`bg-white dark:bg-[#1e1e1e] flex ${isMaximized ? 'flex-1 h-0' : 'h-full'}`}>
            <div className={`sidebar ${isMaximized ? 'h-full' : ''}`}>
                {renderList('Favorites', Object.values(locations))}
                {renderList('Projects', locations.work?.children)}
            </div>

            <ul className={`content ${isMaximized ? 'h-full overflow-auto' : ''}`}>
                {activeLocation?.children?.map((item) => (
                    <li
                        key={item.id} 
                        className={`cursor-pointer `}
                        onClick={() => openItem(item)}    
                    >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div> 
    </div>
  )
} 

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow