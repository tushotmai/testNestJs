import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product,ProductSchema } from './Schema/product.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[ProductService]
})
export class ProductModule {}