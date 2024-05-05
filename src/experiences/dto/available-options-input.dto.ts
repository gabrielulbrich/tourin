import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';

export class AvailableOptionsInputDto {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty()
  date: Date;

  @ApiProperty()
  language: number;

  @ApiProperty()
  participants: string[];

  @ApiProperty()
  categories: string[];
}
