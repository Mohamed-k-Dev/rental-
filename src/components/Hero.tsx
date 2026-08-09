import React from 'react';
import {
  ShieldCheck,
  Calendar,
  Wrench,
  Award,
  Users,
  CheckCircle,
  ChevronDown
} from 'lucide-react';
import { heroWorkshopImg } from '../data/automotiveData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-24 lg:pt-32 pb-12 overflow-hidden bg-slate-50 text-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Grid container - Full Width */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 my-auto py-4">
        
        {/* Top Featured Hero Bento Box */}
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl mb-8 group">
          {/* Background image inside card with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroWorkshopImg}
              alt="ورشة أوتوبورت الفاخرة لصيانة السيارات"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-100 group-hover:scale-105 transition-transform duration-700 opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30"></div>
          </div>

          <div className="relative z-10 max-w-3xl text-right space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-red-50 border border-red-200/80 text-red-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>مركز صيانة السيارات الأكثر موثوقية في المملكة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              نعتني بسيارتك <br />
              <span className="text-red-600">
                كما تستحق تماماً
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              خدمات صيانة وإصلاح ميكانيكية وكهربائية ودورية متكاملة بأيدي مهندسين معتمدين
              وبأحدث أجهزة البرمجة الألمانية مع ضمان شامل يصل إلى سنة كاملة.
            </p>

            {/* Fast Features Bullet Line */}
            <div className="pt-2 flex flex-wrap gap-y-2.5 gap-x-4 text-xs sm:text-sm text-slate-700 font-bold">
              <div className="flex items-center space-x-2 space-x-reverse bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-red-600" />
                <span>قطع غيار أصلية 100%</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-red-600" />
                <span>فحص كمبيوتر ألماني 120 نقطة</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-red-600" />
                <span>خدمة استلام وتسليم السيارة من الباب</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-3 space-x-reverse group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span>احجز موعد صيانة الآن</span>
              </button>

              <button
                onClick={onExploreServices}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-base px-7 py-4 rounded-xl transition-all flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Wrench className="w-5 h-5 text-red-600" />
                <span>اكتشف كافة خدماتنا</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bento Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center space-x-4 space-x-reverse shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">15,000+</div>
              <div className="text-xs text-slate-500 font-bold">سيارة مخدومة سنوياً</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center space-x-4 space-x-reverse shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">99.4%</div>
              <div className="text-xs text-slate-500 font-bold">نسبة رضا العملاء</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center space-x-4 space-x-reverse shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">45+</div>
              <div className="text-xs text-slate-500 font-bold">مهندس وفني معتمد</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-center space-x-4 space-x-reverse shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">12 شهراً</div>
              <div className="text-xs text-slate-500 font-bold">ضمان شامل مكتوب</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
