import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Data exactly as requested by user
const servicesList = [
    "Video Localization", "Subtitle Translation", "Voice-over Localization",
    "Dubbing Services", "Video Transcription", "Multilingual Video Production",
    "Corporate Video Localization", "Marketing Video Translation", "E-learning Localization",
    "Training Content Localization", "Website Translation", "Application Localization",
    "Content Localization", "Media Localization", "Global Content Adaptation"
];

const languagesList = [
    "Spanish", "French", "German", "Chinese", "Japanese", "Arabic", "Hindi",
    "Portuguese", "Italian", "Russian", "Turkish", "Thai", "Vietnamese", "Dutch",
    "Polish", "Swedish", "Norwegian", "Danish", "Greek", "Hebrew", "Malay",
    "Indonesian", "Ukrainian", "Romanian", "Hungarian", "Czech", "Finnish",
    "Bulgarian", "Croatian", "Slovak", "Lithuanian", "Latvian", "Estonian"
];

const industriesList = [
    "Media & Entertainment", "E-learning", "Corporate Training", "Marketing",
    "Technology & SaaS", "Gaming", "Healthcare", "Finance", "Education", "Digital Media"
];

const blogList = [
    "Importance of Video Localization", "Subtitle Translation Benefits", "Localization vs Translation",
    "Future of AI in Localization", "Localization for E-learning", "Global Marketing Localization",
    "Multilingual Content Strategy", "Localization for Streaming Platforms", "Best Practices for Subtitles",
    "Video Dubbing vs Voice-over"
];

const slugify = (text) => text.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Reset mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Initial animation
        gsap.fromTo('.navbar-container',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper for mega menus
    const MegaMenu = ({ name, path, items, columns = 1 }) => (
        <div className="relative group p-2">
            <Link to={path} className="flex items-center gap-1 hover:text-accent transition-colors pb-1">
                {name} <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-4 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className={`bg-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 grid gap-x-8 gap-y-2 shadow-2xl ${columns === 3 ? 'grid-cols-3 w-[800px]' : columns === 2 ? 'grid-cols-2 w-[500px]' : 'grid-cols-1 w-[300px]'}`}>
                    {items.map(item => (
                        <Link
                            key={item}
                            to={`${path}/${slugify(item)}`}
                            className="px-3 py-2 hover:bg-white/5 rounded-lg text-primary/70 hover:text-accent text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className={`col-span-${columns} mt-2 pt-2 border-t border-white/10`}>
                        <Link to={path} className="block w-full text-center py-2 text-accent text-sm hover:bg-accent/10 rounded-lg transition-colors">
                            View All {name} →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div
                className={cn(
                    "navbar-container fixed top-0 left-0 w-full z-[100] px-8 py-4 flex items-center justify-between transition-all duration-500",
                    scrolled
                        ? "bg-dark/95 backdrop-blur-xl border-b border-white/[0.03] shadow-md"
                        : "bg-transparent text-primary"
                )}
            >
                <Link to="/" className="flex items-center gap-3 font-sans text-xl tracking-tight z-10 w-[200px] group">
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center relative overflow-hidden shrink-0 group-hover:bg-accent/20 transition-colors">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_#14b8a6]" />
                        <div className="absolute inset-0 border border-accent rounded-full animate-[spin_4s_linear_infinite] border-t-transparent" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-primary tracking-wide text-lg">Welonix</span>
                        <span className="font-light text-[#9CA3AF] text-[10px] uppercase tracking-widest mt-0.5">Technologies</span>
                    </div>
                </Link>

                {/* Desktop Nav - Mega Menus */}
                <nav className="hidden lg:flex items-center gap-6 font-sans text-xs uppercase tracking-widest text-[#9CA3AF]">
                    <MegaMenu name="Services" path="/services" items={servicesList} columns={1} />
                    <MegaMenu name="Languages" path="/languages" items={languagesList.slice(0, 15)} columns={3} />
                    <MegaMenu name="Industries" path="/industries" items={industriesList} columns={1} />
                    <Link to="/case-studies" className="p-2 hover:text-white transition-colors">Case Studies</Link>
                    <MegaMenu name="Blog" path="/blog" items={blogList} columns={2} />
                    <Link to="/about" className="p-2 hover:text-white transition-colors">About</Link>
                    <Link to="/contact" className="p-2 hover:text-white transition-colors">Contact</Link>
                </nav>

                {/* Desktop Consultation Button */}
                <div className="hidden lg:flex items-center justify-end w-[200px] z-10">
                    <Link to="/contact" className="flex items-center gap-2 group">
                        <span className="text-xs uppercase tracking-widest text-primary group-hover:text-accent transition-colors">Consultation</span>
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-white/[0.05] border border-white/[0.1] group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
                            <span className="text-accent text-[10px]">▼</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-primary p-2 focus:outline-none z-10 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Backdrop */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[90] bg-dark/98 backdrop-blur-3xl flex flex-col pt-32 px-6 items-start gap-6 font-sans overflow-y-auto pb-24">
                    <div className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Navigation Directory</div>
                    <Link to="/" className="text-3xl font-bold font-sans text-primary">Home</Link>
                    <Link to="/services" className="text-3xl font-bold font-sans text-primary">Services</Link>
                    <Link to="/languages" className="text-3xl font-bold font-sans text-primary">Languages</Link>
                    <Link to="/industries" className="text-3xl font-bold font-sans text-primary">Industries</Link>
                    <Link to="/case-studies" className="text-3xl font-bold font-sans text-primary">Case Studies</Link>
                    <Link to="/blog" className="text-3xl font-bold font-sans text-primary">Blog / Insights</Link>
                    <Link to="/about" className="text-3xl font-bold font-sans text-primary">About</Link>

                    <Link to="/contact" className="mt-8 w-full">
                        <button className="w-full py-4 rounded-xl bg-accent text-background font-semibold text-lg hover:bg-white transition-colors duration-300">
                            Start Project
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
}
