import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: "Elena Rostova",
        role: "CEO & Co-founder",
        subrole: "Director of Global Operations",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    },
    {
        name: "Marcus Chen",
        role: "CTO & Co-founder",
        subrole: "Head of AI Localization",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
    },
    {
        name: "Sarah Jenkins",
        role: "Head Linguist",
        subrole: "Lead Quality Assurance",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
    }
];

export default function TeamSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.team-heading',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            gsap.fromTo('.team-card',
                { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', opacity: 0 },
                {
                    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: '.team-grid', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleCardHover = (cardEl, entering) => {
        gsap.to(cardEl, { scale: entering ? 1.015 : 1, duration: 0.4, ease: 'power2.out' });
    };

    return (
        <section ref={sectionRef} className="w-full py-24 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="max-w-7xl mx-auto">

                <div className="team-heading mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-5" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>The Team</span>
                    </div>
                    <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-tight tracking-tight">
                        Our <span className="gradient-text">Expert Team</span>
                    </h2>
                    <p className="font-sans text-base mt-3 max-w-lg" style={{ color: '#8892a4' }}>
                        Seasoned professionals combining linguistic mastery with cutting-edge technology.
                    </p>
                </div>

                <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="team-card group relative rounded-3xl overflow-hidden aspect-[4/5] animated-border card-shimmer"
                            style={{ background: '#0c1018', border: '1px solid rgba(255,255,255,0.06)' }}
                            onMouseEnter={e => handleCardHover(e.currentTarget, true)}
                            onMouseLeave={e => handleCardHover(e.currentTarget, false)}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                            />

                            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #07090d 0%, rgba(7,9,13,0.55) 40%, transparent 100%)' }} />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 mix-blend-screen" style={{ background: '#00e5c3' }} />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-sans font-black text-2xl tracking-tight text-white leading-tight">
                                            {member.name.split(' ')[0]}<br />{member.name.split(' ')[1]}
                                        </h3>
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,229,195,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 dot-ripple" />
                                    </div>
                                    <p className="font-sans text-xs uppercase tracking-widest mt-4 mb-1" style={{ color: '#9CA3AF' }}>
                                        {member.role}
                                    </p>
                                    <p className="font-sans text-[10px] group-hover:text-accent transition-colors duration-300" style={{ color: '#4B5563' }}>
                                        {member.subrole}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium" style={{ background: 'rgba(0,229,195,0.15)', border: '1px solid rgba(0,229,195,0.3)', color: '#00e5c3' }}>
                                    <div className="w-1 h-1 rounded-full bg-accent" />
                                    Verified
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
