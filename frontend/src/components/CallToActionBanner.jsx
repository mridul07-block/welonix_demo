import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const perks = [
    'Full access to AI translation tools',
    'Dedicated project manager',
    'Native linguist team assigned',
    'Live quality dashboard',
    'SLA-backed accuracy guarantee',
    'Money-back if deadlines are missed',
];

export default function CallToActionBanner() {
    const sectionRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Left heading character reveal
            gsap.fromTo('.cta-heading',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            // Right perks stagger
            gsap.fromTo('.perk-item',
                { x: 40, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.09, ease: 'power3.out',
                    scrollTrigger: { trigger: '.perk-list', start: 'top 85%' }
                }
            );

            // Check icons scale in
            gsap.fromTo('.perk-check',
                { scale: 0 },
                {
                    scale: 1, duration: 0.4, stagger: 0.09, ease: 'back.out(2)',
                    scrollTrigger: { trigger: '.perk-list', start: 'top 85%' }
                }
            );

        }, sectionRef);

        // Magnetic button
        const btn = btnRef.current;
        if (btn) {
            const handleMove = (e) => {
                const rect = btn.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
            };
            const handleLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
            btn.addEventListener('mousemove', handleMove);
            btn.addEventListener('mouseleave', handleLeave);
            return () => {
                ctx.revert();
                btn.removeEventListener('mousemove', handleMove);
                btn.removeEventListener('mouseleave', handleLeave);
            };
        }

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-28 px-8 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: '#0a0d14' }}>

            {/* Animated gradient background */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(0,229,195,0.05) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(0,148,255,0.04) 0%, transparent 60%)' }} />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div className="cta-heading flex flex-col gap-7">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Limited Offer</span>
                        </div>
                        <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
                            Join Welonix platform<br />
                            <span className="gradient-text">free for 30 days</span>
                        </h2>
                    </div>
                    <p className="font-sans text-base leading-relaxed" style={{ color: '#8892a4' }}>
                        We evaluate your content volume, requirements, and goals — then build a custom localization strategy at zero upfront cost.
                    </p>
                    <Link to="/contact">
                        <button
                            ref={btnRef}
                            className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-sans font-bold text-sm text-[#07090d] transition-all duration-300 hover:shadow-glow-md"
                            style={{ background: 'linear-gradient(135deg, #00e5c3 0%, #0094ff 100%)' }}
                        >
                            Join Platform
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </Link>
                </div>

                {/* RIGHT — perk list */}
                <div className="perk-list grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {perks.map((perk, i) => (
                        <div key={i} className="perk-item flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="perk-check w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(0,229,195,0.15)', border: '1px solid rgba(0,229,195,0.3)' }}>
                                <Check className="w-3.5 h-3.5 text-accent" />
                            </div>
                            <span className="font-sans text-sm text-white">{perk}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
