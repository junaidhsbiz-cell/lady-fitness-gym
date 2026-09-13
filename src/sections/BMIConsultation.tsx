import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Sparkles, Flame, Droplets, Target, Activity, ArrowRight, Info, CheckCircle2, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { MagneticButton } from '../components/MagneticButton';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface BMIConsultationProps {
  currentLang: 'en' | 'bn';
  onBookConsultation: (score: string) => void;
}

export const BMIConsultation: React.FC<BMIConsultationProps> = ({
  currentLang,
  onBookConsultation,
}) => {
  const [height, setHeight] = useState<number>(158);
  const [weight, setWeight] = useState<number>(64);
  const [age, setAge] = useState<number>(26);
  const [activity, setActivity] = useState<number>(1.375);
  const [goal, setGoal] = useState<string>('loss');

  // Compute BMI live
  const hMeters = height / 100;
  const bmiVal = (weight / (hMeters * hMeters)).toFixed(1);
  const numBmi = parseFloat(bmiVal);

  let category = 'Normal Weight';
  let categoryBn = 'স্বাভাবিক ওজন';
  let colorClass = 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30';
  let gaugePercent = Math.min(Math.max(((numBmi - 15) / 25) * 100, 5), 95);

  if (numBmi < 18.5) {
    category = 'Underweight';
    categoryBn = 'কম ওজন';
    colorClass = 'text-amber-400 bg-amber-500/15 border-amber-500/30';
  } else if (numBmi >= 25 && numBmi < 30) {
    category = 'Overweight';
    categoryBn = 'অতিরিক্ত ওজন';
    colorClass = 'text-amber-400 bg-amber-500/15 border-amber-500/30';
  } else if (numBmi >= 30) {
    category = 'Obese';
    categoryBn = 'স্থূলতা (ওবেস)';
    colorClass = 'text-brand-accent bg-brand-accent/15 border-brand-accent/30';
  }

  const idealMin = (18.5 * hMeters * hMeters).toFixed(0);
  const idealMax = (24.9 * hMeters * hMeters).toFixed(0);

  // Mifflin-St Jeor equation for women
  const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  let tdee = bmr * activity;
  if (goal === 'loss') tdee -= 400;
  if (goal === 'gain') tdee += 300;
  if (goal === 'pcos') tdee -= 250;

  const dailyCalories = `${Math.round(tdee)} kcal`;
  const dailyWater = `${(weight * 0.035).toFixed(1)} L`;

  const handleConsultation = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    onBookConsultation(bmiVal);
    const waUrl = buildWhatsAppUrl({
      action: 'consultation',
      bmiScore: bmiVal,
      detail: `BMI: ${bmiVal} (${category}), Height: ${height}cm, Weight: ${weight}kg, Goal: ${goal}`
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-brand-bgMedium/40 border-t border-brand-borderSubtle relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={currentLang === 'en' ? 'Personal Health Check' : 'ব্যক্তিগত স্বাস্থ্য ক্যালকুলেটর'}
          titleRegular={currentLang === 'en' ? "Instant Women's" : 'নারীদের জন্য বিশেষ'}
          titleItalic={currentLang === 'en' ? 'BMI & Diet Tool' : 'বিএমআই ও ডায়েট ক্যালকুলেটর'}
          subtitle={
            currentLang === 'en'
              ? 'Calculate your Body Mass Index (BMI), ideal target weight range, daily maintenance calories, and receive customized fitness advice for your body structure.'
              : 'উচ্চতা ও ওজন পরিবর্তন করে রিয়েল-টাইম বিএমআই স্কোর, সঠিক ওজনের পরিধি এবং প্রতিদিন কত ক্যালোরি ও পানি গ্রহণ করা প্রয়োজন তা জেনে নিন।'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column (6 Cols): Interactive Sliders & Inputs */}
          <div className="lg:col-span-6">
            <SpotlightCard
              spotlightColor="rgba(255, 42, 85, 0.25)"
              className="p-6 sm:p-8 border border-brand-borderSubtle shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-brand-borderSubtle pb-4">
                <div className="flex items-center gap-2.5 text-white">
                  <Calculator className="w-5 h-5 text-brand-accent" />
                  <h3 className="font-bold text-base">
                    {currentLang === 'en' ? 'Adjust Your Body Stats' : 'শারীরিক পরিমাপ নির্ধারণ করুন'}
                  </h3>
                </div>
                <span className="text-[10px] bg-brand-accent/20 text-brand-softPink border border-brand-accent/30 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  Live Calculator
                </span>
              </div>

              <div className="space-y-5">
                {/* Height Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-softPink">
                    <span>{currentLang === 'en' ? 'Height' : 'উচ্চতা'}</span>
                    <span className="text-white text-sm font-black bg-brand-bgDark px-3 py-1 rounded-xl border border-brand-borderSubtle">
                      {height} cm <span className="text-brand-textMuted text-[10px]">({(height / 30.48).toFixed(1)} ft)</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="210"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="w-full h-2 bg-brand-bgDark rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                  <div className="flex justify-between text-[10px] text-brand-textMuted">
                    <span>120 cm</span>
                    <span>165 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-softPink">
                    <span>{currentLang === 'en' ? 'Weight' : 'ওজন'}</span>
                    <span className="text-white text-sm font-black bg-brand-bgDark px-3 py-1 rounded-xl border border-brand-borderSubtle">
                      {weight} kg <span className="text-brand-textMuted text-[10px]">({(weight * 2.20462).toFixed(0)} lbs)</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="150"
                    step="0.5"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    className="w-full h-2 bg-brand-bgDark rounded-lg appearance-none cursor-pointer accent-brand-warm"
                  />
                  <div className="flex justify-between text-[10px] text-brand-textMuted">
                    <span>35 kg</span>
                    <span>70 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                {/* Age & Activity Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Age (Years)' : 'বয়স (বছর)'}
                    </label>
                    <input
                      type="number"
                      min="12"
                      max="80"
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value) || 20)}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-softPink mb-1">
                      {currentLang === 'en' ? 'Daily Activity' : 'শারীরিক পরিশ্রম'}
                    </label>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(parseFloat(e.target.value))}
                      className="w-full bg-brand-bgDark/90 border border-brand-borderSubtle rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-brand-accent transition"
                    >
                      <option value="1.2">Sedentary (Low/No Exercise)</option>
                      <option value="1.375">Lightly Active (1-3 Days/Wk)</option>
                      <option value="1.55">Moderately Active (3-5 Days/Wk)</option>
                      <option value="1.725">Very Active (6-7 Days Gym)</option>
                    </select>
                  </div>
                </div>

                {/* Fitness Goal */}
                <div>
                  <label className="block text-xs font-bold text-brand-softPink mb-1.5">
                    {currentLang === 'en' ? 'Your Primary Goal' : 'আপনার প্রধান লক্ষ্য'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'loss', labelEn: 'Fat Loss', labelBn: 'ওজন কমানো' },
                      { id: 'maintain', labelEn: 'Body Toning', labelBn: 'বডি শেপিং' },
                      { id: 'gain', labelEn: 'Muscle & Stamina', labelBn: 'স্ট্যামিনা বৃদ্ধি' },
                      { id: 'pcos', labelEn: 'PCOS Care', labelBn: 'পিসিওএস কেয়ার' },
                    ].map((g) => (
                      <button
                        type="button"
                        key={g.id}
                        onClick={() => setGoal(g.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                          goal === g.id
                            ? 'bg-gradient-to-r from-brand-accent to-rose-600 text-white border-white/20 shadow-md'
                            : 'bg-brand-bgDark text-brand-textMuted border-brand-borderSubtle hover:text-white'
                        }`}
                      >
                        {currentLang === 'en' ? g.labelEn : g.labelBn}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              <div className="flex items-center gap-2 text-[11px] text-brand-textMuted pt-2 border-t border-brand-borderSubtle/60">
                <Info className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>
                  {currentLang === 'en'
                    ? 'All calculations update dynamically based on biometric formulas.'
                    : 'পরিমাপ অনুযায়ী ডায়েট ও ক্যালোরি ফলাফল স্বয়ংক্রিয়ভাবে আপডেট হয়।'}
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column (6 Cols): Live Animated Gauge & Report */}
          <div className="lg:col-span-6">
            <SpotlightCard
              spotlightColor="rgba(229, 192, 123, 0.25)"
              className="p-6 sm:p-8 border border-brand-accent/35 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-brand-borderSubtle pb-4">
                <div className="flex items-center gap-2 text-white">
                  <Target className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-bold text-base">
                    {currentLang === 'en' ? 'Your Health Metrics Blueprint' : 'আপনার পার্সোনালাইজড ফলাফল'}
                  </h3>
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${colorClass}`}>
                  {currentLang === 'en' ? category : categoryBn}
                </span>
              </div>

              {/* BMI Gauge Visual Spectrum Bar */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-brand-textMuted font-bold uppercase">
                    {currentLang === 'en' ? 'Calculated BMI' : 'বিএমআই স্কোর'}
                  </span>
                  <span id="bmiValueDisplay" className="text-3xl font-black text-brand-accent font-display">
                    {bmiVal}
                  </span>
                </div>

                {/* Gradient Gauge Line with Moving Pin */}
                <div className="relative w-full h-3 bg-gradient-to-r from-cyan-400 via-emerald-400 via-amber-400 to-brand-accent rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="absolute top-0 bottom-0 w-2 bg-white rounded-full shadow-lg border border-black"
                    animate={{ left: `${gaugePercent}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-brand-textMuted font-semibold pt-0.5">
                  <span>Under (18.5)</span>
                  <span>Normal (22)</span>
                  <span>Over (25)</span>
                  <span>Obese (30+)</span>
                </div>
              </div>

              {/* 3 Metric Cards Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-brand-bgDark/90 p-3.5 rounded-2xl border border-brand-borderSubtle text-center space-y-1">
                  <span className="text-[10px] text-brand-textMuted block font-bold">Target Weight</span>
                  <span className="text-base sm:text-lg font-black text-brand-gold">{idealMin}–{idealMax} kg</span>
                  <span className="text-[9px] text-emerald-400 block font-semibold">Healthy Range</span>
                </div>

                <div className="bg-brand-bgDark/90 p-3.5 rounded-2xl border border-brand-borderSubtle text-center space-y-1">
                  <span className="text-[10px] text-brand-textMuted block font-bold flex items-center justify-center gap-1">
                    <Flame className="w-3 h-3 text-brand-warm" /> Calories
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">{dailyCalories}</span>
                  <span className="text-[9px] text-brand-softPink block font-semibold">Target / Day</span>
                </div>

                <div className="bg-brand-bgDark/90 p-3.5 rounded-2xl border border-brand-borderSubtle text-center space-y-1">
                  <span className="text-[10px] text-brand-textMuted block font-bold flex items-center justify-center gap-1">
                    <Droplets className="w-3 h-3 text-cyan-400" /> Hydration
                  </span>
                  <span className="text-base sm:text-lg font-black text-cyan-300">{dailyWater}</span>
                  <span className="text-[9px] text-slate-400 block font-semibold">Daily Water</span>
                </div>
              </div>

              {/* Personalized Advice Box */}
              <div className="bg-brand-burgundy/40 border border-brand-accent/30 rounded-2xl p-4 text-xs text-brand-softPink leading-relaxed space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Activity className="w-4 h-4 text-brand-accent" />
                  <span>{currentLang === 'en' ? 'Customized Action Roadmap:' : 'বিশেষ পরামর্শ:'}</span>
                </div>
                <p>
                  {goal === 'loss'
                    ? (currentLang === 'en'
                        ? "Combine high-burn aerobics and Zumba 3 days/week with 2 days of mat workouts. Balanced home-cooked meals and reduced refined sugar help achieve sustainable fitness."
                        : "সপ্তাহে ৩ দিন এরোবিক্স ও জুম্বার সাথে ২ দিন ম্যাট এক্সারসাইজ করুন। ঘরের তৈরি সাধারণ খাবার এবং পরিমিত চিনি গ্রহণে টেকসই ফিটনেস বজায় থাকবে।")
                    : goal === 'pcos'
                    ? (currentLang === 'en'
                        ? "Low-impact steady exercises, gentle yoga, and balanced nutrition support daily vitality, energy, and physical well-being."
                        : "লো-ইমপ্যাক্ট এক্সারসাইজ, ইয়োগা এবং সুষম পুষ্টিকর খাবার সামগ্রিক সুস্থতা ও এনার্জি বজায় রাখতে সহায়ক।")
                    : (currentLang === 'en'
                        ? "Balanced nutrition combined with instrumental workouts helps tone muscle, sculpt curves, and build stamina."
                        : "সুষম খাবার ও ইনস্ট্রুমেন্টাল এক্সারসাইজের মাধ্যমে শরীরের সঠিক গঠন এবং স্ট্যামিনা বৃদ্ধি করুন।")}
                </p>
              </div>

              {/* Direct Action */}
              <MagneticButton
                variant="gold"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={handleConsultation}
              >
                {currentLang === 'en'
                  ? 'Get My Personalized Diet Chart on WhatsApp'
                  : 'হোয়াটসঅ্যাপে ডায়েট পরামর্শ শুরু করুন'}
              </MagneticButton>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
