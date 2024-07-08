import { ApiProperty } from '@nestjs/swagger';

export class TagsDto {
  @ApiProperty()
  tag: string;
}
