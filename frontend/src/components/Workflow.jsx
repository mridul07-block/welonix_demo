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
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );

            // Icons 3D flip on entry
            gsap.fromTo('.wf-icon',
                { rotateY: 180, opacity: 0 },
                {
                    rotateY: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: '.wf-steps', start: 'top 82%' }
                }
            );

            // Step content slides up after icon
            gsap.fromTo('.wf-content',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.2, delay: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: '.wf-steps', start: 'top 82%' }
                }
            );

            // SVG line draws itself
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
        <section ref={sectionRef} className="w-full py-28 px-8 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: '#0a0d14' }}>

            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,148,255,0.03) 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto">

                <div className="wf-heading flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>How It Works</span>
                        </div>
                        <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-tight tracking-tight">
                            Streamlined <span className="gradient-text">Process</span>
                        </h2>
                    </div>
                    <p className="font-sans text-sm leading-relaxed max-w-md" style={{ color: '#8892a4' }}>
                        Our localization methodology is built for speed and precision, ensuring your content reaches global markets flawlessly.
                    </p>
                </div>

                <div className="wf-steps grid grid-cols-1 md:grid-cols-4 gap-0 relative">
                    {/* SVG Connecting Line */}
                    <svg className="hidden md:block absolute top-[32px] left-[7%] h-[2px] z-0 overflow-visible" style={{ width: '86%' }}>
                        <line x1="0" y1="1" x2="100%" y2="1" className="wf-line"
                            stroke="url(#lineGrad)" strokeWidth="1.5"
                            strokeDasharray="600" strokeDashoffset="600" />
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00e5c3" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#0094ff" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-5 group p-4">

                            {/* Icon with 3D flip */}
                            <div className="wf-icon w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-glow-sm" style={{ background: 'rgba(0,229,195,0.07)', border: '1px solid rgba(0,229,195,0.15)', color: '#00e5c3', transformStyle: 'preserve-3d' }}>
                                {step.icon}
                                {/* Pulsing ring on hover */}
                                <div className="absolute inset-0 rounded-2xl border border-accent opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                            </div>

                            <div className="wf-content flex flex-col gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: 'rgba(0,229,195,0.5)' }}>Step {step.num}</span>
                                <h3 className="font-sans font-bold text-lg text-white group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                                <p className="font-sans text-sm leading-relaxed" style={{ color: '#8892a4' }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
