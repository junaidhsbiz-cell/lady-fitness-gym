import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, User, Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTitle?: string;
  initialCategory?: 'trial' | 'schedule' | 'trainer' | 'general';
  currentLang: 'en' | 'bn';
  onSuccess: (name: string, title: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTitle = "Free 1-Day VIP Trial Pass",
  initialCategory = "trial",
  currentLang,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredShift, setPreferredShift] = useState('morning');
  const [customNotes, setCustomNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setPreferredDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });

      const waUrl = buildWhatsAppUrl({
        action: initialCategory,
        name: name.trim(),
        phone: phone.trim(),
        detail: initialTitle,
        preferredDate,
        preferredShift:
          preferredShift === 'morning'
            ? 'Morning (6 AM - 11 AM)'
            : preferredShift === 'afternoon'
            ? 'Afternoon (2 PM - 5 PM)'
            : 'Evening (5 PM - 10 PM)'
      });

      onSuccess(name.trim(), initialTitle);
      onClose();

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setName('');
      setPhone('');
      setCustomNotes('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-brand-accent/40 shadow-2xl relative z-10 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-warm to-brand-gold" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-textMuted hover:text-white p-1.5 rounded-xl bg-white/5 border border-white/10 transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-accent to-brand-warm p-0.5 flex items-center justify-center mx-auto shadow-glow-accent">
                  <div className="w-full h-full bg-brand-bgDark rounded-[14px] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-brand-accent" />
                  </div>
                </div>

                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                  {currentLang === 'en' ? 'Direct Studio Reservation' : 'স্টুডিও সিট বুকিং'}
                </span>

                <h3 className="text-2xl font-display font-black text-white">
                  {initialTitle}
                </h3>

                <p className="text-xs text-brand-textMuted leading-relaxed max-w-sm mx-auto">
                  {currentLang === 'en'
                    ? 'Our female coordinator will confirm your time and send orientation details via WhatsApp.'
                    : 'আমাদের নারী কো-অর্ডিনেটর সরাসরি হোয়াটসঅ্যাপে আপনার সময় নিশ্চিত করবেন।'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Your Full Name' : 'আপনার পুরো নাম'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-accent absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={currentLang === 'en' ? 'e.g. Nusrat Jahan' : 'যেমন: নুসরাত জাহান'}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Mobile / WhatsApp Number' : 'মোবাইল / হোয়াটসঅ্যাপ নম্বর'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-accent absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Preferred Date' : 'পছন্দের তারিখ'}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Preferred Shift' : 'পছন্দের শিফট'}
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={preferredShift}
                        onChange={(e) => setPreferredShift(e.target.value)}
                        className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                      >
                        <option value="morning">Morning (6 AM – 11 AM)</option>
                        <option value="afternoon">Afternoon (2 PM – 5 PM)</option>
                        <option value="evening">Evening (5 PM – 10 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Goal / Special Queries (Optional)' : 'ফিটনেস লক্ষ্য বা মন্তব্য'}
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-brand-textMuted absolute left-3.5 top-3" />
                    <textarea
                      rows={2}
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      placeholder={currentLang === 'en' ? 'e.g. Weight loss, PCOS diet advice...' : 'যেমন: ওজন কমানো, পিসিওএস ডায়েট পরামর্শ...'}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>
                </div>

                <div className="bg-brand-bgDark/80 p-3 rounded-2xl border border-brand-borderSubtle text-[11px] text-brand-textMuted flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {currentLang === 'en'
                      ? '100% Free • Zero commitment • Full privacy guarantee'
                      : 'সম্পূর্ণ ফ্রি • কোনো হিডেন চার্জ নেই • শতভাগ প্রাইভেসি'}
                  </span>
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  {currentLang === 'en' ? 'Confirm Reservation on WhatsApp' : 'রিজার্ভেশন নিশ্চিত করুন'}
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
