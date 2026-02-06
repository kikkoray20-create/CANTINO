
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Leaf } from 'lucide-react';

const Menu: React.FC = () => {
  const categories = ['All', 'North Indian', 'Continental', 'Chinese', 'Snacks', 'Beverages'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
        <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-2">Our Menu</h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4 md:mb-6">Explore Our Flavors</h3>
        <p className="text-stone-500 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base px-2">
          From the tandoors of North India to the bistros of Europe, satisfied cravings await.
          <span className="block mt-3 font-medium text-amber-600 flex items-center justify-center space-x-2">
            <Leaf size={14} /> 
            <span className="text-xs md:text-sm">Extensive Vegan & Vegetarian Options</span>
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center gap-2 mb-8 md:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button 
            className="inline-flex items-center space-x-2 border-b-2 border-amber-600 text-amber-600 font-bold pb-1 hover:text-amber-700 transition-colors text-sm md:text-base active:scale-95"
          >
            <span>View Full Menu & Order Online</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
      <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {item.isChefSpecial && (
            <div className="bg-amber-600 text-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-md">
              Chef Special
            </div>
          )}
          {item.isPopular && (
            <div className="bg-red-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-md">
              Popular
            </div>
          )}
        </div>
      </div>
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h4 className="font-serif text-base md:text-lg font-bold text-stone-800 leading-tight group-hover:text-amber-700 transition-colors">
            {item.name}
          </h4>
          <span className="text-amber-700 font-bold text-sm md:text-base">₹{item.price}</span>
        </div>
        <p className="text-stone-500 text-xs md:text-sm line-clamp-2 mb-4 font-light italic flex-1">
          {item.description}
        </p>
        <button className="w-full py-2.5 md:py-3 rounded-xl border border-stone-200 text-stone-700 text-xs md:text-sm font-semibold hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all active:scale-95">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default Menu;
