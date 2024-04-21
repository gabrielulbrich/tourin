import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

export class AvailabilityOptionsFilterDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  language: number;

  @ApiProperty()
  participants: string[];

  @ApiProperty()
  category: string[];
}
