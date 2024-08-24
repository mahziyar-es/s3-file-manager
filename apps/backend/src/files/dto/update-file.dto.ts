import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FileStatus } from '../files.entity';

export class UpdateFileDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(FileStatus)
  @IsOptional()
  status?: FileStatus;
}
