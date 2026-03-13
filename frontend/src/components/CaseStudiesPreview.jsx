import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
    {
        client: "Global Streaming Platform",
        metric: "40+",
        metricLabel: "Languages Delivered",
        desc: "Complete VO and subtitle localization for a flagship series launch in 40+ regions simultaneously."
    },
    {
        client: "Enterprise SaaS Provider",
        metric: "300%",
        metricLabel: "Increase in Global Engagement",
        desc: "Localized software training modules accelerating international user onboarding."
    }
];

export default function CaseStudiesPreview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cs-heading',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            // Cards slide up with slight rotation
            gsap.fromTo('.cs-card',
                { y: 80, opacity: 0, rotationX: 8 },
                {
                    y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.cs-grid', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 relative bg-[#020204]">
            <div className="max-w-7xl mx-auto">
                <div className="cs-heading flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent/60 font-medium mb-4">Results</p>
                        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight">
                            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#64748B]">Deployments</span>
                        </h2>
                    </div>
                    <Link to="/case-studies" className="group flex items-center gap-2 text-accent font-sans font-medium text-sm hover:text-white transition-colors">
                        View all cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="cs-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cases.map((cs, i) => (
                        <div key={i} className="cs-card group relative bg-[#0b0d12] p-10 rounded-2xl border border-white/[0.04] hover:border-accent/20 hover:bg-[#0f1118] transition-all duration-300 overflow-hidden" style={{ perspective: '800px' }}>
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-accent/10 to-transparent blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 flex flex-col gap-6">
                                <h3 className="font-sans font-semibold text-lg text-white">{cs.client}</h3>
                                <div>
                                    <span className="font-sans font-black text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/30 tracking-tighter">{cs.metric}</span>
                                    <span className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#64748B] mt-2">{cs.metricLabel}</span>
                                </div>
                                <p className="font-sans text-sm text-[#64748B] leading-relaxed border-t border-white/[0.04] pt-5">{cs.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
