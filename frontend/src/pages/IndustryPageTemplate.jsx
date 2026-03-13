import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function IndustryPageTemplate() {
    const { industryId } = useParams();
    const title = industryId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Industry Focus';

    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12">
                <Link to="/industries" className="font-mono text-xs text-fuchsia-400 uppercase tracking-widest hover:text-white transition-colors duration-300 w-fit">
                    ← Back to Industries
                </Link>
                <div className="pb-12 border-b border-white/10">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary mb-6">
                        {title}
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Specialized localization frameworks for the {title.toLowerCase()} sector.
                    </p>
                </div>

                <div className="glass-panel p-8 md:p-16 rounded-[2rem] min-h-[40vh] border-fuchsia-500/20 flex items-center justify-center">
                    <p className="font-sans text-primary/40 text-center text-lg">
                        Deploying domain-specific linguists and QA processes tailored for {title}.
                    </p>
                </div>
            </div>
        </div>
    );
}
