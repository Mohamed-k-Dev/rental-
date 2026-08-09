import React, { useState } from 'react';
import { JOB_OPENINGS } from '../data/automotiveData';
import { JobOpening } from '../types';
import { X, Briefcase, MapPin, CheckCircle2, Send } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 text-right p-6 sm:p-9 space-y-6 relative animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3.5 py-1 rounded-full text-xs font-bold shadow-xs">
            <Briefcase className="w-4 h-4 text-red-600" />
            <span>الانضمام لفريق أوتوبورت</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">الوظائف والفرص المهنية المتاحة</h2>
          <p className="text-xs text-slate-600 font-medium">
            نبحث عن كفاءات هندسية وفنية متميزة للانضمام إلى شبكة مراكزنا في المملكة.
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-4">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500/60 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                  {job.department}
                </span>
                <h3 className="text-base font-black text-slate-900 mt-1.5">{job.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shrink-0 shadow-sm"
              >
                تقديم طلب للوظيفة
              </button>
            </div>
          ))}
        </div>

        {/* Selected Job Application Form */}
        {selectedJob && (
          <div className="bg-slate-50 text-slate-900 p-6 rounded-2xl border border-slate-200 space-y-4 mt-6 animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <div className="text-xs text-red-600 font-bold">تقديم طلب شغل وظيفة</div>
                <div className="text-base font-bold text-slate-900">{selectedJob.title}</div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-slate-500 hover:text-slate-800 text-xs font-bold"
              >
                إغلاق النموذج
              </button>
            </div>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>تم استلام طلبك وبيرتك الذاتية بنجاح! سيتواصل معك قسم الموارد البشرية.</span>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الثلاثي *"
                    className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 shadow-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="رقم الجوال *"
                    className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 shadow-xs"
                    dir="ltr"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="البريد الإلكتروني *"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 shadow-xs"
                  dir="ltr"
                />

                <textarea
                  rows={2}
                  placeholder="نبذة عن سنوات خبرتك السابقة..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-600 shadow-xs resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>إرسال السيرة الذاتية الآن</span>
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
