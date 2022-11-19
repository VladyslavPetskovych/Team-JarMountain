import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  @IsNotEmpty()
  @IsIn([
    'NewOrder',
    'Registered',
    'Granted',
    'Shipped',
    'Invoiced',
    'Cancelled',
  ])
  status: string;
}
