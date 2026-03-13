import React from 'react';

export default function Contact() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto flex flex-col gap-12 text-center items-center">
                <div className="pb-12 border-b border-white/10 w-full">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary mb-6">
                        Initiate Protocol.
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Start a project with our global delivery team.
                    </p>
                </div>

                <div className="glass-panel p-8 md:p-12 rounded-[2rem] w-full max-w-lg flex flex-col gap-6">
                    <input type="text" placeholder="Incoming Transmission (Email)" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-primary focus:outline-none focus:border-accent transition-colors" />
                    <textarea placeholder="Mission Parameters (Project Details)" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-primary focus:outline-none focus:border-accent transition-colors min-h-[120px]" />
                    <button className="magnetic-btn relative overflow-hidden px-8 py-4 rounded-xl bg-accent text-background font-sans text-sm font-bold transition-transform duration-300 transform hover:scale-[1.03] group w-full">
                        <span className="magnetic-btn-inner bg-primary"></span>
                        <span className="relative z-10 group-hover:text-background transition-colors duration-300 text-center w-full block">Deploy Request</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
