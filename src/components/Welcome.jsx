import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FONT_WEIGHT = {
    subtitle: { min: 200, max: 400, default: 200 },
    title: { min: 400, max: 900, default: 400 },
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span 
            key={i} 
            className={className} 
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
}

const setUpTextHover = (container, type) => {
    if(!container) return () => {};

    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration, 
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        });
    }

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2)/ 2000);
 
            animateLetter(letter, min + (max - min) * intensity);
        });
    }

    const handleMouseLeave = () => {
        letters.forEach((letter) => animateLetter(letter, base, 0.3))
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    }
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        const titleCleanup = setUpTextHover(titleRef.current, 'title')
        const subtitleCleanup = setUpTextHover(subtitleRef.current, 'subtitle')

        return () => {
            titleCleanup();
            subtitleCleanup();
        }
    }, []); 

  return <section id='welcome'>
    <p ref={subtitleRef}>
        {renderText(
            "Hey, I'm Codethiefx! Welcome to my", 
            "text-lg sm:text-2xl md:text-3xl font-georama", 
            200
        )}
    </p>
    <h1 ref={titleRef} className='mt-4 sm:mt-7'>
        {renderText(
            "Portfolio",
            "text-5xl sm:text-7xl md:text-9xl font-georama"
        )}
    </h1>
  </section>
}

export default Welcome