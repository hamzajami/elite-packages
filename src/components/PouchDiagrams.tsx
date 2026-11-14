import React from 'react';

interface DiagramProps {
  type: 'standup' | 'sachet' | 'flatbottom' | 'sidegusset' | 'spouted' | 'rollstock';
  className?: string;
}

export const PouchDiagram: React.FC<DiagramProps> = ({ type, className = "w-full h-48" }) => {
  switch (type) {
    case 'standup':
      return (
        <svg viewBox="0 0 200 240" className={className} fill="none" stroke="currentColor">
          {/* Stand-up pouch outline */}
          <rect x="50" y="20" width="100" height="15" rx="2" className="fill-slate-100 stroke-slate-400" strokeWidth="1.5" />
          <line x1="60" y1="27" x2="140" y2="27" strokeDasharray="3 3" className="stroke-amber-600" strokeWidth="1.5" />
          
          {/* Main Body */}
          <path d="M 50 35 L 40 180 C 40 200, 160 200, 160 180 L 150 35 Z" className="fill-slate-50/80 stroke-slate-800" strokeWidth="2" />
          
          {/* Bottom Gusset curve */}
          <path d="M 40 180 Q 100 215 160 180" className="stroke-slate-800" strokeWidth="2" fill="none" />
          <path d="M 52 185 Q 100 165 148 185" className="stroke-slate-400" strokeDasharray="2 2" strokeWidth="1.5" fill="none" />
          
          {/* Sealing edges */}
          <line x1="48" y1="35" x2="40" y2="180" className="stroke-slate-300" strokeWidth="3" />
          <line x1="152" y1="35" x2="160" y2="180" className="stroke-slate-300" strokeWidth="3" />
          
          {/* Notch and punch */}
          <polygon points="40,48 45,51 40,54" className="fill-slate-800" />
          <polygon points="160,48 155,51 160,54" className="fill-slate-800" />
          <circle cx="100" cy="15" r="3" className="fill-slate-700 stroke-slate-800" />
          
          {/* Technical labels */}
          <text x="100" y="115" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">K-Seal Base</text>
          <text x="100" y="132" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">Reclosable Zip</text>
        </svg>
      );

    case 'sachet':
      return (
        <svg viewBox="0 0 200 240" className={className} fill="none" stroke="currentColor">
          {/* Sachet 4-side perimeter seal */}
          <rect x="45" y="30" width="110" height="170" rx="1" className="fill-slate-50 stroke-slate-800" strokeWidth="2" />
          {/* Perimeter heat seal borders */}
          <rect x="53" y="38" width="94" height="154" rx="1" className="stroke-slate-300" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
          
          {/* Cross hatch seal zones on top and bottom */}
          <line x1="45" y1="42" x2="155" y2="42" className="stroke-slate-300" strokeWidth="2" />
          <line x1="45" y1="188" x2="155" y2="188" className="stroke-slate-300" strokeWidth="2" />
          <line x1="55" y1="30" x2="55" y2="200" className="stroke-slate-300" strokeWidth="2" />
          <line x1="145" y1="30" x2="145" y2="200" className="stroke-slate-300" strokeWidth="2" />
          
          {/* Easy tear V-notch */}
          <polygon points="45,60 52,65 45,70" className="fill-slate-800" />
          <polygon points="155,60 148,65 155,70" className="fill-slate-800" />
          
          <text x="100" y="115" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">4-Side Seal</text>
          <text x="100" y="132" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">Hermetic Foil</text>
        </svg>
      );

    case 'flatbottom':
      return (
        <svg viewBox="0 0 200 240" className={className} fill="none" stroke="currentColor">
          {/* Flat bottom box pouch shape */}
          <polygon points="55,30 145,30 155,175 45,175" className="fill-slate-50 stroke-slate-800" strokeWidth="2" />
          {/* 3D Gusset Fold Lines */}
          <line x1="75" y1="30" x2="68" y2="175" className="stroke-slate-400" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="125" y1="30" x2="132" y2="175" className="stroke-slate-400" strokeDasharray="3 3" strokeWidth="1.5" />
          
          {/* Bottom flat base */}
          <polygon points="45,175 155,175 140,210 60,210" className="fill-slate-100 stroke-slate-800" strokeWidth="2" />
          <line x1="60" y1="210" x2="75" y2="175" className="stroke-slate-400" strokeWidth="1.5" />
          <line x1="140" y1="210" x2="125" y2="175" className="stroke-slate-400" strokeWidth="1.5" />

          {/* Degassing valve placement */}
          <circle cx="100" cy="70" r="7" className="fill-slate-100 stroke-slate-600" strokeWidth="1.5" />
          <circle cx="100" cy="70" r="3" className="fill-amber-600" />

          <text x="100" y="115" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">Box Pouch</text>
          <text x="100" y="132" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">Degassing Valve</text>
        </svg>
      );

    case 'sidegusset':
      return (
        <svg viewBox="0 0 200 240" className={className} fill="none" stroke="currentColor">
          {/* Main front panel */}
          <rect x="60" y="30" width="80" height="170" className="fill-slate-50 stroke-slate-800" strokeWidth="2" />
          
          {/* Left expandable gusset */}
          <polygon points="60,30 45,45 45,185 60,200" className="fill-slate-100 stroke-slate-600" strokeWidth="1.5" />
          <line x1="45" y1="115" x2="60" y2="115" className="stroke-slate-400" strokeDasharray="2 2" />

          {/* Right expandable gusset */}
          <polygon points="140,30 155,45 155,185 140,200" className="fill-slate-100 stroke-slate-600" strokeWidth="1.5" />
          <line x1="140" y1="115" x2="155" y2="115" className="stroke-slate-400" strokeDasharray="2 2" />

          {/* Quad seal corners */}
          <line x1="60" y1="30" x2="60" y2="200" className="stroke-amber-600" strokeWidth="2" />
          <line x1="140" y1="30" x2="140" y2="200" className="stroke-amber-600" strokeWidth="2" />

          <text x="100" y="115" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">Quad Seal</text>
          <text x="100" y="132" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">Expanded Volume</text>
        </svg>
      );

    case 'spouted':
      return (
        <svg viewBox="0 0 200 240" className={className} fill="none" stroke="currentColor">
          {/* Molded Spout with Screw Cap */}
          <rect x="91" y="12" width="18" height="14" rx="2" className="fill-amber-600 stroke-slate-800" strokeWidth="1.5" />
          <line x1="91" y1="16" x2="109" y2="16" className="stroke-amber-200" strokeWidth="1" />
          <line x1="91" y1="20" x2="109" y2="20" className="stroke-amber-200" strokeWidth="1" />
          <path d="M 88 26 L 112 26 L 115 36 L 85 36 Z" className="fill-slate-200 stroke-slate-800" strokeWidth="1.5" />

          {/* Body */}
          <path d="M 85 36 L 50 48 L 42 185 C 42 205, 158 205, 158 185 L 150 48 L 115 36 Z" className="fill-slate-50 stroke-slate-800" strokeWidth="2" />
          
          {/* Bottom gusset curve */}
          <path d="M 42 185 Q 100 215 158 185" className="stroke-slate-800" strokeWidth="2" fill="none" />
          <circle cx="100" cy="115" r="16" className="stroke-slate-200" strokeDasharray="3 3" fill="none" />

          <text x="100" y="115" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">Rigid Spout</text>
          <text x="100" y="132" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">Tamper Cap</text>
        </svg>
      );

    case 'rollstock':
      return (
        <svg viewBox="0 0 200 240" className={className} fill="none" stroke="currentColor">
          {/* Cylindrical reel base */}
          <ellipse cx="100" cy="170" rx="65" ry="25" className="fill-slate-100 stroke-slate-800" strokeWidth="2" />
          
          {/* Roll cylinder body */}
          <path d="M 35 70 L 35 170 C 35 195, 165 195, 165 170 L 165 70" className="fill-slate-50/70 stroke-slate-800" strokeWidth="2" />
          
          {/* Top of the roll */}
          <ellipse cx="100" cy="70" rx="65" ry="25" className="fill-slate-200 stroke-slate-800" strokeWidth="2" />
          
          {/* Inner Core */}
          <ellipse cx="100" cy="70" rx="22" ry="9" className="fill-slate-800 stroke-slate-900" strokeWidth="1.5" />
          
          {/* Film winding unwinding path */}
          <path d="M 165 110 C 185 115, 190 140, 185 160 L 155 165" className="stroke-amber-600" strokeWidth="2" fill="none" />
          
          {/* Registration eye mark dots */}
          <rect x="80" y="125" width="6" height="10" className="fill-slate-800" />
          <rect x="110" y="125" width="6" height="10" className="fill-slate-800" />

          <text x="100" y="115" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 uppercase tracking-widest">76mm Core</text>
          <text x="100" y="130" textAnchor="middle" className="text-[9px] font-mono fill-amber-700">FFS Auto Film</text>
        </svg>
      );

    default:
      return null;
  }
};
