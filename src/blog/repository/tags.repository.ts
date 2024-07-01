import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { CreateTagsDto } from '@src/blog/dto/tags/create-tags.dto';
import { ITagsRepository } from '@src/blog/interfaces/tags.interface';
import { TagsDto } from '@src/blog/dto/tags/tags.dto';
import { TagsEntity } from '@src/blog/entities/tags.entity';
import { plainToClass } from 'class-transformer';
import { TagsService } from '@src/blog/services/tags.service';
import { ArticleEntity } from '@src/blog/entities/article.entity';

@Injectable()
export class TagsRepository implements ITagsRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createTagsDto: CreateTagsDto): Promise<TagsDto> {
    const tagsEntity = await this.entityManager.save(TagsEntity, createTagsDto);
    return plainToClass(TagsDto, tagsEntity);
  }
  async findOne(id: number): Promise<TagsDto> {
    const tagsEntity = await this.entityManager.findOne(TagsEntity, {
      where: { id },
    });

    if (!tagsEntity) {
      return null;
    }

    return plainToClass(TagsDto, tagsEntity);
  }
  async findAll(): Promise<TagsDto[]> {
    const tagsEntity = await this.entityManager.find(TagsEntity);

    if (!tagsEntity) {
      throw new Error('No tags found');
    }

    return tagsEntity.map((tags) => plainToClass(TagsDto, tags));
  }

  async createArticleTags(articleId: number, tags: number[]) {
    const article = await this.entityManager.findOne(ArticleEntity, {
      where: { id: articleId },
    });
    const tagsEntity: TagsEntity[] = [];
    for (const tag of tags) {
      tagsEntity.push(
        await this.entityManager.findOne(TagsEntity, {
          where: { id: tag },
        }),
      );
    }
    article.tags = tagsEntity;
    console.log(article, tagsEntity);
    await this.entityManager.save(article);
  }
}
