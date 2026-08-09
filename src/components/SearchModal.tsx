import React, { useState } from 'react';
import { SERVICES, OFFERS } from '../data/automotiveData';
import { Search, X, ChevronLeft, Wrench, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredServices = query.trim()
    ? SERVICES.filter(
        (s) =>
          s.title.includes(query) ||
          s.shortDesc.includes(query) ||
          s.categoryLabel.includes(query)
      )
    : SERVICES.slice(0, 4);

  const filteredOffers = query.trim()
    ? OFFERS.filter((o) => o.title.includes(query) || o.description.includes(query))
    : OFFERS;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-7 shadow-2xl border border-slate-200 text-right space-y-4 relative animate-in zoom-in-95 duration-200">
        
        {/* Search Bar Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن اسم الخدمة (مثل: تكييف، فحص كمبيوتر، فرامل، سمكرة)..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-12 pl-12 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs transition-colors"
          />
          <button
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results list */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pt-2">
          
          {/* Services Group */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5 text-red-600" />
              <span>نتائج الخدمات ({filteredServices.length})</span>
            </div>

            <div className="space-y-2">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    onClose();
                    onSelectService(service.title);
                  }}
                  className="w-full text-right p-4 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/80 hover:border-red-500/60 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 block">
                      {service.categoryLabel}
                    </span>
                    <span className="font-bold text-slate-900 group-hover:text-red-600 text-sm transition-colors">
                      {service.title}
                    </span>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-red-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Offers Group */}
          {filteredOffers.length > 0 && (
            <div className="pt-2 border-t border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-red-600" />
                <span>العروض المتاحة</span>
              </div>

              <div className="space-y-2">
                {filteredOffers.map((off) => (
                  <button
                    key={off.id}
                    onClick={() => {
                      onClose();
                      onSelectService(off.title);
                    }}
                    className="w-full text-right p-4 rounded-xl bg-red-50/60 hover:bg-red-100/70 border border-red-200 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{off.title}</span>
                      <div className="text-xs text-red-700 font-bold">{off.discountedPrice} ({off.discountBadge})</div>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-red-600 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
