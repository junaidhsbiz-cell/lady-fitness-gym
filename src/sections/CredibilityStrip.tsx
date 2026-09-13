import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, HeartHandshake, Sparkles } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';
import { business } from '../data/business';

interface CredibilityStripProps {
  currentLang: 'en' | 'bn';
}

export const CredibilityStrip: React.FC<CredibilityStripProps> = ({ currentLang }) => {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />,
      titleEn: "100% Female Environment",
      titleBn: "১০০% নারীদের জন্য সংরক্ষিত",
      descEn: "Zero male entry guarantee",
      descBn: "পুরুষদের প্রবেশ সম্পূর্ণ নিষিদ্ধ",
      spotlight: "rgba(255, 42, 85, 0.25)"
    },
    {
      icon: <Users className="w-5 h-5 text-brand-warm shrink-0" />,
      titleEn: "10,000+ Community",
      titleBn: "১০,০০০+ ফেসবুক পরিবার",
      descEn: `${business.city}'s largest women network`,
      descBn: "নারায়ণগঞ্জের সবচেয়ে বড় নারী পরিবার",
      spotlight: "rgba(255, 107, 24, 0.25)"
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />,
      titleEn: "Certified Lady Coaches",
      titleBn: "অভিজ্ঞ নারী ট্রেইনার",
      descEn: "Zumba, CPT & Dietitians",
      descBn: "সার্টিফাইড ফিটনেস প্রশিক্ষক",
      spotlight: "rgba(52, 211, 153, 0.25)"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-gold shrink-0" />,
      titleEn: "PCOS & Bridal Care",
      titleBn: "পিসিওএস ও ব্রাইডাল কেয়ার",
      descEn: "Targeted hormonal wellness",
      descBn: "হরমোনাল ব্যালেন্স ও ওয়েলনেস",
      spotlight: "rgba(229, 192, 123, 0.25)"
    }
  ];

  return (
    <div className="border-y border-brand-borderSubtle bg-brand-bgMedium/60 backdrop-blur-xl py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <SpotlightCard
                spotlightColor={item.spotlight}
                className="p-4 sm:p-5 flex items-center gap-4 group hover:border-brand-accent/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-bgDark border border-brand-borderSubtle flex items-center justify-center group-hover:scale-110 group-hover:border-brand-accent transition-all duration-300 shadow-md shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight group-hover:text-brand-softPink transition">
                    {currentLang === 'en' ? item.titleEn : item.titleBn}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-0.5">
                    {currentLang === 'en' ? item.descEn : item.descBn}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
