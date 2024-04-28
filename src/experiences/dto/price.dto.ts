import { ApiProperty } from '@nestjs/swagger';

export class PriceDto {
  @ApiProperty()
  basePrice: number;

  @ApiProperty()
  formattedBasePrice: string;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  currencySymbol: string;
}
