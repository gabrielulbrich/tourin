import { ApiProperty } from '@nestjs/swagger';
import { LanguagesDto } from '@src/experiences/dto/languages.dto';
import { AvailabilityDto } from '@src/experiences/dto/availability.dto';
import { CancellationDto } from '@src/experiences/dto/cancellation.dto';
import { AttributesDto } from '@src/experiences/dto/attributes.dto';
import { ScheduleDto } from '@src/experiences/dto/schedule.dto';
import { PricingDto } from '@src/experiences/dto/pricing.dto';

export class OptionsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  duration: {
    unit: 'minutes' | 'hours' | 'days';
    value: number;
  };

  @ApiProperty()
  code: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  isPrivate: boolean;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  validity: {
    from: 'time_booked' | 'time_selected' | 'time_activated';
    unit: 'minutes' | 'hours' | 'days';
    value: number;
  };

  @ApiProperty()
  cutOff: string;

  @ApiProperty()
  whereToMeet: string;

  @ApiProperty({ type: [LanguagesDto] })
  languages: LanguagesDto[];

  @ApiProperty({ type: AvailabilityDto })
  availability: AvailabilityDto;

  @ApiProperty({ type: CancellationDto })
  cancellation: CancellationDto;

  @ApiProperty()
  attributes: AttributesDto[];

  @ApiProperty()
  pricing: PricingDto[];
}
