import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../data/companyData.ts';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessProps {
  currentLang: 'en' | 'ur';
}

export const Process: React.FC<ProcessProps> = ({ currentLang }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll within process section to draw the glowing line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 to 1
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrolled = windowHeight * 0.5 - sectionTop;
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      
      const stepIndex = Math.min(Math.floor(progress * 5) + 1, 5);
      setActiveStep(Math.max(stepIndex, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4B27A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
            <span>05 / Manufacturing Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
            {currentLang === 'en' ? '5-Step Production Sequence' : 'پیداوار کا 5 مرحلہ وار عمل'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
            Every production job follows five controlled factory operations from electronic artwork approval to finished goods dispatch.
          </p>
        </div>

        {/* FEATURE: Glowing Timeline Line that Draws Itself on Scroll */}
        <div ref={containerRef} className="relative pl-6 sm:pl-12 lg:pl-16 space-y-10 sm:space-y-12">
          
          {/* Continuous Background Track Line */}
          <div className="absolute left-6 sm:left-12 lg:left-16 top-6 bottom-6 w-0.5 bg-white/10 -translate-x-1/2" />

          {/* Dynamic Glowing Timeline Line that fills according to active step */}
          <div
            className="absolute left-6 sm:left-12 lg:left-16 top-6 w-0.5 bg-gradient-to-b from-[#D4B27A] via-[#3DE0D0] to-[#D4B27A] -translate-x-1/2 transition-all duration-500 shadow-[0_0_15px_#3DE0D0]"
            style={{
              height: `${((activeStep - 0.5) / 5) * 100}%`,
            }}
          />

          {/* 5 Process Steps */}
          {PROCESS_STEPS.map((step) => {
            const isCompletedOrActive = step.step <= activeStep;
            const isCurrent = step.step === activeStep;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`relative flex items-start gap-6 sm:gap-8 group cursor-pointer transition-all ${
                  isCurrent ? 'scale-[1.01]' : 'opacity-85 hover:opacity-100'
                }`}
              >
                {/* Glowing Step Node Dot */}
                <div
                  className={`absolute -left-6 sm:-left-12 lg:-left-16 top-6 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isCurrent
                      ? 'bg-[#3DE0D0] text-[#0B0D10] ring-4 ring-[#3DE0D0]/30 shadow-[0_0_20px_#3DE0D0]'
                      : isCompletedOrActive
                      ? 'bg-[#D4B27A] text-[#0B0D10] shadow-[0_0_12px_rgba(212,178,122,0.5)]'
                      : 'bg-[#161A22] border border-white/20 text-white/50'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">0{step.step}</span>
                </div>

                {/* Step Card in Frosted Glass with Rounded Curves */}
                <div
                  className={`flex-1 glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                    isCurrent
                      ? 'border-[#3DE0D0]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(61,224,208,0.15)] bg-white/[0.04]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D4B27A] font-semibold">
                        {step.leadTimeIndicator}
                      </span>
                      <span className="text-white/20">/</span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#3DE0D0]">
                        {step.keyAction}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/60">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isCompletedOrActive ? 'text-[#3DE0D0]' : 'text-white/30'}`} />
                      <span>Quality Gate 0{step.step}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F2EFE9] font-display uppercase mt-1">
                    {currentLang === 'en' ? step.title : step.titleUrdu}
                  </h3>

                  <p className="mt-3 text-sm text-[#F2EFE9]/75 leading-relaxed font-light max-w-3xl">
                    {currentLang === 'en' ? step.summary : step.summaryUrdu}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repeat Orders Callout Pill Card */}
        <div className="mt-14 glass-panel-gold rounded-3xl p-8 border border-[#D4B27A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[#D4B27A] font-mono font-bold text-xs uppercase tracking-wider block">
              Repeat Orders & Cylinder Storage
            </span>
            <p className="text-sm text-[#F2EFE9]/80 font-light">
              Engraved rotogravure cylinders are cataloged and stored in Lahore for subsequent production runs without re-engraving fees.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#D4B27A] hover:bg-[#E8D3AA] text-[#0B0D10] font-bold uppercase py-3.5 px-7 rounded-full text-xs tracking-wider transition-all shadow-[0_0_20px_rgba(212,178,122,0.3)] hover:scale-102"
          >
            Schedule Production
          </a>
        </div>

      </div>
    </section>
  );
};
