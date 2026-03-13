import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function animateCounter(el, target, isFloat = false, duration = 2.2) {
    const obj = { val: 0 };
    gsap.to(obj, {
        val: target,
        duration,
        ease: 'power4.out',
        onUpdate: () => {
            el.textContent = isFloat ? obj.val.toFixed(1) : Math.round(obj.val);
        },
    });
}

const bullets = [
    'No more than 1% error rate — guaranteed by SLA',
    'Free you from managing multiple translation vendors',
    'Scale your content volume up to 10x in weeks',
    'Improve ROI on global content investment',
    'Access a live quality dashboard at any time',
];

export default function TrustSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Left heading
            gsap.fromTo('.ts-heading',
                { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
                {
                    clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            // Bullets slide from left
            gsap.fromTo('.ts-bullet',
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.ts-bullets', start: 'top 85%' }
                }
            );

            // Right card scale in
            gsap.fromTo('.ts-card',
                { scale: 0.75, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)',
                    scrollTrigger: { trigger: '.ts-card', start: 'top 85%' }
                }
            );

        }, sectionRef);

        // Counter + stat line
        const counterEl = sectionRef.current?.querySelector('[data-count-ts]');
        const lineEls = sectionRef.current?.querySelectorAll('.stat-line');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (counterEl) animateCounter(counterEl, 99.9, true);
                    setTimeout(() => lineEls?.forEach(l => l.classList.add('line-visible')), 500);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.4 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-28 px-8 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>

            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(0,148,255,0.04) 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div>
                    <div className="ts-heading mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Enterprise SLA</span>
                        </div>
                        <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-tight tracking-tight">
                            Enterprise-grade<br />
                            <span className="gradient-text">trust management</span>
                        </h2>
                    </div>

                    <div className="ts-bullets flex flex-col gap-3 mb-10">
                        {bullets.map((b, i) => (
                            <div key={i} className="ts-bullet flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-accent shrink-0 dot-ripple" />
                                <p className="font-sans text-sm leading-relaxed" style={{ color: '#8892a4' }}>{b}</p>
                            </div>
                        ))}
                    </div>

                    <Link to="/contact">
                        <button className="btn-shimmer group flex items-center gap-3 px-7 py-3.5 rounded-xl font-sans font-semibold text-sm text-[#07090d] transition-all duration-300 hover:shadow-glow-md" style={{ background: 'linear-gradient(135deg, #00e5c3 0%, #0094ff 100%)' }}>
                            Join Platform
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </Link>
                </div>

                {/* RIGHT — Stat card with orbiting rings */}
                <div className="flex items-center justify-center">
                    <div className="ts-card relative flex flex-col gap-6 p-10 rounded-3xl text-center" style={{ background: 'linear-gradient(135deg, #0e1520 0%, #0c1018 100%)', border: '1px solid rgba(0,229,195,0.12)', minWidth: '280px' }}>

                        {/* Orbiting ring decorations */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-visible">
                            <div className="absolute w-3 h-3 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute w-2 h-2 rounded-full bg-accent/60 shadow-[0_0_8px_#00e5c3] orbit-dot" style={{ top: '-70px', left: '-4px' }} />
                                <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/50 orbit-dot-reverse" style={{ top: '-90px', left: '-3px' }} />
                            </div>
                        </div>

                        {/* Main stat */}
                        <div>
                            <div className="font-sans font-black text-7xl md:text-8xl leading-none tracking-tight text-accent stat-glow">
                                <span data-count-ts="99.9">0</span>%
                            </div>
                            <span className="stat-line mx-auto mt-3" style={{ width: '80px' }} />
                            <p className="font-sans font-bold text-lg text-white mt-4">Accuracy Rate</p>
                            <p className="font-sans text-xs mt-1" style={{ color: '#8892a4' }}>SLA-Backed Guarantee</p>
                        </div>

                        {/* Sub stats */}
                        <div className="grid grid-cols-2 gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                            <div className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <div className="font-sans font-black text-2xl text-white">5,000+</div>
                                <div className="font-sans text-[10px] uppercase tracking-widest mt-1" style={{ color: '#8892a4' }}>Projects Done</div>
                            </div>
                            <div className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <div className="font-sans font-black text-2xl text-white">$5K</div>
                                <div className="font-sans text-[10px] uppercase tracking-widest mt-1" style={{ color: '#8892a4' }}>Min. Engagement</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
