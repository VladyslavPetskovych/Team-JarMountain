import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Item {
  @IsString()
  @IsNotEmpty()
  item: string;

  @IsNumber()
  @IsNotEmpty()
  count: number;
}

export class CreateOrderDto {
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Item)
  items: Item[];
}
