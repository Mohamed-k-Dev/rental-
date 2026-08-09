import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RedCtaBand } from './components/RedCtaBand';
import { BrandsSection } from './components/BrandsSection';
import { AboutSection } from './components/AboutSection';
import { OffersSection } from './components/OffersSection';
import { PackagesSection } from './components/PackagesSection';
import { BookingSection } from './components/BookingSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CareersModal } from './components/CareersModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [bookingServiceTitle, setBookingServiceTitle] = useState<string>('');
  
  const [isCareersOpen, setIsCareersOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setBookingServiceTitle(serviceTitle);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] font-cairo text-slate-100 selection:bg-red-600 selection:text-white" dir="rtl">
      
      {/* Sticky Top Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={(catId) => setSelectedCategoryId(catId)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Services Categories Section */}
        <ServicesSection
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={(catId) => setSelectedCategoryId(catId)}
          onBookService={(title) => handleOpenBooking(title)}
        />

        {/* Red CTA Band #1 */}
        <RedCtaBand
          headline="هل تحتاج إلى خدمة صيانة فورية أو فحص شامل لسيارتك؟"
          subheadline="فريقنا المهندسي جاهز لخدمتك في جميع فروعنا مع إمكانية استلام وتسليم السيارة من موقعك."
          buttonText="احجز موعد الصيانة الآن"
          onBookNow={() => handleOpenBooking()}
        />

        {/* Brands We Service Section */}
        <BrandsSection />

        {/* About / Why Choose Us Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Promotional Offers Section */}
        <OffersSection
          onClaimOffer={(title) => handleOpenBooking(`عرض خاص: ${title}`)}
        />

        {/* Red CTA Band #2 */}
        <RedCtaBand
          headline="استفد من ضمان الصيانة المكتوب لغاية 12 شهراً"
          subheadline="جميع الفحوصات والصيانات الميكانيكية والكهربائية تتم باستخدام قطع غيار أصلية 100% ومعتمدة."
          buttonText="احجز فحص الكمبيوتر المجاني"
          onBookNow={() => handleOpenBooking('فحص كمبيوتر ألماني شامل 120 نقطة')}
        />

        {/* Maintenance Contract Packages */}
        <PackagesSection
          onSelectPackage={(pkgName) => handleOpenBooking(`الاشتراك في ${pkgName}`)}
        />

        {/* Interactive Booking Form */}
        <BookingSection initialServiceTitle={bookingServiceTitle} />

        {/* Educational Blog & Tips */}
        <BlogSection />

        {/* Branches & Contact Info */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tabId) => {
          setActiveTab(tabId);
          if (tabId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(tabId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        onOpenCareers={() => setIsCareersOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals */}
      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={(title) => handleOpenBooking(title)}
      />

    </div>
  );
}
