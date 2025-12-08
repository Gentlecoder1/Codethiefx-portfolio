import { useRef } from 'react'
import { Tooltip } from 'react-tooltip'

import { dockApps } from '#constants'
import useWindowStore from '#store/window';


const Dock = () => {

  const { openWindow, closeWindow, windows } = useWindowStore(); 
  const dockRef = useRef(null)

  const toggleApp = (app) => {
    // TODO: implement app toggling (open/close logic, routing, etc.)
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (window.isOpen) {
        closeWindow(app.id);
    } else {
        openWindow(app.id);
    }

    console.log(windows);
  }

  return (
    <section id='dock'>
        <div ref={dockRef} className='dock-container'>
            {dockApps.map(({ id, name, icon, canOpen }) => (
                <div key={id} className='relative flex justify-center hover:transition-all hover:-translate-y-6 duration-500'>
                    <button 
                        type='button' 
                        className='dock-icon' 
                        aria-label={name}
                        data-tooltip-id="dock-tooltip"
                        data-tooltip-content={name}
                        data-tooltip-delay-show={150}
                        disabled={!canOpen}
                        onClick={() => toggleApp({ id, canOpen })}
                    >
                        <img 
                            src={`/images/${icon}`} 
                            alt={name}
                            loading="lazy"
                            className={canOpen ? '' : 'opacity-60'} 
                        />
                    </button>
                </div>
            ))}

            <Tooltip id="dock-tooltip" place='top' className='tooltip' />
        </div>
    </section>
  )
}

export default Dock