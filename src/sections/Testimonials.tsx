import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, CheckCircle2, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { memberExperiences, MemberExperienceItem } from '../data/testimonials';

interface TestimonialsProps {
  currentLang: 'en' | 'bn';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % memberExperiences.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + memberExperiences.length) % memberExperiences.length);
  };

  const currentItem = memberExperiences[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden bg-brand-bgDark/60 border-t border-brand-borderSubtle">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-warm/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Member Feedback & Experience' : 'সদস্যদের অভিজ্ঞতা'}
          badgeColor="emerald"
          titleRegular={currentLang === 'en' ? 'What Narayanganj Women' : 'লেডি ফিটনেস সম্পর্কে'}
          titleItalic={currentLang === 'en' ? 'Say About Us' : 'সদস্যদের মতামত'}
          subtitle={
            currentLang === 'en'
              ? 'Read genuine experiences regarding our 100% female-only environment, flexible 8 daily shifts, and live online classes.'
              : 'আমাদের ১০০% নিরাপদ পরিবেশ, ৮টি দৈনিক শিফট এবং উইমেন্স হেভেন অনলাইন ক্লাস সম্পর্কে সদস্যদের অনুভূতি।'
          }
        />

        <div className="max-w-3xl mx-auto">
          <SpotlightCard
            spotlightColor="rgba(255, 42, 85, 0.3)"
            className="p-8 sm:p-12 border border-brand-accent/35 shadow-2xl relative overflow-hidden"
          >
            <Quote className="w-16 h-16 text-brand-accent/15 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Rating & Highlight Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex text-amber-400 gap-1">
                    {Array.from({ length: currentItem.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {currentLang === 'en' ? currentItem.highlight : currentItem.highlightBn}
                  </span>
                </div>

                {/* Comment Body */}
                <p className="text-base sm:text-xl text-white leading-relaxed italic font-serif pt-2">
                  "{currentLang === 'en' ? currentItem.comment : currentItem.commentBn}"
                </p>

                {/* Member Profile info */}
                <div className="flex items-center justify-between pt-6 border-t border-brand-borderSubtle">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-accent via-rose-600 to-brand-warm p-0.5 flex items-center justify-center shadow-glow-accent">
                      <div className="w-full h-full bg-brand-bgDark rounded-[14px] flex items-center justify-center text-xs font-black text-brand-softPink">
                        {currentItem.initials}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        {currentLang === 'en' ? currentItem.name : currentItem.nameBn}
                      </h4>
                      <p className="text-xs text-brand-textMuted mt-0.5">
                        <span>{currentLang === 'en' ? currentItem.role : currentItem.roleBn}</span>
                        <span className="mx-1.5">•</span>
                        <span className="text-brand-softPink inline-flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-brand-accent" />
                          {currentLang === 'en' ? currentItem.location : currentItem.locationBn}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-xl bg-brand-bgDark border border-brand-borderSubtle flex items-center justify-center text-white hover:border-brand-accent hover:bg-brand-burgundy transition"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-xl bg-brand-bgDark border border-brand-borderSubtle flex items-center justify-center text-white hover:border-brand-accent hover:bg-brand-burgundy transition"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
};
