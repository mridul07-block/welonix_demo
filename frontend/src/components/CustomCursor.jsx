import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const [isDesktop, setIsDesktop] = useState(true);
    const cursorRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        const checkViewport = () => {
            setIsDesktop(window.innerWidth > 1024);
        };
        checkViewport();
        window.addEventListener('resize', checkViewport);

        if (!isDesktop) return;

        const cursor = cursorRef.current;
        const ring = ringRef.current;

        // Move logic
        const onMouseMove = (e) => {
            // Main dot follows instantly
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: 'none'
            });

            // Ring trails behind slightly
            gsap.to(ring, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: 'power2.out'
            });
        };

        // Hover logic
        const handleMouseOver = (e) => {
            const target = e.target.closest('a, button, .magnetic-btn, .glass-panel, input, textarea');
            if (target) {
                gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
                gsap.to(ring, {
                    scale: 1.5,
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    borderColor: 'rgba(20, 184, 166, 0.8)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
                gsap.to(ring, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(20, 184, 166, 0.3)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('resize', checkViewport);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Small instant dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen shadow-[0_0_10px_#14b8a6]"
            />

            {/* Trailing ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent/30 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
            />
        </>
    );
}
