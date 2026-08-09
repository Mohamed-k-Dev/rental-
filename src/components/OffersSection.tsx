import React from 'react';
import { OFFERS } from '../data/automotiveData';
import { OfferItem } from '../types';
import { Tag, Calendar, Check, ArrowLeft, Clock } from 'lucide-react';

interface OffersSectionProps {
  onClaimOffer: (offerTitle: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onClaimOffer }) => {
  return (
    <section id="offers" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs font-black shadow-sm">
            <Tag className="w-4 h-4 text-red-600" />
            <span>العروض والخصومات الموسمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            عروض وحزم الصيانة المتميزة
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            استمتع بأقوى العروض الحصرية على صيانات المحرك، الفريون، والفرامل بأسعار تنافسية
            وضمان شامل على كافة الأعمال والقطع.
          </p>
        </div>

        {/* 3 Promos Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Promo Image & Badge */}
                <div className="relative h-56 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                  <span className="absolute top-4 right-4 bg-red-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                    {offer.discountBadge}
                  </span>

                  <span className="absolute bottom-4 right-4 text-xs font-bold text-white flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>{offer.validUntil}</span>
                  </span>
                </div>

                {/* Offer Content */}
                <div className="p-7 space-y-4 text-right">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {offer.title}
                    </h3>
                    <p className="text-xs font-bold text-red-600 mt-1">
                      {offer.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/80">
                    {offer.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-7 pt-0 border-t border-slate-200/80 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 line-through font-bold">
                    {offer.originalPrice}
                  </div>
                  <div className="text-xl font-black text-slate-900">
                    {offer.discountedPrice}
                  </div>
                </div>

                <button
                  onClick={() => onClaimOffer(offer.title)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>احصل على العرض</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
