import React from 'react';
import { BRANDS } from '../data/automotiveData';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface BrandsSectionProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onSelectBrand }) => {
  return (
    <section id="brands" className="py-16 bg-slate-50 text-slate-900 border-y border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            <Shield className="w-4 h-4 text-red-600" />
            <span>متخصصون معتمدون في السيارات الفاخرة والحديثة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            العلامات التجارية التي نخدمها
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نوفر برامج تشخيص وأجهزة برمجة أصلية معتمدة لكل ماركة مع فنيين متخصصين. اضغط على شعار أي سيارة لحجز صيانة مخصصة لها.
          </p>
        </div>

        {/* Brands Responsive Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              className="bg-white hover:bg-red-50/40 p-5 rounded-2xl border border-slate-200/90 hover:border-red-500/60 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-between group cursor-pointer w-full text-right"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-red-600 text-slate-800 group-hover:text-white border border-slate-200 flex items-center justify-center font-black text-lg transition-colors shadow-xs mb-3">
                {brand.name.slice(0, 2).toUpperCase()}
              </div>

              <div className="w-full text-center">
                <div className="font-extrabold text-slate-900 text-sm group-hover:text-red-600 transition-colors">
                  {brand.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {brand.logoText}
                </div>
              </div>

              {brand.badge ? (
                <span className="mt-2 text-[10px] bg-slate-100 group-hover:bg-red-100 text-slate-700 group-hover:text-red-800 font-bold px-2.5 py-0.5 rounded-full border border-slate-200 transition-colors">
                  {brand.badge}
                </span>
              ) : (
                <span className="mt-2 text-[10px] text-red-600 font-bold group-hover:underline">
                  طلب صيانة ←
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Footnote Guarantee */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-bold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            <span>قطع غيار أصلية 100% بالضمان المكتوب</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            <span>أحدث برامج تشخيص المصنع (ISTA, XENTRY, PIWIS)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            <span>مهندسون معتمدون بحسب العلامة</span>
          </div>
        </div>

      </div>
    </section>
  );
};
