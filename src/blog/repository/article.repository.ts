import { EntityManager } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../interfaces/article.interface';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { CreateArticleDto } from '@src/blog/dto/create-article.dto';
import { ArticleDto } from '@src/blog/dto/article.dto';
import { UpdateArticleDto } from '@src/blog/dto/update-article.dto';
import { plainToClass } from 'class-transformer';
import { CategoriesEntity } from '@src/blog/entities/categories.entity';
import { AuthorEntity } from '@src/blog/entities/author.entity';
import { TagsEntity } from '@src/blog/entities/tags.entity';

@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async create(create: CreateArticleDto): Promise<ArticleDto> {
    const articleEntity = await this.entityManager.save(ArticleEntity, {
      title: create.title,
      text: create.text,
      summary: create.summary,
      content: create.content,
      author: { id: create.authorId },
      categories: create.categories.map((category) => ({ id: category })),
    });
    if (!articleEntity) {
      throw new Error('Article not created');
    }
    return this.findOne(articleEntity.id);
  }

  async findOne(id: number): Promise<ArticleDto> {
    const articleEntity = await this.entityManager.findOne(ArticleEntity, {
      where: { id },
      relations: ['author', 'categories', 'tags'],
    });

    if (!articleEntity) {
      return null;
    }

    return plainToClass(ArticleDto, articleEntity);
  }

  async findAll(): Promise<ArticleDto[]> {
    const articleEntity = await this.entityManager.find(ArticleEntity, {
      relations: ['author', 'categories', 'tags'],
    });

    if (!articleEntity) {
      throw new Error('No articles found');
    }

    return articleEntity.map((article) => plainToClass(ArticleDto, article));
  }

  async update(id: number, updateBlog: UpdateArticleDto): Promise<ArticleDto> {
    const articleEntity = await this.entityManager.findOne(ArticleEntity, {
      where: { id },
    });
    console.log(articleEntity);
    if (!articleEntity) {
      throw new HttpException(`Article with id ${id} not found`, 404);
    }
    if (updateBlog.authorId) {
      const author = await this.entityManager.findOne(AuthorEntity, {
        where: { id: updateBlog.authorId },
      });
      if (!author) {
        throw new HttpException(
          `Author with id ${updateBlog.authorId} not found`,
          404,
        );
      }
      articleEntity.author = author;
    }
    if (updateBlog.categories) {
      const categoryPromises = updateBlog.categories.map((categoryId) =>
        this.entityManager.findOne(CategoriesEntity, {
          where: { id: categoryId },
        }),
      );

      const categories = await Promise.all(categoryPromises);

      const notFoundCategoryId = categories.findIndex((category) => !category);
      if (notFoundCategoryId !== -1) {
        throw new HttpException(
          `Category with id ${updateBlog.categories[notFoundCategoryId]} not found`,
          404,
        );
      }

      articleEntity.categories = categories;
    }
    if (updateBlog.tags){
      const tagPromises = updateBlog.tags.map((tagId) =>
        this.entityManager.findOne(TagsEntity, {
          where: { id: tagId },
        }),
      );
      const tags = await Promise.all(tagPromises);

      const notFoundTagId = tags.findIndex((tag) => !tag);
      if (notFoundTagId !== -1) {
        throw new HttpException(
          `Tag with id ${updateBlog.tags[notFoundTagId]} not found`,
          404,
        );
      }
      articleEntity.tags = tags;
    }

    await this.entityManager.save(ArticleEntity, articleEntity);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.entityManager.delete(ArticleEntity, id);
  }
}
