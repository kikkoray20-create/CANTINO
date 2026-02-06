
import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock, CreditCard, ParkingCircle, Baby } from 'lucide-react';
import { RESTAURANT_NAME, ADDRESS, PHONE, PHONE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h4 className="text-3xl font-serif font-bold text-white tracking-tight">{RESTAURANT_NAME}</h4>
            <p className="text-sm font-light leading-relaxed">
              Serving soul-satisfying North Indian & Multicuisine flavors since 2018. Experience live music and dreamy vibes in the heart of Delhi University.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cantinodelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Amenities & Info */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Guest Information</h5>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center space-x-3">
                <ParkingCircle size={18} className="text-amber-500 shrink-0" />
                <span>Free Street Parking Available</span>
              </li>
              <li className="flex items-center space-x-3">
                <CreditCard size={18} className="text-amber-500 shrink-0" />
                <span>Credit/Debit & NFC Accepted</span>
              </li>
              <li className="flex items-center space-x-3">
                <Baby size={18} className="text-amber-500 shrink-0" />
                <span>Good for kids & Birthdays</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={18} className="text-amber-500 shrink-0" />
                <span>Reservations Recommended</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Get In Touch</h5>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a href={PHONE_URL} className="hover:text-amber-500 transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <a href="mailto:info@cantino.com" className="hover:text-amber-500 transition-colors">hello@cantino.in</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-amber-500 shrink-0" />
                <span>Daily: 12:30 PM – 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map Snippet */}
          <div className="rounded-2xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shadow-2xl h-48 md:h-auto border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6415053459814!2d77.2039233761725!3d28.69438078122393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8042571253%3A0xc023537b01859942!2sCantino!5e0!3m2!1sen!2sin!4v1715423854124!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Cantino. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <a href="#" className="hover:text-stone-300">Food Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CheckCircle: React.FC<{size?: number, className?: string}> = ({size = 18, className}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default Footer;
