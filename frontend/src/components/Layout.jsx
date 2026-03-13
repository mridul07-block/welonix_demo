import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import BackgroundAnimation from './BackgroundAnimation';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-background relative text-primary selection:bg-accent/30 selection:text-white">
            <ScrollToTop />
            <CustomCursor />
            <BackgroundAnimation />

            {/* Decorative background orbs — purely visual depth layer */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                {/* Teal orb — top-right */}
                <div className="orb-float absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00e5c3] opacity-[0.05] blur-[130px]" />
                {/* Deep blue orb — bottom-left */}
                <div className="orb-float absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-[#1a3a5c] opacity-[0.07] blur-[160px]" style={{ animationDelay: '-7s' }} />
                {/* Faint teal orb — mid left */}
                <div className="orb-float absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#00e5c3] opacity-[0.04] blur-[100px]" style={{ animationDelay: '-13s' }} />
            </div>

            {/* Global Noise Filter (very subtle film grain for texture, behind everything but background) */}
            <svg aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] h-[100dvh] w-[100vw] opacity-[0.03] mix-blend-overlay">
                <filter id="noiseFilterLayout">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterLayout)" />
            </svg>

            <Navbar />

            <main className="flex-grow z-10 relative">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
