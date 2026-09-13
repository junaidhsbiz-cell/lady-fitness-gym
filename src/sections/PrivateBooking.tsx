import React, { useState } from 'react';
import { Lock, Sparkles, User, Phone, Calendar, Clock, MessageSquare, ShieldCheck, Heart, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SpotlightCard } from '../components/SpotlightCard';
import { MagneticButton } from '../components/MagneticButton';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface PrivateBookingProps {
  currentLang: 'en' | 'bn';
  onSuccess: (name: string, title: string) => void;
}

export const PrivateBooking: React.FC<PrivateBookingProps> = ({
  currentLang,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (7 AM – 11 AM)');
  const [program, setProgram] = useState('Weight Loss & Toning');
  const [coachPreference, setCoachPreference] = useState('Any Senior Female Coach');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const coaches = [
    { id: 'any', name: 'Any Coach', nameBn: 'যেকোনো ট্রেইনার' },
    { id: 'nasrin', name: 'Coach Nasrin', nameBn: 'নাসরিন সুলতানা' },
    { id: 'farhana', name: 'Coach Farhana', nameBn: 'ফারহানা আক্তার' },
    { id: 'rimi', name: 'Coach Rimi', nameBn: 'রিমি রহমান' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      const waUrl = buildWhatsAppUrl({
        action: 'trainer',
        name: name.trim(),
        phone: phone.trim(),
        detail: `VIP Private Session: ${program} with ${coachPreference} on ${preferredDate || 'Earliest'} (${preferredTime}). Notes: ${message || 'None'}`
      });

      onSuccess(name.trim(), "Private VIP Slot Request");
      setName('');
      setPhone('');
      setMessage('');

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-warm/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-accent/15 text-brand-softPink border border-brand-accent/35 shadow-glow-accent">
              <Lock className="w-3.5 h-3.5 text-brand-accent" />
              {currentLang === 'en' ? 'VIP Private Slot Booking' : 'ভিআইপি প্রাইভেট সেশন'}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.14]">
              <span>{currentLang === 'en' ? 'Your Fitness.' : 'আপনার ফিটনেস।'} </span>
              <br />
              <span className="text-gradient font-serif italic font-normal">
                {currentLang === 'en' ? 'Your Privacy.' : 'আপনার পূর্ণ নিরাপত্তা।'}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
              {currentLang === 'en'
                ? 'Prefer an uninterrupted, dedicated 1-on-1 private workout, bridal sculpting, or medical PCOS recovery slot? Reserve a private VIP hour with our senior female master coaches.'
                : 'সম্পূর্ণ নিরিবিলি পরিবেশে একজন অভিজ্ঞ সিনিয়র নারী ট্রেইনারের তত্ত্বাবধানে ওয়ান-টু-ওয়ান প্রাইভেট সেশন বুক করুন। কোনো সংকোচ ছাড়াই পৌঁছান আপনার লক্ষ্যে।'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-2xl bg-brand-burgundy/60 text-brand-accent flex items-center justify-center shrink-0 border border-brand-accent/30 shadow-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {currentLang === 'en' ? 'Floor Exclusivity & Undivided Attention' : 'ট্রেইনারের ১০০% মনোযোগ ও প্রাইভেসি'}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-0.5">
                    {currentLang === 'en' ? 'Form corrections, biomechanics, and safety checks.' : 'সঠিক পজিশন ও ইনজুরি ছাড়া নিরাপদ শরীরচর্চা।'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-2xl bg-brand-burgundy/60 text-emerald-400 flex items-center justify-center shrink-0 border border-brand-accent/30 shadow-md">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {currentLang === 'en' ? 'Custom PCOS & Post-Natal Protocols' : 'পিসিওএস ও স্পেশাল হেলথ কেয়ার'}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-0.5">
                    {currentLang === 'en' ? 'Tailored to hormonal cycles, thyroid & spine wellness.' : 'হরমোনাল ব্যালেন্স ও ব্যাকপেইন নিরাময়ের উপযোগী ব্যায়াম।'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Luxury Booking Card */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.3)"
              className="p-6 sm:p-10 border border-brand-accent/35 shadow-2xl space-y-6"
            >
              <div className="border-b border-brand-borderSubtle pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Crown className="w-5 h-5 text-brand-gold" />
                    <span>{currentLang === 'en' ? 'Schedule Your Private Consultation' : 'প্রাইভেট কনসালটেশন স্লট বুক করুন'}</span>
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    {currentLang === 'en'
                      ? 'Submit your details and our female team will connect via WhatsApp.'
                      : 'আপনার তথ্য দিয়ে সাবমিট করুন। আমাদের লেডি কো-অর্ডিনেটর সময় কনফার্ম করবেন।'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder={currentLang === 'en' ? 'Nusrat Jahan' : 'নুসরাত জাহান'}
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
                </div>

                {/* Coach Selection Chips */}
                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1.5">
                    {currentLang === 'en' ? 'Preferred Female Coach' : 'পছন্দের নারী প্রশিক্ষক'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {coaches.map((c) => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => setCoachPreference(c.name)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold border transition ${
                          coachPreference === c.name
                            ? 'bg-gradient-to-r from-brand-accent to-rose-600 text-white border-white/20 shadow-md'
                            : 'bg-brand-bgDark/80 text-brand-textMuted border-brand-borderSubtle hover:text-white'
                        }`}
                      >
                        {currentLang === 'en' ? c.name : c.nameBn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Preferred Date' : 'তারিখ'}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Preferred Shift' : 'শিফট'}
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                      >
                        <option value="Morning (7 AM – 11 AM)">Morning (7 AM – 11 AM)</option>
                        <option value="Afternoon (2 PM – 5 PM)">Afternoon (2 PM – 5 PM)</option>
                        <option value="Evening (5 PM – 9 PM)">Evening (5 PM – 9 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Specialty Focus' : 'লক্ষ্য'}
                    </label>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl px-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                    >
                      <option value="Weight Loss & Toning">Fat Loss & Toning</option>
                      <option value="PCOS & Hormone Health">PCOS / Hormone Care</option>
                      <option value="Post-Pregnancy Recovery">Post-Natal Core Rehab</option>
                      <option value="Bridal Glow Transformation">Bridal 60-Day Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Specific Health Notes (Optional)' : 'শারীরিক কোনো সমস্যা বা বার্তা'}
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-brand-textMuted absolute left-3.5 top-3" />
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={currentLang === 'en' ? 'Tell us your questions or medical history...' : 'আপনার প্রশ্ন বা স্বাস্থ্যগত লক্ষ্য লিখুন...'}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl pl-10 pr-4 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  {currentLang === 'en' ? 'Submit VIP Slot Request & Open WhatsApp' : 'প্রাইভেট স্লট রিকোয়েস্ট পাঠান'}
                </MagneticButton>
              </form>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
