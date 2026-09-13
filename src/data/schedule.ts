export interface ScheduleShiftItem {
  shiftNumber: number;
  timeSlot: string;
  days: string;
  daysBn: string;
  period: "morning" | "afternoon" | "evening";
  periodLabel: string;
  periodLabelBn: string;
  title: string;
  titleBn: string;
  exerciseScope: string;
  exerciseScopeBn: string;
  description: string;
  descriptionBn: string;
}

export const daysOfWeek = [
  { id: "sat", nameEn: "Saturday", nameBn: "শনিবার", shortEn: "SAT", shortBn: "শনি" },
  { id: "sun", nameEn: "Sunday", nameBn: "রবিবার", shortEn: "SUN", shortBn: "রবি" },
  { id: "mon", nameEn: "Monday", nameBn: "সোমবার", shortEn: "MON", shortBn: "সোম" },
  { id: "tue", nameEn: "Tuesday", nameBn: "মঙ্গলবার", shortEn: "TUE", shortBn: "মঙ্গল" },
  { id: "wed", nameEn: "Wednesday", nameBn: "বুধবার", shortEn: "WED", shortBn: "বুধ" },
  { id: "thu", nameEn: "Thursday", nameBn: "বৃহস্পতিবার", shortEn: "THU", shortBn: "বৃহঃ" }
];

