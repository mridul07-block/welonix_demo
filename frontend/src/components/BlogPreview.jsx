import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogs = [
    { category: "Trend", date: "Sep 12", title: "The Future of AI in Accelerated Subtitling" },
    { category: "Strategy", date: "Oct 04", title: "Why Cultural Context Beats Direct Translation" },
    { category: "Case Study", date: "Nov 22", title: "Scaling Corporate Training to 50 Countries" }
];

export default function BlogPreview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.blog-heading',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            );
            gsap.fromTo('.blog-card',
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.blog-grid', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full py-28 px-8 border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto">

                <div className="blog-heading text-center mb-16">
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent/60 font-medium mb-4">Resources</p>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight">
                        Localization <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#64748B]">Knowledge Hub</span>
                    </h2>
                </div>

                <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-5">
                    {blogs.map((b, i) => (
                        <Link key={i} to={`/blog/${b.title.toLowerCase().replace(/ /g, '-')}`} className="blog-card group bg-[#0b0d12] p-7 rounded-2xl border border-white/[0.04] hover:border-accent/20 hover:bg-[#0f1118] transition-all duration-300 flex flex-col justify-between min-h-[240px]">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent bg-accent/[0.08] px-2.5 py-1 rounded-md font-medium">{b.category}</span>
                                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#475569]">{b.date}</span>
                                </div>
                                <h3 className="font-sans font-semibold text-xl text-white leading-tight group-hover:text-accent transition-colors duration-300">
                                    {b.title}
                                </h3>
                            </div>
                            <div className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#64748B] group-hover:text-white transition-colors mt-8 flex items-center gap-2">
                                Read Article <span className="text-accent group-hover:translate-x-1 transition-transform inline-block">→</span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
