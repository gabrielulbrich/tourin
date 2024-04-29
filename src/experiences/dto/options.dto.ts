import { ApiProperty } from '@nestjs/swagger';
import { LanguagesDto } from '@src/experiences/dto/languages.dto';
import { AvailabilityDto } from '@src/experiences/dto/availability.dto';
import { CancellationDto } from '@src/experiences/dto/cancellation.dto';
import { AttributesDto } from '@src/experiences/dto/attributes.dto';

export class OptionsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  isAvailable: boolean;

  @ApiProperty()
  nextAvailableDate: Date;

  @ApiProperty()
  unavailabilityReason: string;

  @ApiProperty({ type: [LanguagesDto] })
  languages: LanguagesDto[];

  @ApiProperty({ type: [AvailabilityDto] })
  availabilities: AvailabilityDto[];

  @ApiProperty({ type: CancellationDto })
  cancellation: CancellationDto;

  @ApiProperty()
  attributes: AttributesDto[];
}
