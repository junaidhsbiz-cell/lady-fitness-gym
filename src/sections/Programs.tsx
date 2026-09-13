import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Clock, Users, ArrowRight, Check, Sparkles, Activity } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { programs, ProgramItem } from '../data/programs';

interface ProgramsProps {
  currentLang: 'en' | 'bn';
  onBook: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ currentLang, onBook }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(programs[0].id);

  const selectedProgram: ProgramItem =
    programs.find((p) => p.id === selectedProgramId) || programs[0];

  return (
    <section id="programs" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-warm/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Transformative Workouts' : 'কার্যকর ফিটনেস প্রোগ্রাম'}
          badgeColor="gold"
          titleRegular={currentLang === 'en' ? 'Signature Regimens For' : 'নারীদের প্রতিটি লক্ষ্যের জন্য'}
          titleItalic={currentLang === 'en' ? "Every Woman's Goal" : 'বিশেষায়িত প্রোগ্রাম'}
          subtitle={
            currentLang === 'en'
              ? 'Whether you want rapid fat burn, sculpted body curves, posture restoration, or bridal wellness, explore our specialized programs.'
              : 'ওজন কমানো, বডি শেপিং, ব্যাকপেইন দূর করা কিংবা বিয়ের আগের স্পেশাল গ্লো-আপের জন্য সেরা প্রোগ্রাম।'
          }
        />

        {/* Interactive Program Tabs (Motion layoutId indicator) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {programs.map((prog) => {
            const isSelected = selectedProgramId === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedProgramId(prog.id)}
                className={`relative px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'text-white shadow-glow-accent'
                    : 'text-brand-textMuted bg-brand-bgCard/80 hover:text-white border border-brand-borderSubtle hover:border-brand-borderHover'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProgramTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-accent via-rose-600 to-brand-warm rounded-2xl border border-white/25 shadow-lg"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentLang === 'en' ? prog.title : prog.titleBn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Expansive Showcase Hero Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="glass-card rounded-3xl border border-brand-accent/35 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10"
          >
            {/* Visual Media Column (5 Cols) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto min-h-[320px] bg-brand-bgDark shadow-inner group">
              <img
                src={selectedProgram.image}
                alt={currentLang === 'en' ? selectedProgram.title : selectedProgram.titleBn}
                width={900}
                height={700}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark via-brand-bgDark/20 to-transparent" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4">
                <span className="bg-brand-burgundy/95 text-brand-softPink border border-brand-accent/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {selectedProgram.badge}
                </span>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <div className="bg-brand-bgDark/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-bold text-white">
                  <Activity className="w-4 h-4 text-brand-warm" />
                  <span>{currentLang === 'en' ? selectedProgram.sessionFocus : selectedProgram.sessionFocusBn}</span>
                </div>

                <div className="bg-brand-bgDark/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-bold text-white">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span>{selectedProgram.duration}</span>
                </div>
              </div>
            </div>

            {/* Content & Details Column (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-brand-gold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    {currentLang === 'en' ? selectedProgram.category : selectedProgram.categoryBn}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
                  {currentLang === 'en' ? selectedProgram.title : selectedProgram.titleBn}
                </h3>

                <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                  {currentLang === 'en' ? selectedProgram.description : selectedProgram.descriptionBn}
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-3 pt-4 border-t border-brand-borderSubtle">
                  <h4 className="text-xs font-bold text-brand-softPink uppercase tracking-wider">
                    {currentLang === 'en' ? 'What You Will Achieve:' : 'এই প্রোগ্রামের মূল সুবিধাসমূহ:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(currentLang === 'en' ? selectedProgram.features : selectedProgram.featuresBn).map(
                      (feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="flex items-center gap-2 text-xs text-brand-gold bg-amber-500/10 border border-amber-500/20 p-3 rounded-2xl">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>
                    {currentLang === 'en'
                      ? `Ideal Candidate: ${selectedProgram.suitableFor}`
                      : `কারা অংশ নেবেন: ${selectedProgram.suitableForBn}`}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-brand-borderSubtle flex flex-col sm:flex-row items-center gap-4">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  onClick={() => onBook(currentLang === 'en' ? selectedProgram.title : selectedProgram.titleBn)}
                  className="w-full sm:w-auto"
                >
                  {currentLang === 'en' ? 'Reserve Program Slot' : 'প্রোগ্রামে আসন বুক করুন'}
                </MagneticButton>

                <a href="#schedule" className="text-xs font-bold text-brand-softPink hover:text-white underline transition">
                  {currentLang === 'en' ? 'Check Available Timetable Shifts →' : 'সাপ্তাহিক শিফট সময়সূচী দেখুন →'}
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
