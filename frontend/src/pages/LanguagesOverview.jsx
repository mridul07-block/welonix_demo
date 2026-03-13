import React from 'react';
import { Link } from 'react-router-dom';

// Note: Trimmed list for brevity
const languagesList = [
    "spanish", "french", "german", "chinese", "japanese", "arabic",
    "hindi", "portuguese", "italian", "russian", "korean", "dutch"
];

export default function LanguagesOverview() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="max-w-3xl">
                    <h1 className="font-sans font-bold text-5xl md:text-7xl leading-tight tracking-tight text-primary mb-6">
                        100+ Languages
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Global communication unblocked.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {languagesList.map((slug) => (
                        <Link key={slug} to={`/languages/${slug}`} className="glass-panel-light p-4 rounded-xl hover:bg-white/5 hover:border-indigo-500/50 transition-all text-center">
                            <h3 className="font-sans font-medium text-primary">
                                {slug.charAt(0).toUpperCase() + slug.slice(1)}
                            </h3>
                        </Link>
                    ))}
                    <div className="glass-panel-light p-4 rounded-xl flex items-center justify-center opacity-50">
                        <span className="font-mono text-sm">...and 80+ more</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
