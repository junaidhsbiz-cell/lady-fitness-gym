import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, RefreshCw, Gift } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { MembershipCard } from '../components/MembershipCard';
import { membershipPlans, MembershipPlan } from '../data/membership';

interface MembershipProps {
  currentLang: 'en' | 'bn';
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const Membership: React.FC<MembershipProps> = ({
  currentLang,
  onSelectPlan,
}) => {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-brand-bgMedium/40 border-t border-brand-borderSubtle relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-accent/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Verified Pricing & Options' : 'স্বচ্ছ ভর্তি ও ফি'}
          badgeColor="gold"
          titleRegular={currentLang === 'en' ? 'Simple, Honest' : 'সাশ্রয়ী ও বাস্তবসম্মত'}
          titleItalic={currentLang === 'en' ? 'Membership Packages' : 'মেম্বারশিপ প্যাকেজ'}
          subtitle={
            currentLang === 'en'
              ? 'Choose between our in-studio Chashara fitness gym access or Women\'s Heaven online live classes from home. No hidden registration fees.'
              : 'চাষাড়া স্টুডিওতে সরাসরি নিয়মিত শরীরচর্চা অথবা ঘরে বসে উইমেন্স হেভেন অনলাইন ক্লাসে যুক্ত হওয়ার সাশ্রয়ী প্যাকেজ।'
          }
        />

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {membershipPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="h-full flex flex-col"
            >
              <MembershipCard
                plan={plan}
                currentLang={currentLang}
                onSelect={onSelectPlan}
              />
            </motion.div>
          ))}
        </div>

        {/* Value Reassurances */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-brand-textMuted border-t border-brand-borderSubtle/60 pt-8 max-w-4xl mx-auto">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span className="text-white font-bold">
              {currentLang === 'en' ? '100% Female Protected Space' : '১০০% নারীদের সংরক্ষিত জোন'}
            </span>
          </span>

          <span className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-brand-warm" />
            <span className="text-white font-bold">
              {currentLang === 'en' ? '8 Daily Exercise Shifts Available' : 'প্রতিদিন ৮টি শিফট সুবিধা'}
            </span>
          </span>

          <span className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-bold">
              {currentLang === 'en' ? 'Direct WhatsApp & Phone Confirmation' : 'হোয়াটসঅ্যাপে সরাসরি কনফার্মেশন'}
            </span>
          </span>
        </div>

      </div>
    </section>
  );
};
