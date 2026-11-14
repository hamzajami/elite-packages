import React from 'react';

export const AmbientBlooms: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top right Champagne Gold bloom */}
      <div
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full animate-bloom-1"
        style={{
          background: 'radial-gradient(circle, rgba(212, 178, 122, 0.16) 0%, rgba(212, 178, 122, 0.05) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Mid left Electric Teal bloom */}
      <div
        className="absolute top-[35%] -left-40 w-[600px] h-[600px] rounded-full animate-bloom-2"
        style={{
          background: 'radial-gradient(circle, rgba(61, 224, 208, 0.12) 0%, rgba(61, 224, 208, 0.03) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Center right Champagne Gold secondary glow */}
      <div
        className="absolute top-[65%] -right-40 w-[700px] h-[700px] rounded-full animate-bloom-1"
        style={{
          background: 'radial-gradient(circle, rgba(212, 178, 122, 0.1) 0%, rgba(61, 224, 208, 0.04) 45%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Bottom left subtle Teal glow */}
      <div
        className="absolute -bottom-40 left-[15%] w-[550px] h-[550px] rounded-full animate-bloom-2"
        style={{
          background: 'radial-gradient(circle, rgba(61, 224, 208, 0.09) 0%, rgba(212, 178, 122, 0.03) 55%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle fine mesh noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
