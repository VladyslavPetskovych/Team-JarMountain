import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumberString()
  @IsNotEmpty()
  readonly price: number;
}
