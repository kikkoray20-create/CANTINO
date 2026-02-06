
import React from 'react';
import { ChevronRight, MapPin, PhoneCall } from 'lucide-react';
import { PHONE_URL, GOOGLE_MAPS_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Restaurant Ambience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 backdrop-brightness-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl py-20 md:py-0">
        <div className="mb-4 md:mb-6 inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          <span className="text-amber-200 text-xs md:text-sm font-medium tracking-wide uppercase">Live Music Tonight</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
          Great Food, Live Music & <br />
          <span className="text-amber-400 italic">Cozy Vibes</span>
        </h1>
        
        <p className="text-base md:text-xl text-stone-200 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Welcome to Cantino, your neighborhood destination for authentic North Indian flavors and soulful experiences in GTB Nagar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-all flex items-center justify-center space-x-2 shadow-2xl active:scale-95"
          >
            <span>Order Online</span>
            <ChevronRight size={18} />
          </a>
          
          <div className="flex space-x-3 w-full sm:w-auto">
            <a 
              href={PHONE_URL}
              className="flex-1 sm:flex-none px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <PhoneCall size={18} />
              <span className="sm:hidden lg:inline">Call</span>
            </a>
            <a 
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <MapPin size={18} />
              <span className="sm:hidden lg:inline">Locate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
