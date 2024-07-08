import { ApiProperty } from '@nestjs/swagger';

export class CategoriesDto {
  @ApiProperty()
  category: string;
}
