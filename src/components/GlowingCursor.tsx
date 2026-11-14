import React, { useEffect, useState } from 'react';

export const GlowingCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    // Only on pointer devices
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.getAttribute('role') === 'button'
        );
        setIsPointer(isClickable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (reducedMotion || !position) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '280px' : '220px',
          height: isPointer ? '280px' : '220px',
          background: isPointer
            ? 'radial-gradient(circle, rgba(61, 224, 208, 0.14) 0%, rgba(212, 178, 122, 0.08) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(212, 178, 122, 0.12) 0%, rgba(61, 224, 208, 0.04) 50%, transparent 70%)',
          filter: 'blur(16px)',
          transform: isPointer ? 'translate(-50%, -50%) scale(1.15)' : 'translate(-50%, -50%) scale(1)',
        }}
      />
      {/* Tiny focal pinpoint */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isPointer ? '#3DE0D0' : '#D4B27A',
          boxShadow: isPointer ? '0 0 10px #3DE0D0' : '0 0 8px #D4B27A',
        }}
      />
    </div>
  );
};
