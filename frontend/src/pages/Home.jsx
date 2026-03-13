import React from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import GlobalTrust from '../components/GlobalTrust';
import ServicesGrid from '../components/ServicesGrid';
import LanguageCoverage from '../components/LanguageCoverage';
import IndustriesSection from '../components/IndustriesSection';
import Workflow from '../components/Workflow';
import Features from '../components/Features';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import BlogPreview from '../components/BlogPreview';
import CallToActionBanner from '../components/CallToActionBanner';

export default function Home() {
    return (
        <>
            <Preloader />
            <Hero />
            <GlobalTrust />
            <ServicesGrid />
            <LanguageCoverage />
            <IndustriesSection />
            <Workflow />
            <Features />
            <CaseStudiesPreview />
            <BlogPreview />
            <CallToActionBanner />
        </>
    );
}
