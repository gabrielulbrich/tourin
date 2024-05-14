import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IArticleRepository } from '../interfaces/article.interface';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { ArticleDto } from '@src/blog/dto/article.dto';

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
    const articleEntity = await this.entityManager.find(ArticleEntity);
    return articleEntity.map((article) => article.toDto());
  }

  async update(id: number, update: CreateArticleDto): Promise<ArticleDto> {
    await this.entityManager.update(ArticleEntity, id, update);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.entityManager.delete(ArticleEntity, id);
  }
}
