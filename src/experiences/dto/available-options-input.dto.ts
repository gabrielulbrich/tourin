import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class AvailableOptionsInputDto {
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  date: Date;

  @ApiProperty()
  language: number;

  @ApiProperty()
  participants: string[];

  @ApiProperty()
  categories: string[];
}
