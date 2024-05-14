import { ApiProperty } from '@nestjs/swagger';
import { LanguagesDto } from '@src/experiences/dto/languages.dto';
import { AvailabilityDto } from '@src/experiences/dto/availability.dto';
import { CancellationDto } from '@src/experiences/dto/cancellation.dto';
import { AttributesDto } from '@src/experiences/dto/attributes.dto';
import { TimeSlotsDto } from '@src/experiences/dto/time-slots.dto';

export class ScheduleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  weekday: string;

  @ApiProperty()
  date: Date;

  @ApiProperty({ type: () => TimeSlotsDto })
  timeSlots: TimeSlotsDto[];
}
