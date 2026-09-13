import React from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-brand-accent via-rose-600 to-brand-warm hover:from-rose-600 hover:to-amber-500 text-white shadow-glow-accent border border-white/15';
      case 'secondary':
        return 'bg-brand-bgCard hover:bg-brand-cardHover text-brand-softPink border border-brand-borderSubtle hover:border-brand-borderHover';
      case 'outline':
        return 'bg-transparent hover:bg-brand-accent/10 text-brand-softPink border border-brand-accent/40 hover:border-brand-accent';
      case 'gold':
        return 'bg-gradient-to-r from-amber-500 to-brand-gold hover:from-amber-600 hover:to-yellow-400 text-brand-bgDark font-bold shadow-glow-gold';
      case 'ghost':
        return 'bg-transparent hover:bg-white/5 text-brand-textMuted hover:text-white';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-3.5 py-1.5 rounded-xl gap-1.5';
      case 'lg':
        return 'text-base px-7 py-3.5 rounded-2xl gap-3 font-bold';
      case 'md':
      default:
        return 'text-sm px-5 py-2.5 rounded-xl gap-2 font-semibold';
    }
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        getVariantStyles(),
        getSizeStyles(),
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
