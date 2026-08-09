import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Search,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Zap,
  Snowflake,
  Shield,
  Cpu,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/automotiveData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  onOpenSearch: () => void;
  onSelectCategory: (catId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenSearch,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);

    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tabId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-red-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-red-600" />;
      case 'Snowflake': return <Snowflake className="w-5 h-5 text-red-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-red-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-red-600" />;
      default: return <Wrench className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden lg:block">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-6 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>الرقم الموحد للصيانة: <strong className="text-white font-bold">920001234</strong></span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse border-r border-slate-800 pr-6">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span>أوقات العمل: السبت - الخميس (8:00 ص - 10:00 م)</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse border-r border-slate-800 pr-6">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>4 فروع رئيسية: الرياض (خريص والصحافة) - جدة - الدمام</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="bg-red-950/80 text-red-300 border border-red-800/60 px-2.5 py-0.5 rounded-full text-[11px] font-medium">
              ضمان شامل حتى 12 شهراً
            </span>
            <a
              href="https://wa.me/966500001234"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 space-x-reverse text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>خدمة العملاء واتساب</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? 'shadow-md py-3 border-slate-200'
            : 'py-4 border-slate-200/80'
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Right: Brand Logo & Title */}
            <div className="flex items-center space-x-8 space-x-reverse">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center space-x-3 space-x-reverse text-right group focus:outline-none"
              >
                <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:bg-red-700 transition-all">
                  <span className="font-black text-2xl tracking-tighter">AP</span>
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 tracking-tight leading-none flex items-center gap-1.5">
                    <span>أوتوبورت</span>
                    <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium tracking-wide mt-0.5">
                    مراكز صيانة وخدمات السيارات
                  </div>
                </div>
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center space-x-6 space-x-reverse text-sm font-bold text-slate-700">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`transition-colors py-2 relative ${
                    activeTab === 'home' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                  }`}
                >
                  الرئيسية
                  {activeTab === 'home' && (
                    <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-red-600 rounded-full"></span>
                  )}
                </button>

                {/* Services Mega Menu Dropdown Toggle */}
                <div
                  className="relative group py-2"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick('services')}
                    className={`flex items-center space-x-1 space-x-reverse transition-colors ${
                      activeTab === 'services' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                    }`}
                  >
                    <span>الخدمات والإصلاحات</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMegaMenuOpen ? 'rotate-180 text-red-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Desktop Mega Menu Card - Clean Light Mode without Red Boxes */}
                  {isMegaMenuOpen && (
                    <div className="absolute top-full right-0 w-[580px] bg-white rounded-2xl shadow-xl border border-slate-200 p-5 mt-1 grid grid-cols-2 gap-2 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                      <div className="col-span-2 pb-2.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          أقسام الصيانة المعتمدة
                        </span>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="text-xs text-red-600 hover:text-red-700 font-bold"
                        >
                          عرض كافة الخدمات ←
                        </button>
                      </div>

                      {SERVICE_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            onSelectCategory(cat.id);
                            handleNavClick('services');
                          }}
                          className="flex items-start space-x-2.5 space-x-reverse p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-right group"
                        >
                          <div className="mt-0.5 shrink-0 text-slate-500 group-hover:text-red-600 transition-colors">
                            {getCategoryIcon(cat.icon)}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm group-hover:text-red-600 transition-colors">
                              {cat.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {cat.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('packages')}
                  className={`transition-colors py-2 relative ${
                    activeTab === 'packages' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                  }`}
                >
                  باقات الصيانة
                </button>

                <button
                  onClick={() => handleNavClick('offers')}
                  className={`transition-colors py-2 relative flex items-center gap-1.5 ${
                    activeTab === 'offers' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                  }`}
                >
                  <span>العروض</span>
                  <span className="bg-red-100 text-red-700 border border-red-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                    جديد
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  className={`transition-colors py-2 relative ${
                    activeTab === 'about' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                  }`}
                >
                  من نحن
                </button>

                <button
                  onClick={() => handleNavClick('brands')}
                  className={`transition-colors py-2 relative ${
                    activeTab === 'brands' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                  }`}
                >
                  العلامات المخدومة
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className={`transition-colors py-2 relative ${
                    activeTab === 'contact' ? 'text-red-600 font-extrabold' : 'hover:text-red-600'
                  }`}
                >
                  الفروع والتواصل
                </button>
              </nav>
            </div>

            {/* Left Action Controls */}
            <div className="flex items-center space-x-3 space-x-reverse">
              {/* Search Trigger Icon */}
              <button
                onClick={onOpenSearch}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 transition-colors"
                title="البحث عن خدمة أو عروض"
                aria-label="البحث"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Main Booking Button CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:flex items-center space-x-2 space-x-reverse bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز موعد صيانة</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 transition-colors"
                aria-label="القائمة البرمجية"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-3 text-right">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-right py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
            >
              الرئيسية
            </button>

            {/* Services Mobile Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <button
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                className="flex items-center justify-between w-full py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
              >
                <span>أقسام الخدمات والإصلاحات</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileServicesAccordion ? 'rotate-180 text-red-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileServicesAccordion && (
                <div className="mr-4 mt-2 space-y-1.5 border-r-2 border-red-600 pr-3">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        handleNavClick('services');
                      }}
                      className="block w-full text-right py-2 px-2 text-sm text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg"
                    >
                      {cat.title}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavClick('services')}
                    className="block w-full text-right py-2 px-2 text-sm font-bold text-red-600"
                  >
                    عرض كافة الخدمات ←
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('packages')}
              className="block w-full text-right py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
            >
              باقات الصيانة السنوية
            </button>

            <button
              onClick={() => handleNavClick('offers')}
              className="block w-full text-right py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
            >
              العروض الحصرية
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-right py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
            >
              لماذا أوتوبورت؟
            </button>

            <button
              onClick={() => handleNavClick('brands')}
              className="block w-full text-right py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
            >
              العلامات التجارية المخدومة
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-right py-2.5 px-3 rounded-xl text-slate-800 font-bold hover:bg-slate-100"
            >
              الفروع وساعات العمل
            </button>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-red-600 text-white font-bold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Calendar className="w-5 h-5" />
                <span>احجز موعد صيانة الآن</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
                <span>الرقم الموحد: 920001234</span>
                <span>واتساب 24/7</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
