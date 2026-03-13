import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Video, Captions, Mic, Headphones, FileText, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { id: 'video-localization', icon: <Video className="w-5 h-5" />, title: "Video Localization", desc: "End-to-end adaptation of visual and structural elements for international markets." },
    { id: 'subtitle-translation', icon: <Captions className="w-5 h-5" />, title: "Subtitle Translation", desc: "Frame-accurate, culturally nuanced subtitling across 100+ language pairs." },
    { id: 'voice-over-localization', icon: <Mic className="w-5 h-5" />, title: "Voice Over", desc: "Studio-quality professional voice talent matching your brand's global tone." },
    { id: 'dubbing-services', icon: <Headphones className="w-5 h-5" />, title: "Dubbing", desc: "Lip-sync and dialogue replacement ensuring native-feel viewing experiences." },
    { id: 'video-transcription', icon: <FileText className="w-5 h-5" />, title: "Video Transcription", desc: "Highly accurate AI-assisted and human-verified transcription protocols." },
    { id: 'content-localization', icon: <Globe className="w-5 h-5" />, title: "Content Localization", desc: "Full-scale strategic adaptation of media assets for regional compliance." }
];

export default function ServicesGrid() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading slide in
            gsap.fromTo('.svc-heading',
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            // Cards staggered slide up
            gsap.fromTo('.svc-card',
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.svc-grid', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="svc-heading text-center mb-20 max-w-2xl">
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent/60 font-medium mb-4">What We Do</p>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight mb-5">
                        Specialized in Multilingual<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-[#64748B]">Media Solutions</span>
                    </h2>
                    <p className="font-sans text-[#64748B] text-base leading-relaxed">
                        Welonix empowers organizations to deliver culturally adapted content, maintaining clarity and audience engagement worldwide.
                    </p>
                </div>

                <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {services.map((service, i) => (
                        <Link key={i} to={`/services/${service.id}`} className="svc-card group relative bg-[#0b0d12] p-7 rounded-2xl hover:bg-[#0f1118] transition-all duration-500 border border-white/[0.04] hover:border-accent/25 overflow-hidden">
                            {/* Hover Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[80px] bg-accent/15 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 flex flex-col gap-5">
                                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_12px_rgba(20,184,166,0.15)] transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                                    {service.icon}
                                </div>

                                <div>
                                    <h3 className="font-sans font-semibold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-sm text-[#64748B] leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
