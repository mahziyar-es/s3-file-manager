import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { FileStatus } from '../file.entity';

export class FindAllFilesQueryParamsDto {
  @IsNumber()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  offset?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit?: number;

  @IsString()
  @IsOptional()
  query?: string;

  @IsOptional()
  @Type(() => Number)
  folder_id?: number;

  @IsEnum(FileStatus)
  @IsOptional()
  status?: FileStatus;
}
