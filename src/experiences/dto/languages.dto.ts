import { ApiProperty } from '@nestjs/swagger';

export class LanguagesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  isoCode: string;

  @ApiProperty()
  language: string;
}
