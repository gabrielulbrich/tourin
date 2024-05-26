import { ApiProperty } from '@nestjs/swagger';

export class PriceBreakdownDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  totalParticipants: number;

  @ApiProperty()
  participantsCategoryIdentifier: string;

  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  pricePerPerson: number;

  @ApiProperty()
  currencySymbol: string;

  @ApiProperty()
  currencyIso: string;
}
