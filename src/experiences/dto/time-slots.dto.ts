import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TimeSlotsDto {
  @ApiPropertyOptional()
  id!: number;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  availabilityType: string;

  @ApiProperty()
  unformattedStartTime: string;

  @ApiProperty()
  unformattedEndTime: string;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  vacancies: number;
}
