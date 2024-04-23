import { ArticleEntity } from '../entities/article.entity';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';

export interface IArticleRepository {
  create(create: CreateArticleDto): Promise<ArticleEntity>;
  findAll(): Promise<ArticleEntity[]>;
  findOne(categoryId: number): Promise<ArticleEntity>;
  update(id: number, updateBlogDto: UpdateArticleDto);
  remove(id: number);
}
