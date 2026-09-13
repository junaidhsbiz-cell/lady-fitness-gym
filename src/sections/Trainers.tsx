import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, CheckCircle2, UserCheck, Star } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { MagneticButton } from '../components/MagneticButton';
import { trainers, TrainerItem } from '../data/trainers';

interface TrainersProps {
  currentLang: 'en' | 'bn';
  onBookTrainer: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ currentLang, onBookTrainer }) => {
  return (
    <section id="trainers" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Certified Lady Coaches' : 'অভিজ্ঞ নারী প্রশিক্ষক'}
          badgeColor="emerald"
          titleRegular={currentLang === 'en' ? 'Meet Your Certified' : 'আমাদের সার্টিফাইড'}
          titleItalic={currentLang === 'en' ? 'Lady Fitness Mentors' : 'লেডি ট্রেইনারবৃন্দ'}
          subtitle={
            currentLang === 'en'
              ? 'Supportive, experienced, and dedicated women fitness coaches who motivate and guide you with proper form and zero intimidation.'
              : 'নারায়ণগঞ্জের সবচেয়ে আন্তরিক নারী ট্রেইনার টিম, যারা প্রতিটি পদক্ষেপে আপনার পাশে থেকে সঠিক গাইডেন্স ও অনুপ্রেরণা দেন।'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(255, 42, 85, 0.28)"
                className="rounded-3xl border border-brand-accent/30 shadow-2xl flex flex-col justify-between h-full group"
              >
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
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bgCard via-brand-bgCard/25 to-transparent" />

                    {/* Role Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-burgundy/95 backdrop-blur-md text-brand-softPink border border-brand-accent/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {currentLang === 'en' ? trainer.role : trainer.roleBn}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-brand-gold bg-brand-bgDark/90 backdrop-blur-md px-3 py-1 rounded-xl border border-brand-gold/25 font-bold">
                        <Award className="w-3.5 h-3.5" />
                        {currentLang === 'en' ? 'Certified Coach' : 'সার্টিফাইড ট্রেইনার'}
                      </span>

                      <div className="flex text-amber-400 gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-softPink transition duration-300">
                        {currentLang === 'en' ? trainer.name : trainer.nameBn}
                      </h3>
                      <p className="text-xs font-extrabold text-brand-accent mt-1">
                        {currentLang === 'en' ? trainer.specialty : trainer.specialtyBn}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                      {currentLang === 'en' ? trainer.bio : trainer.bioBn}
                    </p>

                    {/* Certifications Checklist */}
                    <div className="space-y-2 pt-3 border-t border-brand-borderSubtle">
                      {trainer.certifications.map((cert, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct 1-on-1 Action */}
                <div className="p-6 pt-0">
                  <MagneticButton
                    variant="secondary"
                    size="md"
                    fullWidth
                    icon={<Sparkles className="w-4 h-4 text-brand-accent" />}
                    onClick={() => onBookTrainer(currentLang === 'en' ? trainer.name : trainer.nameBn)}
                    className="group-hover:border-brand-accent transition duration-300"
                  >
                    {currentLang === 'en' ? 'Book 1-on-1 Private Session' : 'ব্যক্তিগত সেশন বুক করুন'}
                  </MagneticButton>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
