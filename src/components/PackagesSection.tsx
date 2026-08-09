import React from 'react';
import { MAINTENANCE_PACKAGES } from '../data/automotiveData';
import { CheckCircle2, Crown, Sparkles, ShieldCheck } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            <Crown className="w-4 h-4 text-red-600" />
            <span>عقود الصيانة السنوية المضمونة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            باقات الصيانة السنوية الشاملة
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            وفر وقتك ومالك واضمن الأداء المثالي لسيارتك طوال العام مع باقات الصيانة السنوية
            التي توفر لك الخصومات الفورية والتغطية المريحة.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MAINTENANCE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-8 border ${
                pkg.popular ? 'border-red-600 shadow-lg ring-1 ring-red-600/20' : 'border-slate-200/90 shadow-sm'
              } flex flex-col justify-between relative transition-all duration-300 hover:shadow-xl ${
                pkg.popular ? 'scale-105 md:-translate-y-2' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-red-600 text-white text-[11px] font-black px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>الأكثر اختياراً</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mb-6 font-medium">{pkg.subtitle}</p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {pkg.price}
                  </div>
                  <div className="text-[11px] text-red-600 font-bold mt-1">
                    {pkg.period}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full font-bold py-3.5 rounded-xl transition-all shadow-sm ${
                  pkg.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                }`}
              >
                طلب الاشتراك في الباقة
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
