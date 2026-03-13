import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Video, Captions, Mic, Headphones, FileText, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { id: 'video-localization', icon: <Video className="w-6 h-6" />, title: 'Video Localization', desc: 'Full-cycle video adaptation for global audiences with cultural accuracy.' },
    { id: 'subtitle-translation', icon: <Captions className="w-6 h-6" />, title: 'Subtitle Translation', desc: 'Precision-timed subtitles in 100+ languages for any platform format.' },
    { id: 'voice-over', icon: <Mic className="w-6 h-6" />, title: 'Voice Over', desc: 'Professional native-speaker voice recordings matched to your brand tone.' },
    { id: 'dubbing', icon: <Headphones className="w-6 h-6" />, title: 'Dubbing', desc: 'Studio-quality dubbing with lip-sync accuracy and emotional resonance.' },
    { id: 'video-transcription', icon: <FileText className="w-6 h-6" />, title: 'Video Transcription', desc: 'Accurate transcription with timestamps, speaker labels, and SRT/VTT export.' },
    { id: 'content-localization', icon: <Globe className="w-6 h-6" />, title: 'Content Localization', desc: 'End-to-end content transformation adapted for local culture and market.' },
];

export default function ServicesGrid() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading wipe reveal
            gsap.fromTo('.sg-heading',
                { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
                {
                    clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            // Cards stagger reveal
            gsap.fromTo('.service-card',
                { y: 70, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.services-grid', start: 'top 85%' }
                }
            );

        }, sectionRef);

        // 3D tilt on mousemove for each card
        const handleMouseMove = (e, card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            gsap.to(card, { rotateX, rotateY, duration: 0.3, ease: 'power2.out', transformPerspective: 800 });
        };

        const handleMouseLeave = (card) => {
            gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power3.out' });
        };

        cardRefs.current.forEach(card => {
            if (!card) return;
            card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => handleMouseLeave(card));
        });

        return () => {
            ctx.revert();
            cardRefs.current.forEach(card => {
                if (!card) return;
                card.replaceWith(card.cloneNode(true));
            });
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-28 px-8 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,229,195,0.03) 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Services</span>
                    </div>
                    <div className="sg-heading">
                        <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
                            We created an ecosystem<br />
                            <span className="gradient-text">of services</span>
                        </h2>
                    </div>
                    <p className="font-sans text-base mt-4 max-w-lg" style={{ color: '#8892a4' }}>
                        for fast and reliable global content delivery
                    </p>
                </div>

                {/* Grid */}
                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((svc, i) => (
                        <Link to={`/services/${svc.id}`} key={svc.id}>
                            <div
                                ref={el => cardRefs.current[i] = el}
                                className="service-card card-3d animated-border card-shimmer card-glow group relative flex flex-col gap-5 p-7 rounded-2xl cursor-pointer transition-all duration-300"
                                style={{ background: 'linear-gradient(135deg, #0e1520 0%, #0c1018 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                {/* Top row — icon + arrow */}
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-glow-sm" style={{ background: 'rgba(0,229,195,0.07)', border: '1px solid rgba(0,229,195,0.15)', color: '#00e5c3' }}>
                                        {svc.icon}
                                    </div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent/10" style={{ border: '1px solid rgba(0,229,195,0.2)' }}>
                                        <svg className="w-4 h-4 text-accent -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="font-sans font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#8892a4' }}>
                                        {svc.desc}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="w-0 group-hover:w-full h-[1px] transition-all duration-500 rounded-full mt-auto" style={{ background: 'linear-gradient(90deg, #00e5c3, #0094ff)' }} />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
