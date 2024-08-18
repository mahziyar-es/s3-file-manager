import { Like, QueryFailedError, Repository } from 'typeorm';
import { Folder } from './folder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { foldersErrorObjects } from './folders.errors';
import { ConflictError } from 'src/common/errors/conflict.error';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { FindAllQueryParamsDto } from './dto/find-all-query-params.dto';

export class FoldersService {
  constructor(
    @InjectRepository(Folder)
    private foldersRepository: Repository<Folder>,
  ) {}

  async findAll(params?: FindAllQueryParamsDto): Promise<Folder[]> {
    return await this.foldersRepository.find({
      skip: params?.offset,
      take: params?.limit,
      where: {
        name: params?.query ? Like(`%${params.query}%`) : undefined,
      },
    });
  }

  async findOne(id: number): Promise<Folder> {
    return await this.foldersRepository.findOne({
      where: { id },
    });
  }

  async create(folderDto: CreateFolderDto): Promise<Folder> {
    const folderEntity = this.foldersRepository.create(folderDto);

    try {
      return await this.foldersRepository.save(folderEntity);
    } catch (error: unknown) {
      this.folderMutationErrorHandler(error);
    }
  }

  async update(id: number, folderDto: UpdateFolderDto): Promise<void> {
    const folderEntity = this.foldersRepository.create(folderDto);

    try {
      await this.foldersRepository.update(id, folderEntity);
    } catch (error: unknown) {
      this.folderMutationErrorHandler(error);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.foldersRepository.delete(id);
    } catch (error: unknown) {
      this.folderMutationErrorHandler(error);
    }
  }

  private folderMutationErrorHandler(error: unknown): never {
    if (error instanceof QueryFailedError) {
      switch (error?.driverError?.constraint) {
        case Folder.CONSTRAINT_NAMES.NAME_UNIQUE_INDEX:
          throw new ConflictError(
            foldersErrorObjects.NAME_UNIQUE_CONSTRAINT_VIOLATION,
          );
      }
    }
    throw error;
  }
}
