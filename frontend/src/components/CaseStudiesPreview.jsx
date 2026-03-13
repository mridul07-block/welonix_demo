import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function animateCounter(el, target, duration = 2) {
    const obj = { val: 0 };
    gsap.to(obj, {
        val: target,
        duration,
        ease: 'elastic.out(1, 0.6)',
        onUpdate: () => { el.textContent = '+' + Math.round(obj.val) + '%'; },
    });
}

const cases = [
    {
        client: 'GlobalStream Media',
        tag: 'Video Localization',
        challenge: '40+ language simultaneous launch for a streaming platform expanding to LATAM, APAC, and EMEA.',
        stat: 340,
        statLabel: 'audience growth',
        period: 'in 4 months',
        startDate: 'Project start — Jan 2024',
        deposit: 'Scope — $120,000',
        result: 'Result — +340% viewers',
    },
    {
        client: 'TechCorp Enterprise',
        tag: 'Content Localization',
        challenge: 'Enterprise SaaS documentation and onboarding content translated for 28 markets with strict legal compliance.',
        stat: 300,
        statLabel: 'global engagement',
        period: 'in 6 months',
        startDate: 'Project start — Mar 2024',
        deposit: 'Scope — $85,000',
        result: 'Result — +300% signups',
    },
];

export default function CaseStudiesPreview() {
    const sectionRef = useRef(null);
    const statRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo('.cs-heading',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            // Alternating x-direction reveal
            gsap.fromTo('.case-card:nth-child(odd)',
                { x: -80, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.cases-grid', start: 'top 85%' }
                }
            );
            gsap.fromTo('.case-card:nth-child(even)',
                { x: 80, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.cases-grid', start: 'top 85%' }
                }
            );

            // Stat number elastic scale-in
            gsap.fromTo('.case-stat-num',
                { scale: 0.3, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.9, stagger: 0.2,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: { trigger: '.cases-grid', start: 'top 80%' }
                }
            );

        }, sectionRef);

        // Counter animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.countCase);
                    if (target) animateCounter(el, target);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        sectionRef.current?.querySelectorAll('[data-count-case]').forEach(el => observer.observe(el));

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-28 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="cs-heading mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Client Results</span>
                    </div>
                    <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-tight tracking-tight">
                        Cases of our <span className="gradient-text">platform clients</span>
                    </h2>
                </div>

                {/* Cases grid */}
                <div className="cases-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {cases.map((c, i) => (
                        <div
                            key={i}
                            className="case-card card-shimmer animated-border group relative flex flex-col gap-6 p-8 rounded-3xl overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #0e1520 0%, #0c1018 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-sans font-bold text-lg text-white">{c.client}</p>
                                    <span className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest" style={{ background: 'rgba(0,229,195,0.1)', color: '#00e5c3', border: '1px solid rgba(0,229,195,0.2)' }}>
                                        {c.tag}
                                    </span>
                                </div>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ border: '1px solid rgba(0,229,195,0.3)', background: 'rgba(0,229,195,0.08)' }}>
                                    <svg className="w-4 h-4 -rotate-45" style={{ color: '#00e5c3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Challenge text */}
                            <p className="font-sans text-sm leading-relaxed" style={{ color: '#8892a4' }}>{c.challenge}</p>

                            {/* Big stat — F11CLUB "+30%" style */}
                            <div className="flex flex-col items-start">
                                <div
                                    ref={el => statRefs.current[i] = el}
                                    className="case-stat-num font-sans font-black text-6xl md:text-7xl leading-none tracking-tight gradient-text stat-glow"
                                    data-count-case={c.stat}
                                >
                                    +{c.stat}%
                                </div>
                                <p className="font-sans text-sm mt-2" style={{ color: '#8892a4' }}>
                                    {c.statLabel}<br />
                                    <span className="text-white font-medium">{c.period}</span>
                                </p>
                            </div>

                            {/* Meta row */}
                            <div className="grid grid-cols-3 gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                {[c.startDate, c.deposit, c.result].map((m, j) => (
                                    <div key={j} className="flex flex-col gap-0.5">
                                        <p className="font-sans text-[10px] leading-relaxed" style={{ color: '#64748B' }}>{m.split(' — ')[0]}</p>
                                        <p className="font-sans text-xs font-medium text-white">{m.split(' — ')[1]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Link to="/case-studies">
                        <button className="btn-shimmer group flex items-center gap-3 px-7 py-3.5 rounded-xl border font-sans font-medium text-sm text-white hover:border-accent/40 hover:text-accent transition-all duration-300" style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                            View All Case Studies
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
