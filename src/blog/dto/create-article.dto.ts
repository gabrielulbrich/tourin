import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CategoriesDto } from '@src/blog/dto/categories.dto';
import { AuthorDto } from '@src/blog/dto/author.dto';

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

  @ApiProperty({ type: [AuthorDto] })
  author: AuthorDto;

  @ApiProperty({ type: [CategoriesDto] })
  categories: CategoriesDto[];
}
