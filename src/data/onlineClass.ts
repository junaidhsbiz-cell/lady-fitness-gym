export interface OnlineShift {
  shiftNumber: number;
  timeSlot: string;
  period: "morning" | "afternoon" | "evening";
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
}

export interface OnlineClassConfig {
  name: string;
  nameBn: string;
  badge: string;
  badgeBn: string;
  admissionFee: number;
  monthlyFee: number;
  hotline: string;
  days: string;
  daysBn: string;
  totalDailyShifts: number;
  timeWindow: string;
  features: string[];
  featuresBn: string[];
  shifts: OnlineShift[];
}

export const onlineClassData: OnlineClassConfig = {
  name: "Women's Heaven Online Class",
  nameBn: "উইমেন্স হেভেন অনলাইন ক্লাস",
  badge: "Live Interactive Fitness",
  badgeBn: "লাইভ ইন্টারঅ্যাক্টিভ ক্লাস",
  admissionFee: 2000,
  monthlyFee: 1000,
  hotline: "01894-430549",
  days: "Saturday – Thursday",
  daysBn: "শনিবার – বৃহস্পতিবার",
  totalDailyShifts: 8,
  timeWindow: "7:00 AM – 9:00 PM",
  features: [
    "Live female trainer supervision from home",
    "8 flexible daily exercise shifts to match your schedule",
    "Covers mat workouts, aerobics, yoga & Zumba",
    "Direct trainer feedback and form correction",
    "Affordable monthly fitness subscription"
  ],
  featuresBn: [
    "বাসায় বসে নারী ট্রেইনারের সরাসরি লাইভ ক্লাস",
    "প্রতিদিন সুবিধাজনক ৮টি শিফটের যেকোনো একটি বেছে নেওয়ার সুযোগ",
    "ম্যাট এক্সারসাইজ, এরোবিক্স, ইয়োগা ও জুম্বা অন্তর্ভুক্ত",
    "ট্রেইনারের সার্বক্ষণিক পর্যবেক্ষণ ও গাইডেন্স",
    "সাশ্রয়ী মাসিক সাবস্ক্রিপশন ফি"
  ],
  shifts: [
    {
      shiftNumber: 1,
      timeSlot: "07:00 AM – 08:30 AM",
      period: "morning",
      title: "Shift 1: Early Morning Workout",
      titleBn: "শিফট ১: সকালের প্রথম ব্যাচ",
      description: "Energize your morning with guided full-body activation.",
      descriptionBn: "সকালের শরীরচর্চা দিয়ে দিন শুরু করার আদর্শ সময়।"
    },
    {
      shiftNumber: 2,
      timeSlot: "08:30 AM – 10:00 AM",
      period: "morning",
      title: "Shift 2: Morning Fitness Routine",
      titleBn: "শিফট ২: সকালের দ্বিতীয় ব্যাচ",
      description: "Structured aerobics and mat exercises for active stamina.",
      descriptionBn: "এরোবিক্স ও ম্যাট এক্সারসাইজের নিয়মিত সেশন।"
    },
    {
      shiftNumber: 3,
      timeSlot: "10:15 AM – 11:45 AM",
      period: "morning",
      title: "Shift 3: Late Morning Circuit",
      titleBn: "শিফট ৩: সকালের তৃতীয় ব্যাচ",
      description: "Convenient morning slot for homemakers and students.",
      descriptionBn: "গৃহিণী ও শিক্ষার্থীদের জন্য সুবিধাজনক সকালের শিফট।"
    },
    {
      shiftNumber: 4,
      timeSlot: "12:00 PM – 01:30 PM",
      period: "afternoon",
      title: "Shift 4: Midday Exercise Session",
      titleBn: "শিফট ৪: দুপুরের প্রথম ব্যাচ",
      description: "Midday core conditioning and posture alignment.",
      descriptionBn: "দুপুরে কোরের শক্তি ও ফ্লেক্সিবিলিটি বৃদ্ধির ক্লাস।"
    },
    {
      shiftNumber: 5,
      timeSlot: "02:30 PM – 04:00 PM",
      period: "afternoon",
      title: "Shift 5: Afternoon Workout Batch",
      titleBn: "শিফট ৫: দুপুরের দ্বিতীয় ব্যাচ",
      description: "Gentle yoga flow, stretching, and low-impact movements.",
      descriptionBn: "শান্ত বিকেলে ইয়োগা ও স্ট্রেচিং সেশন।"
    },
    {
      shiftNumber: 6,
      timeSlot: "04:30 PM – 06:00 PM",
      period: "evening",
      title: "Shift 6: Early Evening Cardio",
      titleBn: "শিফট ৬: সন্ধ্যার প্রথম ব্যাচ",
      description: "High-energy dance cardio and rhythm aerobics.",
      descriptionBn: "হাই-এনার্জি ড্যান্স কার্ডিও ও ফ্যাট বার্নিং শিফট।"
    },
    {
      shiftNumber: 7,
      timeSlot: "06:00 PM – 07:30 PM",
      period: "evening",
      title: "Shift 7: Prime Evening Fitness",
      titleBn: "শিফট ৭: সন্ধ্যার প্রধান ব্যাচ",
      description: "Popular evening session for working women and professionals.",
      descriptionBn: "কর্মজীবী নারীদের জন্য সর্বাধিক পছন্দের সন্ধ্যার শিফট।"
    },
    {
      shiftNumber: 8,
      timeSlot: "07:30 PM – 09:00 PM",
      period: "evening",
      title: "Shift 8: Night Exercise Session",
      titleBn: "শিফট ৮: রাতের ব্যাচ",
      description: "Late evening full-body conditioning to end the day energized.",
      descriptionBn: "দিনের শেষে ফিটনেস ধরে রাখার জন্য রাতের শেষ ব্যাচ।"
    }
  ]
};
