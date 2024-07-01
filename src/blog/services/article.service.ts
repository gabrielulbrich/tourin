import { HttpException, Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '@src/blog/interfaces/article.interface';
import {
  ARTICLE_REPOSITORY_TOKEN,
  AUTHOR_REPOSITORY_TOKEN,
  TAGS_REPOSITORY_TOKEN,
} from '@src/blog/utils/constants.const';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';
import { ArticleDto } from '@src/blog/dto/article.dto';
import { IAuthorRepository } from '@src/blog/interfaces/author.interface';
import { AuthorEntity } from '@src/blog/entities/author.entity';
import { AuthorDto } from '@src/blog/dto/author/author.dto';
import { ITagsRepository } from '@src/blog/interfaces/tags.interface';



@Injectable()
export class ArticleService {
  constructor(
    @Inject(ARTICLE_REPOSITORY_TOKEN)
    private readonly blogRepository: IArticleRepository,
    @Inject(AUTHOR_REPOSITORY_TOKEN)
    private readonly authorRepository: IAuthorRepository,
    @Inject(TAGS_REPOSITORY_TOKEN)
    private readonly tagsRepository: ITagsRepository,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<ArticleDto> {
    const author = await this.authorRepository.findOne(
      createArticleDto.authorId,
    );
    if(!author){
      throw new HttpException(`Author ${createArticleDto.authorId} not found`, 404);
    }
    for (const tag of createArticleDto.tags) {
      const tags = await this.tagsRepository.findOne(tag);
      if(!tags){
        throw new HttpException(`Tags ${tag} not found`, 404);
      }
    }

    const article = await this.blogRepository.create(createArticleDto);
    await this.tagsRepository.createArticleTags(article.id, createArticleDto.tags);
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
    if (!Number.isInteger(id)) {
      throw new HttpException('Invalid input: id must be a number', 404);
    }
    const article = await this.blogRepository.findOne(id);
    if (!article) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    return article;
  }

  async update(id: number, updateBlogDto: UpdateArticleDto) {
    const author = await this.authorRepository.findOne(updateBlogDto.authorId);
    if (!author) {
      throw new HttpException(`Author with id ${updateBlogDto.authorId} not found`, 404);
    }
    const article = await this.blogRepository.update(id, updateBlogDto);
    if (!article) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    return article;
  }

  async remove(id: number): Promise<string> {
    const article = await this.blogRepository.findOne(id);

    if (!article) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    await this.blogRepository.remove(id);
    return `This action removes a #${id} blog`;
  }

}
