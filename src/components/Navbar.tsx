import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Sparkles, Globe, Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { MagneticButton } from './MagneticButton';
import { business } from '../data/business';

interface NavbarProps {
  currentLang: 'en' | 'bn';
  onToggleLang: () => void;
  onOpenTrial: () => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenTrial,
  isMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 30;
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { href: "#home", id: "home", labelEn: "Home", labelBn: "হোম" },
    { href: "#about", id: "about", labelEn: "Why Us", labelBn: "আমাদের বৈশিষ্ট্য" },
    { href: "#programs", id: "programs", labelEn: "Programs", labelBn: "প্রোগ্রাম" },
    { href: "#schedule", id: "schedule", labelEn: "Schedule", labelBn: "রুটিন" },
    { href: "#trainers", id: "trainers", labelEn: "Trainers", labelBn: "লেডি ট্রেইনার" },
    { href: "#membership", id: "membership", labelEn: "Plans", labelBn: "মেম্বারশিপ" },
    { href: "#reviews", id: "reviews", labelEn: "Reviews", labelBn: "রিভিউ" },
    { href: "#contact", id: "contact", labelEn: "Location", labelBn: "ঠিকানা" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.id);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-brand-burgundyDeep via-brand-accent to-brand-warm text-white text-xs py-2 px-4 text-center font-medium relative z-50 flex items-center justify-center gap-2 shadow-sm">
        <span className="hidden sm:inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-200" />
          {currentLang === 'en' ? 'Limited Narayanganj Offer' : 'নারায়ণগঞ্জ স্পেশাল অফার'}
        </span>
        <span className="truncate text-[11px] sm:text-xs">
          {currentLang === 'en'
            ? '🎉 Free 1-Day VIP Trial Pass + Body Composition Test for Women in Narayanganj!'
            : '🎉 নারায়ণগঞ্জের নারীদের জন্য ফ্রি ১-দিনের ভিআইপি ট্রায়াল পাস ও বডি অ্যানালাইসিস!'}
        </span>
        <button
          onClick={onOpenTrial}
          className="underline hover:text-amber-200 font-extrabold ml-1 shrink-0 transition text-xs"
        >
          {currentLang === 'en' ? 'Claim Now →' : 'এখনই নিন →'}
        </button>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-bgDark/90 backdrop-blur-2xl border-b border-brand-borderSubtle shadow-glass py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Wordmark */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-brand-accent via-rose-600 to-brand-warm p-0.5 flex items-center justify-center shadow-glow-accent group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-brand-bgDark rounded-[14px] flex items-center justify-center overflow-hidden p-1.5">
                  <img
                    src="/images/logo-icon.png"
                    alt="Lady Fitness GYM Logo"
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-brand-softPink transition">
                    LADY FITNESS
                  </span>
                  <span className="text-[10px] bg-brand-accent/20 text-brand-softPink border border-brand-accent/30 px-1.5 py-0.2 rounded-md font-bold uppercase tracking-wider">
                    100% Women
                  </span>
                </div>
                <span className="text-[10px] text-brand-textMuted font-semibold tracking-wider">
                  WELLNESS CLUB • NARAYANGANJ
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Animated Active Pill */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-brand-bgCard/70 backdrop-blur-xl border border-brand-borderSubtle/60 px-3 py-1.5 rounded-full shadow-card">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 focus:outline-none ${
                      isActive ? 'text-white' : 'text-brand-textMuted hover:text-brand-softPink'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-gradient-to-r from-brand-accent/30 to-brand-warm/20 border border-brand-accent/50 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{currentLang === 'en' ? link.labelEn : link.labelBn}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* WhatsApp Quick Icon */}
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent("Hello Lady Fitness GYM! I want to inquire about membership packages.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white bg-emerald-600/15 border border-emerald-500/30 px-3 py-1.5 rounded-full transition font-semibold"
                title="Chat with Female Coordinator on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Language Switch Toggle */}
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 bg-brand-bgCard/90 hover:bg-brand-cardHover border border-brand-borderSubtle text-xs px-3 py-1.5 rounded-full text-brand-softPink transition font-bold focus:outline-none focus:ring-1 focus:ring-brand-accent"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-brand-accent" />
                <span>{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
              </button>

              {/* Primary Book Trial Magnetic Button */}
              <MagneticButton
                variant="primary"
                size="sm"
                onClick={onOpenTrial}
                icon={<Sparkles className="w-4 h-4" />}
                className="hidden sm:inline-flex"
              >
                {currentLang === 'en' ? 'Free 1-Day Trial' : 'ফ্রি ১-দিনের ট্রায়াল'}
              </MagneticButton>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={onToggleMobileMenu}
                className="lg:hidden text-slate-200 hover:text-white p-2.5 rounded-2xl bg-brand-bgCard border border-brand-borderSubtle focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>
    </>
  );
};
