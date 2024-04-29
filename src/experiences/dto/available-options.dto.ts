import { ApiProperty } from '@nestjs/swagger';
import { OptionsDto } from '@src/experiences/dto/options.dto';

export class AvailableOptionsDto {
  @ApiProperty()
  productId: number;

  @ApiProperty({ type: [OptionsDto] })
  options: OptionsDto[];
}
