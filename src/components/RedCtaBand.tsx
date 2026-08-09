import React from 'react';
import { Calendar, PhoneCall, ShieldAlert, ArrowLeft } from 'lucide-react';
import { heroWorkshopImg } from '../data/automotiveData';

interface RedCtaBandProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  onBookNow: () => void;
}

export const RedCtaBand: React.FC<RedCtaBandProps> = ({
  headline = "هل تحتاج إلى خدمة صيانة فورية أو فحص لسيارتك؟",
  subheadline = "فريقنا الهندسي المعتمد جاهز لخدمتك في أربعة فروع رئيسية مع توفير خدمة الونش والاستلام من موقعك.",
  buttonText = "احجز موعد صيانة الآن",
  onBookNow
}) => {
  return (
    <section className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] text-white py-12 px-6 sm:px-12 overflow-hidden w-full max-w-[1920px] mx-auto my-12 shadow-md">
      {/* Background Image Blend */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={heroWorkshopImg}
          alt="صيانة أوتوبورت"
          className="w-full h-full object-cover filter brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 bg-red-950/90 border border-red-700/60 text-red-300 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
          <ShieldAlert className="w-4 h-4 text-amber-300" />
          <span>خدمة سريعة وضمان كتابي معتمد</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          {headline}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookNow}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>{buttonText}</span>
          </button>

          <a
            href="tel:920001234"
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-red-400" />
            <span>اتصل بنا مباشرة: 920001234</span>
          </a>
        </div>
      </div>
    </section>
  );
};
