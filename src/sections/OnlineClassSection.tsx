import React from 'react';
import { motion } from 'motion/react';
import { Video, Clock, Phone, Sparkles, Check, ArrowRight, ShieldCheck, Laptop } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { MagneticButton } from '../components/MagneticButton';
import { onlineClassData } from '../data/onlineClass';
import { formatPrice, formatPriceBn } from '../lib/utils';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface OnlineClassSectionProps {
  currentLang: 'en' | 'bn';
  onBook: (planTitle: string) => void;
}

export const OnlineClassSection: React.FC<OnlineClassSectionProps> = ({
  currentLang,
  onBook,
}) => {
  const handleWhatsAppJoin = () => {
    const waUrl = buildWhatsAppUrl({
      action: 'plan',
      detail: "Women's Heaven Online Class (Admission ৳2,000, Monthly ৳1,000)",
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="online-class" className="py-20 lg:py-28 relative overflow-hidden bg-brand-bgDark border-t border-brand-borderSubtle">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-brand-accent/15 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-warm/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? onlineClassData.badge : onlineClassData.badgeBn}
          badgeColor="gold"
          titleRegular={currentLang === 'en' ? "Join Our Live" : "ঘরে বসেই যুক্ত হোন"}
          titleItalic={currentLang === 'en' ? onlineClassData.name : onlineClassData.nameBn}
          subtitle={
            currentLang === 'en'
              ? 'Cannot make it to the Chashara studio? Join live interactive daily workouts led by our certified female coaches from the comfort and privacy of your home.'
              : 'চাষাড়া স্টুডিওতে আসতে না পারলেও এখন বাসায় বসে নিয়মিত লাইভ ফিটনেস ক্লাসে অংশ নেওয়ার দারুণ সুযোগ। প্রতিদিন ৮টি সুবিধাজনক শিফট।'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column (5 Cols): Pricing & Direct CTA Card */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(255, 107, 24, 0.35)"
              className="p-8 sm:p-10 border-2 border-brand-accent shadow-2xl relative overflow-hidden shimmer-border flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-brand-burgundy/95 text-brand-softPink border border-brand-accent/40 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {currentLang === 'en' ? 'Live Online Pass' : 'অনলাইন লাইভ পাস'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Live Coaching</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                    {currentLang === 'en' ? onlineClassData.name : onlineClassData.nameBn}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    {currentLang === 'en'
                      ? 'Interactive live female-only workouts with real-time trainer guidance.'
                      : 'নারী ট্রেইনারের সরাসরি তত্ত্বাবধানে লাইভ ইন্টারঅ্যাক্টিভ ক্লাস।'}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-4 border-t border-brand-borderSubtle space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-display">
                      {currentLang === 'en' ? formatPrice(onlineClassData.monthlyFee) : formatPriceBn(onlineClassData.monthlyFee)}
                    </span>
                    <span className="text-xs text-brand-textMuted font-bold">
                      / {currentLang === 'en' ? 'Month' : 'মাস'}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-brand-bgDark/90 border border-brand-borderSubtle px-3 py-1.5 rounded-xl text-xs">
                    <span className="text-brand-gold font-bold">
                      {currentLang === 'en' ? 'Admission Fee:' : 'ভর্তি ফি:'}
                    </span>
                    <span className="text-white font-extrabold">
                      {currentLang === 'en' ? formatPrice(onlineClassData.admissionFee) : formatPriceBn(onlineClassData.admissionFee)}
                    </span>
                  </div>
                </div>

                {/* Schedule Snapshot */}
                <div className="space-y-2 pt-2 text-xs text-brand-softPink">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-warm shrink-0" />
                    <span className="font-semibold">{onlineClassData.days} • 7:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">8 Daily Exercise Shifts Available</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-brand-borderSubtle">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<Sparkles className="w-5 h-5" />}
                  onClick={handleWhatsAppJoin}
                >
                  {currentLang === 'en' ? 'Join Online Class on WhatsApp' : 'অনলাইন ক্লাসে ভর্তি হন'}
                </MagneticButton>

                <a
                  href={`tel:${onlineClassData.hotline}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-brand-bgDark hover:bg-brand-cardHover border border-brand-borderSubtle text-xs font-bold text-slate-200 transition"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{currentLang === 'en' ? `Call Hotline: ${onlineClassData.hotline}` : `কল দিন: ${onlineClassData.hotline}`}</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column (7 Cols): 8 Shift Explorer Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-brand-borderSubtle">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-brand-accent" />
                <h4 className="text-lg font-bold text-white">
                  {currentLang === 'en' ? '8 Daily Online Exercise Shifts' : 'প্রতিদিনের ৮টি লাইভ শিফট সময়সূচী'}
                </h4>
              </div>
              <span className="text-[11px] text-brand-gold font-bold">
                Sat – Thu
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {onlineClassData.shifts.map((shift) => (
                <div
                  key={shift.shiftNumber}
                  className="glass-card p-4 rounded-2xl border border-brand-borderSubtle hover:border-brand-accent/40 transition space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-brand-softPink bg-brand-bgDark/90 px-2.5 py-0.5 rounded-full border border-brand-borderSubtle">
                      {shift.timeSlot}
                    </span>
                    <span className="text-[10px] text-brand-gold font-bold uppercase">
                      Shift {shift.shiftNumber}
                    </span>
                  </div>

                  <h5 className="text-xs font-bold text-white">
                    {currentLang === 'en' ? shift.title : shift.titleBn}
                  </h5>

                  <p className="text-[11px] text-brand-textMuted leading-snug">
                    {currentLang === 'en' ? shift.description : shift.descriptionBn}
                  </p>
                </div>
              ))}
            </div>

            {/* Inclusions checklist */}
            <div className="bg-brand-bgCard/60 border border-brand-borderSubtle p-4 rounded-2xl space-y-2 text-xs text-slate-200">
              <span className="text-brand-gold font-bold uppercase tracking-wider block text-[10px]">
                {currentLang === 'en' ? 'Daily Online Curriculum:' : 'প্রতিদিনের অনলাইন সিলেবাসে যা যা থাকছে:'}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px]">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Mat Exercises (ম্যাট)</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Yoga (ইয়োগা)</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Aerobics (এরোবিক্স)</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Zumba (জুম্বা)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
