import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

interface FooterProps {
  onNavClick: (tabId: string) => void;
  onOpenCareers: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenCareers,
  onOpenBooking
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 text-right">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Description (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <span className="font-black text-2xl">AP</span>
              </div>
              <div>
                <div className="text-2xl font-black text-white">أوتوبورت</div>
                <div className="text-xs text-slate-400 font-medium">مراكز صيانة وخدمات السيارات</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              أحد أكبر مراكز صيانة وإصلاح السيارات الفاخرة والأسطول في المملكة العربية السعودية.
              نقدم حلول صيانة ميكانيكية وكهربائية ودورية متكاملة مع ضمان كتابي معتمد.
            </p>

            <div className="p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
              <span>مركز معتمد حاصل على شهادة أيزو الجودة في خدمات صيانة المركبات.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-r-2 border-red-600 pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-red-400 transition-colors">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-red-400 transition-colors">
                  عن شركة أوتوبورت
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-red-400 transition-colors">
                  باقات الصيانة السنوية
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('offers')} className="hover:text-red-400 transition-colors">
                  العروض الموسمية
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('blog')} className="hover:text-red-400 transition-colors">
                  مدونة النصائح الهندسية
                </button>
              </li>
              <li>
                <button onClick={onOpenCareers} className="hover:text-red-400 transition-colors">
                  الوظائف والفرص المهنية
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-r-2 border-red-600 pr-2">
              أقسام الصيانة
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-red-400 transition-colors">
                  الإصلاحات الميكانيكية والجير
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-red-400 transition-colors">
                  البرمجة والتشخيص الإلكتروني
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-red-400 transition-colors">
                  صيانة التكييف وسحب الفريون
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-red-400 transition-colors">
                  الدهان والفرن الألماني الحراري
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-red-400 transition-colors">
                  تعديل وسحب الصدمات بالبارد (PDR)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info & Emergency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-r-2 border-red-600 pr-2">
              التواصل المباشر
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>الرقم الموحد: <strong className="text-white">920001234</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>واتساب الخدمة: 0500001234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>support@autoport.sa</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>السبت - الخميس (8 ص - 10 م)</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-sm"
            >
              احجز موعدك الآن
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <div>
            جميع الحقوق محفوظة لشركة أوتوبورت لمراكز صيانة وخدمات السيارات © {new Date().getFullYear()}
          </div>
          <div className="flex items-center space-x-6 space-x-reverse font-medium">
            <span className="hover:text-white cursor-pointer">سياسة الخصوصية</span>
            <span className="hover:text-white cursor-pointer">الشروط والأحكام</span>
            <span className="hover:text-white cursor-pointer">شروط الضمان</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
