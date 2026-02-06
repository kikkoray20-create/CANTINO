
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { RESTAURANT_NAME, PHONE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = isScrolled ? 70 : 90; // Adjust offset based on navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2 md:py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center space-x-2"
            >
              <span className={`text-xl md:text-3xl font-serif font-black tracking-tighter transition-colors duration-300 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}>
                {RESTAURANT_NAME.toUpperCase()}
                <span className="text-amber-500">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-amber-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 after:transition-all hover:after:w-full ${
                    isScrolled ? 'text-stone-600' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                isScrolled 
                  ? 'bg-amber-600 text-white shadow-md hover:bg-amber-700' 
                  : 'bg-white text-stone-900 hover:bg-amber-500 hover:text-white'
              }`}
            >
              <ShoppingCart size={14} />
              <span>Order Online</span>
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <a 
              href={PHONE_URL} 
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled ? 'text-stone-800 bg-stone-100' : 'text-white bg-white/10'
              }`}
              aria-label="Call restaurant"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled ? 'text-stone-800 bg-stone-100' : 'text-white bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/98 backdrop-blur-2xl z-[-1] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-serif font-bold text-white hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl flex items-center space-x-3 active:scale-95 transition-transform"
            >
              <ShoppingCart size={22} />
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
