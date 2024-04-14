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

  create(createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
    return this.blogRepository.create(createArticleDto);
  }

  findAll(): Promise<ArticleEntity[]> {
    return this.blogRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateArticleDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
