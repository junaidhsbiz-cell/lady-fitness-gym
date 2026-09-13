/**
 * Centralized Verified Business Details for Lady Fitness GYM Narayanganj
 * Update these values directly to adjust contact numbers, social links, hours, and addresses.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  taglineBn: string;
  city: string;
  district: string;
  country: string;
  address: string;
  addressBn: string;
  landmark: string;
  primaryPhone: string;
  secondaryPhone: string;
  onlineClassPhone: string;
  whatsappNumber: string; // International format without '+' (e.g. 8801305479722)
  email: string;
  facebookUrl: string;
  facebookFollowers: string;
  operatingDays: string;
  operatingDaysBn: string;
  openingHours: {
    weekdays: string;
    friday: string;
    shiftSummary: string;
    onlineClassWindow: string;
  };
  stats: {
    followers: string;
    shiftsPerDay: string;
    exerciseTypes: string;
  };
  googleMapsEmbedUrl: string;
}

export const business: BusinessConfig = {
  name: "Lady Fitness GYM",
  tagline: "100% Female-Only Fitness & Wellness",
  taglineBn: "১০০% নারীদের জন্য বিশেষায়িত আধুনিক জিম ও অনলাইন ক্লাস",
  city: "Narayanganj",
  district: "Dhaka Division",
  country: "Bangladesh",
  address: "Level-4, Prime Tower, B.B. Road, Chashara, Narayanganj - 1400",
  addressBn: "লেভেল-৪, প্রাইম টাওয়ার, বি.বি রোড, চাষাড়া, নারায়ণগঞ্জ - ১৪০০",
  landmark: "Opposite to Heart Center / Balur Math Chashara Hub",
  primaryPhone: "+880 1305-479722",
  secondaryPhone: "+880 1688-040925",
  onlineClassPhone: "01894-430549",
  whatsappNumber: "8801305479722",
  email: "ladyfitness.ng@gmail.com",
  facebookUrl: "https://www.facebook.com/people/Lady-Fitness-GYM/100095024926427/",
  facebookFollowers: "10,000+",
  operatingDays: "Saturday – Thursday",
  operatingDaysBn: "শনিবার – বৃহস্পতিবার",
  openingHours: {
    weekdays: "Saturday – Thursday: 6:00 AM – 10:00 PM",
    friday: "Friday: 3:00 PM – 9:00 PM (Special Workshop & Review)",
    shiftSummary: "6:00 AM – 10:00 PM (Female Shifts Only)",
    onlineClassWindow: "Saturday – Thursday: 7:00 AM – 9:00 PM (8 Shifts Daily)"
  },
  stats: {
    followers: "10,000+",
    shiftsPerDay: "8 Shifts",
    exerciseTypes: "5 Workouts"
  },
  // Real Google Maps embed for Chashara B.B Road Narayanganj
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.498424075727!2d90.4965217753331!3d23.62232817875704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10645089311%3A0x62804b4ff3dfd71c!2sChashara%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1710182400000!5m2!1sen!2sbd"
};
