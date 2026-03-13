import React from 'react';

export default function About() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
                <div className="pb-12 border-b border-white/10">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary mb-6">
                        About Welonix
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        A technology-driven localization company operating at international standards.
                    </p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                        Welonix Technologies operates in the global localization and multilingual media services industry,
                        enabling businesses to distribute their content across international markets.
                    </p>
                    <p className="font-sans text-primary/70 text-lg leading-relaxed">
                        We empower organizations to deliver culturally adapted content across 100+ languages,
                        helping brands expand globally while maintaining clarity, consistency, and audience engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}
