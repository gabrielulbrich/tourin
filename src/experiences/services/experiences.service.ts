import { Inject, Injectable } from '@nestjs/common';
import { CreateExperienceDto } from '../dto/create-experience.dto';
import { UpdateExperienceDto } from '../dto/update-experience.dto';
import { CategoriesRepository } from '../repositories/categories.repository';
import { CATEGORIES_REPOSITORY_TOKEN } from 'src/shared/utils/constants.const';

@Injectable()
export class ExperiencesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY_TOKEN)
    private readonly attractionCategories: CategoriesRepository,
  ) {}
  create(createAttractionDto: CreateExperienceDto) {
    return 'This action adds a new attraction';
  }

  findAll() {
    return `This action returns all attractions`;
  }

  findOne(categoryId: number) {
    return this.attractionCategories.findOne(categoryId);
  }

  update(id: number, updateAttractionDto: UpdateExperienceDto) {
    return `This action updates a #${id} attraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} attraction`;
  }
}
