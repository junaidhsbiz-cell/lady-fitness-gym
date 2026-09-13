import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { business } from '../data/business';

interface MobileStickyCTAProps {
  currentLang: 'en' | 'bn';
  onOpenTrial: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  currentLang,
  onOpenTrial,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-bgDark/95 backdrop-blur-2xl border-t border-brand-borderSubtle p-3 shadow-2xl safe-bottom">
      <div className="max-w-md mx-auto grid grid-cols-12 gap-2.5 items-center">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${business.primaryPhone}`}
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-brand-bgCard border border-brand-borderSubtle text-[11px] font-bold text-slate-200 active:scale-95 transition hover:bg-brand-cardHover"
          aria-label="Call gym"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>{currentLang === 'en' ? 'Call' : 'কল'}</span>
        </a>

        {/* Primary Trial Booking Button with subtle pulse */}
        <button
          onClick={onOpenTrial}
          className="col-span-6 flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-gradient-to-r from-brand-accent via-rose-600 to-brand-warm text-white font-extrabold text-xs shadow-glow-accent active:scale-95 transition"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
          <span className="truncate">{currentLang === 'en' ? 'Free 1-Day Trial' : 'ফ্রি ট্রায়াল নিন'}</span>
        </button>

        {/* WhatsApp Direct Button */}
        <a
          href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent("Hello Lady Fitness GYM! I would like to inquire about joining and class schedules.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-emerald-600/25 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 active:scale-95 transition hover:bg-emerald-600 hover:text-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
