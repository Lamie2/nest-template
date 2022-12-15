import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Product {
    console.log(`GET product with id ${id}`);
    return this.productService.getProductById(+id);
  }

  @Post()
  createProduct(@Body() request: CreateProductRequest): number {
    return this.productService.createProduct(request);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() request: CreateProductRequest,
  ) {
    this.productService.updateProduct(+id, request);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productService.deleteProduct(+id);
  }
}
