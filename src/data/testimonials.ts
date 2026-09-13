export interface MemberExperienceItem {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  location: string;
  locationBn: string;
  rating: number;
  comment: string;
  commentBn: string;
  highlight: string;
  highlightBn: string;
  initials: string;
}

export const memberExperiences: MemberExperienceItem[] = [
  {
    id: "exp-1",
    name: "Member Experience",
    nameBn: "সদস্যের অভিজ্ঞতা",
    role: "Homemaker",
    roleBn: "গৃহিণী",
    location: "Chashara, Narayanganj",
    locationBn: "চাষাড়া, নারায়ণগঞ্জ",
    rating: 5,
    comment: "The 8 flexible daily shifts make it very easy to balance workout routines with daily family responsibilities. The female coaches are very helpful and supportive.",
    commentBn: "প্রতিদিন ৮টি শিফট থাকায় সংসারের কাজের ফাঁকে সুবিধাজনক সময়ে শরীরচর্চা করা যায়। নারী ট্রেইনাররা সবসময় খুব আন্তরিকভাবে গাইড করেন।",
    highlight: "Flexible 8 Shifts",
    highlightBn: "সুবিধাজনক ৮টি শিফট",
    initials: "LF"
  },
  {
    id: "exp-2",
    name: "Online Member",
    nameBn: "অনলাইন সদস্য",
    role: "Working Professional",
    roleBn: "কর্মজীবী নারী",
    location: "Narayanganj",
    locationBn: "নারায়ণগঞ্জ",
    rating: 5,
    comment: "Women's Heaven live online classes are a great convenience. The female trainer provides live feedback on mat exercises, yoga, and aerobics directly on screen.",
    commentBn: "উইমেন্স হেভেন অনলাইন লাইভ ক্লাস ঘরে বসে শরীরচর্চার দারুণ সুযোগ। ট্রেইনার আপু লাইভ স্ক্রিনে ম্যাট ও এরোবিক্স এক্সারসাইজ বুঝিয়ে দেন।",
    highlight: "Live Online Classes",
    highlightBn: "লাইভ অনলাইন ক্লাস",
    initials: "WH"
  }
];
