import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IExperienceRepository } from '../interfaces/experiences.interface';
import { ProductsEntity } from '../entities/products.entity';
import { AvailableOptionsInputDto } from '../dto/available-options-input.dto';
import { OptionsEntity } from '@src/experiences/entities/options.entity';

@Injectable()
export class ProductsRepository implements IExperienceRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async getOverview(id: number): Promise<ProductsEntity> {
    return await this.entityManager.findOne(ProductsEntity, {
      where: {
        id: id,
      },
      relations: {
        images: true,
        keywords: true,
        options: {
          languagesOptions: {
            language: true,
          },
          availability: {
            schedule: {
              timeSlots: true,
            },
          },
          pricing: true,
        },
      },
    });
  }

  async getOptions(
    id: number,
    options: AvailableOptionsInputDto,
  ): Promise<OptionsEntity[]> {
    return await this.entityManager.find(OptionsEntity, {
      where: {
        id: id,
      },
      relations: {
        pricing: true,
        languagesOptions: {
          language: true,
        },
        availability: true,
        schedule: {
          timeSlots: true,
        },
      },
    });
  }

  getAttractionsByCategory(categoryId: number): Promise<ProductsEntity> {
    return Promise.resolve(undefined);
  }
}
