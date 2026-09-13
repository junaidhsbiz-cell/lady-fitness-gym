import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { isReducedMotion } from '../lib/gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isReducedMotion() || 'ontouchstart' in window) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-brand-accent via-rose-600 to-brand-warm hover:from-brand-accentHover hover:to-amber-500 text-white shadow-glow-accent border border-white/20';
      case 'secondary':
        return 'bg-brand-bgCard/90 hover:bg-brand-cardHover text-brand-softPink border border-brand-borderSubtle hover:border-brand-borderHover shadow-card';
      case 'outline':
        return 'bg-transparent hover:bg-brand-accent/10 text-brand-softPink border border-brand-accent/40 hover:border-brand-accent';
      case 'gold':
        return 'bg-gradient-to-r from-amber-500 via-brand-warmGold to-brand-gold hover:from-amber-600 hover:to-yellow-400 text-brand-bgDark font-extrabold shadow-glow-gold border border-white/20';
      case 'ghost':
        return 'bg-transparent hover:bg-white/5 text-brand-textMuted hover:text-white';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-4 py-2 rounded-xl gap-1.5 font-semibold';
      case 'lg':
        return 'text-base px-8 py-4 rounded-2xl gap-3 font-bold';
      case 'md':
      default:
        return 'text-sm px-6 py-3 rounded-xl gap-2 font-bold';
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.1 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'relative inline-flex items-center justify-center transition-colors duration-200 cursor-pointer overflow-hidden group',
        getVariantStyles(),
        getSizeStyles(),
        fullWidth && 'w-full',
        className
      )}
      {...(props as any)}
    >
      {/* Light sheen effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
      
      {icon && iconPosition === 'left' && <span className="shrink-0 relative z-10">{icon}</span>}
      <span className="relative z-10 tracking-wide">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 relative z-10">{icon}</span>}
    </motion.button>
  );
};
