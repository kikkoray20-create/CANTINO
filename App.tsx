
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { ShoppingBag, ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative antialiased text-stone-800 bg-stone-50">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Footer />

      {/* Persistent Call-to-Action for Mobile/Everywhere */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white text-stone-800 rounded-full shadow-2xl hover:bg-stone-100 transition-all border border-stone-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
        <a 
          href="#order"
          className="flex items-center space-x-3 bg-amber-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-amber-700 transition-all transform hover:scale-105"
        >
          <ShoppingBag size={20} />
          <span className="font-bold tracking-wide">Order Online Now</span>
        </a>
      </div>

      {/* Global CSS Inject (Schema) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Cantino",
          "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "@id": "",
          "url": "https://cantino.in",
          "telephone": "011 4019 4479",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop 5, DDA Market Complex, Delhi University, Bylane, Hudson Lane, GTB Nagar",
            "addressLocality": "Delhi",
            "postalCode": "110033",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6943808,
            "longitude": 77.2064983
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "12:30",
            "closes": "23:00"
          },
          "menu": "https://cantino.in/#menu",
          "servesCuisine": ["North Indian", "Continental", "Chinese"],
          "priceRange": "₹₹"
        })}
      </script>
    </div>
  );
}

export default App;
