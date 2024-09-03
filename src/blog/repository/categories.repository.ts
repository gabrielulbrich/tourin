import { HttpException, Injectable } from '@nestjs/common';
import { ICategoriesRepository } from '@src/blog/interfaces/categories.interface';
import { EntityManager } from 'typeorm';
import { CreateCategoriesDto } from '@src/blog/dto/category/create-categories.dto';
import { CategoriesDto } from '@src/blog/dto/category/categories.dto';
import { CategoriesEntity } from '@src/blog/entities/categories.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CategoriesRepository implements ICategoriesRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async create(
    createCategoriesDto: CreateCategoriesDto,
  ): Promise<CategoriesDto> {
    const categoriesEntity = await this.entityManager.save(
      CategoriesEntity,
      createCategoriesDto,
    );
    return plainToClass(CategoriesDto, categoriesEntity);
  }

  async findOne(id: number): Promise<CategoriesDto> {
    const categoriesEntity = await this.entityManager.findOne(
      CategoriesEntity,
      {
        where: { id },
      },
    );

    if (!categoriesEntity) {
      throw new HttpException(`No category '${id}' found`, 404);
    }

    return plainToClass(CategoriesDto, categoriesEntity);
  }

  async findAll(): Promise<CategoriesDto[]> {
    const categoriesEntity = await this.entityManager.find(CategoriesEntity);

    if (!categoriesEntity) {
      throw new Error('No categories found');
    }

    return categoriesEntity.map((categories) =>
      plainToClass(CategoriesDto, categories),
    );
  }
}
