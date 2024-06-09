import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from '../product/product.module';
import { OrderSchema,Order } from './Schema/orders.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Order.name,schema:OrderSchema}]),ProductModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
