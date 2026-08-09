import React, { useState, useEffect } from 'react';
import {
  BRANCHES,
  SERVICE_CATEGORIES,
  BRANDS
} from '../data/automotiveData';
import { BookingFormData } from '../types';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  MapPin,
  CheckCircle2,
  Truck,
  MessageSquare,
  Sparkles,
  Printer,
  X,
  ShieldCheck
} from 'lucide-react';

interface BookingSectionProps {
  initialServiceTitle?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialServiceTitle }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    carBrand: 'مرسيدس بنز',
    carModel: '',
    modelYear: '2022',
    serviceType: initialServiceTitle || 'فحص كمبيوتر ألماني شامل 120 نقطة',
    branch: BRANCHES[0].name,
    bookingDate: new Date().toISOString().split('T')[0],
    bookingTime: '10:00 صباحاً',
    needTowing: false,
    notes: ''
  });

  const [submittedReceipt, setSubmittedReceipt] = useState<{
    bookingRef: string;
    data: BookingFormData;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    if (initialServiceTitle) {
      setFormData((prev) => ({ ...prev, serviceType: initialServiceTitle }));
    }
  }, [initialServiceTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate random reference code
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const bookingRef = `AP-${new Date().getFullYear()}-${randomNum}`;

    setSubmittedReceipt({
      bookingRef,
      data: { ...formData },
      timestamp: new Date().toLocaleDateString('ar-SA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  };

  return (
    <section id="booking" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            <Calendar className="w-4 h-4 text-red-600" />
            <span>حجز موعد أونلاين فورياً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            احجز موعد صيانة سيارتك
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            اختر الخدمة المناسبة وحدد الموعد وسيتواصل معك مهندس الاستقبال لتأكيد الحجز
            خلال دقائق معدودة.
          </p>
        </div>

        {/* Booking Card Form */}
        <div className="bg-slate-50/80 rounded-3xl p-7 sm:p-11 border border-slate-200/90 shadow-sm relative text-right">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Customer Info */}
            <div className="border-b border-slate-200/80 pb-6">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-red-600" />
                <span>بيانات العميل المالك</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: عبد الله السلمان"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">رقم الجوال *</label>
                  <input
                    type="tel"
                    required
                    placeholder="050XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors text-left"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Vehicle Info */}
            <div className="border-b border-slate-200/80 pb-6">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Car className="w-4 h-4 text-red-600" />
                <span>معلومات السيارة</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">ماركة السيارة *</label>
                  <select
                    value={formData.carBrand}
                    onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  >
                    {BRANDS.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} ({b.logoText})
                      </option>
                    ))}
                    <option value="ماركة أخرى">ماركة أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">الموديل (مثل: S500 / X5)</label>
                  <input
                    type="text"
                    placeholder="اسم الفئة أو الموديل"
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">سنة الصنع *</label>
                  <select
                    value={formData.modelYear}
                    onChange={(e) => setFormData({ ...formData, modelYear: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  >
                    {Array.from({ length: 17 }, (_, i) => 2026 - i).map((yr) => (
                      <option key={yr} value={yr.toString()}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Service & Branch Selection */}
            <div className="border-b border-slate-200/80 pb-6">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>نوع الخدمة والفرع</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">الخدمة المطلوب حجزها *</label>
                  <input
                    type="text"
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">اختيار الفرع الأقرب *</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.city} - {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">تاريخ الموعد *</label>
                  <input
                    type="date"
                    required
                    value={formData.bookingDate}
                    onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">الوقت المفضل *</label>
                  <select
                    value={formData.bookingTime}
                    onChange={(e) => setFormData({ ...formData, bookingTime: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
                  >
                    <option value="8:30 صباحاً">8:30 صباحاً</option>
                    <option value="10:00 صباحاً">10:00 صباحاً</option>
                    <option value="12:00 ظهراً">12:00 ظهراً</option>
                    <option value="4:00 عصراً">4:00 عصراً</option>
                    <option value="6:00 مساءً">6:00 مساءً</option>
                    <option value="8:00 مساءً">8:00 مساءً</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Towing Pickup Option */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900">خدمة الاستلام والونش الخاص</div>
                  <div className="text-xs text-slate-500">هل ترغب بسحب أو استلام السيارة من موقعك؟</div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={formData.needTowing}
                onChange={(e) => setFormData({ ...formData, needTowing: e.target.checked })}
                className="w-5 h-5 accent-red-600 rounded cursor-pointer"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">أي ملاحظات أو أشكال الأعطال الملاحظة</label>
              <textarea
                rows={3}
                placeholder="صف العطل أو أي ملاحظات خاصة لمهندس الاستقبال..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 shadow-xs transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-base py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>تأكيد الحجز فورياً</span>
            </button>
          </form>
        </div>

      </div>

      {/* Confirmation Receipt Modal */}
      {submittedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-right space-y-6 relative animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSubmittedReceipt(null)}
              className="absolute top-5 left-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Icon */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">تم تسجيل حجزك بنجاح!</h3>
              <p className="text-xs text-slate-500 font-medium">
                تم إنشاء تذكرة الصيانة وحجز الموعد لدى أوتوبورت.
              </p>
            </div>

            {/* Reference Number Box */}
            <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 text-center">
              <div className="text-xs text-slate-400 font-medium">رقم التذكرة والمرجع</div>
              <div className="text-2xl font-black text-red-500 tracking-wider font-mono mt-0.5">
                {submittedReceipt.bookingRef}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                تاريخ الطلب: {submittedReceipt.timestamp}
              </div>
            </div>

            {/* Booking Details Summary */}
            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-bold text-slate-500">اسم المالك:</span>
                <span className="font-bold text-slate-900">{submittedReceipt.data.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-bold text-slate-500">السيارة:</span>
                <span className="font-bold text-slate-900">
                  {submittedReceipt.data.carBrand} {submittedReceipt.data.carModel} ({submittedReceipt.data.modelYear})
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-bold text-slate-500">الخدمة:</span>
                <span className="font-bold text-slate-900">{submittedReceipt.data.serviceType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-bold text-slate-500">الفرع:</span>
                <span className="font-bold text-slate-900">{submittedReceipt.data.branch}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="font-bold text-slate-500">الموعد:</span>
                <span className="font-bold text-red-600">
                  {submittedReceipt.data.bookingDate} الساعة {submittedReceipt.data.bookingTime}
                </span>
              </div>
              {submittedReceipt.data.needTowing && (
                <div className="flex justify-between py-1 text-red-600 font-bold">
                  <span>خدمة الونش:</span>
                  <span>مطلوبة (سيتم الاتصال لتحديد الموقع)</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/966500001234?text=${encodeURIComponent(
                  `مرحباً، لدي حجز برقم المرجع: ${submittedReceipt.bookingRef} للعميل ${submittedReceipt.data.fullName} للخدمة: ${submittedReceipt.data.serviceType}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>التأكيد المباشر عبر واتساب</span>
              </a>

              <button
                onClick={() => setSubmittedReceipt(null)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-sm transition-colors"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
