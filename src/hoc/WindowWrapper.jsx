import useWindowStore from '#store/window'
import useThemeStore from '#store/theme'

import { motion } from 'framer-motion'
// import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef, useState, useEffect } from 'react'

// Hook to detect mobile screen
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    return isMobile;
};

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isDarkMode } = useThemeStore();
        const isMobile = useIsMobile();
        const win = windows[windowKey];
        if (!win) {
            console.error(`WindowWrapper: Invalid windowKey "${windowKey}"`);
            return null;
        }
        const { isOpen, isMinimized, isMaximized, zIndex } = win;
        
        // On mobile, always treat as maximized
        const effectiveMaximized = isMobile || isMaximized;
        
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
                return { scale: 0, opacity: 0, y: 40, x: 0 };
            }
            if (isMinimized) {
                return { scale: 0, opacity: 0, y: 100, x: 0 };
            }
            // Reset position to 0,0 when maximized to prevent overflow
            if (effectiveMaximized) {
                return { scale: 1, opacity: 1, y: 0, x: 0 };
            }
            return { scale: 1, opacity: 1 };
        };

        return (
            <motion.section
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={getAnimateState()}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                drag={!effectiveMaximized}
                // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                onMouseDown={() => focusWindow(windowKey)}
                id={windowKey} ref={ref} 
                style={{ zIndex }} 
                className={`absolute ${isDarkMode ? 'dark' : ''} ${
                    effectiveMaximized 
                        ? 'top-0 left-0 !w-screen !h-screen !max-w-none !max-h-none overflow-hidden' 
                        : 'top-10 left-20 max-w-fit max-h-[80vh] overflow-hidden'
                }`}
            >
                <Component {...props} isMaximized={effectiveMaximized} isMobile={isMobile} />
            </motion.section>
        )
    }

    Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || 'Component'})`

    return Wrapped
}

export default WindowWrapper