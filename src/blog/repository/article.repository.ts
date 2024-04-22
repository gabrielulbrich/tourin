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
    });
  }

  async findOne(id: number): Promise<ArticleEntity> {
    return await this.entityManager.findOne(ArticleEntity, { where: { id } });
  }

  async findAll(): Promise<ArticleEntity[]> {
    return await this.entityManager.find(ArticleEntity, {
      select: {
        title: true,
      },
    });
  }
}
