import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, ArrowUpRight, Globe, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface HeaderProps {
  currentLang: 'en' | 'ur';
  onToggleLang: (lang: 'en' | 'ur') => void;
  onRequestQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onRequestQuoteClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: currentLang === 'en' ? 'Products' : 'پروڈکٹس', href: '#products' },
    { label: currentLang === 'en' ? 'Industries' : 'صنعتیں', href: '#industries' },
    { label: currentLang === 'en' ? 'Capabilities' : 'صلاحیتیں', href: '#capabilities' },
    { label: currentLang === 'en' ? 'Materials' : 'مواد', href: '#materials' },
    { label: currentLang === 'en' ? 'Process' : 'طریقہ کار', href: '#process' },
    { label: currentLang === 'en' ? 'Gallery' : 'گیلری', href: '#gallery' },
    { label: currentLang === 'en' ? 'About' : 'ہمارے بارے میں', href: '#about' },
    { label: currentLang === 'en' ? 'Contact' : 'رابطہ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 py-3 transition-all">
      {/* Floating Glass Island Navbar */}
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-full px-4 sm:px-6 py-3 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
          
          {/* Brand Mark with Soft Curves */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4B27A] to-[#A8864E] text-[#0B0D10] font-black text-sm flex items-center justify-center font-display shadow-[0_0_15px_rgba(212,178,122,0.3)] transition-transform group-hover:scale-105">
              EP
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#F2EFE9] font-display block group-hover:text-[#D4B27A] transition-colors leading-none">
                ELITE PACKAGES
              </span>
              <span className="text-[10px] tracking-widest text-[#F2EFE9]/50 uppercase block font-sans mt-0.5">
                Lahore · Flexible Packaging
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Clean wide-spaced text */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs tracking-wider uppercase font-medium text-[#F2EFE9]/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#D4B27A] hover:drop-shadow-[0_0_8px_rgba(212,178,122,0.4)] transition-all py-1 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-3/4 after:h-0.5 after:bg-[#3DE0D0] after:transition-all after:rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle pill */}
            <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-full px-2 py-1 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#D4B27A] text-[#0B0D10] font-bold shadow-sm'
                    : 'text-[#F2EFE9]/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('ur')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  currentLang === 'ur'
                    ? 'bg-[#D4B27A] text-[#0B0D10] font-bold shadow-sm'
                    : 'text-[#F2EFE9]/60 hover:text-white'
                }`}
              >
                اردو
              </button>
            </div>

            {/* Quote CTA Pill Button */}
            <a
              href="#contact"
              onClick={onRequestQuoteClick}
              className="hidden sm:inline-flex items-center gap-2 bg-[#D4B27A] hover:bg-[#E8D3AA] text-[#0B0D10] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(212,178,122,0.25)] hover:shadow-[0_0_25px_rgba(212,178,122,0.45)] hover:scale-102"
            >
              <span>{currentLang === 'en' ? 'Get a Quote' : 'کوٹیشن'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full text-[#F2EFE9] bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2">
          <div className="glass-panel rounded-3xl p-6 border border-white/15 shadow-2xl space-y-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#F2EFE9]/80 hover:text-[#D4B27A] py-2 px-3 rounded-2xl hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuoteClick();
                }}
                className="w-full text-center bg-[#D4B27A] text-[#0B0D10] py-3.5 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg"
              >
                {currentLang === 'en' ? 'Get a Quote' : 'کوٹیشن حاصل کریں'}
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hello%20Elite%20Packages,%20I%20am%20inquiring%20about%20flexible%20packaging`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center glass-pill text-[#F2EFE9] py-3 rounded-full font-medium text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#3DE0D0]" />
                <span>WhatsApp: {COMPANY_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
