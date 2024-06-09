import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDocument,Order } from './Schema/orders.schema';
import { InjectModel } from '@nestjs/mongoose';

import { ProductService } from '../product/product.service';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderMedel: Model<OrderDocument>,private productService : ProductService){}

  async create(createOrderDto: CreateOrderDto) : Promise<Order> {
    const productResult = await this.productService.findOne(createOrderDto.productId)

    if(!productResult){
      throw new NotFoundException('product not found');
    }

    const result = new this.orderMedel(createOrderDto);
    return result.save();
  }

  async findOne(id: string): Promise<Order> {
    const order = this.orderMedel.findById(id).populate('productId').exec()
    return order;
  }
}
