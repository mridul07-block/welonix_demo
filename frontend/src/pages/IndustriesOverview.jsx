import React from 'react';
import { Link } from 'react-router-dom';

const industriesList = [
    "media-and-entertainment", "e-learning", "corporate-training",
    "marketing", "technology-and-saas", "gaming", "healthcare",
    "finance", "education", "digital-media"
];

export default function IndustriesOverview() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="max-w-3xl">
                    <h1 className="font-sans font-bold text-5xl md:text-7xl leading-tight tracking-tight text-primary mb-6">
                        Industries
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Domain-specific expertise for demanding sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industriesList.map((slug) => (
                        <Link key={slug} to={`/industries/${slug}`} className="glass-panel p-8 rounded-[2rem] hover:bg-fuchsia-500/5 hover:border-fuchsia-500/30 transition-all group flex items-center justify-between">
                            <h3 className="font-sans font-bold text-2xl text-primary group-hover:text-fuchsia-400 transition-colors">
                                {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace('And', '&')}
                            </h3>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
