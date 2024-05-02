import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;
  @ApiProperty()
  text: string;
  @ApiProperty()
  authorId: number;
  @ApiProperty()
  categoriesId: number;
  @ApiProperty()
  summary: string;
  @ApiProperty()
  content: string;
}
