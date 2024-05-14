import { ArticleEntity } from '../entities/article.entity';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';
import { ArticleDto } from '@src/blog/dto/article.dto';

export interface IArticleRepository {
  create(create: CreateArticleDto): Promise<ArticleDto>;
  findOne(categoryId: number): Promise<ArticleDto>;
  findAll(): Promise<ArticleDto[]>;
  update(id: number, updateBlogDto: UpdateArticleDto);
  remove(id: number);
}
