import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function animateCounter(el, target, duration = 2.5) {
    const obj = { val: 0 };
    const isFloat = !Number.isInteger(target);
    gsap.to(obj, {
        val: target,
        duration,
        ease: 'power4.out',
        onUpdate: () => {
            el.textContent = isFloat
                ? obj.val.toFixed(1)
                : Math.round(obj.val).toLocaleString();
        },
    });
}

const bigStats = [
    { value: 5, suffix: 'M+', label: 'Words Delivered', sub: 'across all languages' },
    { value: 336, suffix: '', label: 'Expert Linguists', sub: 'globally sourced' },
    { value: 60, suffix: '%', label: 'Faster Delivery', sub: 'vs. traditional agencies' },
    { value: 96, suffix: '%', label: 'Client Retention', sub: 'over 3-year average' },
];

export default function GlobalTrust() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Section heading
            gsap.fromTo('.gt-heading',
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );

            // Left portrait parallax
            gsap.to('.gt-portrait', {
                y: -50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });

            // Stat items animate in with elastic bounce
            gsap.fromTo('.big-stat',
                { y: 60, opacity: 0, scale: 0.7 },
                {
                    y: 0, opacity: 1, scale: 1,
                    duration: 0.8, stagger: 0.12,
                    ease: 'elastic.out(1, 0.6)',
                    scrollTrigger: { trigger: '.big-stats-grid', start: 'top 80%' }
                }
            );

            // Counter + line on scroll
            const statEls = sectionRef.current.querySelectorAll('[data-count-big]');
            const lineEls = sectionRef.current.querySelectorAll('.stat-line');
            let triggered = false;
            ScrollTrigger.create({
                trigger: '.big-stats-grid',
                start: 'top 80%',
                onEnter: () => {
                    if (triggered) return;
                    triggered = true;
                    statEls.forEach(el => {
                        const target = parseFloat(el.dataset.countBig);
                        animateCounter(el, target);
                    });
                    setTimeout(() => {
                        lineEls.forEach(l => l.classList.add('line-visible'));
                    }, 600);
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-28 px-8 relative overflow-hidden"
            style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,148,255,0.04) 0%, transparent 70%)' }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 40% at 30% 60%, rgba(0,229,195,0.04) 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto">

                {/* Top heading */}
                <div className="gt-heading mb-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>By The Numbers</span>
                        </div>
                        <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
                            Welonix drives<br />
                            <span className="gradient-text">global content at scale</span>
                        </h2>
                    </div>
                    <p className="font-sans text-base leading-relaxed max-w-xs" style={{ color: '#8892a4' }}>
                        for fast and reliable generation<br />of passive business income
                    </p>
                </div>

                {/* Stat grid — F11CLUB large numbers */}
                <div className="big-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {bigStats.map((s, i) => (
                        <div key={i} className="big-stat flex flex-col gap-3">
                            <div className="font-sans font-black text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-accent stat-glow">
                                <span data-count-big={s.value}>{s.value}</span>{s.suffix}
                            </div>
                            <span className="stat-line" />
                            <div>
                                <div className="font-sans font-bold text-base text-white">{s.label}</div>
                                <div className="font-sans text-xs mt-0.5" style={{ color: '#8892a4' }}>{s.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
