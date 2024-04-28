import { ApiProperty } from '@nestjs/swagger';

export class AttributesDto {
  @ApiProperty()
  type: string;

  @ApiProperty()
  label: string;
}
