import React, { useEffect, useRef, useState } from 'react';
import { gsap, isReducedMotion } from '../lib/gsap';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      isReducedMotion() ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power3.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('.interactive')
      ) {
        setIsHovering(true);
        gsap.to(ring, { scale: 1.6, borderColor: '#FF2A55', opacity: 0.8, duration: 0.2 });
        gsap.to(dot, { scale: 0.5, backgroundColor: '#FF6B18', duration: 0.2 });
      } else {
        setIsHovering(false);
        gsap.to(ring, { scale: 1, borderColor: 'rgba(255, 42, 85, 0.45)', opacity: 0.35, duration: 0.25 });
        gsap.to(dot, { scale: 1, backgroundColor: '#FF2A55', duration: 0.25 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-brand-accent pointer-events-none transition-colors"
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-brand-accent/40 pointer-events-none opacity-35 transition-transform"
      />
    </div>
  );
};
