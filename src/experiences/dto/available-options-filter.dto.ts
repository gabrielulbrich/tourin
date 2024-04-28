import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

export class AvailableOptionsFilterDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  language: number;

  @ApiProperty()
  participants: string[];

  @ApiProperty()
  categories: string[];
}
