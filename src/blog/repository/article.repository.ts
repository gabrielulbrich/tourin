import { EntityManager } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../interfaces/article.interface';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { ArticleDto } from '@src/blog/dto/article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';

@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async create(create: CreateArticleDto): Promise<ArticleDto> {
    const articleEntity = await this.entityManager.save(ArticleEntity, {
      title: create.title,
      text: create.text,
      summary: create.summary,
      content: create.content,
      authorId: create.authorId,
      categoriesId: create.categoriesId,
    });
    if (!articleEntity) {
      throw new Error('Article not created');
    }
    return this.findOne(articleEntity.id);
  }

  async findOne(id: number): Promise<ArticleDto> {
    const articleEntity = await this.entityManager.findOne(ArticleEntity, {
      where: { id },
      relations: ['author', 'categories'],
    });

    if (!articleEntity) {
      return null;
    }

    return articleEntity.toDto();
  }

  async findAll(): Promise<ArticleDto[]> {
    const articleEntity = await this.entityManager.find(ArticleEntity,{
      relations: ['author', 'categories'],

    });

    if (!articleEntity) {
      throw new Error('No articles found');
    }

    return articleEntity.map((article) => article.toDto());
  }

  async update(
    id: number,
    updateBlog: UpdateArticleDto ,
  ): Promise<ArticleDto> {
    const articleEntity = await this.entityManager.findOne(ArticleEntity, {
      where: { id },
    });
    if (!articleEntity) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    await this.entityManager.save(updateBlog.toEntity(id));

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.entityManager.delete(ArticleEntity, id);
  }
}
