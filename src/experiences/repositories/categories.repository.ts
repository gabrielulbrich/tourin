import { EntityManager } from 'typeorm';
import { ICategoriesRepository } from '../interfaces/categories.interface';
import { Injectable } from '@nestjs/common';
import { KeywordsEntity } from '../entities/keywords.entity';

@Injectable()
export class CategoriesRepository implements ICategoriesRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async findOne(categoryId: number): Promise<KeywordsEntity> {
    return null;
  }
}
