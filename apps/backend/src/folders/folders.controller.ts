import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Get()
  findAll() {
    return this.foldersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foldersService.findOne(id);
  }

  @Post()
  create(@Body() folderDto: CreateFolderDto) {
    return this.foldersService.create(folderDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() folderDto: UpdateFolderDto) {
    return this.foldersService.update(id, folderDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.foldersService.delete(id);
  }
}
