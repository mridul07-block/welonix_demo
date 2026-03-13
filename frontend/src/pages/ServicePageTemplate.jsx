import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ServicePageTemplate() {
    const { serviceId } = useParams();

    // Format the ID for display (e.g., 'video-localization' -> 'Video Localization')
    const title = serviceId
        ?.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') || 'Service Detail';

    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
                <Link to="/services" className="font-mono text-xs text-accent uppercase tracking-widest hover:text-white transition-colors duration-300 w-fit">
                    ← Back to Services
                </Link>
                <div className="pb-12 border-b border-white/10">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary mb-6">
                        {title}
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Precision engineering for global content adaptation.
                    </p>
                </div>

                <div className="glass-panel p-8 md:p-16 rounded-[2rem] min-h-[40vh] flex items-center justify-center">
                    <p className="font-sans text-primary/40 font-mono text-sm text-center">
                        [ Dynamic Content Module for {serviceId} would load here ]
                    </p>
                </div>
            </div>
        </div>
    );
}