export const scheduleShifts: ScheduleShiftItem[] = [
  {
    shiftNumber: 1,
    timeSlot: "07:00 AM – 08:30 AM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "morning",
    periodLabel: "Morning Shift",
    periodLabelBn: "সকালের শিফট",
    title: "Shift 1: Early Morning Workout",
    titleBn: "শিফট ১: সকালের শরীরচর্চা ব্যাচ",
    exerciseScope: "Mat, Aerobics, Yoga & Instrumental",
    exerciseScopeBn: "ম্যাট, এরোবিক্স, ইয়োগা ও ইনস্ট্রুমেন্টাল",
    description: "Start your day with high-vitality guided exercise under female trainer supervision.",
    descriptionBn: "অভিজ্ঞ নারী ট্রেইনারের তত্ত্বাবধানে সকালের সতেজ শরীরচর্চা।"
  },
  {
    shiftNumber: 2,
    timeSlot: "08:30 AM – 10:00 AM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "morning",
    periodLabel: "Morning Shift",
    periodLabelBn: "সকালের শিফট",
    title: "Shift 2: Morning Fitness Session",
    titleBn: "শিফট ২: সকালের দ্বিতীয় ব্যাচ",
    exerciseScope: "Zumba, Aerobics & Core Conditioning",
    exerciseScopeBn: "জুম্বা, এরোবিক্স ও কোর ওয়ার্কআউট",
    description: "Structured cardio, dance rhythms, and functional movements.",
    descriptionBn: "কার্ডিও, রিদমিক এক্সারসাইজ এবং বডি টোনিং সেশন।"
  },
  {
    shiftNumber: 3,
    timeSlot: "10:15 AM – 11:45 AM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "morning",
    periodLabel: "Late Morning Shift",
    periodLabelBn: "সকালের শেষ ব্যাচ",
    title: "Shift 3: Homemakers & Students Batch",
    titleBn: "শিফট ৩: গৃহিণী ও শিক্ষার্থীদের বিশেষ ব্যাচ",
    exerciseScope: "Mat Workout, Yoga & Equipment",
    exerciseScopeBn: "ম্যাট এক্সারসাইজ, ইয়োগা ও মেশিন",
    description: "Ideal daytime slot after completing morning household responsibilities.",
    descriptionBn: "সকালের কাজ সেরে শরীরচর্চায় মনোযোগ দেওয়ার সেরা সময়।"
  },
  {
    shiftNumber: 4,
    timeSlot: "12:00 PM – 01:30 PM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "afternoon",
    periodLabel: "Midday Shift",
    periodLabelBn: "দুপুরের শিফট",
    title: "Shift 4: Midday Workout Session",
    titleBn: "শিফট ৪: দুপুরের ফিটনেস ব্যাচ",
    exerciseScope: "Full Body Conditioning & Posture",
    exerciseScopeBn: "ফুল বডি টোনিং ও পোস্টার কেয়ার",
    description: "Targeted posture exercises, pelvic stability, and strength routines.",
    descriptionBn: "শরীরের গঠন ঠিক রাখা এবং সামগ্রিক ফিটনেস বৃদ্ধির সেশন।"
  },
  {
    shiftNumber: 5,
    timeSlot: "02:30 PM – 04:00 PM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "afternoon",
    periodLabel: "Afternoon Shift",
    periodLabelBn: "বিকেলের শিফট",
    title: "Shift 5: Peaceful Afternoon Session",
    titleBn: "শিফট ৫: বিকেলের নিরিবিলি ব্যাচ",
    exerciseScope: "Yoga, Flexibility, Mat & Breathing",
    exerciseScopeBn: "ইয়োগা, ফ্লেক্সিবিলিটি ও ম্যাট ওয়ার্কআউট",
    description: "Gentle stretches, spine alignment, and calming restorative exercises.",
    descriptionBn: "শান্ত পরিবেশে মেরুদণ্ড ও মাংসপেশির আড়ষ্টতা দূর করার সেশন।"
  },
  {
    shiftNumber: 6,
    timeSlot: "04:30 PM – 06:00 PM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "evening",
    periodLabel: "Evening Shift",
    periodLabelBn: "সন্ধ্যার শিফট",
    title: "Shift 6: Early Evening High-Burn",
    titleBn: "শিফট ৬: সন্ধ্যার প্রথম ব্যাচ",
    exerciseScope: "Aerobics, Zumba & High Energy Sweat",
    exerciseScopeBn: "এরোবিক্স, জুম্বা ও ড্যান্স কার্ডিও",
    description: "High-burn rhythmic session to shake off daily fatigue with upbeat music.",
    descriptionBn: "আনন্দময় মিউজিকের সাথে দ্রুত এনার্জি রিচার্জ ও শরীরচর্চা।"
  },
  {
    shiftNumber: 7,
    timeSlot: "06:00 PM – 07:30 PM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "evening",
    periodLabel: "Prime Evening Shift",
    periodLabelBn: "সন্ধ্যার প্রধান ব্যাচ",
    title: "Shift 7: Working Women Prime Batch",
    titleBn: "শিফট ৭: কর্মজীবী নারীদের প্রাইম ব্যাচ",
    exerciseScope: "Instrumental Equipment, Aerobics & Mat",
    exerciseScopeBn: "ইনস্ট্রুমেন্টাল জিম, এরোবিক্স ও ম্যাট",
    description: "Popular shift for corporate professionals, teachers, bankers, and doctors.",
    descriptionBn: "কর্মজীবী নারীদের জন্য অত্যন্ত জনপ্রিয় ও সুবিধাজনক সন্ধ্যার ব্যাচ।"
  },
  {
    shiftNumber: 8,
    timeSlot: "07:30 PM – 09:00 PM",
    days: "Saturday – Thursday",
    daysBn: "শনিবার – বৃহস্পতিবার",
    period: "evening",
    periodLabel: "Night Shift",
    periodLabelBn: "রাতের শিফট",
    title: "Shift 8: Executive Night Session",
    titleBn: "শিফট ৮: রাতের শেষ ব্যাচ",
    exerciseScope: "Full Body Workout & Cool Down",
    exerciseScopeBn: "ফুল বডি ওয়ার্কআউট ও স্ট্রেচিং",
    description: "Finish your day feeling empowered, strong, and mentally refreshed.",
    descriptionBn: "দিনের শেষে ফিটনেস ধরে রেখে শারীরিক প্রশান্তি লাভের আদর্শ সময়।"
  }
];
