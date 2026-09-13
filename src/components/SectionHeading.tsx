import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  badge: string;
  titleRegular: string;
  titleItalic: string;
  subtitle?: string;
  align?: 'center' | 'left';
  badgeColor?: 'accent' | 'gold' | 'emerald';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  titleRegular,
  titleItalic,
  subtitle,
  align = 'center',
  badgeColor = 'accent',
}) => {
  const getBadgeStyle = () => {
    switch (badgeColor) {
      case 'gold':
        return 'bg-amber-500/10 text-brand-gold border-amber-500/30 shadow-glow-gold';
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'accent':
      default:
        return 'bg-brand-accent/10 text-brand-softPink border-brand-accent/30 shadow-glow-accent';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`space-y-4 ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'
      } mb-12 sm:mb-16`}
    >
      <div>
        <span
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border backdrop-blur-md ${getBadgeStyle()}`}
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          {badge}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.18]">
        <span>{titleRegular} </span>
        <span className="text-gradient font-serif italic font-normal tracking-normal">{titleItalic}</span>
      </h2>

      {subtitle && (
        <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
