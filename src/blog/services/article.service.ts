import { HttpException, Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '@src/blog/interfaces/article.interface';
import { ARTICLE_REPOSITORY_TOKEN } from '@src/blog/utils/constants.const';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';
import { ArticleDto } from '@src/blog/dto/article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @Inject(ARTICLE_REPOSITORY_TOKEN)
    private readonly blogRepository: IArticleRepository,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<ArticleDto> {
    const article = await this.blogRepository.create(createArticleDto);

    if (!article) {
      throw new HttpException('Article not created', 404);
    }
    return article;
  }

  async findAll(): Promise<ArticleDto[]> {
    const article = await this.blogRepository.findAll();

    if (!article) {
      throw new HttpException('No articles found', 404);
    }
    return article;
  }

  async findOne(id: number): Promise<ArticleDto> {
    const article = await this.blogRepository.findOne(id);

    if (!article) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    return article;
  }

  async update(id: number, updateBlogDto: UpdateArticleDto) {
    return await this.blogRepository.update(id, updateBlogDto);
  }

  async remove(id: number): Promise<string> {
    const article = await this.blogRepository.findOne(id);
    if (!article) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    return `This action removes a #${id} blog`;
  }

}
