import { ApiProperty } from '@nestjs/swagger';
import { AvailableOptionsOptionsDto } from '@src/experiences/dto/available-options/available-options-options.dto';

export class AvailableOptionsDto {
  @ApiProperty()
  productId: number;

  @ApiProperty({ type: [AvailableOptionsOptionsDto] })
  options: AvailableOptionsOptionsDto[];
}
