import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CalendarCheck, Clock, Check, Sparkles, Phone, Lock, Flame, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from '../components/MagneticButton';
import { SpotlightCard } from '../components/SpotlightCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { business } from '../data/business';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { gsap, isReducedMotion } from '../lib/gsap';

interface HeroProps {
  currentLang: 'en' | 'bn';
  onOpenTrial: () => void;
  onSuccess: (name: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenTrial,
  onSuccess,
}) => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from([titleLine1Ref.current, titleLine2Ref.current], {
        y: 45,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        delay: 0.1,
      })
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
      }, "-=0.4")
      .from(statsRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.7,
      }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) return;

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      const waUrl = buildWhatsAppUrl({
        action: 'trial',
        name: quickName.trim(),
        phone: quickPhone.trim(),
        detail: "Hero Quick 1-Day Trial Reservation"
      });

      onSuccess(quickName.trim(), "1-Day VIP Trial Pass");
      setQuickName('');
      setQuickPhone('');

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28">
      
      {/* Background Radial Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 w-96 h-96 bg-brand-warm/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-burgundy/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Privacy Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent/20 via-brand-burgundy/40 to-brand-warm/15 border border-brand-accent/35 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-softPink backdrop-blur-md shadow-glow-accent"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span>
                {currentLang === 'en'
                  ? '100% Female Environment • Absolute Privacy Guaranteed'
                  : '১০০% নারীদের সংরক্ষিত জিম • সম্পূর্ণ প্রাইভেসি ও নিরাপত্তা'}
              </span>
            </motion.div>

            {/* Editorial Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.12] text-white">
              <span ref={titleLine1Ref} className="block">
                {currentLang === 'en' ? 'Transform Your Body & Mind In' : 'সম্পূর্ণ নিরাপদ ও স্বাচ্ছন্দ্যময় পরিবেশে'}
              </span>
              <span ref={titleLine2Ref} className="block text-gradient font-serif italic font-normal tracking-normal pt-1">
                {currentLang === 'en' ? 'Complete Privacy & Comfort' : 'গড়ে তুলুন কাঙ্ক্ষিত ফিটনেস'}
              </span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-base sm:text-lg text-brand-textMuted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {currentLang === 'en'
                ? "Narayanganj's premier 100% female-only fitness club & live online classes. Daily sessions in Mat, Yoga, Aerobics, Zumba, and Instrumental exercise guided by experienced female trainers across 8 flexible daily shifts."
                : "নারায়ণগঞ্জের প্রথম ও একমাত্র সম্পূর্ণ নারীদের জন্য বিশেষায়িত জিম ও অনলাইন ক্লাস। প্রতিদিন ম্যাট, ইয়োগা, এরোবিক্স, জুম্বা ও ইনস্ট্রুমেন্টাল এক্সারসাইজ—অভিজ্ঞ নারী ট্রেইনারের সরাসরি তত্ত্বাবধানে ৮টি সুবিধাজনক শিফট।"}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-1.5 bg-brand-bgCard/90 border border-brand-borderSubtle px-3.5 py-1.5 rounded-xl shadow-card">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'en' ? '5 Daily Exercise Formats' : 'প্রতিদিন ৫ ধরণের এক্সারসাইজ'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-brand-bgCard/90 border border-brand-borderSubtle px-3.5 py-1.5 rounded-xl shadow-card">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'en' ? '8 Daily Exercise Shifts' : 'প্রতিদিন ৮টি শিফট (সকাল ৭টা–রাত ৯টা)'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-brand-bgCard/90 border border-brand-borderSubtle px-3.5 py-1.5 rounded-xl shadow-card">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'en' ? "Women's Heaven Online Live" : 'উইমেন্স হেভেন অনলাইন লাইভ ক্লাস'}</span>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <MagneticButton
                variant="primary"
                size="lg"
                icon={<CalendarCheck className="w-5 h-5" />}
                onClick={onOpenTrial}
                className="w-full sm:w-auto"
              >
                {currentLang === 'en' ? 'Book Free 1-Day Trial' : 'ফ্রি ১-দিনের ট্রায়াল নিন'}
              </MagneticButton>

              <a href="#schedule" className="w-full sm:w-auto">
                <MagneticButton
                  variant="secondary"
                  size="lg"
                  icon={<Clock className="w-5 h-5 text-brand-accent" />}
                  fullWidth
                >
                  {currentLang === 'en' ? 'View Class Schedule' : 'ক্লাস রুটিন দেখুন'}
                </MagneticButton>
              </a>
            </div>

            {/* Animated Social Proof Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-borderSubtle max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-black font-display text-white">
                  <AnimatedCounter value={10000} suffix="+" />
                </p>
                <p className="text-xs text-brand-softPink font-semibold mt-0.5">
                  {currentLang === 'en' ? 'FB Community' : 'ফেসবুক ফলোয়ার'}
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-black font-display text-gradient-gold">
                  8 Shifts
                </p>
                <p className="text-xs text-brand-gold font-semibold mt-0.5">
                  {currentLang === 'en' ? '7 AM – 9 PM Daily' : 'প্রতিদিন ৮টি শিফট'}
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-black font-display text-white">
                  5 Types
                </p>
                <p className="text-xs text-brand-softPink font-semibold mt-0.5">
                  {currentLang === 'en' ? 'Daily Exercises' : '৫ ধরণের এক্সারসাইজ'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.3)"
              className="border border-brand-accent/30 shadow-2xl p-4 sm:p-6 space-y-5"
            >
              {/* Visual Image Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-bgDark shadow-inner group">
                <img
                  src="/images/hero-fitness.jpg"
                  alt="Lady Fitness GYM Narayanganj Women Workout"
                  width={1000}
                  height={750}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark via-brand-bgDark/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-brand-bgDark/85 backdrop-blur-md border border-brand-accent/40 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs text-brand-softPink font-bold shadow-md">
                  <Lock className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{currentLang === 'en' ? 'Chashara, Narayanganj' : 'চাষাড়া, নারায়ণগঞ্জ'}</span>
                </div>

                {/* Official Logo Watermark Badge */}
                <div className="absolute top-3 right-3 bg-brand-bgDark/85 backdrop-blur-md border border-brand-accent/30 rounded-xl px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                  <img src="/images/logo-light.png" alt="Lady Fitness Logo" className="h-5 w-auto object-contain" />
                </div>

                {/* Bottom Operating Shift Strip */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-brand-bgDark/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-borderSubtle">
                    <p className="text-[10px] text-brand-textMuted uppercase font-bold">
                      {currentLang === 'en' ? 'Operating Shifts' : 'খোলা থাকার সময়'}
                    </p>
                    <p className="text-xs font-black text-white">6:00 AM – 10:00 PM</p>
                  </div>

                  <a
                    href={`tel:${business.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'Call Studio' : 'কল দিন'}</span>
                  </a>
                </div>
              </div>

              {/* Quick VIP Pass Mini Form */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-brand-softPink">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-brand-warm" />
                    {currentLang === 'en' ? '⚡ Instant Free VIP Pass Request' : '⚡ দ্রুত ফ্রি ট্রায়াল পাস বুকিং'}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Slots Open
                  </span>
                </div>

                <form onSubmit={handleQuickSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder={currentLang === 'en' ? 'Your Name (আপনার নাম)' : 'আপনার পুরো নাম'}
                    className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-xl px-4 py-2.5 text-sm text-white placeholder-brand-textMuted focus:outline-none focus:border-brand-accent transition"
                  />

                  <input
                    type="tel"
                    required
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="Mobile Number (01XXXXXXXXX)"
                    className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-xl px-4 py-2.5 text-sm text-white placeholder-brand-textMuted focus:outline-none focus:border-brand-accent transition"
                  />

                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={isSubmitting}
                    icon={<Sparkles className="w-4 h-4" />}
                  >
                    {currentLang === 'en' ? 'Claim My Free 1-Day Pass' : 'আমার ফ্রি পাস কনফার্ম করুন'}
                  </MagneticButton>
                </form>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};
