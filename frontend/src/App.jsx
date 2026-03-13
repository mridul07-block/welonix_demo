import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import LanguagesOverview from './pages/LanguagesOverview';
import IndustriesOverview from './pages/IndustriesOverview';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';

// Dynamic Templates
import ServicePageTemplate from './pages/ServicePageTemplate';
import LanguagePageTemplate from './pages/LanguagePageTemplate';
import IndustryPageTemplate from './pages/IndustryPageTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-studies" element={<CaseStudies />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={
            <div className="w-full pt-32 min-h-screen text-center"><h1 className="text-3xl font-sans text-primary">Dynamic Blog Post</h1></div>
          } />

          <Route path="services" element={<ServicesOverview />} />
          <Route path="services/:serviceId" element={<ServicePageTemplate />} />

          <Route path="languages" element={<LanguagesOverview />} />
          <Route path="languages/:languageId" element={<LanguagePageTemplate />} />

          <Route path="industries" element={<IndustriesOverview />} />
          <Route path="industries/:industryId" element={<IndustryPageTemplate />} />

          {/* Catch-all 404 could go here */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
              <h1 className="font-serif italic text-6xl text-primary">Not Found.</h1>
              <p className="font-sans text-primary/60">This module is offline.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
