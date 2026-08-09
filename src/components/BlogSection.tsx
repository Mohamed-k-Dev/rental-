import React from 'react';
import { BLOG_POSTS } from '../data/automotiveData';
import { BookOpen, Clock, User, ArrowLeft } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            <BookOpen className="w-4 h-4 text-red-600" />
            <span>مدونة التوعية والنصائح الهندسية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            دليلك للعناية بصيانة سيارتك
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            مقالات هندسية وإرشادات مبسطة كتبها خبراء ورش أوتوبورت لمساعدتك في
            تجنب الاعطال المكلفة والحفاظ على عمر محرك سيارتك.
          </p>
        </div>

        {/* Posts Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between group text-right"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 bg-white/90 border border-slate-200 text-slate-800 font-bold text-[11px] px-3.5 py-1 rounded-full shadow-sm backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-red-600" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-slate-200/80 mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="text-slate-700">{post.author}</span>
                <button className="text-red-600 hover:text-red-700 flex items-center gap-1">
                  <span>اقرأ المقال</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
