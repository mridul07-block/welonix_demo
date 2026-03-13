import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, User, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
    { icon: <FileText className="w-5 h-5 text-accent" />, text: 'Custom localization plan built for your project' },
    { icon: <User className="w-5 h-5 text-accent" />, text: 'A dedicated project manager assigned to your account' },
    { icon: <BarChart3 className="w-5 h-5 text-accent" />, text: 'ROI projection, cost estimate & realistic timeline' },
];

export default function BookingCTA() {
    const sectionRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Background gradient sweep
            gsap.fromTo('.booking-bg',
                { backgroundPosition: '-200% 0' },
                {
                    backgroundPosition: '200% 0', duration: 6, ease: 'none', repeat: -1,
                }
            );

            // Heading word-by-word reveal
            gsap.fromTo('.booking-heading',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            // List items slide in
            gsap.fromTo('.booking-item',
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.booking-list', start: 'top 85%' }
                }
            );

        }, sectionRef);

        // Magnetic button
        const btn = btnRef.current;
        if (btn) {
            const handleMove = (e) => {
                const rect = btn.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
                gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
            };
            const handleLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
            btn.addEventListener('mousemove', handleMove);
            btn.addEventListener('mouseleave', handleLeave);
            return () => {
                ctx.revert();
                btn.removeEventListener('mousemove', handleMove);
                btn.removeEventListener('mouseleave', handleLeave);
            };
        }

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full px-8 py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative overflow-hidden rounded-3xl p-10 md:p-14"
                    style={{ background: 'linear-gradient(135deg, #0d1520 0%, #0c1318 50%, #0d1420 100%)', border: '1px solid rgba(0,229,195,0.1)' }}
                >
                    {/* Animated background glow */}
                    <div className="booking-bg absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0,229,195,0.04) 0%, transparent 40%, rgba(0,148,255,0.04) 60%, transparent 100%)', backgroundSize: '300% 100%' }} />

                    {/* Top-right corner decorative circle */}
                    <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,195,0.08) 0%, transparent 70%)' }} />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left — heading + list */}
                        <div>
                            <div className="booking-heading mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-5" style={{ borderColor: 'rgba(0,229,195,0.2)', background: 'rgba(0,229,195,0.04)' }}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-accent/70">Free Consultation</span>
                                </div>
                                <h2 className="font-sans font-black text-3xl md:text-4xl text-white leading-tight tracking-tight">
                                    We invite you to a personal<br />
                                    consultation where you will<br />
                                    <span className="gradient-text">receive:</span>
                                </h2>
                            </div>

                            <div className="booking-list flex flex-col gap-4">
                                {items.map((item, i) => (
                                    <div key={i} className="booking-item flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,229,195,0.08)', border: '1px solid rgba(0,229,195,0.2)' }}>
                                            {item.icon}
                                        </div>
                                        <p className="font-sans text-sm text-white leading-snug">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — CTA card */}
                        <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-2xl text-center" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div>
                                <p className="font-sans text-sm mb-3" style={{ color: '#8892a4' }}>
                                    Your first consultation is<br />completely free of charge
                                </p>
                                <div className="font-sans font-black text-5xl text-white">Free</div>
                                <div className="stat-line mt-3 mx-auto" style={{ width: '60px', background: 'linear-gradient(90deg, #00e5c3, #0094ff)' }} />
                            </div>

                            <div className="flex flex-col gap-3 text-sm w-full" style={{ color: '#8892a4' }}>
                                <div className="flex justify-between px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                                    <span>Duration</span>
                                    <span className="text-white font-medium">45 minutes</span>
                                </div>
                                <div className="flex justify-between px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                                    <span>Format</span>
                                    <span className="text-white font-medium">Video or In-person</span>
                                </div>
                            </div>

                            <Link to="/contact" className="w-full">
                                <button
                                    ref={btnRef}
                                    className="btn-shimmer w-full group flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-sans font-bold text-sm text-[#07090d] transition-all duration-300 hover:shadow-glow-md"
                                    style={{ background: 'linear-gradient(135deg, #00e5c3 0%, #0094ff 100%)' }}
                                >
                                    Book Consultation
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
