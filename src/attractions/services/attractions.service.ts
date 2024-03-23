import { Inject, Injectable } from '@nestjs/common';
import { CreateAttractionDto } from '../dto/create-attraction.dto';
import { UpdateAttractionDto } from '../dto/update-attraction.dto';
import { AttractionCategoriesRepository } from '../repositories/attraction-categories.repository';
import { ATTRACTION_CATEGORIES_REPOSITORY_TOKEN } from 'src/shared/utils/constants.const';

@Injectable()
export class AttractionsService {
  constructor(
    @Inject(ATTRACTION_CATEGORIES_REPOSITORY_TOKEN)
    private readonly attractionCategories: AttractionCategoriesRepository
  ) {}
  create(createAttractionDto: CreateAttractionDto) {
    return 'This action adds a new attraction';
  }

  findAll() {
    return `This action returns all attractions`;
  }

  findOne(categoryId: number) {
    return this.attractionCategories.findOne(categoryId);
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return `This action updates a #${id} attraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} attraction`;
  }
}
