import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Disable scrolling + hide navbar/canvas behind preloader
        document.body.style.overflow = 'hidden';
        document.documentElement.setAttribute('data-preloading', 'true');

        const tl = gsap.timeline({
            onComplete: () => {
                setComplete(true);
                document.body.style.overflow = 'auto';
                document.documentElement.removeAttribute('data-preloading');
            }
        });

        // Orbiting ring animation
        gsap.to('.preloader-orbit', {
            rotation: 360,
            duration: 1.5,
            repeat: -1,
            ease: 'linear'
        });

        // Fade in text -> Hold -> Fade out entirely
        tl.to('.preloader-logo', { opacity: 1, duration: 0.5 })
            .to('.preloader-logo', { scale: 1.05, duration: 1, ease: 'power2.out' }, '-=0.5')
            .to('.preloader-container', {
                yPercent: -100,
                duration: 0.8,
                ease: 'power4.inOut',
                delay: 0.2
            });

        return () => tl.kill();
    }, []);

    if (complete) return null;

    return (
        <div className="preloader-container fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: '#07090d' }}>
            <div className="relative flex items-center justify-center preloader-logo opacity-0">

                {/* Orbit Ring */}
                <div className="absolute w-32 h-32 rounded-full border border-accent/20 border-t-accent preloader-orbit" />
                <div className="absolute w-24 h-24 rounded-full border border-accent/10 border-b-accent preloader-orbit" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />

                {/* Central Core */}
                <div className="w-16 h-16 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/30 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#14b8a6] animate-pulse" />
                </div>

                {/* Brand Text */}
                <div className="absolute top-full mt-8 font-sans font-bold text-2xl tracking-widest text-primary uppercase text-center w-max">
                    Welonix<br />
                    <span className="text-[9px] text-[#9CA3AF] tracking-[0.3em] font-light">Technologies</span>
                </div>

            </div>
        </div>
    );
}
