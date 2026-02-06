
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/3 text-center lg:text-left w-full">
            <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">What Our Guests Love</h3>
            
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl inline-block w-full max-w-md">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-stone-900">4.2</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
              </div>
              <p className="text-stone-500 text-xs md:text-sm mb-6">Based on 3,205 Verified Reviews</p>
              <div className="space-y-3">
                <ReviewStat label="Service" percentage="90%" />
                <ReviewStat label="Food" percentage="95%" />
                <ReviewStat label="Vibe" percentage="100%" />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 relative group hover:shadow-md transition-all duration-300">
                <Quote className="absolute top-4 right-6 text-stone-100/50 group-hover:text-amber-100/50 transition-colors pointer-events-none" size={32} />
                <div className="flex text-amber-500 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-700 italic mb-6 leading-relaxed text-sm md:text-base relative z-10">"{review.comment}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                    {review.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 text-xs md:text-sm">{review.author}</h5>
                    <p className="text-stone-400 text-[10px] md:text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewStat: React.FC<{ label: string; percentage: string }> = ({ label, percentage }) => (
  <div className="flex items-center space-x-3">
    <span className="text-[10px] md:text-xs font-semibold text-stone-600 w-12 md:w-16 text-right">{label}</span>
    <div className="flex-1 h-1 md:h-1.5 bg-stone-100 rounded-full overflow-hidden">
      <div className="h-full bg-amber-500 rounded-full" style={{ width: percentage }}></div>
    </div>
  </div>
);

export default Reviews;
