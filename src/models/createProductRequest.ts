export interface CreateProductRequest {
  name: string;
  price: number;
  imageUrl: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  featured: boolean;
  shipping: boolean;
}
