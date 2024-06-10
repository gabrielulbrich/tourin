import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IExperienceRepository } from '../interfaces/experiences.interface';
import { ProductsEntity } from '../entities/products.entity';
import { AvailableOptionsInputDto } from '../dto/available-options/available-options-input.dto';
import { OptionsEntity } from '@src/experiences/entities/options.entity';
import { OptionsDto } from '@src/experiences/dto/options.dto';
import { plainToInstance } from 'class-transformer';

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
          languages: true,
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
  ): Promise<OptionsDto[]> {
    const optionsEntity = await this.entityManager.find(OptionsEntity, {
      where: {
        id: id,
      },
      relations: {
        pricing: true,
        languages: true,
        availability: {
          schedule: {
            timeSlots: true,
          },
        },
      },
    });

    return plainToInstance(OptionsDto, optionsEntity);
  }

  getAttractionsByCategory(categoryId: number): Promise<ProductsEntity> {
    return Promise.resolve(undefined);
  }
}
