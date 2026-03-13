import React from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TeamSection from '../components/TeamSection';
import BookingCTA from '../components/BookingCTA';
import GlobalTrust from '../components/GlobalTrust';
import ServicesGrid from '../components/ServicesGrid';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import TrustSection from '../components/TrustSection';
import Workflow from '../components/Workflow';
import BlogPreview from '../components/BlogPreview';
import CallToActionBanner from '../components/CallToActionBanner';
import ContactForm from '../components/ContactForm';

export default function Home() {
    return (
        <>
            <Preloader />
            <Hero />
            <div className="glow-divider" />
            <Features />
            <TeamSection />
            <BookingCTA />
            <div className="glow-divider" />
            <GlobalTrust />
            <ServicesGrid />
            <div className="glow-divider" />
            <CaseStudiesPreview />
            <TrustSection />
            <Workflow />
            <BlogPreview />
            <div className="glow-divider" />
            <CallToActionBanner />
            <ContactForm />
        </>
    );
}
