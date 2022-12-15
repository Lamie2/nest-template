import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';

// eslint-disable-next-line @typescript-eslint/no-var-requires
let products = require('../../src/products/products.json');

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return products;
  }

  getProductById(id: number): Product {
    return products.find((product) => product.id === id);
  }

  createProduct(request: CreateProductRequest): number {
    const newId = products[products.length - 1].id + 1;
    const newProduct: Product = {
      id: newId,
      name: request.name,
      price: request.price,
      imageUrl: request.imageUrl,
      colors: request.colors,
      company: request.company,
      description: request.description,
      category: request.category,
      featured: request.featured,
      shipping: request.shipping,
    };
    products.push(newProduct);

    return newId;
  }

  updateProduct(id: number, request: CreateProductRequest) {
    const productToChange = this.getProductById(id);
    productToChange.name = request.name;
  }

  deleteProduct(id: number) {
    products = products.filter((product) => product.id !== id);
  }

  changeProductCount(id: number, description: string) {
    const productToChange = this.getProductById(id);
    productToChange.description = description;
  }
}
