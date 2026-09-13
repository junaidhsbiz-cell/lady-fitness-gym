import React from 'react';
import { motion } from 'motion/react';
import { Tag, Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { campaignOffers } from '../data/offers';
import { MagneticButton } from '../components/MagneticButton';
import { formatPrice, formatPriceBn } from '../lib/utils';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface CampaignOfferBannerProps {
  currentLang: 'en' | 'bn';
  onBook: (title: string) => void;
}

export const CampaignOfferBanner: React.FC<CampaignOfferBannerProps> = ({
  currentLang,
  onBook,
}) => {
  const offer = campaignOffers[0];
  if (!offer || !offer.isActive) return null;

  const handleClaimOffer = () => {
    const waUrl = buildWhatsAppUrl({
      action: 'plan',
      detail: `2nd Branch Campaign Offer: 50% Off Admission (${formatPrice(offer.promoAdmission)})`,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-10 bg-gradient-to-r from-brand-burgundyDeep via-brand-bgCard to-brand-burgundyDeep border-y border-brand-accent/40 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-brand-accent/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-brand-warm/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-brand-bgDark/85 backdrop-blur-xl border border-brand-accent/35 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Left info */}
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-accent to-brand-warm text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                <Tag className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? `${offer.discountPercentage}% Discount Offer` : `${offer.discountPercentage}% ছাড় স্পেশাল অফার`}</span>
              </span>

              <span className="inline-flex items-center gap-1 text-xs text-brand-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? `Campaign: ${offer.campaignDates}` : `অফার সময়কাল: ${offer.campaignDatesBn}`}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
              {currentLang === 'en' ? offer.title : offer.titleBn}
            </h3>

            <p className="text-xs sm:text-sm text-brand-textMuted max-w-2xl leading-relaxed">
              {currentLang === 'en'
                ? `Regular admission fee is ${formatPrice(offer.regularAdmission)}. Enroll during the limited campaign period for only ${formatPrice(offer.promoAdmission)}!`
                : `রেগুলার ভর্তি ফি ${formatPriceBn(offer.regularAdmission)}-এর পরিবর্তে ২য় শাখা উদ্বোধন উপলক্ষে ভর্তি ফি মাত্র ${formatPriceBn(offer.promoAdmission)}!`}
            </p>
          </div>

          {/* Right Price Pill & Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 shrink-0">
            <div className="text-center">
              <div className="flex items-baseline gap-2 justify-center">
                <span className="text-xs text-slate-500 line-through font-bold">
                  {currentLang === 'en' ? formatPrice(offer.regularAdmission) : formatPriceBn(offer.regularAdmission)}
                </span>
                <span className="text-3xl sm:text-4xl font-black text-gradient-gold font-display">
                  {currentLang === 'en' ? formatPrice(offer.promoAdmission) : formatPriceBn(offer.promoAdmission)}
                </span>
              </div>
              <span className="text-[10px] text-brand-softPink font-bold uppercase tracking-wider block">
                {currentLang === 'en' ? 'Admission Promo Fee' : 'অফার ভর্তি ফি'}
              </span>
            </div>

            <MagneticButton
              variant="gold"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={handleClaimOffer}
            >
              {currentLang === 'en' ? 'Claim 50% Off Admission' : 'অফারে ভর্তি কনফার্ম করুন'}
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
};
