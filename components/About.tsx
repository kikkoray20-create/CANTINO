
import React from 'react';
import { Music, Coffee, Users, Star, Truck, Utensils, Heart, Beer, Wine, Cake, Moon, Clock, MapPin, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Music size={20} />, label: "Live Music" },
    { icon: <Beer size={20} />, label: "Great Beer" },
    { icon: <Coffee size={20} />, label: "Great Coffee" },
    { icon: <Cake size={20} />, label: "Great Dessert" },
    { icon: <Wine size={20} />, label: "Great Wine" },
  ];

  const serviceOptions = [
    "No-contact delivery", "Delivery", "Takeaway", "Dine-in"
  ];

  const diningTypes = [
    "Breakfast", "Brunch", "Lunch", "Dinner", "Late-night"
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side: Images & Floating Badge */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Cantino Ambience" 
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg transform translate-y-4 md:translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Live Music at Cantino" 
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 md:p-8 rounded-2xl shadow-2xl max-w-[180px] md:max-w-xs hidden sm:block border-l-4 border-amber-600">
              <div className="flex items-center space-x-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="text-stone-700 italic font-medium leading-tight text-xs md:text-sm">"The best live music café in North Campus. Dreamy vibe!"</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-2">The Cantino Experience</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Trendy, Upmarket & <span className="italic text-amber-700">Perfectly Romantic</span>
              </h3>
            </div>
            
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light">
              Cantino is a celebration of flavors and melodies in GTB Nagar. Ideal for university students, tourists, and groups looking for that perfect blend of comfort and elegance.
            </p>

            {/* Quick Service Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 py-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-stone-200 shadow-sm text-stone-700 text-xs md:text-sm font-medium">
                  <span className="text-amber-600">{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6 text-left">
              <div>
                <h4 className="font-bold text-stone-900 mb-3 flex items-center space-x-2 text-sm md:text-base">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  <span>Service</span>
                </h4>
                <ul className="space-y-1.5">
                  {serviceOptions.map((opt, i) => (
                    <li key={i} className="text-stone-500 text-[11px] md:text-sm flex items-center space-x-1.5">
                      <div className="w-1 h-1 rounded-full bg-stone-300"></div>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 mb-3 flex items-center space-x-2 text-sm md:text-base">
                  <Clock size={16} className="text-amber-600 shrink-0" />
                  <span>Dining</span>
                </h4>
                <ul className="space-y-1.5">
                  {diningTypes.map((opt, i) => (
                    <li key={i} className="text-stone-500 text-[11px] md:text-sm flex items-center space-x-1.5">
                      <div className="w-1 h-1 rounded-full bg-stone-300"></div>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Atmosphere & Crowd */}
            <div className="bg-amber-50 p-4 md:p-6 rounded-2xl border border-amber-100 grid grid-cols-2 gap-4 text-center sm:text-left">
              <div>
                <h5 className="text-[10px] uppercase tracking-widest text-amber-800 font-bold mb-1">Atmosphere</h5>
                <p className="text-xs md:text-sm text-amber-900/70">Romantic & Trendy</p>
              </div>
              <div>
                <h5 className="text-[10px] uppercase tracking-widest text-amber-800 font-bold mb-1">Crowd</h5>
                <p className="text-xs md:text-sm text-amber-900/70">Students & Groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
