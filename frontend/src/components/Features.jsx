import React, { useEffect, useRef } from 'react';
import { Globe2, Users, Cpu, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: <Globe2 className="w-5 h-5" style={{ color: '#00e5c3' }} />,
        title: 'Experience & Global Depth',
        desc: 'We provide 10+ years of localization expertise across every major global market. You get access to a proven system that has delivered millions of words with zero compromise on quality.',
    },
    {
        icon: <Cpu className="w-5 h-5" style={{ color: '#00e5c3' }} />,
        title: 'AI-Powered Speed',
        desc: 'You can trust that we work only with proven AI-assisted pipelines and human review layers. Our proprietary tech accelerates delivery by up to 60% without sacrificing linguistic accuracy.',
    },
    {
        icon: <Award className="w-5 h-5" style={{ color: '#00e5c3' }} />,
        title: 'Security & Compliance',
        desc: 'Your content is protected at every stage through our NDA-backed workflows and encrypted delivery infrastructure. We meet enterprise-grade data compliance standards globally.',
    },
    {
        icon: <Users className="w-5 h-5" style={{ color: '#00e5c3' }} />,
        title: 'Honesty & Transparency',
        desc: 'We openly share our process, pricing, and timelines — no hidden fees, no surprises. We help you learn from successful projects and avoid costly localization mistakes.',
    },
];

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo('.feat-heading-block',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            gsap.fromTo('.value-row',
                { x: -80, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.75, stagger: 0.18, ease: 'power3.out',
                    scrollTrigger: { trigger: '.value-list', start: 'top 85%' }
                }
            );

            gsap.fromTo('.value-dot',
                { scale: 0, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.5, stagger: 0.18, ease: 'back.out(2)',
                    scrollTrigger: { trigger: '.value-list', start: 'top 85%' }
                }
            );

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-28 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="max-w-7xl mx-auto">

                <div className="feat-heading-block mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Core Values</span>
                    </div>
                    <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight max-w-xl">
                        The most important value —{' '}
                        <span className="gradient-text">our expertise</span>
                    </h2>
                </div>

                <div className="value-list flex flex-col">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="value-row group relative flex flex-col md:flex-row items-start md:items-center gap-6 py-8 px-6 rounded-2xl cursor-default transition-all duration-300"
                            style={{ borderBottom: i < values.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                            onMouseEnter={e => {
                                gsap.to(e.currentTarget, { backgroundColor: 'rgba(0,229,195,0.025)', duration: 0.3 });
                            }}
                            onMouseLeave={e => {
                                gsap.to(e.currentTarget, { backgroundColor: 'transparent', duration: 0.3 });
                            }}
                        >
                            <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex items-center gap-5 md:w-1/2">
                                <div className="value-dot w-10 h-10 rounded-xl flex items-center justify-center shrink-0 dot-ripple" style={{ background: 'rgba(0,229,195,0.07)', border: '1px solid rgba(0,229,195,0.2)' }}>
                                    {v.icon}
                                </div>
                                <h3 className="font-sans font-bold text-xl text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                                    {v.title}
                                </h3>
                            </div>

                            <p className="font-sans text-sm leading-relaxed md:w-1/2" style={{ color: '#8892a4' }}>
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
