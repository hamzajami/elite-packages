import React from 'react';
import { MATERIALS } from '../data/companyData.ts';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

interface MaterialsProps {
  currentLang: 'en' | 'ur';
}

export const Materials: React.FC<MaterialsProps> = ({ currentLang }) => {
  return (
    <section id="materials" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
            <span>04 / Raw Materials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
            {currentLang === 'en' ? 'Core Substrates & Consumables' : 'بنیادی میٹریلز اور سبسٹریٹس'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
            Packaging barrier strength depends on raw substrate purity and chemical consistency. We run standardized film grades, certified solventless adhesives, and food-grade printing inks.
          </p>
        </div>

        {/* 4 Materials Grid in Frosted Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MATERIALS.map((material, idx) => (
            <div
              key={material.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#D4B27A]/40 transition-all flex flex-col justify-between group shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="font-mono text-xs font-semibold text-white/50 uppercase">
                    Substrate 0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono text-[#3DE0D0] uppercase">
                    Food Contact Certified
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F2EFE9] font-display uppercase group-hover:text-[#D4B27A] transition-colors">
                  {material.name}
                </h3>
                
                <p className="text-xs font-mono text-[#D4B27A] mt-1">
                  {material.fullName}
                </p>

                <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#F2EFE9]/90 font-light">
                  <span className="font-mono uppercase text-white/50 block text-[10px] mb-1">Functional Role:</span>
                  {material.role}
                </div>

                {/* Technical Characteristics */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 font-semibold block">
                    Technical Specifications:
                  </span>
                  {material.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#F2EFE9]/80 font-light">
                      <div className="w-4 h-4 rounded-full bg-[#D4B27A]/15 border border-[#D4B27A]/30 text-[#D4B27A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Note */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <p className="text-xs text-white/40 italic font-light">
                  Note: {material.notes}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
