import React, { useRef } from 'react';
import { INDUSTRIES, IndustryItem } from '../data/companyData.ts';
import { Check, ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';

interface IndustriesProps {
  currentLang: 'en' | 'ur';
  onSelectIndustryForQuote: (industryName: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ currentLang, onSelectIndustryForQuote }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  // Industry-specific visual icons / silhouettes
  const getIndustryVisual = (id: string) => {
    switch (id) {
      case 'snacks':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#D4B27A]" fill="none" stroke="currentColor">
            <path d="M 30 20 L 90 20 L 95 100 L 25 100 Z" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 35 30 L 85 30 L 88 90 L 32 90 Z" fill="rgba(212,178,122,0.15)" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="14" stroke="#3DE0D0" strokeWidth="1.5" />
            <text x="60" y="64" textAnchor="middle" fill="#3DE0D0" fontSize="9" fontFamily="Space Grotesk">N₂ GAS</text>
          </svg>
        );
      case 'spices':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#D4B27A]" fill="none" stroke="currentColor">
            <rect x="30" y="25" width="60" height="70" rx="6" fill="rgba(212,178,122,0.15)" strokeWidth="2" />
            <path d="M 30 40 L 90 40" stroke="#3DE0D0" strokeWidth="1.5" />
            <path d="M 30 80 L 90 80" stroke="#3DE0D0" strokeWidth="1.5" />
            <text x="60" y="64" textAnchor="middle" fill="#D4B27A" fontSize="9" fontFamily="Space Grotesk">AROMA</text>
          </svg>
        );
      case 'coffee':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#D4B27A]" fill="none" stroke="currentColor">
            <path d="M 35 25 L 85 25 L 90 95 L 30 95 Z" fill="rgba(212,178,122,0.15)" strokeWidth="2" />
            <circle cx="60" cy="50" r="8" stroke="#3DE0D0" strokeWidth="1.5" fill="#0B0D10" />
            <circle cx="60" cy="50" r="3" fill="#D4B27A" />
            <text x="60" y="78" textAnchor="middle" fill="#F2EFE9" fontSize="8" fontFamily="Space Grotesk">1-WAY VALVE</text>
          </svg>
        );
      case 'pet-food':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#D4B27A]" fill="none" stroke="currentColor">
            <path d="M 30 20 L 90 20 L 95 100 L 25 100 Z" fill="rgba(212,178,122,0.15)" strokeWidth="2" />
            <line x1="30" y1="20" x2="90" y2="20" stroke="#3DE0D0" strokeWidth="3" />
            <text x="60" y="65" textAnchor="middle" fill="#D4B27A" fontSize="8" fontFamily="Space Grotesk">HEAVY GAUGE</text>
          </svg>
        );
      case 'supplements':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#D4B27A]" fill="none" stroke="currentColor">
            <path d="M 25 35 L 95 35 L 88 95 L 32 95 Z" fill="rgba(212,178,122,0.15)" strokeWidth="2" />
            <ellipse cx="60" cy="35" rx="35" ry="8" stroke="#3DE0D0" strokeWidth="1.5" />
            <text x="60" y="68" textAnchor="middle" fill="#F2EFE9" fontSize="8" fontFamily="Space Grotesk">WIDE MOUTH</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="industries" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Horizontal Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
              <span>02 / Industries Served</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
              {currentLang === 'en' ? 'Targeted Barrier Solutions' : 'مخصوص انڈسٹریز کے لیے پیکجنگ'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
              Scroll through our industry-tailored packaging lines engineered for moisture retention, aroma preservation, and oil resistance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="p-3.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4B27A] hover:bg-[#D4B27A]/10 text-white transition-all shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="p-3.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4B27A] hover:bg-[#D4B27A]/10 text-white transition-all shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Strip with Rounded Image & Spec Slots */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {INDUSTRIES.map((industry: IndustryItem, idx: number) => (
            <div
              key={industry.id}
              className="w-[310px] sm:w-[380px] shrink-0 snap-start glass-panel rounded-3xl p-7 border border-white/10 hover:border-[#D4B27A]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Rounded Top Image / Graphic Slot */}
                <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-b from-[#161A22] to-[#0E1116] border border-white/10 flex items-center justify-center p-6 mb-6 relative overflow-hidden group-hover:border-[#3DE0D0]/30 transition-colors">
                  <div className="absolute inset-0 bg-radial from-[#D4B27A]/10 to-transparent opacity-50" />
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {getIndustryVisual(industry.id)}
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-[#D4B27A]">
                    Sector 0{idx + 1}
                  </div>
                </div>

                {/* Industry Header */}
                <h3 className="text-2xl font-bold font-display uppercase text-[#F2EFE9] group-hover:text-[#D4B27A] transition-colors">
                  {currentLang === 'en' ? industry.name : industry.nameUrdu}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-[#F2EFE9]/70 leading-relaxed font-light">
                  {industry.description}
                </p>

                {/* Key Packaging Needs */}
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4B27A] font-semibold block">
                    Packaging Requirements:
                  </span>
                  {industry.keyPackagingNeeds.map((need, nIdx) => (
                    <div key={nIdx} className="flex items-start gap-2 text-xs text-[#F2EFE9]/80">
                      <div className="w-4 h-4 rounded-full bg-[#3DE0D0]/10 border border-[#3DE0D0]/30 text-[#3DE0D0] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[11px] leading-snug">{need}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Film Structure */}
                <div className="mt-5 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                    Laminate Formula:
                  </span>
                  <span className="text-xs font-mono font-medium text-[#F2EFE9] block mt-0.5">
                    {industry.recommendedStructure}
                  </span>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onSelectIndustryForQuote(industry.name)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-[#D4B27A] text-[#F2EFE9] hover:text-[#0B0D10] font-mono text-xs uppercase tracking-wider py-3 px-4 rounded-full transition-all font-semibold"
                >
                  <span>Inquire for {industry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
