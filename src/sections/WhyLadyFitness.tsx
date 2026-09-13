import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartPulse, Music, Utensils, Sparkles, Baby, Lock, Check, EyeOff } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';

interface WhyLadyFitnessProps {
  currentLang: 'en' | 'bn';
}

export const WhyLadyFitness: React.FC<WhyLadyFitnessProps> = ({ currentLang }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-brand-bgMedium/40 border-b border-brand-borderSubtle">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-burgundy/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-warm/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Exclusively Designed For Women' : 'শুধুমাত্র নারীদের জন্য ডিজাইনকৃত'}
          titleRegular={currentLang === 'en' ? 'Why Narayanganj Women Trust' : 'কেন নারায়ণগঞ্জের নারীদের প্রথম পছন্দ'}
          titleItalic={currentLang === 'en' ? 'Lady Fitness' : 'লেডি ফিটনেস জিম'}
          subtitle={
            currentLang === 'en'
              ? 'We understand the specific privacy needs, cultural comfort, and hormonal fitness requirements of women in Narayanganj.'
              : 'আমরা বুঝি নারীদের ফিটনেস ও নিরাপত্তার গুরুত্ব। যেকোনো অস্বস্তি ছাড়া শতভাগ নিশ্চিন্তে শরীরচর্চার নির্ভরযোগ্য ঠিকানা।'
          }
        />

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 Cols): Featured Big Privacy Pillar */}
          <div className="lg:col-span-5 flex flex-col">
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.35)"
              className="h-full border border-brand-accent/40 shadow-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Background Image with Deep Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/gym-facility.jpg"
                  alt="Lady Fitness Studio Interior Narayanganj"
                  className="w-full h-full object-cover object-center opacity-25 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark via-brand-bgCard/90 to-brand-bgDark/80" />
              </div>

              {/* Content on top */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-accent to-brand-warm p-0.5 flex items-center justify-center shadow-glow-accent">
                    <div className="w-full h-full bg-brand-bgDark rounded-[14px] flex items-center justify-center">
                      <ShieldCheck className="w-7 h-7 text-brand-accent" />
                    </div>
                  </div>

                  <span className="bg-brand-burgundy/90 text-brand-softPink border border-brand-accent/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {currentLang === 'en' ? 'Zero Men Allowed' : 'পুরুষদের প্রবেশ নিষিদ্ধ'}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-brand-gold uppercase tracking-widest block">
                    {currentLang === 'en' ? 'Core Guarantee' : 'আমাদের প্রধান প্রতিশ্রুতি'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                    {currentLang === 'en'
                      ? '100% Privacy & Female Staff Biometric Sanctuary'
                      : '১০০% প্রাইভেসি, নারী ট্রেইনার ও বায়োমেট্রিক নিরাপত্তা'}
                  </h3>
                  <p className="text-sm text-brand-textMuted leading-relaxed pt-2">
                    {currentLang === 'en'
                      ? 'Biometric fingerprint access, one-way frosted privacy glass, and strictly 100% certified female coaches and staff. Exercise freely without hijab, judgment, or hesitation.'
                      : 'বায়োমেট্রিক সিকিউরিটি, একমুখী ফ্রস্টেড গ্লাস এবং শতভাগ নারী স্টাফ ও ট্রেইনার। হিজাব ছাড়া সম্পূর্ণ নির্ভাবনায় স্বাচ্ছন্দ্যে শরীরচর্চা করুন।'}
                  </p>
                </div>

                {/* Privacy Proof Badges */}
                <div className="space-y-2.5 pt-4 border-t border-brand-borderSubtle/70">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{currentLang === 'en' ? 'One-Way Tinted Glass Studio' : 'একমুখী ফ্রস্টেড প্রাইভেসি গ্লাস'}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{currentLang === 'en' ? 'Strict Female-Only Floor Supervision' : 'সার্বক্ষণিক নারী ট্রেইনার তত্ত্বাবধান'}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{currentLang === 'en' ? 'Separate Dressing & Vanity Lounge' : 'আলাদা ড্রেসিং ও ভ্যানিটি লাউঞ্জ'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stat Callout */}
              <div className="relative z-10 pt-6 mt-6 border-t border-brand-borderSubtle/60 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black text-gradient-gold">100%</p>
                  <p className="text-[11px] text-brand-textMuted font-bold uppercase">Women Safe Haven</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                  <EyeOff className="w-4 h-4" />
                  <span>Total Privacy</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column (7 Cols): 5 Specialized Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 1. PCOS & Hormonal Care */}
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.25)"
              className="p-6 sm:p-7 space-y-4 hover:border-brand-accent/40 shadow-card flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-burgundy/60 border border-brand-accent/30 flex items-center justify-center text-brand-accent shadow-md">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {currentLang === 'en' ? 'PCOS & Post-Natal Programs' : 'পিসিওএস ও প্রসব-পরবর্তী কেয়ার'}
                </h4>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {currentLang === 'en'
                    ? 'Targeted workouts to regulate female hormones, reverse insulin resistance, and gently rehab core & pelvic floor after childbirth.'
                    : 'হরমোনাল ভারসাম্য রক্ষা, পিসিওএস উপসর্গ নিয়ন্ত্রণ এবং প্রসব-পরবর্তী পেটের মেদ কমিয়ে স্বাভাবিক ফিটনেসে ফেরার নিরাপদ পদ্ধতি।'}
                </p>
              </div>
              <span className="text-[11px] text-brand-softPink font-bold pt-2 border-t border-brand-borderSubtle/60 block">
                {currentLang === 'en' ? 'Clinical Health Regimen' : 'স্বাস্থ্যসম্মত ও নিরাপদ'}
              </span>
            </SpotlightCard>

            {/* 2. Zumba & Dance Aerobics */}
            <SpotlightCard
              spotlightColor="rgba(255, 107, 24, 0.25)"
              className="p-6 sm:p-7 space-y-4 hover:border-brand-warm/40 shadow-card flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-burgundy/60 border border-brand-warm/30 flex items-center justify-center text-brand-warm shadow-md">
                  <Music className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {currentLang === 'en' ? 'Zumba & Bollywood Cardio' : 'জুম্বা ও ড্যান্স অ্যারোবিক্স'}
                </h4>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {currentLang === 'en'
                    ? 'Burn up to 600 calories per class with infectious Latin & Bollywood beats led by licensed female Zumba instructors.'
                    : 'আনন্দময় মিউজিকের তালে তালে প্রতি সেশনে ৫০০-৬০০ ক্যালোরি বার্ন করার সবচেয়ে জনপ্রিয় গ্রুপ ড্যান্স ওয়ার্কআউট।'}
                </p>
              </div>
              <span className="text-[11px] text-brand-warm font-bold pt-2 border-t border-brand-borderSubtle/60 block">
                {currentLang === 'en' ? '600 kcal / Session' : 'সর্বাধিক ক্যালোরি বার্ন'}
              </span>
            </SpotlightCard>

            {/* 3. Customized Bangladeshi Diet */}
            <SpotlightCard
              spotlightColor="rgba(229, 192, 123, 0.25)"
              className="p-6 sm:p-7 space-y-4 hover:border-brand-gold/40 shadow-card flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-burgundy/60 border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-md">
                  <Utensils className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {currentLang === 'en' ? 'Customized Bangladeshi Diet' : 'সহজ দেশীয় খাবারের ডায়েট চার্ট'}
                </h4>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {currentLang === 'en'
                    ? 'No crash diets. Enjoy delicious everyday Bangladeshi meals (Fish, Dal, Veggies, Rice) formulated by clinical dietitians.'
                    : 'কোনো অবাস্তব ডায়েট নয়; ঘরের সাধারণ মাছ, ডাল, ভাত ও শাকসবজি খেয়ে সুস্থ থাকার টেকসই ডায়েট প্ল্যান।'}
                </p>
              </div>
              <span className="text-[11px] text-brand-gold font-bold pt-2 border-t border-brand-borderSubtle/60 block">
                {currentLang === 'en' ? 'Real Food • Zero Starvation' : 'ঘরে তৈরি খাবার'}
              </span>
            </SpotlightCard>

            {/* 4. Steam Bath & Luxury Lockers */}
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.25)"
              className="p-6 sm:p-7 space-y-4 hover:border-brand-accent/40 shadow-card flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-burgundy/60 border border-brand-accent/30 flex items-center justify-center text-brand-softPink shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {currentLang === 'en' ? 'Steam Bath & Luxury Lockers' : 'রিল্যাক্সিং স্টিম বাথ ও লকার'}
                </h4>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {currentLang === 'en'
                    ? 'Detoxify and relax muscle soreness after workouts with dedicated steam sessions, hot showers, and secure vanity lockers.'
                    : 'শরীরচর্চার পর ক্লান্তি দূর করতে আরামদায়ক স্টিম বাথ, হট শাওয়ার এবং সুরক্ষিত পার্সোনাল লকার।'}
                </p>
              </div>
              <span className="text-[11px] text-brand-softPink font-bold pt-2 border-t border-brand-borderSubtle/60 block">
                {currentLang === 'en' ? 'Spa-Grade Relaxation' : 'আরাম ও পরিচ্ছন্নতা'}
              </span>
            </SpotlightCard>

            {/* 5. Kids Play Corner (Full Width on Mobile) */}
            <SpotlightCard
              spotlightColor="rgba(52, 211, 153, 0.25)"
              className="sm:col-span-2 p-6 sm:p-7 space-y-3 hover:border-emerald-500/40 shadow-card flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-burgundy/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md shrink-0">
                  <Baby className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {currentLang === 'en' ? 'Mother-Friendly Kids Lounge Corner' : 'বাচ্চাদের জন্য নিরাপদ ও আরামদায়ক কর্নার'}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {currentLang === 'en'
                      ? 'Mothers can exercise with absolute peace of mind while kids play safely in our monitored lounge with books and games.'
                      : 'মায়েরা যাতে নির্বিঘ্নে শরীরচর্চা করতে পারেন, সেজন্য রয়েছে বাচ্চাদের জন্য রঙিন খেলনা ও মনিটরড প্লে-জোন।'}
                  </p>
                </div>
              </div>
            </SpotlightCard>

          </div>

        </div>

      </div>
    </section>
  );
};
