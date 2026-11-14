import React, { useState } from 'react';
import { POUCH_LAYERS } from '../data/companyData.ts';
import { Layers, Sparkles, Shield, Disc3, Info, Eye, Sliders } from 'lucide-react';

interface CapabilitiesProps {
  currentLang: 'en' | 'ur';
}

type FinishMode = 'matte' | 'gloss' | 'spot';

export const Capabilities: React.FC<CapabilitiesProps> = ({ currentLang }) => {
  const [finishMode, setFinishMode] = useState<FinishMode>('gloss');
  const [peelSpread, setPeelSpread] = useState<number>(35); // 0% closed to 100% fully peeled apart
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(2); // Default to barrier foil

  const capabilitiesList = [
    {
      title: "Printing Process",
      titleUrdu: "پرنٹنگ کا عمل",
      icon: <Layers className="w-5 h-5 text-[#D4B27A]" />,
      content: "Rotogravure and 7-color flexographic printing of food-grade flexible packaging. Rotogravure delivers continuous tones, precise halftone dots, and deep solid ink laydowns across long runs. 7-color flexographic printing provides rapid job setup and accurate registration for high-speed runs."
    },
    {
      title: "Surface Finishes",
      titleUrdu: "سطح کے فنشز",
      icon: <Sparkles className="w-5 h-5 text-[#3DE0D0]" />,
      content: "Available in matte, gloss, spot matte / spot gloss varnishing, transparent die-cut windows for product visibility, and secure heat seals. Spot effects are applied inline in exact register with artwork graphics."
    },
    {
      title: "Seal Quality",
      titleUrdu: "سیلنگ کا معیار",
      icon: <Shield className="w-5 h-5 text-[#D4B27A]" />,
      content: "Hermetic heat seals engineered for vacuum packs, gas flush nitrogen retention, and liquid tightness. Seal integrity is verified on calibrated tensile testers to prevent channel leaks and seam failure during transit."
    },
    {
      title: "Rollstock Film",
      titleUrdu: "رول اسٹاک فلم",
      icon: <Disc3 className="w-5 h-5 text-[#3DE0D0]" />,
      content: "Continuous printed multi-layer film wound on standard 76mm (3-inch) or 152mm (6-inch) cores for horizontal and vertical form-fill-seal (FFS) machines. Slit with optical edge-guide sensors to ensure straight tracking."
    }
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4B27A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
            <span>03 / Manufacturing Scope</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
            {currentLang === 'en' ? 'Factory Capabilities' : 'فیکٹری کی صلاحیتیں'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
            From cylinder engraving and multi-color web printing to solventless lamination and pouch conversion, our production line handles complete flexible packaging manufacturing under one roof.
          </p>
        </div>

        {/* 4 Core Pillars in Frosted Glass Cards with Rounded Curves */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilitiesList.map((cap, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-7 border border-white/10 hover:border-[#D4B27A]/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F2EFE9] font-display uppercase">
                  {currentLang === 'en' ? cap.title : cap.titleUrdu}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#F2EFE9]/70 leading-relaxed font-light">
                  {cap.content}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50 uppercase">
                Food Contact Compliant
              </div>
            </div>
          ))}
        </div>

        {/* FEATURE: Interactive Matte / Gloss / Spot Finish Toggle */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Finish controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#3DE0D0] mb-2 uppercase">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Optical Surface Simulator</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F2EFE9] font-display uppercase">
                  Finishes & Light Reflection
                </h3>
                <p className="mt-2 text-sm text-[#F2EFE9]/70 font-light leading-relaxed">
                  Toggle between surface treatments below to see how light reflection and specular highlights change across our printed substrates.
                </p>
              </div>

              {/* Finish Toggle Pill Buttons */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => setFinishMode('matte')}
                  className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    finishMode === 'matte'
                      ? 'bg-[#D4B27A] text-[#0B0D10] font-bold shadow-[0_0_20px_rgba(212,178,122,0.4)] scale-102'
                      : 'glass-pill text-[#F2EFE9]/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  Soft Matte Finish
                </button>

                <button
                  type="button"
                  onClick={() => setFinishMode('gloss')}
                  className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    finishMode === 'gloss'
                      ? 'bg-[#D4B27A] text-[#0B0D10] font-bold shadow-[0_0_20px_rgba(212,178,122,0.4)] scale-102'
                      : 'glass-pill text-[#F2EFE9]/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  High Gloss Finish
                </button>

                <button
                  type="button"
                  onClick={() => setFinishMode('spot')}
                  className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    finishMode === 'spot'
                      ? 'bg-[#3DE0D0] text-[#0B0D10] font-bold shadow-[0_0_20px_rgba(61,224,208,0.4)] scale-102'
                      : 'glass-pill text-[#F2EFE9]/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  Spot Matte / Spot Gloss
                </button>
              </div>

              {/* Description of the active finish */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs space-y-2">
                <span className="text-[#D4B27A] font-mono uppercase font-bold block">
                  {finishMode === 'matte' && 'Diffused Soft Matte Texture'}
                  {finishMode === 'gloss' && 'Mirror Specular High-Gloss Sheen'}
                  {finishMode === 'spot' && 'Dual-Varnish Contrast (Tactile & Reflective)'}
                </span>
                <p className="text-[#F2EFE9]/80 leading-relaxed font-light">
                  {finishMode === 'matte' && 'Reduces surface glare under retail lighting, providing a velvety tactile texture with smooth color depth.'}
                  {finishMode === 'gloss' && 'Maximizes ink vibrancy, saturation, and contrast with a reflective mirror-like gloss finish.'}
                  {finishMode === 'spot' && 'Combines a rich matte body with high-gloss registered varnish over brand elements and transparent die-cut windows.'}
                </p>
              </div>
            </div>

            {/* Right: Dynamic Sample Pouch with Morphing Lighting & Sheen */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-3xl p-8 bg-[#0B0D10]/80 border border-white/15 shadow-2xl flex items-center justify-center overflow-hidden">
                
                {/* Visual Reflection Simulation */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                    finishMode === 'matte' 
                      ? 'opacity-20 bg-gradient-to-tr from-white/10 to-transparent' 
                      : finishMode === 'gloss' 
                      ? 'opacity-80 bg-gradient-to-tr from-white/30 via-transparent to-white/10'
                      : 'opacity-60 bg-gradient-to-r from-transparent via-[#3DE0D0]/20 to-transparent'
                  }`}
                />

                <svg viewBox="0 0 240 300" className="w-full h-64 drop-shadow-2xl transition-all duration-500" fill="none">
                  {/* Pouch Silhouette */}
                  <path
                    d="M 50 35 L 35 230 C 35 260, 205 260, 205 230 L 190 35 Z"
                    fill={finishMode === 'matte' ? '#181C24' : finishMode === 'gloss' ? '#1F2633' : '#1B202A'}
                    stroke={finishMode === 'spot' ? '#3DE0D0' : '#D4B27A'}
                    strokeWidth="1.5"
                  />

                  {/* Surface Sheen Layer depending on mode */}
                  {finishMode === 'gloss' && (
                    <path
                      d="M 50 35 L 37 230 C 65 245, 120 245, 120 230 L 115 35 Z"
                      fill="url(#glossGlare)"
                      opacity="0.45"
                    />
                  )}

                  {finishMode === 'matte' && (
                    <path
                      d="M 50 35 L 35 230 C 35 260, 205 260, 205 230 L 190 35 Z"
                      fill="url(#matteDiffused)"
                      opacity="0.25"
                    />
                  )}

                  {finishMode === 'spot' && (
                    <g>
                      {/* Spot Gloss Logo Shield */}
                      <rect x="75" y="110" width="90" height="70" rx="14" fill="#252D3D" stroke="#3DE0D0" strokeWidth="1.5" />
                      <circle cx="120" cy="140" r="16" fill="rgba(61,224,208,0.2)" stroke="#3DE0D0" />
                      <text x="120" y="144" textAnchor="middle" fill="#3DE0D0" fontSize="9" fontFamily="Space Grotesk">SPOT</text>
                      {/* Transparent Window simulation */}
                      <rect x="85" y="195" width="70" height="25" rx="8" fill="rgba(255,255,255,0.08)" stroke="#D4B27A" strokeWidth="1" strokeDasharray="3 2" />
                      <text x="120" y="211" textAnchor="middle" fill="#D4B27A" fontSize="7" fontFamily="Space Grotesk">CLEAR WINDOW</text>
                    </g>
                  )}

                  {/* Definitions for gradients */}
                  <defs>
                    <linearGradient id="glossGlare" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <radialGradient id="matteDiffused" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  {/* Top Seal */}
                  <rect x="50" y="25" width="140" height="15" rx="3" fill="#2B3240" stroke="#D4B27A" strokeWidth="1" />
                  <line x1="60" y1="32" x2="180" y2="32" stroke="#D4B27A" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Bottom Gusset */}
                  <path d="M 35 230 Q 120 270 205 230" stroke="#D4B27A" strokeWidth="1.5" fill="none" />
                </svg>

                <div className="absolute bottom-4 inset-x-8 text-center">
                  <span className="text-[11px] font-mono text-[#D4B27A] tracking-wider uppercase">
                    Surface: {finishMode.toUpperCase()} SIMULATION
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FEATURE: Pouch Cross-Section Peel-Back Reveal */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4B27A] mb-2 uppercase">
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive Layer Peel-Back</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F2EFE9] font-display uppercase">
              Laminate Cross-Section Reveal
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#F2EFE9]/70 font-light leading-relaxed">
              Use the peel slider below to separate the engineered plies and inspect each protective barrier layer from the external print film to the internal food-contact sealant.
            </p>
          </div>

          {/* Interactive Peel Slider */}
          <div className="mb-10 max-w-xl bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase text-[#D4B27A] font-bold">Peel Spread:</span>
              <span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded-full">{peelSpread}%</span>
            </div>
            <div className="flex items-center gap-3 flex-1 max-w-xs">
              <span className="text-[10px] font-mono text-white/40">Bonded</span>
              <input
                type="range"
                min="0"
                max="100"
                value={peelSpread}
                onChange={(e) => setPeelSpread(Number(e.target.value))}
                className="w-full accent-[#D4B27A] cursor-pointer"
              />
              <span className="text-[10px] font-mono text-[#3DE0D0]">Peeled</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Peeled Plies Stack in 3D perspective */}
            <div className="lg:col-span-7 space-y-3 relative">
              <div className="text-[11px] font-mono uppercase text-[#D4B27A] flex justify-between px-2">
                <span>Exterior Packaging (Outside)</span>
                <span>Reverse Printed BOPP / PET</span>
              </div>

              {/* Layers with dynamically calculated gap based on peelSpread */}
              <div 
                className="space-y-2 transition-all duration-300"
                style={{
                  paddingTop: `${peelSpread * 0.15}px`,
                  paddingBottom: `${peelSpread * 0.15}px`,
                }}
              >
                {POUCH_LAYERS.map((layer, index) => {
                  const isSelected = activeLayerIndex === index;
                  // Dynamic translation offset for the peel-back simulation
                  const offset = (index - 2) * (peelSpread * 0.35);

                  const layerStyles = [
                    'bg-sky-950/70 border-sky-400 text-sky-200',
                    'bg-amber-950/70 border-amber-400 text-amber-200',
                    'bg-slate-200 text-[#0B0D10] font-bold border-white',
                    'bg-amber-950/70 border-amber-400 text-amber-200',
                    'bg-emerald-950/70 border-emerald-400 text-emerald-200',
                  ];

                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setActiveLayerIndex(index)}
                      style={{
                        transform: `translateY(${offset}px) scale(${isSelected ? 1.02 : 1})`,
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between shadow-lg ${
                        layerStyles[index]
                      } ${
                        isSelected 
                          ? 'ring-2 ring-[#3DE0D0] shadow-[0_0_25px_rgba(61,224,208,0.3)]' 
                          : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-black/40 text-xs font-mono flex items-center justify-center shrink-0">
                          0{index + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-wide">
                          {layer.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono opacity-90 hidden sm:inline-block">
                        {layer.thickness}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="text-[11px] font-mono uppercase text-[#3DE0D0] flex justify-between px-2">
                <span>Internal Food Contact (Inside)</span>
                <span>Hermetic Low-Temp Sealant</span>
              </div>
            </div>

            {/* Layer Detail Inspector Card */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4B27A]">
                <Info className="w-4 h-4 text-[#3DE0D0]" />
                <span>Layer Inspector · Ply 0{activeLayerIndex + 1} of 05</span>
              </div>

              <h4 className="text-2xl font-bold font-display text-[#F2EFE9] uppercase">
                {POUCH_LAYERS[activeLayerIndex].name}
              </h4>

              <div className="inline-block bg-white/[0.05] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#3DE0D0]">
                Thickness: {POUCH_LAYERS[activeLayerIndex].thickness}
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-white/50 font-mono uppercase block text-[11px]">Primary Role:</span>
                  <p className="text-sm text-[#F2EFE9] mt-0.5 font-medium">
                    {POUCH_LAYERS[activeLayerIndex].role}
                  </p>
                </div>
                <div>
                  <span className="text-white/50 font-mono uppercase block text-[11px]">Performance Property:</span>
                  <p className="text-xs text-[#F2EFE9]/80 mt-0.5 leading-relaxed font-light">
                    {POUCH_LAYERS[activeLayerIndex].property}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
                <span>Solventless Adhesive Bond</span>
                <span className="text-[#3DE0D0]">Certified Food Safe</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
