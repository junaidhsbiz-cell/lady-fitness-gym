import React from 'react';
import { Star, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { MemberExperienceItem } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: MemberExperienceItem;
  currentLang: 'en' | 'bn';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  currentLang,
}) => {
  return (
    <div className="glass-card p-7 sm:p-8 rounded-3xl space-y-5 flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-300 shadow-card">
      <div className="space-y-4">
        {/* Stars and Highlight Pill */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex text-amber-400 gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            {currentLang === 'en' ? testimonial.highlight : testimonial.highlightBn}
          </span>
        </div>

        {/* Quote */}
        <div className="relative pt-1">
          <Quote className="w-8 h-8 text-brand-accent/20 absolute -top-3 -left-2 pointer-events-none" />
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic relative z-10">
            "{currentLang === 'en' ? testimonial.comment : testimonial.commentBn}"
          </p>
        </div>
      </div>

      {/* Member Details */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-brand-borderSubtle">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-burgundy to-brand-accent p-0.5 flex items-center justify-center shrink-0 shadow-md">
          <div className="w-full h-full bg-brand-bgDark rounded-[14px] flex items-center justify-center text-xs font-black text-brand-softPink">
            {testimonial.initials}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">
            {currentLang === 'en' ? testimonial.name : testimonial.nameBn}
          </h4>
          <div className="flex items-center gap-1.5 text-[11px] text-brand-textMuted mt-0.5">
            <span>{currentLang === 'en' ? testimonial.role : testimonial.roleBn}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-brand-softPink">
              <MapPin className="w-3 h-3 text-brand-accent" />
              {currentLang === 'en' ? testimonial.location : testimonial.locationBn}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
