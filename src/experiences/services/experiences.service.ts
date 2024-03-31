import { Inject, Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories.repository';
import {
  CATEGORIES_REPOSITORY_TOKEN,
  EXPERIENCES_REPOSITORY_TOKEN,
} from 'src/shared/utils/constants.const';
import { ExperiencesRepository } from '../repositories/experiences.repository';

@Injectable()
export class ExperiencesService {
  constructor(
    @Inject(EXPERIENCES_REPOSITORY_TOKEN)
    private readonly experiencesRepository: ExperiencesRepository,
    @Inject(CATEGORIES_REPOSITORY_TOKEN)
    private readonly attractionCategories: CategoriesRepository,
  ) {}

  async getOverview(id: number) {
    const overview = await this.experiencesRepository.getOverview(id);
    return overview;
  }
}
