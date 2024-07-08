import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';


export class CreateArticleDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ type: [Number] })
  categories: [];

  @ApiProperty({ type: [Number] })
  tags: [];
}
