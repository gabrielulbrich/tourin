import { ApiProperty } from '@nestjs/swagger';
import { AuthorDto } from '@src/blog/dto/author.dto';
import { CategoriesDto } from '@src/blog/dto/categories.dto';

export class ArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: number;

  @ApiProperty({ type: AuthorDto })
  author: AuthorDto;

  @ApiProperty({ type: [CategoriesDto] })
  categories: CategoriesDto[];
}
