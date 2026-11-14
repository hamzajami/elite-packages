import React from 'react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  currentLang: 'en' | 'ur';
  onToggleLang: (lang: 'en' | 'ur') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onToggleLang }) => {
  return (
    <footer className="relative bg-[#07080A] text-white/50 border-t border-white/10 text-xs font-mono pt-16 pb-24 sm:pb-16 overflow-hidden">
      
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4B27A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4B27A] to-[#A8864E] text-[#0B0D10] font-black text-sm flex items-center justify-center font-display">
                EP
              </div>
              <span className="text-lg font-bold text-[#F2EFE9] font-display tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed font-light">
              Rotogravure and 7-color flexographic printing of food-grade flexible packaging in Lahore, Pakistan.
            </p>
            <div className="pt-2 text-white/40 text-[11px]">
              Plant: Quaid-e-Azam Industrial Estate, Kot Lakhpat, Lahore
            </div>
          </div>

          {/* Col 2: Formats */}
          <div className="space-y-3">
            <h4 className="text-[#D4B27A] font-bold uppercase tracking-wider text-xs font-display">
              Pouch Formats
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#products" className="hover:text-white transition-colors">Stand-Up Pouches</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sachets (3/4-Side Seal)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Flat-Bottom Box Pouches</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Side Gusset Bags</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Spouted Liquid Pouches</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Printed Rollstock Film</a></li>
            </ul>
          </div>

          {/* Col 3: Sectors */}
          <div className="space-y-3">
            <h4 className="text-[#D4B27A] font-bold uppercase tracking-wider text-xs font-display">
              Sectors & Solutions
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#industries" className="hover:text-white transition-colors">Snacks & Confectionery</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Spices & Masalas</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Whole Bean & Ground Coffee</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Pet Food & Kibble</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Nutraceutical Supplements</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Laminate Cross-Section</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Language Toggle */}
          <div className="space-y-3">
            <h4 className="text-[#D4B27A] font-bold uppercase tracking-wider text-xs font-display">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4B27A]" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-white/80 hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#3DE0D0]" />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#3DE0D0] hover:underline font-bold"
                >
                  WhatsApp: {COMPANY_INFO.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4B27A]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/80 hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] text-white/40 block mb-1.5">Language Mode:</span>
              <div className="inline-flex items-center gap-1 bg-white/[0.04] border border-white/10 p-1 rounded-full">
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-3 py-1 rounded-full text-[11px] transition-all ${
                    currentLang === 'en' ? 'bg-[#D4B27A] text-[#0B0D10] font-bold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('ur')}
                  className={`px-3 py-1 rounded-full text-[11px] transition-all ${
                    currentLang === 'ur' ? 'bg-[#D4B27A] text-[#0B0D10] font-bold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Flexible packaging manufacturer based in Lahore, Pakistan.
          </div>
          <div className="text-white/40">
            Food-grade rotogravure and 7-color flexographic printing.
          </div>
        </div>
      </div>
    </footer>
  );
};
