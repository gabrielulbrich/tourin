import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IExperienceRepository } from '../interfaces/experiences.interface';
import { ExperiencesEntity } from '../entities/experiences.entity';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { AvailabilityOptionsFilterDto } from '../dto/availability-options-filter.dto';

@Injectable()
export class ExperiencesRepository implements IExperienceRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async getOverview(id: number): Promise<ExperiencesEntity> {
    return await this.entityManager.findOne(ExperiencesEntity, {
      where: {
        id: id,
      },
      relations: {
        images: true,
        category: true,
        options: {
          schedule: {
            timeSlots: true,
          },
          pricing: {
            pricingCategories: true,
          },
        },
      },
    });
  }

  async getAvailability(
    id: number,
    availability: AvailabilityOptionsFilterDto,
  ): Promise<AvailabilitiesEntity> {
    return await this.entityManager.findOne(AvailabilitiesEntity, {
      where: {
        id: id,
      },
    });
  }

  getAttractionsByCategory(categoryId: number): Promise<ExperiencesEntity> {
    return Promise.resolve(undefined);
  }
}
