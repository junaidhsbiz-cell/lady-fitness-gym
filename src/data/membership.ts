export interface MembershipPlan {
  id: string;
  name: string;
  nameBn: string;
  tag: string;
  tagBn: string;
  price: number;
  regularPrice?: number;
  duration: string;
  durationBn: string;
  type: "in-studio" | "online";
  popular: boolean;
  description: string;
  descriptionBn: string;
  features: string[];
  featuresBn: string[];
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "online-class-pass",
    name: "Women's Heaven Online Class",
    nameBn: "উইমেন্স হেভেন অনলাইন ক্লাস",
    tag: "Online Live Fitness",
    tagBn: "অনলাইন লাইভ ক্লাস",
    price: 1000,
    regularPrice: 2000, // ৳2,000 Admission, ৳1,000 Monthly
    duration: "Monthly (Admission ৳2,000)",
    durationBn: "মাসিক (ভর্তি ফি ৳২,০০০)",
    type: "online",
    popular: false,
    description: "Join live interactive exercise sessions from the comfort of your home with our experienced female coaches.",
    descriptionBn: "বাসায় বসে নারী ট্রেইনারের সাথে সরাসরি লাইভ ক্লাসে অংশ নিন—রুটিনমাফিক প্রতিদিন ৮টি শিফটের সুবিধা।",
    features: [
      "Access to 8 Daily Live Shifts (7 AM – 9 PM)",
      "Saturday to Thursday Structured Classes",
      "Live Trainer Guidance in Mat, Aerobics, Yoga & Zumba",
      "Interactive Screen Coaching & Form Support",
      "Flexible to Join from Anywhere in Bangladesh"
    ],
    featuresBn: [
      "প্রতিদিন ৮টি লাইভ শিফটের যেকোনোটিতে অংশ নেওয়ার সুবিধা",
      "শনিবার থেকে বৃহস্পতিবার নিয়মিত ক্লাস",
      "ম্যাট, এরোবিক্স, ইয়োগা ও জুম্বা সেশন অন্তর্ভুক্ত",
      "লাইভ স্ক্রিনে ট্রেইনারের সরাসরি পর্যবেক্ষণ",
      "বাংলাদেশের যেকোনো প্রান্ত থেকে যুক্ত হওয়ার সুযোগ"
    ]
  },
  {
    id: "studio-standard",
    name: "In-Studio Standard Membership",
    nameBn: "ইন-স্টুডিও রেগুলার মেম্বারশিপ",
    tag: "Chashara Studio",
    tagBn: "চাষাড়া স্টুডিও",
    price: 1800,
    duration: "1 Month",
    durationBn: "১ মাস",
    type: "in-studio",
    popular: false,
    description: "Complete in-person access to our 100% female-only gym in Chashara, Narayanganj.",
    descriptionBn: "চাষাড়ার সম্পূর্ণ নারীদের জন্য সংরক্ষিত স্টুডিওতে সরাসরি নিয়মিত শরীরচর্চার প্ল্যান।",
    features: [
      "Unlimited Access to Cardio & Instrumental Gym Floor",
      "Female Coach Floor Supervision & Guidance",
      "Complimentary BMI & Fitness Goal Assessment",
      "Clean Locker Room & Vanity Facilities",
      "Choice of Morning, Afternoon or Evening Shifts"
    ],
    featuresBn: [
      "কার্ডিও ও ইনস্ট্রুমেন্টাল ইকুইপমেন্টে আনলিমিটেড অ্যাক্সেস",
      "নারী ট্রেইনারের সার্বক্ষণিক ফ্লোর গাইডেন্স",
      "বিনামূল্যে প্রাথমিক বিএমআই ও ফিটনেস গাইড",
      "পরিচ্ছন্ন লকার রুম ও ভ্যানিটি সুবিধা",
      "সকাল, দুপুর বা সন্ধ্যার সুবিধাজনক শিফট পছন্দ করার সুযোগ"
    ]
  },
  {
    id: "studio-transformation",
    name: "3-Month Studio Transformation",
    nameBn: "৩-মাস স্টুডিও ট্রান্সফরমেশন",
    tag: "Most Popular",
    tagBn: "সর্বাধিক জনপ্রিয়",
    price: 4500,
    regularPrice: 5400,
    duration: "3 Months (৳1,500/mo)",
    durationBn: "৩ মাস (৳১,৫০০/মাস)",
    type: "in-studio",
    popular: true,
    description: "Our premier comprehensive package for consistent workout routine, fat burn, and physical endurance.",
    descriptionBn: "ধারাবাহিক শরীরচর্চা, স্ট্যামিনা বৃদ্ধি এবং নিশ্চিত ফিটনেস পরিবর্তনের জন্য সেরা প্যাকেজ।",
    features: [
      "Full Access to All 5 Exercise Types (Mat, Yoga, Aerobics, Zumba, Instrumental)",
      "Dedicated Female Coach Review & Form Feedback",
      "Special 2nd Branch Opening Promotion Integration",
      "Locker, Shower & Dressing Room Access",
      "Priority Shift Booking Assistance"
    ],
    featuresBn: [
      "প্রতিটি এক্সারসাইজ অন্তর্ভুক্ত (ম্যাট, ইয়োগা, এরোবিক্স, জুম্বা ও ইনস্ট্রুমেন্টাল)",
      "নারী ট্রেইনারের সরাসরি পর্যবেক্ষণ ও ফিডব্যাক",
      "২য় শাখা ওপেনিং ক্যাম্পেইন স্পেশাল ডিসকাউন্ট ভ্যালু",
      "নিরাপদ লকার, ড্রেসিং রুম ও শাওয়ার সুবিধা",
      "প্রাইম শিফটে অগ্রাধিকার ভিত্তিতে আসন বুকিং"
    ]
  }
];
