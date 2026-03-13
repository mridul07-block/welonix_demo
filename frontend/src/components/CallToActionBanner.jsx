import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToActionBanner() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-banner',
                { scale: 0.92, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-12 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="cta-banner relative w-full rounded-3xl overflow-hidden py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-[#062e2b] via-[#041f1d] to-[#030a0a] border border-accent/15 shadow-[0_0_60px_rgba(20,184,166,0.08)]">

                    <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[200%] bg-accent/8 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-4">
                        <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight">
                            Expand Your Content <br />
                            <span className="text-accent/80">Globally with Welonix.</span>
                        </h2>
                        <div className="flex flex-col gap-2 mt-4 pl-4 border-l-2 border-accent/25">
                            <p className="font-sans text-xs text-[#94A3B8]">Personalized localization roadmap for your targets</p>
                            <p className="font-sans text-xs text-[#94A3B8]">Portfolio execution with minimal risk</p>
                            <p className="font-sans text-xs text-[#94A3B8]">Real-time tracking of global market trends</p>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <Link to="/contact">
                            <button className="btn-shimmer group w-full md:w-auto px-8 py-4 rounded-xl bg-accent text-[#080c10] font-sans font-bold text-sm hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,229,195,0.45)] transition-all duration-300 shadow-[0_0_25px_rgba(0,229,195,0.25)] flex items-center gap-3 justify-center">
                                Start Your Project
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
