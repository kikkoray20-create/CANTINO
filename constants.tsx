import React from 'react';
import { MenuItem, Review, GalleryImage } from './types';

export const RESTAURANT_NAME = "Cantino";
export const ADDRESS = "Shop 5, DDA Market Complex, Delhi University, Bylane, Hudson Lane, GTB Nagar, Delhi, 110033";
export const PHONE = "011 4019 4479";
export const PHONE_URL = "tel:+911140194479";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/@28.693767,77.202619,2507m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D";
export const ORDER_ONLINE_URL = "https://www.google.com/maps/@28.693767,77.202619,2507m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Achari Paneer Tikka',
    description: 'Cottage cheese chunks marinated in tangy pickle spices and grilled in tandoor.',
    price: 345,
    category: 'North Indian',
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Dal Makhani Platter',
    description: 'Our signature slow-cooked black lentils served with butter naan and salad.',
    price: 425,
    category: 'North Indian',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Classic Mojito',
    description: 'Fresh mint leaves, lime juice, sugar, and soda over crushed ice.',
    price: 195,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Peri Peri Momos',
    description: 'Steamed dumplings tossed in spicy peri peri seasoning.',
    price: 225,
    category: 'Snacks',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Veg Spring Rolls',
    description: 'Crispy fried rolls stuffed with seasoned julienne vegetables.',
    price: 245,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Butter Chicken',
    description: 'Succulent chicken pieces in a creamy, velvety tomato-based gravy.',
    price: 495,
    category: 'North Indian',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Penne Arrabbiata',
    description: 'Pasta tossed in a spicy garlic tomato sauce with olives and herbs.',
    price: 375,
    category: 'Continental',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Chilli Garlic Noodles',
    description: 'Stir-fried noodles with a punch of garlic and fiery chillies.',
    price: 295,
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Aarav Sharma',
    rating: 5,
    comment: 'Amazing live music! The vibe is just perfect for a weekend hangout with friends.',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    author: 'Priya Verma',
    rating: 4,
    comment: 'Best Dal Makhani in North Campus. The Achari Paneer Tikka is a must-try.',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Ishaan Gupta',
    rating: 4,
    comment: 'Great multicuisine options. Continental pasta was surprisingly good.',
    date: '3 days ago'
  }
];

export const GALLERY: GalleryImage[] = [
  { 
    id: 'g1', 
    url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    alt: 'Cantino Ambience', 
    category: 'Ambience' 
  },
  { 
    id: 'g2', 
    url: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80', 
    alt: 'Signature Indian Platter', 
    category: 'Food' 
  },
  { 
    id: 'g3', 
    url: 'https://images.stockcake.com/public/f/e/d/fedc86eb-83d9-41e5-985e-2de9e12bcfee_large/cafe-live-music-stockcake.jpg', 
    alt: 'Live Performance Night', 
    category: 'Music' 
  },
  { 
    id: 'g4', 
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    alt: 'Cozy Seating Area', 
    category: 'Ambience' 
  },
  { 
    id: 'g5', 
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    alt: 'Artisan Pizzas', 
    category: 'Food' 
  },
  { 
    id: 'g6', 
    url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    alt: 'Celebration at Cantino', 
    category: 'Events' 
  }
];
