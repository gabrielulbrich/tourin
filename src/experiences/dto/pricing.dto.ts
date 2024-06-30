import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TICKET_CATEGORIES } from '@src/experiences/utils/enum';

export class PricingDto {
  @ApiPropertyOptional()
  id!: number;

  @ApiProperty()
  code: number;

  @ApiProperty({ enum: TICKET_CATEGORIES })
  ticketCategory: TICKET_CATEGORIES;

  @ApiProperty()
  commissionRate: number;

  @ApiProperty()
  price?: number;

  @ApiProperty()
  currencyIso: string;

  @ApiProperty()
  currencySymbol: string;

  @ApiProperty()
  ageFrom: number;

  @ApiProperty()
  ageTo: number;

  @ApiProperty()
  participantsType: string;
}
