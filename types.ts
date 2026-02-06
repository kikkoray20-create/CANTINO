
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'North Indian' | 'Continental' | 'Chinese' | 'Beverages' | 'Snacks';
  isPopular?: boolean;
  isChefSpecial?: boolean;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'Ambience' | 'Food' | 'Music' | 'Events';
}
