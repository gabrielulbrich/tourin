import { PriceBreakdownDto } from '@src/experiences/dto/price-breakdown.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PriceDto } from '@src/experiences/dto/price.dto';

export class AvailabilityDto {
  @ApiProperty()
  vacancies: number;

  @ApiProperty()
  availabilityType: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  unformattedStartTime: string;

  @ApiProperty()
  unformattedEndTime: string;

  @ApiProperty({ type: [PriceBreakdownDto] })
  priceBreakdown: PriceBreakdownDto[];

  @ApiProperty({ type: PriceDto })
  price: PriceDto;
}
