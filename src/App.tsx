/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GlowingCursor } from './components/GlowingCursor.tsx';
import { AmbientBlooms } from './components/AmbientBlooms.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Products } from './components/Products.tsx';
import { Industries } from './components/Industries.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { Materials } from './components/Materials.tsx';
import { Process } from './components/Process.tsx';
import { Gallery } from './components/Gallery.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyMobileBar } from './components/StickyMobileBar.tsx';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData.ts';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ur'>('en');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('Stand-Up Pouches');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProduct = (productName: string) => {
    setSelectedProductForQuote(productName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectIndustry = (industryName: string) => {
    setSelectedProductForQuote(`Pouches for ${industryName}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0B0D10] text-[#F2EFE9] selection:bg-[#D4B27A] selection:text-[#0B0D10] relative flex flex-col ${currentLang === 'ur' ? 'font-sans' : ''}`}>
      
      {/* Background Soft Drifting Light Blooms */}
      <AmbientBlooms />

      {/* Desktop Glowing Cursor Follower */}
      <GlowingCursor />

      {/* Urdu preview mode banner if active */}
      {currentLang === 'ur' && (
        <div className="relative z-50 bg-[#D4B27A] text-[#0B0D10] px-4 py-2 text-center text-xs font-mono font-bold shadow-md">
          اردو زبان کا پیش نظارہ فعال ہے۔ تمام کوٹیشنز اور فیکٹری آرڈرز اردو اور انگلش دونوں میں پراسیس کیے جاتے ہیں۔
        </div>
      )}

      {/* Floating Glass Island Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
        onRequestQuoteClick={scrollToContact}
      />

      {/* Main Content Sections (Strictly in requested order 1 to 9) */}
      <main className="flex-1 relative z-10 pb-16 sm:pb-0">
        {/* 1. Hero */}
        <Hero
          currentLang={currentLang}
          onRequestQuote={scrollToContact}
        />

        {/* 2. Products (Interactive Pouch Explorer) */}
        <Products
          currentLang={currentLang}
          onSelectProductForQuote={handleSelectProduct}
        />

        {/* 3. Industries (Horizontal Scroll Strip) */}
        <Industries
          currentLang={currentLang}
          onSelectIndustryForQuote={handleSelectIndustry}
        />

        {/* 4. Capabilities (Finish toggle & Peel-Back cross-section) */}
        <Capabilities
          currentLang={currentLang}
        />

        {/* 5. Materials */}
        <Materials
          currentLang={currentLang}
        />

        {/* 6. Process (Glowing Timeline Line that draws itself) */}
        <Process
          currentLang={currentLang}
        />

        {/* 7. Gallery (Masonry layout with rounded slots) */}
        <Gallery
          currentLang={currentLang}
        />

        {/* 8. About */}
        <About
          currentLang={currentLang}
        />

        {/* 9. Contact (Floating Glass-Style Form) */}
        <Contact
          currentLang={currentLang}
          prefilledProduct={selectedProductForQuote}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
      />

      {/* Desktop Floating WhatsApp Pill Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hello%20Elite%20Packages,%20I%20am%20inquiring%20about%20packaging%20quotes`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex fixed bottom-6 right-6 z-40 bg-[#3DE0D0] hover:bg-[#22C7B7] text-[#0B0D10] py-3.5 px-6 rounded-full shadow-[0_0_25px_rgba(61,224,208,0.45)] items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold transition-all hover:scale-105"
        title="Direct WhatsApp to Lahore Factory"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp Factory</span>
      </a>

      {/* Scroll to Top Pill Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 sm:bottom-20 sm:right-6 z-40 p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#F2EFE9] border border-white/15 backdrop-blur-md transition-all shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#D4B27A]" />
        </button>
      )}

      {/* Mobile Sticky Action Bar */}
      <StickyMobileBar
        onRequestQuote={scrollToContact}
      />
    </div>
  );
}
