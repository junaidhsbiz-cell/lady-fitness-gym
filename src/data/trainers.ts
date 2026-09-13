export interface TrainerItem {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  specialty: string;
  specialtyBn: string;
  bio: string;
  bioBn: string;
  image: string;
  certifications: string[];
  certificationsBn: string[];
}

export const trainers: TrainerItem[] = [
  {
    id: "trainer-1",
    name: "Senior Coach Nasrin",
    nameBn: "নাসরিন সুলতানা",
    role: "Head Female Trainer",
    roleBn: "হেড লেডি ট্রেইনার",
    specialty: "Zumba, Aerobics & Cardio Conditioning",
    specialtyBn: "জুম্বা, এরোবিক্স ও কার্ডিও এক্সারসাইজ",
    bio: "Dedicated female fitness trainer leading group aerobic exercises and dance fitness with energetic and motivating guidance.",
    bioBn: "গ্রুপ এরোবিক্স ও জুম্বা সেশনের অভিজ্ঞ নারী ট্রেইনার, যিনি প্রতিটি ক্লাসে সঠিক গাইডেন্স প্রদান করেন।",
    image: "/images/trainer-nasrin.jpg",
    certifications: ["Experienced Group Fitness Coach", "Zumba & Aerobics Lead"],
    certificationsBn: ["সার্টিফাইড ফিটনেস ট্রেইনার", "জুম্বা ও এরোবিক্স প্রশিক্ষক"]
  },
  {
    id: "trainer-2",
    name: "Coach Farhana",
    nameBn: "ফারহানা আক্তার",
    role: "Strength & Gym Equipment Coach",
    roleBn: "ইনস্ট্রুমেন্টাল ও স্ট্রেংথ ট্রেইনার",
    specialty: "Instrumental Exercise, Mat Workout & Toning",
    specialtyBn: "ইনস্ট্রুমেন্টাল জিম ও ম্যাট এক্সারসাইজ",
    bio: "Specializes in safe gym machine biomechanics, posture alignment, and muscle toning tailored to women's comfort.",
    bioBn: "নারীদের শারীরিক গঠন অনুযায়ী জিম মেশিনে নিরাপদ ব্যায়াম ও বডি টোনিংয়ের প্রশিক্ষক।",
    image: "/images/trainer-farhana.jpg",
    certifications: ["Gym Equipment & Form Specialist", "Posture & Core Coach"],
    certificationsBn: ["জিম ইকুইপমেন্ট বিশেষজ্ঞ", "পোস্টার ও কোর ট্রেইনার"]
  },
  {
    id: "trainer-3",
    name: "Coach Rimi",
    nameBn: "রিমি রহমান",
    role: "Yoga & Wellness Instructor",
    roleBn: "ইয়োগা ও ওয়েলনেস প্রশিক্ষক",
    specialty: "Yoga Asanas, Flexibility & Restorative Breathing",
    specialtyBn: "ইয়োগা, ফ্লেক্সিবিলিটি ও স্ট্রেচিং",
    bio: "Guides relaxing yoga routines, deep flexibility stretches, and functional breathwork to relieve daily physical and mental stress.",
    bioBn: "মানসিক প্রশান্তি ও শরীরের আড়ষ্টতা দূর করতে নিয়মিত ইয়োগা ও স্ট্রেচিং সেশন পরিচালনা করেন।",
    image: "/images/trainer-rimi.jpg",
    certifications: ["Yoga & Stretch Instructor", "Female Wellness Guide"],
    certificationsBn: ["ইয়োগা ও স্ট্রেচিং ইনস্ট্রাক্টর", "নারী ওয়েলনেস গাইড"]
  }
];
