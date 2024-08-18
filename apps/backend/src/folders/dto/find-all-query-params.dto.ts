import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class FindAllQueryParamsDto {
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
}
