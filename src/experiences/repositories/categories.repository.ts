import { EntityManager } from 'typeorm';
import { ICategoriesRepository } from '../interfaces/categories.interface';
import { Injectable } from '@nestjs/common';
import { CategoriesEntity } from '../entities/categories.entity';

@Injectable()
export class CategoriesRepository implements ICategoriesRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async findOne(categoryId: number): Promise<CategoriesEntity> {
    return null;
  }
}
