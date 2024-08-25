import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';
import { File } from './file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { S3Buckets } from 'src/s3/s3-buckets.enum';
import { randomUUID } from 'crypto';
import { FindAllFilesQueryParamsDto } from './dto/find-all-query-params.dto';
import { Folder } from 'src/folders/folder.entity';
import { NotFoundError } from 'src/common/errors/not-found.error';
import { filessErrorObjects } from './files.errors';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
    private readonly s3Service: S3Service,
  ) {}

  async findAll(params?: FindAllFilesQueryParamsDto): Promise<File[]> {
    const files = await this.filesRepository.find({
      skip: params?.offset,
      take: params?.limit,
      where: {
        name: params?.query ? Like(`%${params.query}%`) : undefined,
        status: params?.status ?? undefined,
        folder: params?.folder_id ? { id: params.folder_id } : undefined,
      },
    });

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
    const file = await this.findOne(id);

    if (!file) throw new NotFoundError(filessErrorObjects.FILE_NOT_FOUND);

    await this.s3Service.deleteObjectInBucketWithKey(
      S3Buckets.FILES,
      file.storage_key,
    );

    await this.filesRepository.delete(id);
  }
}
