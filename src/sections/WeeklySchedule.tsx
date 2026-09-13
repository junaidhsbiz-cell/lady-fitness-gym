import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { MagneticButton } from '../components/MagneticButton';
import { scheduleShifts, daysOfWeek, ScheduleShiftItem } from '../data/schedule';

interface WeeklyScheduleProps {
  currentLang: 'en' | 'bn';
  onBook: (classTitle: string) => void;
}

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({
  currentLang,
  onBook,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('sat');
  const [activePeriod, setActivePeriod] = useState<string>('all');

  const periodTabs = [
    { id: 'all', labelEn: 'All 8 Shifts', labelBn: 'সকল ৮টি শিফট' },
    { id: 'morning', labelEn: 'Morning (7 AM – 11:45 AM)', labelBn: 'সকাল (৭টা – ১১:৪৫)' },
    { id: 'afternoon', labelEn: 'Afternoon (12 PM – 4 PM)', labelBn: 'দুপুর ও বিকাল (১২টা – ৪টা)' },
    { id: 'evening', labelEn: 'Evening (4:30 PM – 9 PM)', labelBn: 'সন্ধ্যা ও রাত (৪:৩০ – ৯টা)' },
  ];

  const filteredShifts = scheduleShifts.filter((shift) => {
    if (activePeriod === 'all') return true;
    return shift.period === activePeriod;
  });

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-brand-bgMedium/50 border-t border-brand-borderSubtle relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Saturday – Thursday (7 AM – 9 PM)' : 'শনিবার – বৃহস্পতিবার (সকাল ৭টা – রাত ৯টা)'}
          badgeColor="gold"
          titleRegular={currentLang === 'en' ? '8 Daily Verified Workout' : 'প্রতিদিনের ৮টি নির্ধারিত'}
          titleItalic={currentLang === 'en' ? 'Exercise Shifts' : 'এক্সারসাইজ শিফট'}
          subtitle={
            currentLang === 'en'
              ? 'Choose your preferred daytime or evening batch. Every shift is supervised by experienced female coaches with structured daily routines.'
              : 'আপনার সুবিধাজনক সময় অনুযায়ী যেকোনো একটি ব্যাচ বেছে নিন। অভিজ্ঞ নারী ট্রেইনারদের তত্ত্বাবধানে প্রতিটি সেশন পরিচালিত হয়।'
          }
        />

        {/* Day Selector (SAT, SUN, MON, TUE, WED, THU) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {daysOfWeek.map((day) => {
            const isSelected = selectedDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'text-white shadow-glow-accent'
                    : 'text-brand-textMuted bg-brand-bgCard/80 hover:text-white border border-brand-borderSubtle hover:border-brand-borderHover'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeDayFilter"
                    className="absolute inset-0 bg-gradient-to-r from-brand-accent via-rose-600 to-brand-warm rounded-2xl border border-white/20 shadow-md"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{currentLang === 'en' ? day.nameEn : day.nameBn}</span>
              </button>
            );
          })}
        </div>

        {/* Period Tabs (Morning / Afternoon / Evening) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {periodTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePeriod(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activePeriod === tab.id
                  ? 'bg-brand-burgundy/90 text-brand-softPink border border-brand-accent/50 shadow-sm'
                  : 'text-brand-textMuted bg-brand-bgDark/60 border border-white/5 hover:text-white'
              }`}
            >
              {currentLang === 'en' ? tab.labelEn : tab.labelBn}
            </button>
          ))}
        </div>

        {/* 8 Shifts Grid with Motion Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredShifts.map((shift) => (
              <motion.div
                key={shift.shiftNumber}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(255, 42, 85, 0.25)"
                  className="p-5 sm:p-6 space-y-3 flex flex-col justify-between border-l-4 border-l-brand-accent shadow-card hover:border-brand-accent/40 h-full"
                >
                  <div className="space-y-2.5">
                    {/* Shift Number & Time Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                        Shift {shift.shiftNumber}
                      </span>
                      <span className="text-[10px] text-brand-softPink font-bold">
                        {currentLang === 'en' ? shift.periodLabel : shift.periodLabelBn}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-black text-white bg-brand-bgDark/90 border border-brand-borderSubtle px-3 py-1.5 rounded-xl">
                      <Clock className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>{shift.timeSlot}</span>
                    </div>

                    {/* Title & Scope */}
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-brand-softPink transition">
                        {currentLang === 'en' ? shift.title : shift.titleBn}
                      </h4>
                      <p className="text-[11px] text-brand-textMuted mt-1 leading-snug">
                        {currentLang === 'en' ? shift.description : shift.descriptionBn}
                      </p>
                    </div>

                    {/* Exercises Covered */}
                    <div className="pt-2 border-t border-brand-borderSubtle text-[11px] text-brand-softPink font-semibold flex items-start gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-brand-warm shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        {currentLang === 'en' ? shift.exerciseScope : shift.exerciseScopeBn}
                      </span>
                    </div>
                  </div>

                  {/* Direct Reserve Button */}
                  <div className="pt-3 border-t border-brand-borderSubtle/60">
                    <MagneticButton
                      variant="primary"
                      size="sm"
                      fullWidth
                      icon={<Sparkles className="w-3.5 h-3.5" />}
                      onClick={() => onBook(`${shift.title} (${shift.timeSlot})`)}
                    >
                      {currentLang === 'en' ? 'Book Shift Slot' : 'শিফটে আসন বুক করুন'}
                    </MagneticButton>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Operating Reassurance Note */}
        <div className="mt-12 text-center text-xs text-brand-textMuted max-w-2xl mx-auto space-y-1">
          <p className="font-semibold text-white">
            {currentLang === 'en'
              ? '✨ All sessions are conducted under experienced female trainer supervision for safe and effective results.'
              : '✨ অভিজ্ঞ ট্রেইনারদের তত্ত্বাবধানে প্রতিটি সেশন পরিচালিত হয়, যাতে আপনি নিরাপদ ও কার্যকরভাবে ফিটনেস অর্জন করতে পারেন।'}
          </p>
          <p className="text-[11px] text-brand-gold">
            {currentLang === 'en'
              ? 'Available for both In-Studio and Women\'s Heaven Online Live batches.'
              : 'ইন-স্টুডিও ও উইমেন্স হেভেন অনলাইন লাইভ উভয় ক্লাসেই প্রযোজ্য।'}
          </p>
        </div>

      </div>
    </section>
  );
};
