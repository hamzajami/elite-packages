import React, { useState } from 'react';
import { GALLERY_SLOTS } from '../data/companyData.ts';
import { Eye, X } from 'lucide-react';
import { PouchDiagram } from './PouchDiagrams.tsx';

interface GalleryProps {
  currentLang: 'en' | 'ur';
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  // Photos live in /public/images/gallery/<slot-id>.jpg. If a file is missing, the pouch diagram is shown instead.
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [activeModalSlot, setActiveModalSlot] = useState<typeof GALLERY_SLOTS[0] | null>(null);

  const formats = ['All', 'Stand-Up Pouch', 'Flat-Bottom', 'Rollstock Film', 'Sachets', 'Side Gusset Bags', 'Spouted Pouches'];

  const filteredSlots = selectedFormat === 'All' 
    ? GALLERY_SLOTS 
    : GALLERY_SLOTS.filter(s => s.format === selectedFormat);

  const markFailed = (slotId: string) => {
    setFailedImages(prev => ({ ...prev, [slotId]: true }));
  };

  const getImageSrc = (slotId: string) =>
    failedImages[slotId] ? null : `/images/gallery/${slotId}.jpg`;

  const getDiagramType = (format: string) => {
    if (format.includes('Stand-Up')) return 'standup';
    if (format.includes('Flat-Bottom')) return 'flatbottom';
    if (format.includes('Rollstock')) return 'rollstock';
    if (format.includes('Sachet')) return 'sachet';
    if (format.includes('Side Gusset')) return 'sidegusset';
    return 'spouted';
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
            <span>06 / Production Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
            {currentLang === 'en' ? 'Pouch & Film Showcase' : 'پاؤچ اور فلم گیلری'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
            A look at the pouch and film formats we produce, with the materials and finishes behind each one.
          </p>
        </div>

        {/* Format Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {formats.map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => setSelectedFormat(fmt)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                selectedFormat === fmt
                  ? 'bg-[#D4B27A] text-[#0B0D10] font-bold shadow-[0_0_15px_rgba(212,178,122,0.35)]'
                  : 'glass-pill text-[#F2EFE9]/70 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>

        {/* FEATURE: Masonry Layout with Rounded Image Slots */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredSlots.map((slot, index) => {
            const imageSrc = getImageSrc(slot.id);
            // Alternating heights for true masonry aesthetic
            const heightClasses = [
              'aspect-square',
              'aspect-[4/5]',
              'aspect-square',
              'aspect-[4/5]',
              'aspect-square',
              'aspect-[4/5]',
            ];
            const aspectClass = heightClasses[index % heightClasses.length];

            return (
              <div
                key={slot.id}
                onClick={() => setActiveModalSlot(slot)}
                className="break-inside-avoid glass-panel rounded-3xl p-5 border border-white/10 hover:border-[#D4B27A]/50 transition-all duration-300 flex flex-col cursor-pointer group shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Top Slot Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="font-semibold text-[#D4B27A]">{slot.placeholderLabel}</span>
                  <span className="text-white/40">{slot.dims}</span>
                </div>

                {/* Rounded Media Frame */}
                <div className={`relative ${aspectClass} w-full rounded-2xl bg-[#0B0D10]/70 border border-white/10 flex items-center justify-center overflow-hidden transition-colors group-hover:border-[#3DE0D0]/30`}>
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={slot.title}
                      loading="lazy"
                      onError={() => markFailed(slot.id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center space-y-3">
                      <div className="w-24 h-24 opacity-80 group-hover:scale-110 transition-transform duration-300 text-[#F2EFE9]">
                        <PouchDiagram type={getDiagramType(slot.format)} className="w-full h-full" />
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-xs font-display font-bold text-[#F2EFE9] uppercase block">
                          {slot.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#D4B27A] block">
                          {slot.specs}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover Inspection Badge */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md rounded-full text-white text-[10px] font-mono px-3 py-1 flex items-center gap-1.5 border border-white/20">
                    <Eye className="w-3 h-3 text-[#3DE0D0]" />
                    <span>Inspect</span>
                  </div>
                </div>

                {/* Bottom Spec Details */}
                <div className="pt-4 flex items-center justify-between text-xs">
                  <span className="font-display font-bold text-[#F2EFE9] uppercase">{slot.format}</span>
                  <span className="text-[#3DE0D0] font-mono text-[11px]">{slot.finish}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for inspect */}
        {activeModalSlot && (
          <div className="fixed inset-0 z-50 bg-[#0B0D10]/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-panel-gold rounded-3xl max-w-lg w-full p-8 space-y-6 shadow-2xl relative border border-[#D4B27A]/30">
              <button
                type="button"
                onClick={() => setActiveModalSlot(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-white/60 hover:text-white bg-white/[0.05] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4B27A]">
                  {activeModalSlot.placeholderLabel} · Packaging Spec
                </span>
                <h3 className="text-2xl font-bold font-display text-[#F2EFE9] mt-1 uppercase">
                  {activeModalSlot.title}
                </h3>
              </div>

              <div className="aspect-square rounded-2xl bg-[#0B0D10]/80 border border-white/10 flex items-center justify-center overflow-hidden">
                {getImageSrc(activeModalSlot.id) ? (
                  <img
                    src={getImageSrc(activeModalSlot.id) as string}
                    onError={() => markFailed(activeModalSlot.id)}
                    alt={activeModalSlot.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-36 h-36 text-white">
                      <PouchDiagram type={getDiagramType(activeModalSlot.format)} className="w-full h-full" />
                    </div>
                    <p className="mt-4 text-xs font-mono text-white/50">
                      Product photography coming soon.
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50">Format:</span>
                  <span className="font-bold text-[#F2EFE9]">{activeModalSlot.format}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50">Surface Finish:</span>
                  <span className="font-bold text-[#3DE0D0]">{activeModalSlot.finish}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50">Substrate Gauge:</span>
                  <span className="font-bold text-[#F2EFE9]">{activeModalSlot.specs}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50">Dimensions:</span>
                  <span className="font-bold text-[#D4B27A]">{activeModalSlot.dims}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalSlot(null)}
                className="w-full bg-[#D4B27A] hover:bg-[#E8D3AA] text-[#0B0D10] font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all"
              >
                Close Spec View
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
