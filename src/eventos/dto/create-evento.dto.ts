/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsDateString, IsBoolean, IsOptional } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsDateString()
  date!: string;

  @IsString()
  location!: string;

  @IsBoolean()
  @IsOptional()
  iscompleted?: boolean;
}
