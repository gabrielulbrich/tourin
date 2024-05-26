import { ApiProperty, OmitType } from '@nestjs/swagger';
import { OptionsDto } from '@src/experiences/dto/options.dto';

export class AvailableOptionsOptionsDto extends OmitType(OptionsDto, [
  'duration',
  'code',
  'description',
  'isPrivate',
  'isActive',
  'validity',
  'cutOff',
  'whereToMeet',
  'availability',
  'pricing',
]) {
  @ApiProperty()
  duration: string;
}
