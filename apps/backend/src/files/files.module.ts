import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { File } from './files.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesController } from './files.controller';
import { S3Module } from 'src/s3/s3.module';

@Module({
  imports: [TypeOrmModule.forFeature([File]), S3Module],
  controllers: [FilesController],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModules {}
