import React from 'react';
import { ServiceItem } from '../types';
import {
  X,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  Wrench,
  ChevronLeft,
  DollarSign
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-right animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-slate-50 text-slate-900 rounded-t-3xl border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-6 left-6 p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors shadow-xs"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-xs">
            {service.categoryLabel}
          </span>

          <h2 className="text-xl sm:text-2xl font-black leading-snug text-slate-900">
            {service.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium pt-3">
            {service.duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-red-600" />
                <span>المدة التقديرية: {service.duration}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>{service.warranty}</span>
            </div>
            {service.priceEstimate && (
              <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                <DollarSign className="w-4 h-4" />
                <span>التكلفة: {service.priceEstimate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">تفاصيل الخدمة وصيانتها</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.fullDesc}
            </p>
          </div>

          {/* Included Features Checklist */}
          {service.includedFeatures && service.includedFeatures.length > 0 && (
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-red-600" />
                <span>ماذا تشمل هذه الخدمة؟</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.includedFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Standard Guarantees Box */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between text-xs text-red-800 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
              <span>نضمن لك استخدام قطع غيار أصلية وإجراء فحص كمبيوتر مجاني مع كل خدمة.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز موعد لهذه الخدمة الآن</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-200 transition-colors"
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
