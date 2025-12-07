import { useRef } from 'react'
import { dockApps } from '#constants'

const Dock = () => {
  const dockRef = useRef(null)

  const toggleApp = () => {}

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
        </div>
    </section>
  )
}

export default Dock