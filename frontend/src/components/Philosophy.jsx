import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });

            // Split Text effect simulation (word by word)
            const animateWords = (elementRef, delay = 0) => {
                const words = elementRef.current.querySelectorAll('.word');
                gsap.fromTo(words,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: 'power3.out',
                        delay,
                        scrollTrigger: {
                            trigger: elementRef.current,
                            start: 'top 80%',
                        }
                    }
                );
            };

            animateWords(text1Ref, 0);
            animateWords(text2Ref, 0.4);

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Helper to split text into words for animation
    const splitText = (text) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
        ));
    };

    return (
        <section ref={containerRef} className="relative min-h-[80vh] w-full flex items-center justify-center py-32 px-6 overflow-hidden bg-[#05050A]">
            {/* Background Texture image */}
            <div
                ref={bgRef}
                className="absolute -top-[20%] -bottom-[20%] left-0 right-0 z-0 bg-[url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"
            ></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-12 text-center md:text-left">
                <div ref={text1Ref} className="overflow-hidden">
                    <p className="font-sans text-xl md:text-3xl text-primary/40 font-medium leading-relaxed tracking-tight">
                        {splitText('Most localization agencies focus on: literal translation.')}
                    </p>
                </div>

                <div ref={text2Ref} className="overflow-hidden border-l-4 border-accent pl-6 md:pl-10">
                    <p className="font-serif italic text-4xl md:text-6xl lg:text-[5.5rem] text-primary leading-tight">
                        {splitText('We focus on: ')}
                        <span className="word inline-block text-accent">global resonance.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
