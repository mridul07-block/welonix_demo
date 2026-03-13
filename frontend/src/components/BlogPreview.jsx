import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = [
    { slug: 'ai-subtitling-future', category: 'AI & Technology', date: 'Dec 12, 2024', title: 'The Future of AI in Accelerated Subtitling', desc: 'How machine learning models are reshaping real-time subtitle generation with near-human accuracy.' },
    { slug: 'cultural-context-translation', category: 'Linguistics', date: 'Nov 28, 2024', title: 'Why Cultural Context Beats Direct Translation', desc: 'A deep dive into localization failures and how cultural alignment drives global content success.' },
    { slug: 'scaling-corporate-training', category: 'Enterprise', date: 'Nov 14, 2024', title: 'Scaling Corporate Training to 50 Countries', desc: 'Case study on how a Fortune 500 company localized 2,000+ training modules in 90 days.' },
];

export default function BlogPreview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.bp-heading',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
                }
            );
            gsap.fromTo('.blog-card',
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.blog-grid', start: 'top 85%' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-28 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="max-w-7xl mx-auto">

                <div className="bp-heading flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(0,229,195,0.15)', background: 'rgba(0,229,195,0.03)' }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: 'rgba(0,229,195,0.7)' }}>Resources</span>
                        </div>
                        <h2 className="font-sans font-black text-4xl md:text-5xl text-white leading-tight tracking-tight">
                            Localization <span className="gradient-text">Knowledge Hub</span>
                        </h2>
                    </div>
                    <Link to="/blog">
                        <button className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-xl border font-sans text-sm font-medium text-white hover:border-accent/40 hover:text-accent transition-all duration-300" style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                            All Articles
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </Link>
                </div>

                <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <Link to={`/blog/${post.slug}`} key={i}>
                            <div
                                className="blog-card card-shimmer animated-border group relative flex flex-col gap-5 p-7 rounded-2xl h-full cursor-pointer transition-all duration-300 card-glow"
                                style={{ background: 'linear-gradient(135deg, #0e1520 0%, #0c1018 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <div className="absolute left-0 top-0 w-[2px] h-0 rounded-full bg-accent group-hover:h-full transition-all duration-500" />

                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest" style={{ background: 'rgba(0,229,195,0.1)', color: '#00e5c3', border: '1px solid rgba(0,229,195,0.2)' }}>
                                        <div className="w-1 h-1 rounded-full bg-accent" />
                                        {post.category}
                                    </span>
                                    <span className="font-sans text-[11px]" style={{ color: '#64748B' }}>{post.date}</span>
                                </div>

                                <div className="flex-1 flex flex-col gap-3">
                                    <h3 className="font-sans font-bold text-lg text-white leading-snug group-hover:text-accent transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#8892a4' }}>
                                        {post.desc}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 pt-4 font-sans text-sm font-medium text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    Read Article
                                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
