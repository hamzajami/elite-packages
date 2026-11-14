import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Layers, Printer, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface HeroProps {
  currentLang: 'en' | 'ur';
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onRequestQuote }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 sm:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Typography & Pill Actions */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Elegant Location & Tech Sub-Kicker */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest uppercase text-[#D4B27A] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0D0] shadow-[0_0_8px_#3DE0D0]"></span>
              <span>Lahore, Pakistan</span>
              <span className="text-white/20">/</span>
              <span className="text-[#F2EFE9]/70">Rotogravure & 7-Color Flexo</span>
            </div>

            {/* Cinematic Headings */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F2EFE9] font-display uppercase leading-[0.95]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F2EFE9] via-[#F2EFE9] to-[#D4B27A]">
                  ELITE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4B27A] via-[#E8D3AA] to-[#F2EFE9]">
                  PACKAGES
                </span>
              </h1>

              {/* Single plain sentence on what we make */}
              <p className="text-lg sm:text-xl lg:text-2xl text-[#F2EFE9]/90 font-light leading-relaxed max-w-2xl pt-2">
                {currentLang === 'en' ? COMPANY_INFO.heroSentence : COMPANY_INFO.heroSentenceUrdu}
              </p>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-[#F2EFE9]/60 font-normal max-w-xl border-l border-[#D4B27A]/40 pl-4 py-1">
                {currentLang === 'en' ? COMPANY_INFO.tagline : COMPANY_INFO.taglineUrdu}
              </p>
            </div>

            {/* Pill-Shaped Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-3 bg-[#D4B27A] hover:bg-[#E8D3AA] text-[#0B0D10] font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(212,178,122,0.35)] hover:shadow-[0_0_35px_rgba(212,178,122,0.55)] hover:scale-102 group"
              >
                <span>{currentLang === 'en' ? 'Get a quote' : 'کوٹیشن حاصل کریں'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hello%20Elite%20Packages,%20I%20would%20like%20to%20inquire%20about%20packaging%20quotes`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/[0.05] hover:bg-white/[0.1] text-[#F2EFE9] font-medium px-8 py-4 rounded-full text-sm border border-white/15 hover:border-[#3DE0D0]/50 transition-all backdrop-blur-md group hover:shadow-[0_0_20px_rgba(61,224,208,0.2)]"
              >
                <MessageSquare className="w-4 h-4 text-[#3DE0D0] group-hover:scale-110 transition-transform" />
                <span>{currentLang === 'en' ? 'WhatsApp' : 'واٹس ایپ'}</span>
              </a>
            </div>

            {/* Overlapping Key Technical Specifications */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono text-[#F2EFE9]/70">
              <div>
                <span className="text-[#D4B27A] block text-[11px] uppercase tracking-wider">Printing Plant</span>
                <span className="font-semibold text-white">Rotogravure & Flexo</span>
              </div>
              <div>
                <span className="text-[#D4B27A] block text-[11px] uppercase tracking-wider">Laminates</span>
                <span className="font-semibold text-white">BOPP & Barrier Foil</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#3DE0D0] block text-[11px] uppercase tracking-wider">Standard</span>
                <span className="font-semibold text-white">Food-Grade Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating, Softly Glowing Pouch */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight Glow for the Pouch */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#D4B27A]/25 via-[#3DE0D0]/20 to-transparent blur-3xl pointer-events-none" />

            {/* The Floating Pouch Unit */}
            <div className="relative w-full max-w-md animate-pouch-float">
              
              {/* Overlapping floating pill badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 glass-panel rounded-2xl px-4 py-2.5 border border-[#D4B27A]/30 shadow-xl flex items-center gap-2.5 text-xs backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-[#3DE0D0] animate-pulse" />
                <div>
                  <span className="text-[#D4B27A] font-mono font-bold block text-[10px] uppercase">Food-Grade Barrier</span>
                  <span className="text-white font-medium text-xs">Oxygen & Moisture Safe</span>
                </div>
              </div>

              {/* Overlapping floating pill badge 2: Bottom Left */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 glass-panel rounded-2xl px-4 py-2.5 border border-white/15 shadow-xl flex items-center gap-2.5 text-xs backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-[#D4B27A]" />
                <div>
                  <span className="text-white/60 font-mono block text-[10px] uppercase">Finishes Available</span>
                  <span className="text-[#F2EFE9] font-medium text-xs">Matte · Gloss · Spot Varnished</span>
                </div>
              </div>

              {/* 3D Specular Glowing Pouch Container */}
              <div className="relative aspect-[4/5] rounded-3xl p-6 flex items-center justify-center overflow-hidden glass-panel-gold shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,178,122,0.15)]">
                
                {/* SVG Pouch Model with Soft Lighting, Reflections and Shimmer */}
                <svg viewBox="0 0 300 380" className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]" fill="none">
                  <defs>
                    {/* Metallic Body Gradient */}
                    <linearGradient id="heroPouchBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E232E" />
                      <stop offset="35%" stopColor="#2A3140" />
                      <stop offset="50%" stopColor="#3A4356" />
                      <stop offset="65%" stopColor="#252B38" />
                      <stop offset="100%" stopColor="#151922" />
                    </linearGradient>

                    {/* Champagne Gold Sheen */}
                    <linearGradient id="heroGoldSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A8864E" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#D4B27A" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#E8D3AA" stopOpacity="0.2" />
                    </linearGradient>

                    {/* Specular Highlight Streak */}
                    <linearGradient id="specularHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                      <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.35" />
                      <stop offset="52%" stopColor="#3DE0D0" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>

                    {/* Gusset Shadow */}
                    <linearGradient id="gussetShade" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0B0D10" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1A1E26" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Top Seal Bar */}
                  <path d="M 60 40 L 240 40 L 240 60 L 60 60 Z" fill="#2D3442" stroke="#D4B27A" strokeWidth="1" />
                  <line x1="70" y1="48" x2="230" y2="48" stroke="#D4B27A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  
                  {/* Punch Hole */}
                  <rect x="135" y="44" width="30" height="7" rx="3.5" fill="#0B0D10" stroke="#3DE0D0" strokeWidth="0.8" opacity="0.8" />

                  {/* Main Pouch Silhouette with Soft Ergonomic Curves */}
                  <path
                    d="M 60 60 L 45 280 C 45 320, 255 320, 255 280 L 240 60 Z"
                    fill="url(#heroPouchBody)"
                    stroke="rgba(212,178,122,0.4)"
                    strokeWidth="1.5"
                  />

                  {/* Specular Light Reflection Sweep across front panel */}
                  <path
                    d="M 62 60 L 48 280 C 70 300, 150 300, 150 280 L 140 60 Z"
                    fill="url(#specularHighlight)"
                    opacity="0.3"
                  />

                  {/* Bottom Gusset Geometry */}
                  <path
                    d="M 45 280 Q 150 335 255 280"
                    fill="none"
                    stroke="#D4B27A"
                    strokeWidth="2"
                  />
                  <path
                    d="M 65 290 Q 150 260 235 290"
                    fill="url(#gussetShade)"
                    stroke="rgba(61,224,208,0.4)"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />

                  {/* Modern Packaging Typography on Pouch Surface */}
                  <g opacity="0.9">
                    <text x="150" y="145" textAnchor="middle" fill="#D4B27A" fontSize="13" fontFamily="Sora, sans-serif" fontWeight="800" letterSpacing="3">
                      ELITE PACKAGES
                    </text>
                    <text x="150" y="165" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.7" letterSpacing="1.5">
                      BARRIER LAMINATE
                    </text>

                    {/* Gold Decorative Graphic Rule */}
                    <rect x="95" y="180" width="110" height="1.5" rx="1" fill="url(#heroGoldSheen)" />

                    {/* Center Stamp Mark */}
                    <circle cx="150" cy="225" r="28" fill="#12151B" stroke="#D4B27A" strokeWidth="1" strokeDasharray="3 2" />
                    <circle cx="150" cy="225" r="22" fill="none" stroke="#3DE0D0" strokeWidth="0.8" opacity="0.6" />
                    <text x="150" y="222" textAnchor="middle" fill="#F2EFE9" fontSize="8" fontFamily="Space Grotesk, monospace" fontWeight="bold">
                      7-COLOR
                    </text>
                    <text x="150" y="233" textAnchor="middle" fill="#3DE0D0" fontSize="7" fontFamily="Space Grotesk, monospace">
                      FLEXO & GRAVURE
                    </text>
                  </g>

                  {/* Left & Right Edge Precision Seams */}
                  <line x1="58" y1="60" x2="47" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
                  <line x1="242" y1="60" x2="253" y2="280" stroke="rgba(212,178,122,0.3)" strokeWidth="3" />
                </svg>

                {/* Soft ground reflection blur */}
                <div className="absolute -bottom-10 inset-x-8 h-10 bg-gradient-to-t from-black/80 to-transparent blur-md" />
              </div>

              {/* Floating Base Shadow */}
              <div className="w-3/4 mx-auto h-4 bg-[#D4B27A]/10 rounded-full blur-xl mt-4" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
