import { Inject, Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories.repository';
import {
  CATEGORIES_REPOSITORY_TOKEN,
  EXPERIENCES_REPOSITORY_TOKEN,
} from '@src/experiences/utils/constants.const';
import { ProductsRepository } from '../repositories/products.repository';
import { AvailabilityOptionsFilterDto } from '../dto/availability-options-filter.dto';

@Injectable()
export class ExperiencesService {
  constructor(
    @Inject(EXPERIENCES_REPOSITORY_TOKEN)
    private readonly experiencesRepository: ProductsRepository,
    @Inject(CATEGORIES_REPOSITORY_TOKEN)
    private readonly attractionCategories: CategoriesRepository,
  ) {}

  async getOverview(id: number) {
    const overview = await this.experiencesRepository.getOverview(id);
    return overview;
  }

  async getAvailability(
    id: number,
    availability: AvailabilityOptionsFilterDto,
  ) {
    return await this.experiencesRepository.getAvailability(id, availability);
  }
}
