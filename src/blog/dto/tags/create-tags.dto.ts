import { ApiProperty } from '@nestjs/swagger';

export class CreateTagsDto {
  @ApiProperty()
  tag: string;
}
