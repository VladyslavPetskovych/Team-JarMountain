import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Item } from 'src/items/entities/item.entity';

export type OrderDocument = HydratedDocument<Order>;

type OrderStatus =
  | 'NewOrder'
  | 'Registered'
  | 'Granted'
  | 'Shipped'
  | 'Invoiced'
  | 'Cancelled';

@Schema()
export class Order {
  @Prop({ required: true })
  phone: string;

  @Prop()
  date: Date;

  @Prop({ default: 'NewOrder' })
  status: OrderStatus;

  @Prop({
    type: [
      {
        count: { type: Number },
        item: { type: mongoose.Schema.Types.ObjectId, ref: Item.name },
      },
    ],
    required: true,
    _id: false,
  })
  items: { count: number; item: Item }[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
