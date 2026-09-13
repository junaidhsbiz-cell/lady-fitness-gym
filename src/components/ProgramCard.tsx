import React from 'react';
import { Activity, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { ProgramItem } from '../data/programs';
import { MagneticButton } from './MagneticButton';

interface ProgramCardProps {
  program: ProgramItem;
  currentLang: 'en' | 'bn';
  onBook: (programTitle: string) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  currentLang,
  onBook,
}) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden group hover:border-brand-accent/50 transition-all duration-500 flex flex-col justify-between shadow-card">
      
      {/* Image & Badge */}
      <div>
        <div className="relative h-52 sm:h-56 overflow-hidden bg-brand-bgCard">
          <img
            src={program.image}
            alt={currentLang === 'en' ? program.title : program.titleBn}
            width={800}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bgCard via-brand-bgCard/30 to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span className="bg-brand-burgundy/90 backdrop-blur-md text-brand-softPink border border-brand-accent/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              {program.badge}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
            <span className="flex items-center gap-1 bg-brand-bgDark/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              <Activity className="w-3.5 h-3.5 text-brand-warm" />
              {currentLang === 'en' ? program.sessionFocus : program.sessionFocusBn}
            </span>
            <span className="flex items-center gap-1 bg-brand-bgDark/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-brand-accent" />
              {program.duration}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-xs font-semibold text-brand-accent tracking-wide uppercase">
              {currentLang === 'en' ? program.category : program.categoryBn}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-brand-softPink transition duration-300 mt-1">
              {currentLang === 'en' ? program.title : program.titleBn}
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-2 leading-relaxed">
              {currentLang === 'en' ? program.description : program.descriptionBn}
            </p>
          </div>

          {/* Feature Checklist */}
          <div className="space-y-2 pt-2 border-t border-brand-borderSubtle">
            {(currentLang === 'en' ? program.features : program.featuresBn).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-brand-textMuted">
            <Users className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span className="truncate">
              {currentLang === 'en' ? `Best for: ${program.suitableFor}` : `উপযোগী: ${program.suitableForBn}`}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="p-6 pt-0">
        <MagneticButton
          variant="secondary"
          size="md"
          fullWidth
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
          onClick={() => onBook(currentLang === 'en' ? program.title : program.titleBn)}
          className="group-hover:border-brand-accent transition duration-300"
        >
          {currentLang === 'en' ? 'Reserve Program Slot' : 'প্রোগ্রামে আসন বুক করুন'}
        </MagneticButton>
      </div>

    </div>
  );
};
