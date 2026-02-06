
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-2">Moments</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Vibe at Cantino</h3>
        <p className="text-stone-400 max-w-2xl mx-auto font-light">
          A glimpse into our world of music, celebrations, and culinary art. Follow us on Instagram for daily updates.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((img) => (
            <div 
              key={img.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${hoveredId === img.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center p-4">
                  <span className="inline-block bg-amber-600 text-white text-[10px] px-2 py-0.5 rounded-full mb-2 uppercase tracking-widest">{img.category}</span>
                  <p className="text-white font-serif italic text-lg">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full hover:bg-white hover:text-stone-900 transition-all font-semibold">
          Follow us @CantinoDelhi
        </button>
      </div>
    </section>
  );
};

export default Gallery;
