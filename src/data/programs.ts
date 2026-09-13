export interface ProgramItem {
  id: string;
  title: string;
  titleBn: string;
  category: string;
  categoryBn: string;
  badge: string;
  description: string;
  descriptionBn: string;
  image: string;
  sessionFocus: string;
  sessionFocusBn: string;
  duration: string;
  suitableFor: string;
  suitableForBn: string;
  features: string[];
  featuresBn: string[];
}

export const programs: ProgramItem[] = [
  {
    id: "mat-exercise",
    title: "Mat Exercises",
    titleBn: "ম্যাট এক্সারসাইজ",
    category: "Core & Stability",
    categoryBn: "কোর ও স্ট্যাবিলিটি",
    badge: "Daily Essential",
    description: "Bodyweight floor exercises focusing on abdominal core activation, pelvic floor alignment, and total-body functional stamina.",
    descriptionBn: "মেঝের ম্যাটে বডিওয়েট এক্সারসাইজের মাধ্যমে পেটের মেদ কমানো, কোরের শক্তি এবং শরীরের সামগ্রিক ব্যালেন্স বৃদ্ধি।",
    image: "/images/weight-training.jpg",
    sessionFocus: "Core Strength & Bodyweight Conditioning",
    sessionFocusBn: "কোর স্ট্রেংথ ও বডি কন্ট্রোল",
    duration: "45–60 mins",
    suitableFor: "All fitness levels, core strengthening & posture",
    suitableForBn: "সকল বয়সী নারীদের ফিটনেস ও কোরের যত্নে",
    features: [
      "Guided floor movements with female coach supervision",
      "Strengthens lower back and deep abdominal muscles",
      "Low impact on joints while maximizing core stability",
      "Safe and progressive intensity levels"
    ],
    featuresBn: [
      "নারী ট্রেইনারের সরাসরি তত্ত্বাবধানে ম্যাট ওয়ার্কআউট",
      "কোমর ও পেটের মাংসপেশির দৃঢ়তা বৃদ্ধি",
      "জয়েন্টে চাপ ছাড়াই কার্যকর শরীরচর্চা",
      "সহজ ও ধাপে ধাপে মানিয়ে নেওয়ার উপযোগী"
    ]
  },
  {
    id: "yoga-flexibility",
    title: "Yoga & Stretching",
    titleBn: "ইয়োগা ও ফ্লেক্সিবিলিটি",
    category: "Mind & Flexibility",
    categoryBn: "মন ও ফ্লেক্সিবিলিটি",
    badge: "Mind & Body",
    description: "Gentle asanas, deep stretches, spine alignment, and guided breathwork to relieve physical tension, stiffness, and mental stress.",
    descriptionBn: "মেরুদণ্ড সোজা রাখা, পিঠ ও কোমরের আড়ষ্টতা দূর করা এবং মানসিক প্রশান্তির জন্য বিশেষ ইয়োগা ও স্ট্রেচিং সেশন।",
    image: "/images/yoga.jpg",
    sessionFocus: "Spine Mobility & Stress Relief",
    sessionFocusBn: "মেরুদণ্ডের যত্ন ও মানসিক প্রশান্তি",
    duration: "45–60 mins",
    suitableFor: "Relieving stiffness, flexibility, stress relief",
    suitableForBn: "আড়ষ্টতা দূর করতে ও মানসিক প্রশান্তির জন্য",
    features: [
      "Spine and posture alignment stretches",
      "Improves joint flexibility and muscular relaxation",
      "Pranayama breath control to reduce daily fatigue",
      "Calm and comfortable women-only setting"
    ],
    featuresBn: [
      "স্পাইনাল ও পোস্টার কারেকশন স্ট্রেচ",
      "জয়েন্ট ও পেশির নমনীয়তা বৃদ্ধি",
      "শ্বাস-প্রশ্বাসের মাধ্যমে ক্লান্তি দূর করা",
      "শান্ত ও মনোরম পরিবেশ"
    ]
  },
  {
    id: "aerobics-cardio",
    title: "Aerobics Fitness",
    titleBn: "এরোবিক্স এক্সারসাইজ",
    category: "Cardio & Stamina",
    categoryBn: "কার্ডিও ও স্ট্যামিনা",
    badge: "High Energy",
    description: "Rhythmic aerobic workouts designed to elevate heart health, build cardiovascular stamina, and burn calories with continuous movement.",
    descriptionBn: "রিদমিক মুভমেন্ট ও কার্ডিও ওয়ার্কআউটের মাধ্যমে হার্ট ভালো রাখা, স্ট্যামিনা বাড়ানো এবং অতিরিক্ত মেদ ঝরানো।",
    image: "/images/hero-fitness.jpg",
    sessionFocus: "Cardiovascular Health & Calorie Burn",
    sessionFocusBn: "কার্ডিও হেলথ ও স্ট্যামিনা",
    duration: "50–60 mins",
    suitableFor: "Active calorie burn, heart health, endurance",
    suitableForBn: "স্ট্যামিনা ও দ্রুত ক্যালোরি বার্ন করার জন্য",
    features: [
      "Structured step aerobics and rhythmic cardio intervals",
      "Boosts daily stamina, lung capacity, and agility",
      "Conducted with motivating background music",
      "Modifications available for beginners"
    ],
    featuresBn: [
      "স্টেপ অ্যারোবিক্স ও কার্ডিও ইন্টারভ্যাল",
      "দৈনন্দিন স্ট্যামিনা ও কর্মক্ষমতা বৃদ্ধি",
      "আনন্দদায়ক মিউজিকের সাথে দলগত এক্সারসাইজ",
      "নতুনদের জন্য সহজ ভ্যারিয়েশন"
    ]
  },
  {
    id: "zumba-dance",
    title: "Zumba & Dance Fitness",
    titleBn: "জুম্বা ও ড্যান্স ফিটনেস",
    category: "Dance Cardio",
    categoryBn: "ড্যান্স কার্ডিও",
    badge: "Most Popular",
    description: "Infectious dance rhythms, energetic choreography, and fun full-body movements that turn exercise into an enjoyable celebration.",
    descriptionBn: "আনন্দময় মিউজিক ও রিদমের তালে তালে শরীরচর্চা—যা ওয়ার্কআউটকে করে তোলে সম্পূর্ণ ফান ও এনার্জেটিক।",
    image: "/images/zumba.jpg",
    sessionFocus: "High-Burn Full Body Dance Cardio",
    sessionFocusBn: "আনন্দময় ড্যান্স ও ফ্যাট লস",
    duration: "50–60 mins",
    suitableFor: "Fun workouts, full-body sweat, mood elevation",
    suitableForBn: "আনন্দময় উপায়ে শরীরচর্চা করতে আগ্রহীদের জন্য",
    features: [
      "Energetic choreographies suitable for all fitness levels",
      "Engages major muscle groups through dance rhythms",
      "Lifts mood, releases endorphins, and builds rhythm",
      "100% supportive, private sisterhood atmosphere"
    ],
    featuresBn: [
      "সহজ ও আকর্ষণীয় ড্যান্স স্টেপস",
      "নাচের মাধ্যমে পুরো শরীরের মাংসপেশির এক্সারসাইজ",
      "মন প্রফুল্ল রাখা ও এনার্জি বাড়ানোর সেরা মাধ্যম",
      "সম্পূর্ণ নিরাপদ ও নারীদের জন্য সংরক্ষিত পরিবেশ"
    ]
  },
  {
    id: "instrumental-gym",
    title: "Instrumental & Gym Machines",
    titleBn: "ইনস্ট্রুমেন্টাল এক্সারসাইজ",
    category: "Strength & Toning",
    categoryBn: "শক্তি ও বডি টোনিং",
    badge: "Equipment Gym",
    description: "Modern gym equipment, cable machines, dumbbells, and resistance instruments tailored to female biomechanics for toning and bone health.",
    descriptionBn: "নারীদের শারীরিক গঠনের উপযোগী আধুনিক জিম মেশিন, ডাম্বেল ও রেজিস্ট্যান্স ইকুইপমেন্ট দিয়ে বডি টোনিং ও শক্তি বৃদ্ধি।",
    image: "/images/gym-facility.jpg",
    sessionFocus: "Targeted Toning & Strength Building",
    sessionFocusBn: "বডি শেপিং ও মাসল টোনিং",
    duration: "60 mins",
    suitableFor: "Muscle toning, figure sculpting, bone strength",
    suitableForBn: "বডি শেপিং ও সামগ্রিক শক্তি বৃদ্ধির জন্য",
    features: [
      "Female-ergonomic cardio machines and weight equipment",
      "Trainer form checks to prevent injuries and ensure correct posture",
      "Increases lean muscle tone and metabolic rate",
      "Dedicated clean workout floor with sanitization"
    ],
    featuresBn: [
      "নারীদের জন্য বিশেষভাবে মানানসই আধুনিক ইকুইপমেন্ট",
      "ইনজুরি এড়াতে নারী ট্রেইনারের সার্বক্ষণিক পর্যবেক্ষণ",
      "শরীরের সঠিক গঠন ও মেটাবলিজম বৃদ্ধি",
      "পরিচ্ছন্ন ও মনোরম জিম ফ্লোর"
    ]
  }
];
