import React, { useState } from 'react';
import {
  SERVICES,
  SERVICE_CATEGORIES
} from '../data/automotiveData';
import { ServiceItem } from '../types';
import {
  Wrench,
  Zap,
  Snowflake,
  Shield,
  Cpu,
  ArrowLeft,
  Clock,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  selectedCategoryId: string;
  onSelectCategory: (catId: string) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedCategoryId,
  onSelectCategory,
  onBookService
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryId || 'all');
  const [detailModalService, setDetailModalService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3.5 py-1 rounded-full text-xs font-extrabold mb-3 shadow-sm">
            <Wrench className="w-3.5 h-3.5" />
            <span>خدماتنا ورعايتنا الشاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            خدمات صيانة وإصلاح السيارات الاحترافية
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            نقدم مجموعة متكاملة من خدمات الصيانة الفنية الميكانيكية والكهربائية والهيكل
            مع أحدث الأجهزة التشخيصية وضمان كتابي معتمد. اضغط على أي خدمة لاستعراض كافة تفاصيلها.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            جميع الخدمات
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Services Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setDetailModalService(service)}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-red-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
            >
              {service.popular && (
                <span className="absolute top-6 left-6 bg-red-100 border border-red-200 text-red-700 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  الأكثر طلباً
                </span>
              )}

              <div>
                {/* Red Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                  {renderCategoryIcon(
                    SERVICE_CATEGORIES.find((c) => c.id === service.category)?.icon || 'Wrench'
                  )}
                </div>

                <span className="text-xs font-bold text-slate-500 block mb-1">
                  {service.categoryLabel}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div>
                {/* Meta Tags */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 mb-5">
                  <div className="flex items-center gap-1 text-slate-700 font-bold">
                    <ShieldCheck className="w-4 h-4 text-red-600" />
                    <span>{service.warranty}</span>
                  </div>
                  {service.priceEstimate && (
                    <span className="bg-slate-200/80 text-slate-800 font-bold px-3 py-1 rounded-lg text-[11px]">
                      {service.priceEstimate}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-600 group-hover:text-red-600 flex items-center gap-1 transition-colors">
                    <span>انقر لتفاصيل الخدمة</span>
                    <ChevronLeft className="w-4 h-4 text-red-600 group-hover:-translate-x-1 transition-transform" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookService(service.title);
                    }}
                    className="text-xs font-bold bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    حجز موعد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={detailModalService}
        onClose={() => setDetailModalService(null)}
        onBookService={onBookService}
      />
    </section>
  );
};
