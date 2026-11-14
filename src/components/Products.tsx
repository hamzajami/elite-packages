import React, { useState } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/companyData.ts';
import { PouchDiagram } from './PouchDiagrams.tsx';

interface ProductsProps {
  currentLang: 'en' | 'ur';
  onSelectProductForQuote: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ currentLang, onSelectProductForQuote }) => {
  const [selectedFormatId, setSelectedFormatId] = useState<string>(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find(p => p.id === selectedFormatId) || PRODUCTS[0];
  const currentIndex = PRODUCTS.findIndex(p => p.id === selectedFormatId);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
    setSelectedFormatId(PRODUCTS[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % PRODUCTS.length;
    setSelectedFormatId(PRODUCTS[nextIdx].id);
  };

  return (
    <section id="products" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Curved Section Divider at Top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4B27A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#3DE0D0]" />
              <span>01 / Pouch Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
              {currentLang === 'en' ? 'Pouch Formats & Rollstock' : 'پاؤچ کے فارمیٹس اور رول اسٹاک'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
              Explore our converted pouch geometries and continuous rollstock film. Select any format below to inspect its technical structure.
            </p>
          </div>

          {/* Prev/Next arrows for fast navigation */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4B27A] hover:bg-[#D4B27A]/10 text-white transition-all"
              aria-label="Previous format"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[#F2EFE9]/50 px-2">
              0{currentIndex + 1} / 0{PRODUCTS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4B27A] hover:bg-[#D4B27A]/10 text-white transition-all"
              aria-label="Next format"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Format Pill Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {PRODUCTS.map((product) => {
            const isSelected = product.id === selectedFormatId;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setSelectedFormatId(product.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#D4B27A] text-[#0B0D10] font-bold shadow-[0_0_20px_rgba(212,178,122,0.35)] scale-102'
                    : 'bg-white/[0.04] text-[#F2EFE9]/70 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {currentLang === 'en' ? product.name : product.nameUrdu}
              </button>
            );
          })}
        </div>

        {/* Morphing Explorer Showcase Container with Large Rounded Curves */}
        <div className="relative glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Morphing Left Column: High-Fidelity Silhouette and Lighting */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
              
              {/* Backlight halo specific to current selection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4B27A]/15 via-transparent to-[#3DE0D0]/10 rounded-3xl blur-2xl pointer-events-none" />

              {/* Dynamic Pouch Blueprint & Specular Frame */}
              <div className="relative w-full max-w-sm rounded-2xl p-8 bg-[#0B0D10]/60 border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-105">
                <div className="w-full h-64 text-[#F2EFE9]">
                  <PouchDiagram type={selectedProduct.diagramType} className="w-full h-full" />
                </div>

                {/* Overlapping format badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-[#3DE0D0]">
                  {selectedProduct.thicknessRange}
                </div>
              </div>
            </div>

            {/* Morphing Right Column: Technical Details & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4B27A] uppercase tracking-wider">
                  <span>Format 0{currentIndex + 1}</span>
                  <span className="text-white/20">/</span>
                  <span className="text-[#3DE0D0]">Converted Pouch</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F2EFE9] font-display uppercase tracking-tight">
                  {currentLang === 'en' ? selectedProduct.name : selectedProduct.nameUrdu}
                </h3>
                <p className="text-base sm:text-lg text-[#F2EFE9]/80 font-light leading-relaxed">
                  {currentLang === 'en' ? selectedProduct.shortDesc : selectedProduct.shortDescUrdu}
                </p>
              </div>

              {/* Technical Specifications Grid with Frosted Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-white/50 font-mono text-[11px] uppercase block">Target Applications</span>
                  <span className="text-[#F2EFE9] font-medium text-sm block">{selectedProduct.idealFor}</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-white/50 font-mono text-[11px] uppercase block">Nominal Gauge</span>
                  <span className="text-[#3DE0D0] font-mono font-medium text-sm block">{selectedProduct.thicknessRange}</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-white/50 font-mono text-[11px] uppercase block">Barrier Substrate</span>
                  <span className="text-[#F2EFE9] font-medium block">{selectedProduct.barrierGrade}</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-white/50 font-mono text-[11px] uppercase block">Sealing & Closures</span>
                  <span className="text-[#F2EFE9] font-medium block">{selectedProduct.closures}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProductForQuote(selectedProduct.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4B27A] hover:bg-[#E8D3AA] text-[#0B0D10] font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(212,178,122,0.3)] hover:scale-102"
                >
                  <span>Request Quote for {selectedProduct.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
