import useWindowStore from '#store/window'

import { motion } from 'framer-motion'
// import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef } from 'react'

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const win = windows[windowKey];
        if (!win) {
            console.error(`WindowWrapper: Invalid windowKey "${windowKey}"`);
            return null;
        }
        const { isOpen, zIndex } = win;
        
        const ref = useRef(null)

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = 'block';

            // gsap.fromTo(
            //     el, 
            //     { scale: 0.8,  opacity: 0, y: 40 },
            //     { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
            // );
        }, [isOpen]);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen])

        return (
            <motion.section
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 40 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                drag
                onMouseDown={() => focusWindow(windowKey)}
                id={windowKey} ref={ref} 
                style={{ zIndex }} 
                className='absolute top-16 left-20 max-w-[90vw] max-h-[85vh]'
            >
                <Component {...props} />
            </motion.section>
        )
    }

    Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || 'Component'})`

    return Wrapped
}

export default WindowWrapper