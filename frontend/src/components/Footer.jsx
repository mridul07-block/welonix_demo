import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
    Company: ["About Us", "Careers", "Leadership", "Press", "Contact"],
    Services: ["Video Localization", "Subtitle Translation", "Voice Over", "Dubbing", "Transcription"],
    Languages: ["Spanish", "French", "German", "Chinese", "Japanese", "View All"],
    Industries: ["Media & Entertainment", "E-learning", "Technology & SaaS", "Healthcare", "Marketing"],
    Resources: ["Blog / Insights", "Case Studies", "Localization API", "Help Center"]
};

export default function Footer() {
    return (
        <footer className="w-full pt-24 pb-8 px-6 bg-[#020203] border-t border-white/[0.05] relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-accent/5 rounded-[100%] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-2 font-sans text-2xl tracking-tight">
                            <span className="font-bold text-accent">Welonix</span>
                            <span className="font-light tracking-wide text-primary">Tech</span>
                        </Link>
                        <p className="font-sans text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
                            Global localization and multilingual media solutions empowering organizations to scale seamlessly across international markets.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-colors cursor-pointer text-[#9CA3AF] hover:text-accent">in</div>
                            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-colors cursor-pointer text-[#9CA3AF] hover:text-accent">X</div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="flex flex-col gap-4">
                            <h4 className="font-sans font-semibold text-primary mb-2">{title}</h4>
                            {links.map((link) => (
                                <Link key={link} to="#" className="font-sans text-sm text-[#9CA3AF] hover:text-accent transition-colors">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="font-sans text-xs text-[#4B5563]">
                        © {new Date().getFullYear()} Welonix Technologies. All rights reserved.
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.05] border border-accent/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] shadow-[0_0_8px_#14b8a6] animate-pulse" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                            System Operational
                        </span>
                    </div>

                    <div className="flex gap-6 font-sans text-xs text-[#4B5563]">
                        <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
