import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered text reveal
            gsap.fromTo('.hero-anim',
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 2.2 }
            );

            // Glass bars floating
            gsap.to('.glass-bar', {
                y: -25,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: 0.3
            });

            // Stat badges floating
            gsap.to('.stat-badge', {
                y: 'random(-12, 12)',
                x: 'random(-8, 8)',
                duration: 'random(3, 5)',
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: 0.2
            });

            // Scroll-driven parallax depth
            gsap.to('.glass-bar-1', {
                y: -80,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });
            gsap.to('.glass-bar-2', {
                y: -120,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });
            gsap.to('.glass-bar-3', {
                y: -60,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                }
            });

            // Data nodes parallax
            gsap.to('.data-node', {
                y: 'random(-40, 40)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full min-h-[100dvh] flex items-center overflow-hidden">

            {/* Cinematic gradient background */}
            <div className="absolute inset-0 bg-[#050508]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-[-30%] left-[30%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10 pt-24 pb-16">

                {/* Left — Typography Block */}
                <div className="flex flex-col items-start gap-6">
                    <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.04] backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_6px_#14b8a6]" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent/80 font-medium">Global Localization Engine</span>
                    </div>

                    <div className="overflow-hidden">
                        <h1 className="hero-anim font-sans font-black text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.95] tracking-[-0.03em] text-white">
                            Welonix
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <p className="hero-anim font-sans font-light text-xl md:text-2xl text-[#94A3B8] leading-relaxed max-w-lg">
                            unifies the best instruments <br />for <span className="text-white font-medium">global content localization</span>
                        </p>
                    </div>

                    <div className="hero-anim flex flex-col sm:flex-row items-start gap-3 mt-4">
                        <Link to="/contact">
                            <button className="group flex items-center gap-3 px-7 py-3.5 rounded-lg bg-accent text-[#050508] font-sans font-semibold text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_25px_rgba(20,184,166,0.25)]">
                                Start a Project
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </Link>
                        <Link to="/services">
                            <button className="px-7 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-white/80 font-sans font-medium text-sm hover:bg-white/[0.08] hover:border-white/20 transition-all backdrop-blur-sm">
                                Explore Services
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right — 3D Glass Bar Composition (Inspired by F11CLUB) */}
                <div className="relative h-[550px] w-full hidden lg:flex items-center justify-center">

                    {/* Glass Bars */}
                    <div className="glass-bar glass-bar-1 absolute left-[15%] top-[5%] w-[60px] h-[420px] rounded-md bg-gradient-to-b from-[#1a1d24] to-[#0a0b0e] border-l border-t border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.6)] rotate-[14deg]" />
                    <div className="glass-bar glass-bar-2 absolute left-[38%] top-[-2%] w-[75px] h-[500px] rounded-md bg-gradient-to-b from-[#22262e] via-[#14161b] to-[#050508] border-l border-t border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.7)] rotate-[14deg] z-10" />
                    <div className="glass-bar glass-bar-3 absolute right-[22%] top-[12%] w-[50px] h-[370px] rounded-md bg-gradient-to-b from-[#111318] to-[#000000] border-l border-white/[0.03] shadow-[0_15px_50px_rgba(0,0,0,0.5)] rotate-[14deg]" />

                    {/* Floating Stat Badges */}
                    <div className="stat-badge absolute top-[8%] left-[2%] z-20 bg-[#0d0f14]/80 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/[0.06] shadow-xl">
                        <div className="font-sans font-bold text-2xl text-white tracking-tight">100+</div>
                        <div className="font-sans text-[9px] uppercase tracking-widest text-[#64748B] mt-0.5">Languages</div>
                    </div>

                    <div className="stat-badge absolute top-[40%] left-[55%] z-30 bg-[#0d0f14]/80 backdrop-blur-lg px-4 py-3 rounded-xl border border-accent/20 shadow-xl">
                        <div className="font-sans text-[9px] uppercase tracking-widest text-accent mb-1">Accuracy</div>
                        <div className="font-sans font-bold text-3xl text-white tracking-tight">99.9%</div>
                    </div>

                    <div className="stat-badge absolute bottom-[18%] right-[5%] z-20 bg-[#0d0f14]/80 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/[0.06] shadow-xl">
                        <div className="font-sans font-bold text-xl text-white tracking-tight">24/7</div>
                        <div className="font-sans text-[8px] uppercase tracking-widest text-[#64748B] mt-0.5">Global QA</div>
                    </div>

                    <div className="stat-badge absolute bottom-[35%] left-[8%] z-20 bg-[#0d0f14]/80 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/[0.06] shadow-xl">
                        <div className="font-sans font-bold text-xl text-white tracking-tight">5000$</div>
                        <div className="font-sans text-[8px] uppercase tracking-widest text-[#64748B] mt-0.5">Min Project</div>
                    </div>

                    {/* Small glowing dots */}
                    <div className="data-node absolute top-[25%] right-[35%] w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_#14b8a6] z-20" />
                    <div className="data-node absolute bottom-[25%] left-[42%] w-1.5 h-1.5 rounded-full bg-accent/60 shadow-[0_0_8px_#14b8a6] z-20" />
                </div>

            </div>
        </div>
    );
}
