import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { resolve } from 'path';

@Controller('image')
export class ImageController {
  @Get(':id')
  findOne(@Param('id') id: string, @Res() response: Response) {
    response.sendFile(resolve('images', id + '.jpg'));
  }
}
