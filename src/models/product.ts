export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  featured: boolean;
}
