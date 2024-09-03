import { ApiProperty } from '@nestjs/swagger';
import { AuthorDto } from '@src/blog/dto/author/author.dto';
import { CategoriesDto } from '@src/blog/dto/category/categories.dto';
import { TagsDto } from '@src/blog/dto/tags/tags.dto';

export class ArticleDto {
  @ApiProperty()
  id: number;

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

  @ApiProperty({ type: [TagsDto] })
  tags: TagsDto[];
}
