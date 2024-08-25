import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { UpdateFileDto } from './dto/update-file.dto';
import { CreateFileDto } from './dto/create-file.dto';
import { File } from './file.entity';
import { FindAllFilesQueryParamsDto } from './dto/find-all-query-params.dto';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  findAll(@Query() queryParams: FindAllFilesQueryParamsDto): Promise<File[]> {
    return this.filesService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<File> {
    return this.filesService.findOne(id);
  }

  @Post()
  create(
    @Body() folderDto: CreateFileDto,
  ): Promise<{ file: File; upload_presigned_url: string }> {
    return this.filesService.create(folderDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() folderDto: UpdateFileDto,
  ): Promise<void> {
    return this.filesService.update(id, folderDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.filesService.delete(id);
  }
}
