import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createItemDto: CreateItemDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.itemsService.create(createItemDto, file);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}
