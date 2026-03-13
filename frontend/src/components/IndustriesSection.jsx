import React, { useEffect, useRef } from 'react';
import { Film, GraduationCap, Building2, Megaphone, Laptop, Activity } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    { icon: <Film className="w-6 h-6" />, name: "Media & Entertainment" },
    { icon: <GraduationCap className="w-6 h-6" />, name: "E-learning" },
    { icon: <Building2 className="w-6 h-6" />, name: "Corporate Training" },
    { icon: <Megaphone className="w-6 h-6" />, name: "Marketing" },
    { icon: <Laptop className="w-6 h-6" />, name: "Technology & SaaS" },
    { icon: <Activity className="w-6 h-6" />, name: "Healthcare" }
];

export default function IndustriesSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ind-heading',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            gsap.fromTo('.ind-card',
                { scale: 0.85, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: '.ind-grid', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 relative border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto">
                <div className="ind-heading text-center mb-16">
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent/60 font-medium mb-4">Industries</p>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight mb-5">
                        Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#64748B]">Global Industries</span>
                    </h2>
                    <p className="font-sans text-[#64748B] max-w-lg mx-auto">
                        Specialized localization frameworks built for the unique demands of every sector.
                    </p>
                </div>

                <div className="ind-grid grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {industries.map((ind, i) => (
                        <div key={i} className="ind-card group bg-[#0b0d12] flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-white/[0.04] hover:border-accent/25 hover:bg-[#0f1118] transition-all duration-300">
                            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-[#64748B] group-hover:text-accent group-hover:border-accent/30 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all duration-500 mb-5">
                                {ind.icon}
                            </div>
                            <h3 className="font-sans font-medium text-white text-sm tracking-wide">
                                {ind.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
