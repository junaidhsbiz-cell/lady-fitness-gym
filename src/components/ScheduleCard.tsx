import React from 'react';
import { Clock, Calendar, Activity, Sparkles } from 'lucide-react';
import { ScheduleShiftItem } from '../data/schedule';
import { MagneticButton } from './MagneticButton';

interface ScheduleCardProps {
  item: ScheduleShiftItem;
  currentLang: 'en' | 'bn';
  onBook: (classTitle: string) => void;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  item,
  currentLang,
  onBook,
}) => {
  return (
    <div className="glass-card glass-card-hover p-6 rounded-3xl space-y-4 flex flex-col justify-between border-l-4 border-l-brand-accent shadow-card">
      <div className="space-y-3">
        {/* Top Shift & Days metadata */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-black text-brand-softPink bg-brand-bgDark/80 border border-brand-borderSubtle px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            {item.timeSlot}
          </span>
          <span className="text-xs text-brand-gold font-bold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {currentLang === 'en' ? item.days : item.daysBn}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-white group-hover:text-brand-softPink transition">
          {currentLang === 'en' ? item.title : item.titleBn}
        </h4>

        <p className="text-xs text-brand-textMuted leading-relaxed">
          {currentLang === 'en' ? item.description : item.descriptionBn}
        </p>

        {/* Exercise Scope */}
        <div className="pt-2 border-t border-brand-borderSubtle text-xs text-brand-softPink font-semibold flex items-start gap-1.5">
          <Activity className="w-3.5 h-3.5 text-brand-warm shrink-0 mt-0.5" />
          <span>{currentLang === 'en' ? item.exerciseScope : item.exerciseScopeBn}</span>
        </div>
      </div>

      {/* Action */}
      <div className="pt-2">
        <MagneticButton
          variant="primary"
          size="sm"
          fullWidth
          icon={<Sparkles className="w-3.5 h-3.5" />}
          onClick={() => onBook(`${item.title} (${item.timeSlot})`)}
        >
          {currentLang === 'en' ? 'Reserve Shift' : 'শিফট বুকিং'}
        </MagneticButton>
      </div>
    </div>
  );
};
