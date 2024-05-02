import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IArticleRepository } from '../interfaces/article.interface';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';

@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async create(create: CreateArticleDto): Promise<ArticleEntity> {
    return this.entityManager.save(ArticleEntity, {
      title: create.title,
      text: create.text,
      summary: create.summary,
      content: create.content,
      authorId: create.authorId,
      categoriesId: create.categoriesId,
      //perguntar se é pra colocar atributos de tags
    });
  }

  async findOne(id: number): Promise<ArticleEntity> {
    return await this.entityManager.findOne(ArticleEntity, {
      where: { id },
      relations: ['author', 'categories'],
    });
  }

  async findAll(): Promise<ArticleEntity[]> {
    return await this.entityManager.find(ArticleEntity, {
      select: {
        id: true,
        title: true,
        text: true,
        authorId: true,
        categoriesId: true,
      },
    });
  }
  async update(id: number, update: CreateArticleDto): Promise<ArticleEntity> {
    await this.entityManager.update(ArticleEntity, id, update);
    return this.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.entityManager.delete(ArticleEntity, id);
  }
}
