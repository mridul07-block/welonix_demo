import React, { useEffect, useRef } from 'react';
import { Globe2, Users, Clock, Cpu, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
    { icon: <Globe2 className="w-5 h-5 text-accent" />, title: "100+ Languages Supported", desc: "Comprehensive linguistic coverage for every major global market and dialect." },
    { icon: <Users className="w-5 h-5 text-accent" />, title: "Professional Linguists", desc: "Native-speaking experts ensuring cultural nuance and deep contextual accuracy." },
    { icon: <Clock className="w-5 h-5 text-accent" />, title: "Fast Turnaround Time", desc: "Optimized workflows ensuring rapid deployment without compromising quality." },
    { icon: <Cpu className="w-5 h-5 text-accent" />, title: "AI-assisted Localization", desc: "Proprietary machine learning tools accelerating the initial translation framework." },
    { icon: <Award className="w-5 h-5 text-accent" />, title: "Enterprise-grade Quality", desc: "Strict SLA-backed QA processes trusted by leading global corporations." }
];

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left heading parallax
            gsap.fromTo('.feat-heading',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            // Cards slide from right
            gsap.fromTo('.feat-card',
                { x: 80, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.feat-list', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                <div className="feat-heading w-full lg:w-1/3 lg:sticky lg:top-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/15 bg-accent/[0.03] mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-medium">Competitive Edge</span>
                    </div>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight mb-5">
                        Why choose<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Welonix?</span>
                    </h2>
                    <p className="font-sans text-[#64748B] leading-relaxed">
                        We bridge the gap between human expertise and automated velocity, delivering unparalleled localization standards.
                    </p>
                </div>

                <div className="feat-list w-full lg:w-2/3 flex flex-col gap-4">
                    {advantages.map((adv, i) => (
                        <div key={i} className="feat-card group bg-[#0b0d12] p-7 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-5 border border-white/[0.04] hover:border-accent/25 hover:bg-[#0f1118] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,229,195,0.08)] transition-all duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)', borderLeft: undefined }} onMouseEnter={e => e.currentTarget.style.borderLeft = '3px solid rgba(0,229,195,0.7)'} onMouseLeave={e => e.currentTarget.style.borderLeft = ''}>
                            <div className="w-12 h-12 rounded-xl bg-accent/[0.06] border border-accent/15 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(0,229,195,0.08)] group-hover:shadow-[0_0_20px_rgba(0,229,195,0.25)] transition-all">
                                {adv.icon}
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-accent transition-colors duration-300">{adv.title}</h3>
                                <p className="font-sans text-sm text-[#64748B] leading-relaxed">{adv.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
