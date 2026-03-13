import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function LanguagePageTemplate() {
    const { languageId } = useParams();
    const title = languageId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Language Detail';

    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
            {/* Background glow specific to language pages */}
            <div className="absolute top-20 right-20 w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12">
                <Link to="/languages" className="font-mono text-xs text-indigo-400 uppercase tracking-widest hover:text-white transition-colors duration-300 w-fit">
                    ← Back to Languages
                </Link>
                <div className="pb-12 border-b border-white/10">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary mb-6">
                        {title} Translation
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Native-level fluency matched with cultural context.
                    </p>
                </div>

                <div className="glass-panel p-8 md:p-16 rounded-[2rem] min-h-[40vh] border-indigo-500/20 flex flex-col items-center justify-center text-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center bg-indigo-500/10">
                        <span className="font-serif italic text-2xl text-indigo-400">{title.charAt(0)}</span>
                    </div>
                    <p className="font-sans text-primary/40 font-mono text-sm">
                        [ Database Entry for {languageId} translation services ]
                    </p>
                </div>
            </div>
        </div>
    );
}
