import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
    const sectionRef = useRef(null);
    const btnRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [progress, setProgress] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo('.cf-heading',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );

            gsap.fromTo('.cf-field',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
                    scrollTrigger: { trigger: '.cf-form', start: 'top 85%' }
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

    const handleFocus = (e) => {
        gsap.to(e.target, { boxShadow: '0 0 0 2px rgba(0,229,195,0.3)', duration: 0.3 });
    };

    const handleBlur = (e) => {
        gsap.to(e.target, { boxShadow: '0 0 0 0px rgba(0,229,195,0)', duration: 0.3 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProgress(true);
        setTimeout(() => {
            setSubmitted(true);
            setProgress(false);
        }, 2000);
    };

    return (
        <section ref={sectionRef} className="w-full py-28 px-8 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: '#0a0d14' }}>

            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,195,0.04) 0%, transparent 70%)' }} />

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Heading */}
                <div className="cf-heading text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Get Started</span>
                    </div>
                    <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-tight tracking-tight">
                        Leave an <span className="gradient-text">Application</span>
                    </h2>
                    <p className="font-sans text-base mt-4" style={{ color: '#8892a4' }}>
                        Your global passive content income starts here
                    </p>
                </div>

                {submitted ? (
                    <div className="flex flex-col items-center gap-5 py-16 text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,229,195,0.15)', border: '1px solid rgba(0,229,195,0.4)' }}>
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-white">Application Submitted!</h3>
                        <p className="font-sans text-base" style={{ color: '#8892a4' }}>We'll reach out within 24 hours to schedule your consultation.</p>
                    </div>
                ) : (
                    <form className="cf-form flex flex-col gap-5" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="cf-field flex flex-col gap-2">
                                <label className="font-sans text-xs uppercase tracking-widest" style={{ color: '#8892a4' }}>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Smith"
                                    required
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className="w-full px-4 py-3.5 rounded-xl font-sans text-sm text-white outline-none transition-all duration-200"
                                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'white' }}
                                />
                            </div>
                            <div className="cf-field flex flex-col gap-2">
                                <label className="font-sans text-xs uppercase tracking-widest" style={{ color: '#8892a4' }}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    required
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className="w-full px-4 py-3.5 rounded-xl font-sans text-sm text-white outline-none transition-all duration-200"
                                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                                />
                            </div>
                        </div>

                        <div className="cf-field flex flex-col gap-2">
                            <label className="font-sans text-xs uppercase tracking-widest" style={{ color: '#8892a4' }}>Budget Range</label>
                            <select
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className="w-full px-4 py-3.5 rounded-xl font-sans text-sm outline-none transition-all duration-200"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#8892a4' }}
                            >
                                <option value="">Select a budget range...</option>
                                <option>$5,000 – $20,000</option>
                                <option>$20,000 – $50,000</option>
                                <option>$50,000 – $100,000</option>
                                <option>$100,000+</option>
                            </select>
                        </div>

                        <div className="cf-field flex flex-col gap-2">
                            <label className="font-sans text-xs uppercase tracking-widest" style={{ color: '#8892a4' }}>Project Details</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your content, target languages, timeline..."
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className="w-full px-4 py-3.5 rounded-xl font-sans text-sm text-white outline-none resize-none transition-all duration-200"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                            />
                        </div>

                        <div className="cf-field">
                            <button
                                ref={btnRef}
                                type="submit"
                                className="relative w-full overflow-hidden group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-sans font-bold text-sm text-[#07090d] transition-all duration-300 hover:shadow-glow-md"
                                style={{ background: 'linear-gradient(135deg, #00e5c3 0%, #0094ff 100%)' }}
                            >
                                {/* Progress fill */}
                                {progress && (
                                    <div className="absolute inset-0 progress-fill filling" style={{ background: 'rgba(0,0,0,0.2)' }} />
                                )}
                                <Send className="w-4 h-4 relative z-10" />
                                <span className="relative z-10">{progress ? 'Submitting...' : 'Submit Application'}</span>
                            </button>
                        </div>

                    </form>
                )}

            </div>
        </section>
    );
}
