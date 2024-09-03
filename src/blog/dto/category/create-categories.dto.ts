import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @ApiProperty()
  category: string;
}
