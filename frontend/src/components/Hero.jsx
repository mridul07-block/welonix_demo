import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function animateCounter(el, target, duration = 2.2) {
    const obj = { val: 0 };
    gsap.to(obj, {
        val: target,
        duration,
        ease: 'power4.out',
        onUpdate: () => {
            el.textContent = Number.isInteger(target)
                ? Math.round(obj.val).toLocaleString()
                : obj.val.toFixed(1);
        },
    });
}

// Split text into character spans
function splitTextToChars(el) {
    const text = el.textContent;
    el.innerHTML = text.split('').map(char =>
        char === ' '
            ? '<span style="display:inline-block;width:0.3em"> </span>'
            : `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(60px)">${char}</span>`
    ).join('');
    return el.querySelectorAll('.hero-char');
}

const stats = [
    { value: 100, suffix: '+', label: 'Languages', accent: false },
    { value: 99.9, suffix: '%', label: 'Accuracy', accent: true },
    { value: null, display: '24/7', label: 'Global QA', accent: false },
    { value: 5000, prefix: '$', label: 'Min. Project', accent: false },
];

export default function Hero() {
    const containerRef = useRef(null);
    const orbRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Split heading chars and animate
            const h1 = containerRef.current.querySelector('.hero-heading');
            if (h1) {
                const chars = splitTextToChars(h1);
                gsap.to(chars, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.025,
                    ease: 'power3.out',
                    delay: 2.2,
                });
            }

            // Subtext + CTA reveal
            gsap.fromTo('.hero-anim',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 2.6 }
            );

            // Stat boxes stagger in from bottom
            gsap.fromTo('.hero-stat-box',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 3.0 }
            );

            // Right visual float
            gsap.to('.hero-visual', {
                y: -18,
                duration: 4.5,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
            });

            // Glass bars float
            gsap.to('.glass-bar', {
                y: -22,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: 0.35,
            });

            // Floating badge data nodes
            gsap.to('.data-node', {
                y: 'random(-15, 15)',
                x: 'random(-8, 8)',
                duration: 'random(3, 5)',
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: 0.3,
            });

            // Counter animations on visible
            const counters = containerRef.current.querySelectorAll('[data-count]');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target;
                            const target = parseFloat(el.dataset.count);
                            animateCounter(el, target);
                            observer.unobserve(el);
                        }
                    });
                },
                { threshold: 0.3 }
            );
            counters.forEach((el) => observer.observe(el));

            // Stat box lines reveal
            const lines = containerRef.current.querySelectorAll('.stat-line-el');
            const lineObs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('line-visible');
                        lineObs.unobserve(e.target);
                    }
                });
            }, { threshold: 0.5 });
            lines.forEach(l => lineObs.observe(l));

            // Scroll parallax
            gsap.to('.glass-bar-1', {
                y: -90,
                scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 }
            });
            gsap.to('.glass-bar-2', {
                y: -140,
                scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
            });
            gsap.to('.glass-bar-3', {
                y: -70,
                scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 2 }
            });
            gsap.to('.hero-left', {
                y: -60,
                scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
            });

        }, containerRef);

        // Mouse-reactive orb parallax
        const handleMouseMove = (e) => {
            if (!orbRef.current) return;
            const xTo = gsap.quickTo(orbRef.current, 'x', { duration: 1.2, ease: 'power3.out' });
            const yTo = gsap.quickTo(orbRef.current, 'y', { duration: 1.2, ease: 'power3.out' });
            xTo((e.clientX - window.innerWidth / 2) * 0.04);
            yTo((e.clientY - window.innerHeight / 2) * 0.04);
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            ctx.revert();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden" style={{ background: '#07090d' }}>

            {/* Background */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,229,195,0.05) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

            {/* Ambient orbs */}
            <div ref={orbRef} className="orb-float absolute top-[-20%] right-[5%] w-[600px] h-[600px] rounded-full bg-accent opacity-[0.05] blur-[180px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[140px] pointer-events-none z-0" style={{ background: '#0094ff' }} />

            {/* Main content */}
            <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-28 pb-10 flex-1">

                {/* LEFT — Typography */}
                <div className="hero-left flex flex-col items-start gap-7">
                    <div className="hero-anim" style={{ opacity: 0 }}>
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.04] backdrop-blur-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_6px_#00e5c3]" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent/80 font-medium">Global Localization Engine</span>
                        </div>
                    </div>

                    <h1
                        className="hero-heading font-sans font-black text-[3.2rem] md:text-[4.2rem] lg:text-[5rem] leading-[0.95] tracking-[-0.03em] text-white"
                        style={{ minHeight: '1em' }}
                    >
                        Welonix unites best localization instruments
                    </h1>

                    <p className="hero-anim font-sans font-light text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: '#8892a4', opacity: 0 }}>
                        for generating <span className="text-white font-medium gradient-text">global reach & profit</span>
                    </p>

                    <div className="hero-anim flex flex-col sm:flex-row items-start gap-3 mt-2" style={{ opacity: 0 }}>
                        <Link to="/contact">
                            <button className="btn-shimmer group flex items-center gap-3 px-7 py-3.5 rounded-xl font-sans font-semibold text-sm text-[#07090d] transition-all duration-300 hover:shadow-glow-md hover:scale-[1.03]" style={{ background: 'linear-gradient(135deg, #00e5c3 0%, #0094ff 100%)' }}>
                                Join Platform
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </Link>
                        <Link to="/services">
                            <button className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/70 font-sans font-medium text-sm hover:bg-white/[0.06] hover:border-accent/30 hover:text-white transition-all duration-300">
                                Explore Services
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT — Glass Visual */}
                <div className="hero-visual relative h-[520px] w-full hidden lg:flex items-center justify-center">

                    {/* Glass Bars */}
                    <div className="glass-bar glass-bar-1 absolute left-[12%] top-[8%] w-[56px] h-[400px] rounded-lg bg-gradient-to-b from-[#1e2330] to-[#0a0b0f] border-l border-t border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.7)] rotate-[14deg]" />
                    <div className="glass-bar glass-bar-2 absolute left-[36%] top-[-3%] w-[70px] h-[480px] rounded-lg bg-gradient-to-b from-[#242838] via-[#141820] to-[#07090d] border-l border-t border-white/[0.09] shadow-[0_30px_80px_rgba(0,0,0,0.8)] rotate-[14deg] z-10" />
                    <div className="glass-bar glass-bar-3 absolute right-[20%] top-[14%] w-[46px] h-[360px] rounded-lg bg-gradient-to-b from-[#111520] to-[#000000] border-l border-white/[0.04] shadow-[0_15px_50px_rgba(0,0,0,0.6)] rotate-[14deg]" />

                    {/* Teal glow behind bars */}
                    <div className="absolute left-[35%] top-[20%] w-[180px] h-[300px] rotate-[14deg] rounded-lg pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,229,195,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

                    {/* Floating stat badges */}
                    <div className="data-node absolute top-[6%] left-[-2%] z-20 bg-[#0c1018]/90 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/[0.07] shadow-card">
                        <div className="font-sans font-black text-2xl text-white tracking-tight leading-none"><span data-count="100">0</span>+</div>
                        <div className="font-sans text-[9px] uppercase tracking-widest mt-1" style={{ color: '#8892a4' }}>Languages</div>
                    </div>

                    <div className="data-node absolute top-[38%] left-[58%] z-30 bg-[#0c1018]/90 backdrop-blur-xl px-5 py-3.5 rounded-2xl border-accent/20 border shadow-card">
                        <div className="font-sans text-[9px] uppercase tracking-widest text-accent mb-1">Accuracy</div>
                        <div className="font-sans font-black text-3xl text-white tracking-tight leading-none"><span data-count="99.9">0</span>%</div>
                    </div>

                    <div className="data-node absolute bottom-[20%] right-[2%] z-20 bg-[#0c1018]/90 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/[0.07] shadow-card">
                        <div className="font-sans font-black text-xl text-white tracking-tight leading-none">24/7</div>
                        <div className="font-sans text-[9px] uppercase tracking-widest mt-1" style={{ color: '#8892a4' }}>Global QA</div>
                    </div>

                    <div className="data-node absolute bottom-[38%] left-[5%] z-20 bg-[#0c1018]/90 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/[0.07] shadow-card">
                        <div className="font-sans font-black text-xl text-white tracking-tight leading-none">$<span data-count="5000">0</span></div>
                        <div className="font-sans text-[9px] uppercase tracking-widest mt-1" style={{ color: '#8892a4' }}>Min. Project</div>
                    </div>

                    {/* Glowing accent dots */}
                    <div className="data-node absolute top-[28%] right-[38%] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_14px_#00e5c3] z-20" />
                    <div className="data-node absolute bottom-[28%] left-[44%] w-2 h-2 rounded-full bg-accent/70 shadow-[0_0_10px_#00e5c3] z-20" />
                    <div className="data-node absolute top-[60%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_8px_#0094ff] z-20" />
                </div>
            </div>

            {/* Bottom stat grid — F11CLUB style */}
            <div className="w-full border-t z-10 px-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x" style={{ divideColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                        { num: '100', suffix: '+', label: 'Languages Supported', dataCount: 100 },
                        { num: '99.9', suffix: '%', label: 'Delivery Accuracy', dataCount: 99.9, accent: true },
                        { num: '10', suffix: '+', label: 'Years Experience', dataCount: 10 },
                        { num: '5000', prefix: '$', label: 'Minimum Engagement', dataCount: 5000 },
                    ].map((s, i) => (
                        <div key={i} className={`hero-stat-box flex flex-col items-center justify-center py-7 px-4 gap-1.5 ${i < 3 ? 'border-r' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.05)', opacity: 0 }}>
                            <div className={`font-sans font-black text-3xl md:text-4xl tracking-tight leading-none ${s.accent ? 'text-accent stat-glow' : 'text-white'}`}>
                                {s.prefix || ''}
                                <span data-count={s.dataCount}>{s.num}</span>
                                {s.suffix || ''}
                            </div>
                            <span className="stat-line stat-line-el" />
                            <div className="font-sans text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: '#8892a4' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
