import React from 'react';
import { Check, Sparkles, ShieldCheck, Laptop, Building2 } from 'lucide-react';
import { MembershipPlan } from '../data/membership';
import { MagneticButton } from './MagneticButton';
import { formatPrice, formatPriceBn } from '../lib/utils';

interface MembershipCardProps {
  plan: MembershipPlan;
  currentLang: 'en' | 'bn';
  onSelect: (plan: MembershipPlan) => void;
}

export const MembershipCard: React.FC<MembershipCardProps> = ({
  plan,
  currentLang,
  onSelect,
}) => {
  return (
    <div
      className={`glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-500 shadow-card ${
        plan.popular
          ? 'border-2 border-brand-accent shadow-glow-accent md:-translate-y-3 bg-brand-bgCard/90 shimmer-border'
          : 'hover:border-brand-borderHover'
      }`}
    >
      {/* Popular Header Badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent via-rose-600 to-brand-warm text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Most Popular Transformation' : 'সর্বাধিক জনপ্রিয় প্যাকেজ'}</span>
        </div>
      )}

      <div className="space-y-6">
        {/* Header Tag & Title */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-brand-gold uppercase tracking-wider block">
              {currentLang === 'en' ? plan.tag : plan.tagBn}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-softPink bg-brand-bgDark/80 px-2 py-0.5 rounded-full border border-brand-borderSubtle">
              {plan.type === 'online' ? <Laptop className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
              <span>{plan.type === 'online' ? 'Online Live' : 'In-Studio'}</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {currentLang === 'en' ? plan.name : plan.nameBn}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {currentLang === 'en' ? plan.description : plan.descriptionBn}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="pt-2 border-t border-brand-borderSubtle">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              {currentLang === 'en' ? formatPrice(plan.price) : formatPriceBn(plan.price)}
            </span>
            <span className="text-xs text-brand-textMuted">
              / {currentLang === 'en' ? plan.duration : plan.durationBn}
            </span>
          </div>

          {plan.regularPrice && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-slate-500 line-through">
                {currentLang === 'en' ? formatPrice(plan.regularPrice) : formatPriceBn(plan.regularPrice)}
              </span>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                {currentLang === 'en' ? 'Special Value' : 'স্পেশাল প্যাকেজ'}
              </span>
            </div>
          )}
        </div>

        {/* Features Inclusions */}
        <div className="space-y-3 pt-4 border-t border-brand-borderSubtle">
          <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            {currentLang === 'en' ? 'Included Benefits:' : 'প্যাকেজে অন্তর্ভুক্ত সুবিধা:'}
          </p>

          <ul className="space-y-2.5 text-xs text-slate-200">
            {(currentLang === 'en' ? plan.features : plan.featuresBn).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-8 space-y-3">
        <MagneticButton
          variant={plan.popular ? 'primary' : 'secondary'}
          size="lg"
          fullWidth
          icon={<ShieldCheck className="w-4 h-4" />}
          onClick={() => onSelect(plan)}
        >
          {currentLang === 'en' ? 'Inquire / Book This Plan' : 'এই প্ল্যানে ভর্তি হতে চাই'}
        </MagneticButton>

        <p className="text-[11px] text-center text-brand-textMuted">
          {currentLang === 'en' ? 'Direct WhatsApp Confirmation & Admission' : 'হোয়াটসঅ্যাপে সরাসরি নিশ্চিত করুন'}
        </p>
      </div>
    </div>
  );
};
