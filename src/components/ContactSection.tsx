import React, { useState } from 'react';
import { BRANCHES } from '../data/automotiveData';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState(BRANCHES[0].id);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const selectedBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            <Building className="w-4 h-4 text-red-600" />
            <span>فروعنا ووسائل التواصل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            نحن بالقرب منك في كافة المناطق الرئيسية
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            تفضل بزيارة أحد فروعنا بالرياض وجدة والشرقية أو تواصل معنا مباشرة
            للحصول على الدعم الفني والاستشارات الميدانية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Branch List Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-black text-slate-900 mb-3 text-right">
              اختر الفرع لعرض التفاصيل
            </h3>

            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBranchId(b.id)}
                className={`w-full text-right p-5 rounded-2xl border transition-all duration-300 block ${
                  selectedBranchId === b.id
                    ? 'bg-red-50/50 border-red-600 shadow-sm ring-1 ring-red-600/30'
                    : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-slate-900 text-base">
                    {b.city}
                  </span>
                  {selectedBranchId === b.id && (
                    <span className="bg-red-100 text-red-800 border border-red-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      محدد حالياً
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-600 font-bold mb-3">
                  {b.name}
                </div>

                <div className="space-y-1.5 text-xs text-slate-500 border-t border-slate-200/80 pt-2 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="line-clamp-1">{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{b.phone}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Branch Detail & Map View (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-6 text-right">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                تفاصيل الفرع المحدد
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                {selectedBranch.city} - {selectedBranch.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>العنوان المباشر</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {selectedBranch.address}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>ساعات العمل الرسمية</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {selectedBranch.hours}
                </p>
              </div>
            </div>

            {/* Quick Action Buttons for Branch */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${selectedBranch.phone}`}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>اتصال المباشر: {selectedBranch.phone}</span>
              </a>

              <a
                href={`https://wa.me/${selectedBranch.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>محادثة الواتساب</span>
              </a>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              <div className="relative z-10 text-center p-4 space-y-2">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="font-bold text-white text-sm">
                  موقع الفرع على الخريطة التفاعلية
                </div>
                <div className="text-xs text-slate-400">
                  إحداثيات GPS: {selectedBranch.mapCoordinates}
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleInquiry} className="pt-4 border-t border-slate-200/80 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">إرسال استفسار عام للفرع</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="اسمك"
                  className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="رقم الجوال"
                  className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                  dir="ltr"
                />
              </div>

              <textarea
                rows={2}
                required
                placeholder="كيف يمكننا مساعدتك؟"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>إرسال الرسالة</span>
              </button>

              {contactSubmitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>شكراً لك! تم استلام رسالتك وسيتواصل معك موظف الاستقبال فوراً.</span>
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
