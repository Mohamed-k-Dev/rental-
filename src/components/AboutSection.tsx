import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Award,
  Users,
  Clock,
  ChevronLeft
} from 'lucide-react';
import { heroWorkshopImg } from '../data/automotiveData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const benefits = [
    'خبرة فنية هندسية متخصصة تمتد لأكثر من 15 عاماً في صيانة السيارات الفاخرة.',
    'أحدث أجهزة التشخيص والبرمجة الألمانية الأصلية المربوطة بسيرفرات المصنع.',
    'طاقم من المهندسين والفنيين المعتمدين والمُدربين إقليمياً ودولياً.',
    'استخدام قطع غيار أصلية 100% مع ضمان كتابي موثق يصل لعام كامل.',
    'خدمة استلام وتسليم السيارة من الباب للباب عبر ونشات خاصة مجهزة.',
    'شفافية كاملة في الفحص مع تقارير صور وفيديو مفصلة لكل عطل قبل الإصلاح.',
    'صالة انتظار مجهزة بسبل الراحة الفارهة مع ضيافة وواي فاي سريع للمراجعين.'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Right Column: Visual Workshop Image Frame (Bento Card 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-sm bg-white p-3 group">
              <div className="rounded-[2rem] overflow-hidden relative">
                <img
                  src={heroWorkshopImg}
                  alt="مركز أوتوبورت لصيانة السيارات الاحترافية"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Overlay Badge */}
              <div className="p-4 mt-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-md text-white flex items-center justify-between">
                <div>
                  <div className="font-black text-white text-base">مركز الصيانة الأحدث</div>
                  <div className="text-xs text-slate-300 font-medium">4 فروع مجهزة بالكامل بالرياض وجدة والشرقية</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-md">
                  AP
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Content (Bento Card 7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 space-y-6 text-right shadow-sm">
            
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <Award className="w-4 h-4 text-red-600" />
              <span>الجودة والاعتمادية أولاً</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              لماذا تختار أوتوبورت ليكون مركز الصيانة المعتمد لسيارتك؟
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              نأسس مفهوم جديد لرعاية السيارات يعتمد على الدقة الهندسية، الشفافية
              المطلقة، وتوفير تجربة مريحة لكل مالك سيارة يبحث عن الأمان والجودة العالية.
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-2.5 pt-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-800 text-xs sm:text-sm font-bold leading-normal">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>حجز موعد صيانة الآن</span>
                <ChevronLeft className="w-4 h-4" />
              </button>

              <a
                href="tel:920001234"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold px-6 py-3.5 rounded-xl transition-colors text-center"
              >
                تحدث مع مستشار الصيانة
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
