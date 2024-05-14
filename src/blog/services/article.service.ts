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
    return await this.blogRepository.create(createArticleDto);
  }

  async findAll(): Promise<ArticleDto[]> {
    return await this.blogRepository.findAll();
  }

  async findOne(id: number): Promise<ArticleDto> {
    const article = await this.blogRepository.findOne(id);
    if (!article) {
      throw new Error(`Article with id ${id} not found`);
    }
    return article;
  }

  async update(id: number, updateBlogDto: UpdateArticleDto) {
    const article = await this.blogRepository.findOne(id);

    if (!article) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }

    return await this.blogRepository.update(id, updateBlogDto);
  }

  async remove(id: number): Promise<string> {
    await this.blogRepository.remove(id);
    return `This action removes a #${id} blog`;
  }
}
