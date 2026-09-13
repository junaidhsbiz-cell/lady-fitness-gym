import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, Sparkles, User, Mail, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { MagneticButton } from '../components/MagneticButton';
import { business } from '../data/business';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface LocationContactProps {
  currentLang: 'en' | 'bn';
  onSuccess: (name: string, title: string) => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({
  currentLang,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('Free 1-Day Trial');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      const waUrl = buildWhatsAppUrl({
        action: 'general',
        name: name.trim(),
        phone: phone.trim(),
        detail: `Query: ${program}. Message: ${message || 'General Admission Inquiry'}`
      });

      onSuccess(name.trim(), "Direct Message");
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
    <section id="contact" className="py-20 lg:py-28 bg-brand-bgMedium/40 border-t border-brand-borderSubtle relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Visit & Connect' : 'ঠিকানা ও যোগাযোগ'}
          titleRegular={currentLang === 'en' ? 'We Are Located in the' : 'নারায়ণগঞ্জের প্রাণকেন্দ্র'}
          titleItalic={currentLang === 'en' ? 'Heart of Narayanganj' : 'চাষাড়ায় আমাদের অবস্থান'}
          subtitle={
            currentLang === 'en'
              ? 'Conveniently accessible near Chashara hub with easy rickshaw, auto, and car parking. Come visit our studio or chat with our female team directly.'
              : 'চাষাড়া মোড় ও বি.বি রোডের কাছে অবস্থিত। যেকোনো স্থান থেকে সহজে আসার সুব্যবস্থা রয়েছে।'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column (5 Cols): Studio Details & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.25)"
              className="p-6 sm:p-8 border border-brand-borderSubtle shadow-2xl space-y-5"
            >
              {/* Studio Status Chip */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {currentLang === 'en' ? 'Studio Open Now' : 'স্টুডিও এখন খোলা'}
                </span>
                <span className="text-[11px] text-brand-gold font-bold">100% Female Space</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-11 h-11 rounded-2xl bg-brand-burgundy/60 text-brand-accent flex items-center justify-center shrink-0 border border-brand-accent/30 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {currentLang === 'en' ? 'Gym Studio Address' : 'জিমের ঠিকানা'}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {currentLang === 'en' ? business.address : business.addressBn}
                  </p>
                  <p className="text-[11px] text-brand-gold font-semibold mt-0.5">
                    {business.landmark}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-brand-borderSubtle">
                <div className="w-11 h-11 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {currentLang === 'en' ? 'Helpline & WhatsApp' : 'হোয়াটসঅ্যাপ ও হেল্পলাইন'}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-0.5 font-medium">
                    {business.primaryPhone} / {business.secondaryPhone}
                  </p>
                  <a
                    href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent("Hello Lady Fitness GYM! I would like to visit the studio.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold mt-1 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'Chat 24/7 on WhatsApp' : 'হোয়াটসঅ্যাপে সরাসরি চ্যাট'}</span>
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-brand-borderSubtle">
                <div className="w-11 h-11 rounded-2xl bg-brand-burgundy/60 text-brand-warm flex items-center justify-center shrink-0 border border-brand-warm/30 shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {currentLang === 'en' ? 'Female Shifts' : 'খোলা থাকার সময়সূচী'}
                  </h4>
                  <p className="text-xs text-white font-bold mt-0.5">{business.openingHours.weekdays}</p>
                  <p className="text-[11px] text-brand-gold mt-0.5 font-medium">{business.openingHours.friday}</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Google Map Box */}
            <div className="rounded-3xl overflow-hidden glass-card border border-brand-borderSubtle h-64 relative shadow-card">
              <iframe
                title="Lady Fitness GYM Narayanganj Location Map"
                src={business.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-125 opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>

          </div>

          {/* Right Column (7 Cols): Direct Message Form */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.3)"
              className="p-6 sm:p-10 border border-brand-accent/35 shadow-2xl space-y-6"
            >
              <div className="border-b border-brand-borderSubtle pb-4">
                <h3 className="text-2xl font-display font-black text-white">
                  {currentLang === 'en' ? 'Send Us a Direct Message' : 'আমাদের সরাসরি মেসেজ পাঠান'}
                </h3>
                <p className="text-xs text-brand-textMuted mt-1">
                  {currentLang === 'en'
                    ? 'Have any questions about packages, shift times, or trial passes? We respond within minutes on WhatsApp.'
                    : 'ভর্তি ফি বা শিডিউল সম্পর্কিত যেকোনো তথ্যের জন্য ফর্মটি পূরণ করুন।'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Your Name' : 'আপনার নাম'} *
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
                      {currentLang === 'en' ? 'Mobile / WhatsApp' : 'মোবাইল / হোয়াটসঅ্যাপ'} *
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

                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Interested Topic / Service' : 'যে বিষয়ে জানতে চান:'}
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-accent transition"
                  >
                    <option value="Free 1-Day Trial">Free 1-Day VIP Trial Pass (ফ্রি ট্রায়াল)</option>
                    <option value="Zumba & Dance Aerobics">Zumba & Dance Aerobics (জুম্বা ও অ্যারোবিক্স)</option>
                    <option value="3-Month Transformation Plan">3-Month Transformation Plan (৩ মাসের প্যাকেজ)</option>
                    <option value="PCOS & Nutrition Diet">PCOS & Nutrition Diet (পিসিওএস ও ডায়েট)</option>
                    <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching (প্রাইভেট ট্রেইনার)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1">
                    {currentLang === 'en' ? 'Your Message / Questions' : 'আপনার বার্তা'}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={currentLang === 'en' ? 'Type your queries here...' : 'আপনার প্রশ্ন লিখুন...'}
                    className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-2xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-accent transition"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {currentLang === 'en' ? 'Send Message & Open WhatsApp' : 'মেসেজ পাঠান ও চ্যাট শুরু করুন'}
                </MagneticButton>
              </form>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
