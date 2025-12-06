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
    if(!container) return;

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

    container.addEventListener('mousemove', handleMouseMove);
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subTitleRef = useRef(null)

    useGSAP(() => {
        setUpTextHover(titleRef.current, 'title')
        setUpTextHover(subTitleRef.current, 'subtitle')
    }, [])

  return <section id='welcome'>
    <p ref={subTitleRef}>
        {renderText(
            "Hey, I'm Codetheif! Welcome to my", 
            "text-3xl font-georama", 
            200
        )}
    </p>
    <h1 ref={titleRef} className='mt-7'>
        {renderText(
            "Portfolio",
            "text-9xl font-georama"
        )}
    </h1>

    <div className='small-screen'>
        <p>This portfolio is designed for desktop/tablet screens only.</p>
    </div>
  </section>
}

export default Welcome