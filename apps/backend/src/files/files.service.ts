import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';
import { File } from './files.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { S3Buckets } from 'src/s3/s3-buckets.enum';
import { randomUUID } from 'crypto';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
    private readonly s3Service: S3Service,
  ) {}

  async findAll(): Promise<File[]> {
    const files = await this.filesRepository.find();

    return files;
  }

  async findOne(id: number): Promise<File> {
    const file = await this.filesRepository.findOne({ where: { id } });

    return file;
  }

  async create(
    fileDto: CreateFileDto,
  ): Promise<{ file: File; upload_presigned_url: string }> {
    const fileStorageKey = randomUUID();

    const file = await this.filesRepository.save({
      ...fileDto,
      storage_key: fileStorageKey,
    });

    const uploadPresignedUrl = await this.s3Service.getPresignUrlForUpload(
      S3Buckets.FILES,
      fileStorageKey,
    );

    return {
      file,
      upload_presigned_url: uploadPresignedUrl,
    };
  }

  async update(id: number, fileDto: UpdateFileDto): Promise<void> {
    await this.filesRepository.update(id, fileDto);
  }

  async delete(id: number): Promise<void> {
    await this.filesRepository.delete(id);
  }
}
