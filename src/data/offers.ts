export interface CampaignOffer {
  id: string;
  title: string;
  titleBn: string;
  badge: string;
  badgeBn: string;
  regularAdmission: number;
  promoAdmission: number;
  discountPercentage: number;
  campaignDates: string;
  campaignDatesBn: string;
  isActive: boolean; // Set to true when promotional campaign is active
  description: string;
  descriptionBn: string;
}

export const campaignOffers: CampaignOffer[] = [
  {
    id: "branch-2-launch",
    title: "Lady Fitness GYM — 2nd Branch Special Campaign",
    titleBn: "লেডি ফিটনেস জিম — ২য় শাখা স্পেশাল অফার",
    badge: "Limited Promotional Offer",
    badgeBn: "সীমিত সময়ের অফার",
    regularAdmission: 3000,
    promoAdmission: 1500,
    discountPercentage: 50,
    campaignDates: "13 April – 20 April",
    campaignDatesBn: "১৩ এপ্রিল – ২০ এপ্রিল",
    isActive: true, // Configurable promotional campaign
    description: "Get 50% discount on admission fee during the official 2nd branch opening campaign.",
    descriptionBn: "লেডি ফিটনেস জিমের ২য় শাখা উদ্বোধন উপলক্ষে ভর্তি ফিতে পাচ্ছেন ৫০% ছাড়।"
  }
];
