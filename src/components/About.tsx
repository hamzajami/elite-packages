import React from 'react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { MapPin, ShieldCheck, Factory, Truck, Sparkles } from 'lucide-react';

interface AboutProps {
  currentLang: 'en' | 'ur';
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4B27A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A]">
              <span>07 / Company Profile</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
              {currentLang === 'en' ? 'About Elite Packages' : 'ایلیٹ پیکجز کے بارے میں'}
            </h2>

            {/* Short company story */}
            <p className="text-base sm:text-xl text-[#F2EFE9]/85 leading-relaxed font-light">
              {COMPANY_INFO.establishedStory}
            </p>

            {/* What We Stand For */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#D4B27A] font-bold">
                What We Stand For:
              </h3>
              
              <div className="space-y-4">
                {COMPANY_INFO.aboutTenets.map((tenet, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl p-5 border border-white/10 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D4B27A]/20 border border-[#D4B27A]/40 text-[#D4B27A] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-display text-[#F2EFE9] uppercase">
                        {tenet.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F2EFE9]/70 mt-1 leading-relaxed font-light">
                        {tenet.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Frosted Glass Presence Plate */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4B27A]/15 to-[#3DE0D0]/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#D4B27A]/30 space-y-7 shadow-2xl relative">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4B27A] block mb-1">
                  Manufacturing Presence
                </span>
                <h3 className="text-2xl font-bold font-display text-[#F2EFE9] uppercase">
                  Lahore Production Base
                </h3>
              </div>

              <div className="space-y-5 text-xs font-mono">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                    <Factory className="w-4 h-4 text-[#D4B27A]" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px] uppercase">Facility Location:</span>
                    <span className="text-[#F2EFE9] font-medium text-sm block mt-0.5">
                      15-KM Sheikhupura Road, Javed Nagar, Lahore
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#3DE0D0]" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px] uppercase">Production Scope:</span>
                    <span className="text-[#F2EFE9] font-medium text-sm block mt-0.5">
                      Rotogravure Printing, 7-Color Flexo, Solventless Lamination, Pouch Conversion
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4 text-[#D4B27A]" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px] uppercase">Logistics Reach:</span>
                    <span className="text-[#F2EFE9] font-medium text-sm block mt-0.5">
                      Serving consumer and food manufacturers across Pakistan
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                Operating Hours: {COMPANY_INFO.hours}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
