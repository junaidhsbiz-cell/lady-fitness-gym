import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, MessageCircle, Heart, Shield, Sparkles } from 'lucide-react';
import { business } from '../data/business';

interface FooterProps {
  currentLang: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-brand-bgDark border-t border-brand-borderSubtle pt-16 pb-28 lg:pb-16 text-brand-textMuted text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-accent to-brand-warm p-0.5 flex items-center justify-center shadow-glow-accent">
                <div className="w-full h-full bg-brand-bgDark rounded-[14px] flex items-center justify-center overflow-hidden p-1.5">
                  <img src="/images/logo-icon.png" alt="Lady Fitness GYM Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white tracking-tight">
                  LADY FITNESS GYM
                </span>
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">
                  Narayanganj • 100% Female Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-textMuted max-w-sm leading-relaxed">
              {currentLang === 'en'
                ? "Narayanganj's premier 100% female-exclusive gym & wellness club. Empowering women through safe, private, high-energy workouts and certified guidance in Chashara."
                : "নারায়ণগঞ্জের প্রথম ও একমাত্র সম্পূর্ণ নারীদের জন্য বিশেষায়িত ফিটনেস ও ওয়েলনেস সেন্টার। সম্পূর্ণ নিরাপদ, প্রাইভেট ও আধুনিক পরিবেশে শরীরচর্চার শতভাগ নিশ্চয়তা।"}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-brand-bgCard border border-brand-borderSubtle flex items-center justify-center text-brand-softPink hover:text-white hover:bg-brand-burgundy transition shadow-md"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-brand-bgCard border border-brand-borderSubtle flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${business.primaryPhone}`}
                className="w-10 h-10 rounded-2xl bg-brand-bgCard border border-brand-borderSubtle flex items-center justify-center text-brand-gold hover:text-white hover:bg-amber-600 transition shadow-md"
                aria-label="Phone Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold pt-1">
              <Shield className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? '100% Female Protected Space' : '১০০% নারীদের সংরক্ষিত জোন'}</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              {currentLang === 'en' ? 'Quick Navigation' : 'প্রয়োজনীয় লিংক'}
            </h5>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-softPink transition">{currentLang === 'en' ? 'Why Lady Fitness' : 'আমাদের বৈশিষ্ট্য'}</a></li>
              <li><a href="#programs" className="hover:text-brand-softPink transition">{currentLang === 'en' ? 'Fitness Programs' : 'প্রোগ্রামসমূহ'}</a></li>
              <li><a href="#schedule" className="hover:text-brand-softPink transition">{currentLang === 'en' ? 'Weekly Class Schedule' : 'ক্লাস রুটিন'}</a></li>
              <li><a href="#trainers" className="hover:text-brand-softPink transition">{currentLang === 'en' ? 'Meet Female Coaches' : 'লেডি ট্রেইনার'}</a></li>
              <li><a href="#membership" className="hover:text-brand-softPink transition">{currentLang === 'en' ? 'Membership & Pricing' : 'মেম্বারশিপ প্যাকেজ'}</a></li>
              <li><a href="#calculator" className="hover:text-brand-softPink transition">{currentLang === 'en' ? 'Women BMI Calculator' : 'বিএমআই ক্যালকুলেটর'}</a></li>
            </ul>
          </div>

          {/* Address & Hours (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              {currentLang === 'en' ? 'Studio Address & Hours' : 'ঠিকানা ও সময়সূচী'}
            </h5>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{currentLang === 'en' ? business.address : business.addressBn}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{business.primaryPhone} / {business.secondaryPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{business.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-warm shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">{business.openingHours.weekdays}</p>
                  <p className="text-[11px] text-brand-gold">{business.openingHours.friday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-textMuted">
          <p>© {new Date().getFullYear()} Lady Fitness GYM Narayanganj. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
            <span>for the empowering women of Narayanganj, Bangladesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
