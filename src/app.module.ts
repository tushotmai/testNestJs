import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestjs_tutorail'),ProductModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
