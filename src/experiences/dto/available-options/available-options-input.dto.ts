import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { isArray, IsDate } from 'class-validator';
import { TICKET_CATEGORIES } from '@src/experiences/utils/enum';

export class AvailableOptionsInputDto {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @ApiProperty()
  date: Date;

  @ApiProperty()
  language: number;

  @ApiProperty()
  participants: string[];

  @ApiProperty({ enum: TICKET_CATEGORIES, isArray: true })
  @Transform(({ value }) => (isArray(value) ? value : [value]))
  ticketCategories: TICKET_CATEGORIES[];
}
