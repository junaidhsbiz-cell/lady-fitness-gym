import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { TrainerItem } from '../data/trainers';
import { MagneticButton } from './MagneticButton';

interface TrainerCardProps {
  trainer: TrainerItem;
  currentLang: 'en' | 'bn';
  onBook: (trainerName: string) => void;
}

export const TrainerCard: React.FC<TrainerCardProps> = ({
  trainer,
  currentLang,
  onBook,
}) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden group hover:border-brand-accent/50 transition-all duration-500 flex flex-col justify-between shadow-card">
      <div>
        {/* Photo Container */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-brand-bgDark">
          <img
            src={trainer.image}
            alt={currentLang === 'en' ? trainer.name : trainer.nameBn}
            width={600}
            height={700}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bgCard via-brand-bgCard/20 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-brand-burgundy/90 backdrop-blur-md text-brand-softPink border border-brand-accent/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              {currentLang === 'en' ? trainer.role : trainer.roleBn}
            </span>
          </div>
        </div>

        {/* Bio Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-brand-softPink transition duration-300">
              {currentLang === 'en' ? trainer.name : trainer.nameBn}
            </h3>
            <p className="text-xs font-semibold text-brand-accent mt-1">
              {currentLang === 'en' ? trainer.specialty : trainer.specialtyBn}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
            {currentLang === 'en' ? trainer.bio : trainer.bioBn}
          </p>

          {/* Certifications */}
          <div className="space-y-1.5 pt-2 border-t border-brand-borderSubtle">
            {(currentLang === 'en' ? trainer.certifications : trainer.certificationsBn).map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-6 pt-0">
        <MagneticButton
          variant="secondary"
          size="md"
          fullWidth
          icon={<Sparkles className="w-4 h-4 text-brand-accent" />}
          onClick={() => onBook(`1-on-1 Consultation with Coach ${trainer.name}`)}
          className="group-hover:border-brand-accent transition duration-300"
        >
          {currentLang === 'en' ? 'Book 1-on-1 Private Session' : 'ব্যক্তিগত সেশন বুক করুন'}
        </MagneticButton>
      </div>
    </div>
  );
};
