import { PriceBreakdownDto } from '@src/experiences/dto/price-breakdown.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PricingDto } from '@src/experiences/dto/pricing.dto';
import { ScheduleDto } from '@src/experiences/dto/schedule.dto';

export class AvailabilityDto {
  @ApiPropertyOptional()
  id!: number;

  @ApiProperty()
  type: 'opening_hours' | 'starting_times';

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty({ type: [ScheduleDto] })
  schedule: ScheduleDto[];
}
