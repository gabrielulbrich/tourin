import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '@src/blog/interfaces/article.interface';
import { ARTICLE_REPOSITORY_TOKEN } from '@src/blog/utils/constants.const';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';
import { ArticleEntity } from '@src/blog/entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @Inject(ARTICLE_REPOSITORY_TOKEN)
    private readonly blogRepository: IArticleRepository,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
    return await this.blogRepository.create(createArticleDto);
  }

  async findAll(): Promise<ArticleEntity[]> {
    const article = await this.blogRepository.findAll();
    article[0].title = 'Hello';
    return article;
  }

  async findOne(id: number): Promise<ArticleEntity> {
    const article = await this.blogRepository.findOne(id);
    if (!article) {
      throw new Error(`Article with id ${id} not found`);
    }
    return article;
  }

  async update(id: number, updateBlogDto: UpdateArticleDto) {
    const article = await this.blogRepository.update(id, updateBlogDto);
    return article;
    //return `This action updates a #${id} blog`;
  }

  async remove(id: number) {
    const article = await this.blogRepository.remove(id);
    return `This action removes a #${id} blog`;
  }
}
