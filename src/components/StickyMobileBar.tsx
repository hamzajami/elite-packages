import React from 'react';
import { MessageSquare, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface StickyMobileBarProps {
  onRequestQuote: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onRequestQuote }) => {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
      <div className="glass-panel rounded-full p-2 border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* WhatsApp Direct - High contrast pill */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hello%20Elite%20Packages,%20I%20am%20inquiring%20about%20flexible%20packaging%20quotes`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#3DE0D0] active:bg-[#20BEAE] text-[#0B0D10] py-3 px-2 rounded-full min-h-[48px] text-center font-bold shadow-[0_0_15px_rgba(61,224,208,0.4)] transition-all"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="text-[11px] font-mono uppercase">WhatsApp</span>
          </a>

          {/* Call Plant */}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-1 bg-white/[0.06] active:bg-white/[0.12] text-[#F2EFE9] py-3 px-2 rounded-full min-h-[48px] text-center border border-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4B27A] shrink-0" />
            <span className="text-[11px] font-mono uppercase font-medium">Call</span>
          </a>

          {/* Quote Form */}
          <a
            href="#contact"
            onClick={onRequestQuote}
            className="flex items-center justify-center gap-1 bg-[#D4B27A] active:bg-[#E8D3AA] text-[#0B0D10] py-3 px-2 rounded-full min-h-[48px] text-center font-bold shadow-[0_0_15px_rgba(212,178,122,0.3)] transition-all"
          >
            <Send className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[11px] font-mono uppercase">Quote</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
