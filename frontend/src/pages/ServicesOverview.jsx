import React from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
    "video-localization", "subtitle-translation", "voice-over-localization",
    "dubbing-services", "video-transcription", "multilingual-video-production",
    "corporate-video-localization", "marketing-video-translation", "e-learning-localization",
    "training-content-localization", "website-translation", "application-localization",
    "content-localization", "media-localization", "global-content-adaptation"
];

export default function ServicesOverview() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="max-w-3xl">
                    <h1 className="font-sans font-bold text-5xl md:text-7xl leading-tight tracking-tight text-primary mb-6">
                        All Services
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        End-to-end multilingual media adaptation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesList.map((slug) => (
                        <Link key={slug} to={`/services/${slug}`} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                            <h3 className="font-sans font-medium text-lg text-primary group-hover:text-accent transition-colors">
                                {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
