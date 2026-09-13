import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, User, Phone, CheckCircle2, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MembershipPlan } from '../data/membership';
import { MagneticButton } from './MagneticButton';
import { formatPrice, formatPriceBn } from '../lib/utils';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: MembershipPlan | null;
  currentLang: 'en' | 'bn';
  onSuccess: (name: string, planName: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  plan,
  currentLang,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'counter'>('bkash');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });

      const waUrl = buildWhatsAppUrl({
        action: 'plan',
        name: name.trim(),
        phone: phone.trim(),
        detail: `${plan.name} (${formatPrice(plan.price)}) via ${paymentMethod.toUpperCase()}`
      });

      onSuccess(name.trim(), plan.name);
      onClose();

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setName('');
      setPhone('');
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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-brand-accent/40 shadow-2xl relative z-10 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-warmGold to-brand-warm" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-textMuted hover:text-white p-1.5 rounded-xl bg-white/5 border border-white/10 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              {/* Header */}
              <div className="text-center space-y-1.5">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                  {currentLang === 'en' ? 'Online Admission & Membership' : 'অনলাইন ভর্তি ও মেম্বারশিপ বুকিং'}
                </span>

                <h3 className="text-2xl font-display font-black text-white">
                  {currentLang === 'en' ? plan.name : plan.nameBn}
                </h3>

                <div className="flex items-baseline justify-center gap-2 pt-1">
                  <span className="text-3xl sm:text-4xl font-black text-gradient-gold">
                    {currentLang === 'en' ? formatPrice(plan.price) : formatPriceBn(plan.price)}
                  </span>
                  <span className="text-xs text-brand-textMuted font-semibold">
                    / {currentLang === 'en' ? plan.duration : plan.durationBn}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Member Name' : 'সদস্যের নাম'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-accent absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={currentLang === 'en' ? 'e.g. Farzana Yasmin' : 'যেমন: ফারজানা ইয়াসমিন'}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'WhatsApp / Phone Number' : 'হোয়াটসঅ্যাপ / ফোন নম্বর'} *
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

                {/* Payment Method Selector */}
                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1.5">
                    {currentLang === 'en' ? 'Select Preferred Payment Gateway' : 'পেমেন্ট মেথড নির্বাচন করুন'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <label
                      className={`border rounded-2xl p-2.5 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition text-center ${
                        paymentMethod === 'bkash'
                          ? 'border-pink-500 bg-pink-500/15 text-pink-300 shadow-glow-accent'
                          : 'border-white/10 bg-brand-bgDark/60 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pm"
                        value="bkash"
                        checked={paymentMethod === 'bkash'}
                        onChange={() => setPaymentMethod('bkash')}
                        className="sr-only"
                      />
                      <span className="font-extrabold text-xs text-pink-400">bKash</span>
                      <span className="text-[10px] text-slate-400">বিকাশ অনলাইন</span>
                    </label>

                    <label
                      className={`border rounded-2xl p-2.5 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition text-center ${
                        paymentMethod === 'nagad'
                          ? 'border-orange-500 bg-orange-500/15 text-orange-300 shadow-glow-warm'
                          : 'border-white/10 bg-brand-bgDark/60 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pm"
                        value="nagad"
                        checked={paymentMethod === 'nagad'}
                        onChange={() => setPaymentMethod('nagad')}
                        className="sr-only"
                      />
                      <span className="font-extrabold text-xs text-orange-400">Nagad</span>
                      <span className="text-[10px] text-slate-400">নগদ অনলাইন</span>
                    </label>

                    <label
                      className={`border rounded-2xl p-2.5 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition text-center ${
                        paymentMethod === 'counter'
                          ? 'border-brand-gold bg-amber-500/15 text-amber-300 shadow-glow-gold'
                          : 'border-white/10 bg-brand-bgDark/60 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pm"
                        value="counter"
                        checked={paymentMethod === 'counter'}
                        onChange={() => setPaymentMethod('counter')}
                        className="sr-only"
                      />
                      <CreditCard className="w-4 h-4 text-brand-gold" />
                      <span className="text-[10px] text-slate-400">কাউন্টারে ক্যাশ</span>
                    </label>
                  </div>
                </div>

                <div className="bg-brand-bgDark/90 p-3 rounded-2xl border border-brand-borderSubtle text-[11px] text-brand-textMuted space-y-0.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Instant Digital ID Card & Receipt</span>
                  </div>
                  <p>
                    {currentLang === 'en'
                      ? 'No extra admission fee or registration fee is required.'
                      : 'কোনো অতিরিক্ত ভর্তি বা রেজিস্ট্রেশন ফি নেই।'}
                  </p>
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<ShieldCheck className="w-5 h-5" />}
                >
                  {currentLang === 'en'
                    ? `Proceed to Enroll (${formatPrice(plan.price)})`
                    : `ভর্তি নিশ্চিত করুন (${formatPriceBn(plan.price)})`}
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
