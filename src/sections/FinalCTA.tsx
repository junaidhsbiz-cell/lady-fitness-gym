import React from 'react';
import { Sparkles, Phone, ShieldCheck, Heart } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { business } from '../data/business';

interface FinalCTAProps {
  currentLang: 'en' | 'bn';
  onOpenTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentLang, onOpenTrial }) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-brand-bgDark border-t border-brand-borderSubtle">
      
      {/* Background Multi-Layer Lighting Orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy/30 via-brand-bgDark to-brand-bgDark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-warm/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Floating Sparkle Badge */}
        <div>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-gradient-to-r from-brand-accent/20 via-brand-burgundy/50 to-brand-warm/20 border border-brand-accent/40 text-brand-softPink backdrop-blur-md shadow-glow-accent">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{currentLang === 'en' ? 'Start Your Transformation Today' : 'আজই শুরু করুন আপনার রূপান্তর'}</span>
          </span>
        </div>

        {/* Editorial Big Typography */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.08]">
          <span>{currentLang === 'en' ? 'Ready to Reclaim Your' : 'আপনার স্বাস্থ্য ও মনের'} </span>
          <br />
          <span className="text-gradient font-serif italic font-normal tracking-normal pt-2 block">
            {currentLang === 'en' ? 'Strength, Health & Confidence?' : 'কাঙ্ক্ষিত রূপান্তর গড়ুন'}
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-brand-textMuted max-w-2xl mx-auto leading-relaxed font-normal">
          {currentLang === 'en'
            ? 'Join over 10,000+ Narayanganj women in a 100% private, respectful, and empowering fitness sanctuary. Your first step can be simple — claim your free trial pass today.'
            : 'নারায়ণগঞ্জের ১০,০০০+ নারীর পরিবারে যোগ দিন। কোনো রকম অস্বস্তি ছাড়া সম্পূর্ণ নিরাপদ পরিবেশে শুরু হোক আপনার ফিটনেস জার্নি।'}
        </p>

        {/* Dual High-Impact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <MagneticButton
            variant="primary"
            size="lg"
            icon={<Sparkles className="w-5 h-5" />}
            onClick={onOpenTrial}
            className="w-full sm:w-auto text-base px-10 py-4.5"
          >
            {currentLang === 'en' ? 'Book Free 1-Day VIP Trial' : 'ফ্রি ১-দিনের ট্রায়াল পাস নিন'}
          </MagneticButton>

          <a href={`tel:${business.primaryPhone}`} className="w-full sm:w-auto">
            <MagneticButton
              variant="secondary"
              size="lg"
              icon={<Phone className="w-5 h-5 text-emerald-400" />}
              fullWidth
              className="text-base px-8 py-4.5"
            >
              {currentLang === 'en' ? 'Call Studio: ' + business.primaryPhone : 'সরাসরি কল দিন: ' + business.primaryPhone}
            </MagneticButton>
          </a>
        </div>

        {/* Reassurance Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 text-xs text-brand-softPink font-bold">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Private & Female Only Space</span>
          </span>
          <span className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-brand-accent" />
            <span>No Commitment • Free Body Scan</span>
          </span>
        </div>

      </div>
    </section>
  );
};
