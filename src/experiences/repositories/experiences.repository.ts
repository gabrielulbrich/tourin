import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IExperienceRepository } from '../interfaces/experiences.interface';
import { ExperiencesEntity } from '../entities/experiences.entity';

@Injectable()
export class ExperiencesRepository implements IExperienceRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async getOverview(id: number): Promise<ExperiencesEntity> {
    return await this.entityManager.findOne(ExperiencesEntity, {
      where: {
        id: id,
      },
    });
  }

  getAttractionsByCategory(categoryId: number): Promise<ExperiencesEntity> {
    return Promise.resolve(undefined);
  }
}
