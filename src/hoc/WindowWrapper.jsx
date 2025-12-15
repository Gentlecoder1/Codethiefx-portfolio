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
        const { isOpen, isMinimized, isMaximized, zIndex } = win;
        
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

        // Determine animation state
        const getAnimateState = () => {
            if (!isOpen) {
                return { scale: 0, opacity: 0, y: 40 };
            }
            if (isMinimized) {
                return { scale: 0, opacity: 0, y: 100 };
            }
            return { scale: 1, opacity: 1, y: 0 };
        };

        return (
            <motion.section
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={getAnimateState()}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                drag={!isMaximized}
                onMouseDown={() => focusWindow(windowKey)}
                id={windowKey} ref={ref} 
                style={{ zIndex }} 
                className={`absolute ${
                    isMaximized 
                        ? 'top-7 left-0 !w-screen !h-[calc(100vh-6rem)] !max-w-none !max-h-none' 
                        : 'top-16 left-20 max-w-[90vw] max-h-[85vh]'
                }`}
            >
                <Component {...props} isMaximized={isMaximized} />
            </motion.section>
        )
    }

    Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || 'Component'})`

    return Wrapped
}

export default WindowWrapper