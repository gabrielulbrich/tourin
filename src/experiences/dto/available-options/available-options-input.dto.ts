import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { isArray, IsDate } from 'class-validator';

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
  @Transform(({ value }) => (isArray(value) ? value : [value]))
  ticketCategories: string[];
}
