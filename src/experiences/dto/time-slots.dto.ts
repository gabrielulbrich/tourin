import { ApiProperty } from '@nestjs/swagger';

export class TimeSlotsDto {
  @ApiProperty()
  from: string;

  @ApiProperty()
  to: string;

  @ApiProperty()
  availabilityType?: string;

  @ApiProperty()
  unformattedStartTime?: string;

  @ApiProperty()
  unformattedEndTime?: string;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  vacancies: number;
}
