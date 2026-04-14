/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsDateString, IsBoolean, IsOptional } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  date!: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsBoolean()
  @IsOptional()
  iscompleted?: boolean;
}
