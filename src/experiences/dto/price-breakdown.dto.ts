import { ApiProperty } from '@nestjs/swagger';

export class PriceBreakdownDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  totalParticipants: number;

  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  pricePerPerson: number;

  @ApiProperty()
  priceLabel: string;

  @ApiProperty()
  pricingCategoryCode: number;
}
