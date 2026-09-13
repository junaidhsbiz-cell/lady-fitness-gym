import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Sparkles, Phone, MessageCircle, MapPin, X, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { business } from '../data/business';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'en' | 'bn';
  onOpenTrial: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenTrial,
}) => {
  const navLinks = [
    { href: "#home", labelEn: "Home", labelBn: "হোম" },
    { href: "#about", labelEn: "Why Lady Fitness", labelBn: "আমাদের বৈশিষ্ট্য" },
    { href: "#programs", labelEn: "Fitness Programs", labelBn: "প্রোগ্রামসমূহ" },
    { href: "#schedule", labelEn: "Weekly Class Routine", labelBn: "ক্লাস রুটিন" },
    { href: "#trainers", labelEn: "Female Trainers", labelBn: "লেডি ট্রেইনার" },
    { href: "#membership", labelEn: "Membership Plans", labelBn: "মেম্বারশিপ প্যাকেজ" },
    { href: "#calculator", labelEn: "BMI & Diet Calculator", labelBn: "বিএমআই ও ডায়েট ক্যালকুলেটর" },
    { href: "#reviews", labelEn: "Success Stories", labelBn: "সদস্যদের রিভিউ" },
    { href: "#contact", labelEn: "Location & Contact", labelBn: "ঠিকানা ও যোগাযোগ" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-50 lg:hidden bg-brand-bgDark/98 backdrop-blur-3xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-5 border-b border-brand-borderSubtle">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-warm p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-brand-bgDark rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                  <img src="/images/logo-icon.png" alt="Lady Fitness GYM Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-base leading-none">LADY FITNESS GYM</span>
                <span className="text-[10px] text-brand-gold font-bold uppercase mt-0.5">100% Female Studio</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-brand-bgCard text-slate-200 hover:text-white border border-brand-borderSubtle focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List with Staggered Fade */}
          <div className="px-6 py-6 space-y-2 flex-1">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.25 }}
                className="flex items-center justify-between py-3 text-base font-bold text-brand-textBody hover:text-brand-accent border-b border-white/5 transition"
              >
                <span>{currentLang === 'en' ? link.labelEn : link.labelBn}</span>
                <ArrowRight className="w-4 h-4 text-brand-accent/50" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="p-6 bg-brand-bgCard/90 border-t border-brand-borderSubtle space-y-3">
            <MagneticButton
              variant="primary"
              size="lg"
              fullWidth
              icon={<Sparkles className="w-5 h-5" />}
              onClick={() => {
                onClose();
                onOpenTrial();
              }}
            >
              {currentLang === 'en' ? 'Book Free 1-Day VIP Trial' : 'ফ্রি ১-দিনের ট্রায়াল নিন'}
            </MagneticButton>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={`tel:${business.primaryPhone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand-bgDark border border-brand-borderSubtle text-xs font-bold text-white hover:bg-brand-burgundy transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{currentLang === 'en' ? 'Call Studio' : 'সরাসরি কল'}</span>
              </a>

              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-brand-textMuted justify-center pt-2">
              <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span className="truncate">{business.address}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
