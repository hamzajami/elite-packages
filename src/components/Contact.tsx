import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData.ts';
import { MessageSquare, Phone, Mail, MapPin, Send, Copy, Check, Clock, Building2, Sparkles } from 'lucide-react';

interface ContactProps {
  currentLang: 'en' | 'ur';
  prefilledProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, prefilledProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    productType: prefilledProduct || 'Stand-Up Pouches',
    quantity: '25,000 units',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, productType: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getFormattedSummary = () => {
    return `*Quote Request - Elite Packages (Lahore)*\n` +
      `*Name:* ${formData.name || 'Not specified'}\n` +
      `*Company:* ${formData.company || 'Not specified'}\n` +
      `*Product Type:* ${formData.productType}\n` +
      `*Estimated Quantity:* ${formData.quantity}\n` +
      `*Specifications / Message:* ${formData.message || 'No additional notes'}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Elite Packages,\n\nI would like to request a packaging quotation:\n` +
      `Name: ${formData.name || '-'}\n` +
      `Company: ${formData.company || '-'}\n` +
      `Product Type: ${formData.productType}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Notes: ${formData.message || 'Please contact me regarding cylinder proofing and pricing.'}`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${text}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Quote Inquiry: ${formData.productType} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(getFormattedSummary());
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFormattedSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Soft curved divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4B27A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4B27A] mb-3">
            <span>08 / Factory Inquiries & Quotes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2EFE9] font-display uppercase">
            {currentLang === 'en' ? 'Request a Production Quote' : 'کوٹیشن اور فیکٹری رابطہ'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F2EFE9]/70 leading-relaxed font-light">
            Submit your packaging specifications below. Fill in your packaging brief below, then send it to our team on WhatsApp or by email, or copy it to share however you prefer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Floating Glass-Style Quote Request Form */}
          <div className="lg:col-span-7 glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#D4B27A]/30 shadow-2xl relative">
            
            <div className="border-b border-white/10 pb-5 mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4B27A]">
                  Direct Manufacturer Portal
                </span>
                <h3 className="text-2xl font-bold font-display text-[#F2EFE9] uppercase mt-0.5">
                  Packaging Specification Form
                </h3>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#3DE0D0]">
                Lahore Desk
              </span>
            </div>

            {submitted ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3.5 text-[#3DE0D0]">
                  <div className="w-10 h-10 rounded-full bg-[#3DE0D0]/10 border border-[#3DE0D0]/40 flex items-center justify-center font-bold">
                    <Check className="w-5 h-5 text-[#3DE0D0]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#F2EFE9] uppercase text-lg">Quote Request Ready</h4>
                    <p className="text-xs text-white/60">Send it to our team using one of the options below.</p>
                  </div>
                </div>

                <div className="bg-[#0B0D10]/80 border border-white/10 rounded-2xl p-5 font-mono text-xs text-[#F2EFE9]/90 whitespace-pre-wrap leading-relaxed">
                  {getFormattedSummary()}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3DE0D0] hover:bg-[#25C4B4] text-[#0B0D10] font-mono text-xs uppercase tracking-wider py-4 px-6 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(61,224,208,0.35)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] text-[#F2EFE9] font-mono text-xs uppercase tracking-wider py-4 px-6 rounded-full font-bold transition-all border border-white/15"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-1.5 glass-pill text-white font-mono text-xs uppercase py-4 px-5 rounded-full transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#3DE0D0]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#D4B27A] underline pt-2 block hover:text-white"
                >
                  Edit specifications or submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#F2EFE9]/80 mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#F2EFE9] placeholder-white/20 focus:outline-none focus:border-[#D4B27A] focus:ring-1 focus:ring-[#D4B27A] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#F2EFE9]/80 mb-2 font-semibold">
                      Company / Brand *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Indus Foods Ltd"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#F2EFE9] placeholder-white/20 focus:outline-none focus:border-[#D4B27A] focus:ring-1 focus:ring-[#D4B27A] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#F2EFE9]/80 mb-2 font-semibold">
                      Packaging Product Type *
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full bg-[#12151B] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#F2EFE9] focus:outline-none focus:border-[#D4B27A] transition-all"
                    >
                      {PRODUCTS.map(p => (
                        <option key={p.id} value={p.name} className="bg-[#12151B] text-white">{p.name}</option>
                      ))}
                      <option value="Custom Multi-Ply Barrier Laminate" className="bg-[#12151B] text-white">Custom Multi-Ply Barrier Laminate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#F2EFE9]/80 mb-2 font-semibold">
                      Estimated Production Quantity *
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#12151B] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#F2EFE9] focus:outline-none focus:border-[#D4B27A] transition-all"
                    >
                      <option value="10,000 units (Trial Run)" className="bg-[#12151B] text-white">10,000 units (Trial Run)</option>
                      <option value="25,000 units" className="bg-[#12151B] text-white">25,000 units</option>
                      <option value="50,000 units" className="bg-[#12151B] text-white">50,000 units</option>
                      <option value="100,000+ units" className="bg-[#12151B] text-white">100,000+ units</option>
                      <option value="500 kg - 1,000 kg (Rollstock)" className="bg-[#12151B] text-white">500 kg - 1,000 kg (Rollstock)</option>
                      <option value="2,000+ kg (Rollstock)" className="bg-[#12151B] text-white">2,000+ kg (Rollstock)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#F2EFE9]/80 mb-2 font-semibold">
                    Dimensions, Food Application, & Finishes (Message)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide pouch dimensions (width x height x gusset), shelf life requirements, or surface finish preferences (matte, gloss, window, zipper)."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-[#F2EFE9] placeholder-white/20 focus:outline-none focus:border-[#D4B27A] focus:ring-1 focus:ring-[#D4B27A] transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D4B27A] hover:bg-[#E8D3AA] text-[#0B0D10] font-mono text-xs uppercase tracking-wider py-4 px-8 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(212,178,122,0.35)] hover:scale-102"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quote Request</span>
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-[#F2EFE9] font-mono text-xs uppercase tracking-wider py-4 px-6 rounded-full font-bold transition-all border border-white/15"
                  >
                    <MessageSquare className="w-4 h-4 text-[#3DE0D0]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Facts & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Facts Panel */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-5">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4B27A] block mb-1">
                  Factory Office
                </span>
                <h3 className="text-xl font-bold font-display text-[#F2EFE9] uppercase">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4B27A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase">Plant Address:</span>
                    <span className="text-[#F2EFE9] text-sm">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4B27A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase">Landline Phone:</span>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-[#F2EFE9] hover:text-[#D4B27A] text-sm font-medium">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#3DE0D0] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase">WhatsApp Business:</span>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#3DE0D0] hover:underline text-sm font-bold"
                    >
                      {COMPANY_INFO.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4B27A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase">Electronic Mail:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#F2EFE9] hover:text-[#D4B27A] text-sm block">
                      {COMPANY_INFO.email}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="text-white/50 hover:text-[#D4B27A] text-xs block mt-0.5">
                      {COMPANY_INFO.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase">Operating Hours:</span>
                    <span className="text-white/70 text-xs">{COMPANY_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Plant location card */}
            <div className="glass-panel rounded-3xl p-6 space-y-4 border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#D4B27A]" />
                  <span className="font-mono text-xs font-bold uppercase text-[#F2EFE9]">
                    Plant Location
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-white/[0.05] border border-white/10 text-[#3DE0D0] px-2.5 py-0.5 rounded-full">
                  31.642596628778104, 74.19688369345413
                </span>
              </div>

              {/* Graphic Map Blueprint Schematic with Soft Curves */}
              <div className="relative h-44 rounded-2xl bg-[#07080A] border border-white/10 overflow-hidden flex flex-col justify-between p-4">
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#D4B27A" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="120" y1="0" x2="120" y2="200" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="260" y1="0" x2="260" y2="200" stroke="#3DE0D0" strokeWidth="2" />
                </svg>

                <div className="relative z-10 flex justify-between text-[10px] font-mono text-white/50">
                  <span>JAVED NAGAR</span>
                  <span>15-KM SHEIKHUPURA ROAD</span>
                </div>

                <div className="relative z-10 self-center flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#D4B27A] border-2 border-white shadow-[0_0_15px_#D4B27A] animate-pulse" />
                  <div className="bg-[#0B0D10]/90 text-white border border-[#D4B27A]/40 px-3 py-1 rounded-full text-[10px] font-mono mt-1 text-center font-bold">
                    ELITE PACKAGES PLANT
                  </div>
                </div>

                <div className="relative z-10 flex justify-between text-[10px] font-mono text-white/50">
                    <span>LAHORE</span>
                    <span>PUNJAB, PAKISTAN</span>
                </div>
              </div>

              <div className="text-xs text-white/50 font-mono">
                Location: 15-KM Sheikhupura Road, Javed Nagar, Lahore, 39030, Pakistan.
              </div>
              <a
                href={`https://maps.app.goo.gl/sF8bKieRBNHArme59)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4B27A] hover:text-[#E8D3AA] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
