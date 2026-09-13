import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { CustomCursor } from './components/CustomCursor';
import { BookingModal } from './components/BookingModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';

import { Hero } from './sections/Hero';
import { CampaignOfferBanner } from './sections/CampaignOfferBanner';
import { CredibilityStrip } from './sections/CredibilityStrip';
import { WhyLadyFitness } from './sections/WhyLadyFitness';
import { Programs } from './sections/Programs';
import { WeeklySchedule } from './sections/WeeklySchedule';
import { OnlineClassSection } from './sections/OnlineClassSection';
import { PrivateBooking } from './sections/PrivateBooking';
import { BMIConsultation } from './sections/BMIConsultation';
import { Trainers } from './sections/Trainers';
import { Membership } from './sections/Membership';
import { LocationContact } from './sections/LocationContact';
import { FinalCTA } from './sections/FinalCTA';

import { MembershipPlan } from './data/membership';

export const App: React.FC = () => {
  // Language state: 'en' or 'bn'
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lady_fitness_lang');
      return saved === 'bn' ? 'bn' : 'en';
    }
    return 'en';
  });

  const toggleLanguage = () => {
    setCurrentLang((prev) => {
      const next = prev === 'en' ? 'bn' : 'en';
      localStorage.setItem('lady_fitness_lang', next);
      return next;
    });
  };

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Booking Modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTitle, setBookingTitle] = useState('Free 1-Day VIP Trial Pass');
  const [bookingCategory, setBookingCategory] = useState<'trial' | 'schedule' | 'trainer' | 'general'>('trial');

  // Checkout Modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);

  // Toast state
  const [toast, setToast] = useState<{
    isVisible: boolean;
    title: string;
    message: string;
  }>({
    isVisible: false,
    title: '',
    message: '',
  });

  const showToast = (title: string, message: string) => {
    setToast({
      isVisible: true,
      title,
      message,
    });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4500);
  };

  // Handlers
  const handleOpenTrial = () => {
    setBookingTitle(currentLang === 'en' ? 'Free 1-Day VIP Trial Pass' : 'ফ্রি ১-দিনের ভিআইপি ট্রায়াল পাস');
    setBookingCategory('trial');
    setIsBookingOpen(true);
  };

  const handleOpenProgramBooking = (programTitle: string) => {
    setBookingTitle(`${programTitle} Slot`);
    setBookingCategory('schedule');
    setIsBookingOpen(true);
  };

  const handleOpenTrainerBooking = (trainerName: string) => {
    setBookingTitle(`1-on-1 with ${trainerName}`);
    setBookingCategory('trainer');
    setIsBookingOpen(true);
  };

  const handleSelectMembershipPlan = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleBookingSuccess = (name: string, title: string) => {
    showToast(
      currentLang === 'en' ? 'Reservation Confirmed! 🎉' : 'বুকিং সফল হয়েছে! 🎉',
      currentLang === 'en'
        ? `Thank you ${name}. Your reservation for "${title}" has been received. Our female team will connect via WhatsApp.`
        : `ধন্যবাদ ${name}। "${title}"-এর জন্য আপনার তথ্য পেয়েছি। আমাদের টিম হোয়াটসঅ্যাপে যোগাযোগ করবে।`
    );
  };

  const handleCheckoutSuccess = (name: string, planName: string) => {
    showToast(
      currentLang === 'en' ? 'Inquiry Submitted! 🎉' : 'তথ্য সফলভাবে পাঠানো হয়েছে! 🎉',
      currentLang === 'en'
        ? `Thank you ${name}! Your inquiry for "${planName}" has been submitted.`
        : `ধন্যবাদ ${name}! "${planName}" প্ল্যানে আপনার আবেদন গ্রহণ করা হয়েছে।`
    );
  };

  // Handle ESC key for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBookingOpen(false);
        setIsCheckoutOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-mesh-dark text-brand-textBody font-sans selection:bg-brand-accent selection:text-white relative">
      
      {/* Custom Luxury Cursor for Desktop */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenTrial={handleOpenTrial}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentLang={currentLang}
        onOpenTrial={handleOpenTrial}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenTrial={handleOpenTrial}
          onSuccess={handleBookingSuccess}
        />

        {/* 2. 2nd Branch Special Campaign Offer */}
        <CampaignOfferBanner
          currentLang={currentLang}
          onBook={handleOpenProgramBooking}
        />

        {/* 3. Credibility & Trust Strip */}
        <CredibilityStrip currentLang={currentLang} />

        {/* 4. Why Lady Fitness (6 Value Pillars) */}
        <WhyLadyFitness currentLang={currentLang} />

        {/* 5. 5 Daily Exercise Formats Explorer */}
        <Programs
          currentLang={currentLang}
          onBook={handleOpenProgramBooking}
        />

        {/* 6. 8 Daily Verified Workout Shifts */}
        <WeeklySchedule
          currentLang={currentLang}
          onBook={handleOpenProgramBooking}
        />

        {/* 7. Women's Heaven Online Live Classes */}
        <OnlineClassSection
          currentLang={currentLang}
          onBook={handleOpenProgramBooking}
        />

        {/* 8. VIP Private Slot Scheduling */}
        <PrivateBooking
          currentLang={currentLang}
          onSuccess={handleBookingSuccess}
        />

        {/* 9. Interactive Health & BMI Tool */}
        <BMIConsultation
          currentLang={currentLang}
          onBookConsultation={(score) => {
            showToast(
              currentLang === 'en' ? 'BMI Calculated!' : 'বিএমআই হিসাব সম্পন্ন!',
              currentLang === 'en'
                ? `Your calculated BMI is ${score}. Opening diet consultation...`
                : `আপনার বিএমআই স্কোর ${score}। ডায়েট পরামর্শ শুরু হচ্ছে...`
            );
          }}
        />

        {/* 10. Female Mentors & Coaches */}
        <Trainers
          currentLang={currentLang}
          onBookTrainer={handleOpenTrainerBooking}
        />

        {/* 11. Membership & Admission Pricing */}
        <Membership
          currentLang={currentLang}
          onSelectPlan={handleSelectMembershipPlan}
        />

        {/* 12. Studio Location & Contact */}
        <LocationContact
          currentLang={currentLang}
          onSuccess={handleBookingSuccess}
        />

        {/* 13. High-Impact Final CTA */}
        <FinalCTA
          currentLang={currentLang}
          onOpenTrial={handleOpenTrial}
        />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyCTA
        currentLang={currentLang}
        onOpenTrial={handleOpenTrial}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTitle={bookingTitle}
        initialCategory={bookingCategory}
        currentLang={currentLang}
        onSuccess={handleBookingSuccess}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        plan={selectedPlan}
        currentLang={currentLang}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Notification Toast */}
      <Toast
        isVisible={toast.isVisible}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />

    </div>
  );
};

export default App;
