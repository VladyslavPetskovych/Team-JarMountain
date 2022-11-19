import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
// import path from 'path';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async create(createItemDto: CreateItemDto, file: Express.Multer.File) {
    const item = new this.itemModel(createItemDto);
    // const paths = path.join('images', item._id.toString() + '.jpg');
    const paths = join('images', item._id.toString() + '.jpg');
    await writeFile(paths, file.buffer);
    return item.save();
  }

  async findAll() {
    return this.itemModel.find().exec();
  }
}
