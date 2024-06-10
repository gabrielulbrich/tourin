import { ApiProperty } from '@nestjs/swagger';
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
