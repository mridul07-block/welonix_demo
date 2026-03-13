import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const languages = ['Spanish', 'Mandarin', 'French', 'German', 'Japanese', 'Arabic', 'Hindi', 'Portuguese', 'Korean', 'Italian', 'Russian', 'Dutch'];

export default function LanguageCoverage() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Central orb scale in
            gsap.fromTo('.lang-orb',
                { scale: 0.3, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
                }
            );
            // Text reveal
            gsap.fromTo('.lang-text',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            // Language pills float in from random positions
            gsap.fromTo('.lang-pill',
                { y: 60, x: (i) => (i % 2 === 0 ? -40 : 40), opacity: 0, scale: 0.8 },
                {
                    y: 0, x: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'back.out(1.5)',
                    scrollTrigger: { trigger: '.lang-pills-container', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 relative overflow-hidden bg-[#020204]">
            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%"><defs><pattern id="langGrid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#langGrid)" /></svg>
            </div>

            {/* Central glow orb */}
            <div className="lang-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent/[0.06] rounded-full blur-[80px] pointer-events-none z-0" />

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">

                <div className="lang-orb inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8 border border-accent/25 shadow-[0_0_40px_rgba(20,184,166,0.15)] relative">
                    <div className="w-3 h-3 rounded-full bg-accent animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-accent relative z-10" />
                </div>

                <h2 className="lang-text font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                    Supporting global communication <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">across 100+ languages.</span>
                </h2>

                <p className="lang-text font-sans text-[#64748B] max-w-xl mx-auto text-base mb-14 leading-relaxed">
                    From major global markets to emerging regional dialects, our infrastructure delivers culturally precise adaptations everywhere.
                </p>

                {/* Language Pills */}
                <div className="lang-pills-container relative w-full max-w-3xl flex flex-wrap justify-center gap-3">
                    {languages.map((lang, i) => (
                        <div key={i} className="lang-pill bg-[#0b0d12] px-5 py-2.5 rounded-full flex items-center gap-2.5 border border-white/[0.05] hover:border-accent/30 hover:bg-white/[0.03] transition-all cursor-default group">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/60 shadow-[0_0_4px_#14b8a6] group-hover:bg-accent group-hover:shadow-[0_0_10px_#14b8a6] transition-all" />
                            <span className="font-sans text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors">{lang}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
