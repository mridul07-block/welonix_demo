import React, { useEffect, useRef } from 'react';
import { UploadCloud, Languages, ShieldCheck, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { num: "01", icon: <UploadCloud className="w-5 h-5" />, title: "Submit Content", desc: "Securely upload media assets via our encrypted enterprise portal." },
    { num: "02", icon: <Languages className="w-5 h-5" />, title: "Localization & Translation", desc: "AI-assisted translation combined with native expert human review." },
    { num: "03", icon: <ShieldCheck className="w-5 h-5" />, title: "Quality Assurance", desc: "Rigorous contextual testing, lip-sync verification, and cultural alignment." },
    { num: "04", icon: <Rocket className="w-5 h-5" />, title: "Final Delivery", desc: "Seamless deployment of localized assets directly into your pipeline." }
];

export default function Workflow() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading
            gsap.fromTo('.wf-heading',
                { x: -40, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            // Steps slide in from left sequentially
            gsap.fromTo('.wf-step',
                { x: -60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: '.wf-steps', start: 'top 80%' }
                }
            );
            // SVG connecting line draws itself
            gsap.fromTo('.wf-line',
                { strokeDashoffset: 600 },
                {
                    strokeDashoffset: 0, duration: 2, ease: 'power2.inOut',
                    scrollTrigger: { trigger: '.wf-steps', start: 'top 80%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 border-t border-white/[0.03] bg-[#030305]">
            <div className="max-w-7xl mx-auto">

                <div className="wf-heading flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
                    <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent/60 font-medium mb-4">How It Works</p>
                        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight">
                            Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Process</span>
                        </h2>
                    </div>
                    <p className="font-sans text-[#64748B] max-w-md text-sm leading-relaxed">
                        Our localization methodology is built for speed and precision, ensuring your content reaches global markets flawlessly.
                    </p>
                </div>

                <div className="wf-steps grid grid-cols-1 md:grid-cols-4 gap-0 relative">
                    {/* SVG Connecting Line (Desktop) */}
                    <svg className="hidden md:block absolute top-[28px] left-[7%] right-[7%] h-[2px] z-0 overflow-visible" style={{ width: '86%' }}>
                        <line x1="0" y1="1" x2="100%" y2="1" className="wf-line" stroke="rgba(20,184,166,0.25)" strokeWidth="2" strokeDasharray="600" strokeDashoffset="600" />
                    </svg>

                    {steps.map((step, i) => (
                        <div key={i} className="wf-step relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-5 group p-4">
                            <div className="w-14 h-14 rounded-full bg-[#0b0d12] border-2 border-white/[0.06] flex items-center justify-center text-accent shadow-[0_4px_25px_rgba(0,0,0,0.6)] group-hover:border-accent/40 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.25)] transition-all duration-500">
                                {step.icon}
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-[10px] text-accent/50 tracking-[0.2em] uppercase">Step {step.num}</span>
                                <h3 className="font-sans font-bold text-lg text-white">{step.title}</h3>
                                <p className="font-sans text-sm text-[#64748B] leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
