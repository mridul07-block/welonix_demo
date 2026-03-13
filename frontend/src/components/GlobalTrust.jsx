import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
    { value: 100, suffix: '+', label: "Languages Supported" },
    { value: 10, suffix: '+', label: "Years Experience" },
    { value: 24, suffix: '/7', label: "Global Quality Assurance" },
    { value: 99.9, suffix: '%', label: "Delivery Accuracy" }
];

function AnimatedCounter({ target, suffix, decimals = 0 }) {
    const ref = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const obj = { val: 0 };
        const tween = gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                once: true,
            },
            onUpdate: () => {
                setCount(decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val));
            }
        });
        return () => tween.kill();
    }, [target, decimals]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function GlobalTrust() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.trust-item',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-16 px-8 border-y border-white/[0.04] bg-[#050508]/50 backdrop-blur-sm relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                <div className="trust-item flex items-center gap-3 text-accent/70 shrink-0 md:border-r md:border-white/10 md:pr-12">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#14b8a6]" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">Trusted Worldwide</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 w-full justify-items-center md:justify-items-start">
                    {trustItems.map((item, i) => (
                        <div key={i} className="trust-item flex flex-col items-center md:items-start text-center md:text-left gap-1 group">
                            <span className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tighter group-hover:text-accent transition-colors duration-500">
                                <AnimatedCounter target={item.value} suffix={item.suffix} decimals={item.value % 1 !== 0 ? 1 : 0} />
                            </span>
                            <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#64748B] mt-1">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
