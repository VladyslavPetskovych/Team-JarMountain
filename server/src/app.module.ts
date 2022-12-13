import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageModule } from './image/image.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DBNAME,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
    }),
    ItemsModule,
    ImageModule,
    OrdersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'build'),
      serveRoot: '/Team-JarMountain',
      exclude: ['api/*'],
    }),
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'items',
            module: ItemsModule,
          },
          {
            path: 'orders',
            module: OrdersModule,
          },
          {
            path: 'image',
            module: ImageModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
