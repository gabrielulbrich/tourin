import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PricingDto {
  @ApiPropertyOptional()
  id!: number;

  @ApiProperty()
  code: number;

  @ApiProperty()
  ticketCategory: string;

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
