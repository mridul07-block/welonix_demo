import React from 'react';

export default function CaseStudies() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto flex flex-col gap-12 text-center items-center">
                <div className="pb-12 border-b border-white/10 w-full">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary mb-6">
                        Case Studies
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Real-world deployments.
                    </p>
                </div>

                <div className="glass-panel p-8 md:p-16 rounded-[2rem] border-white/10 flex items-center justify-center w-full">
                    <p className="font-sans text-primary/40 font-mono text-sm">
                        [ Encrypted Client Data - Awaiting Clearance ]
                    </p>
                </div>
            </div>
        </div>
    );
}
