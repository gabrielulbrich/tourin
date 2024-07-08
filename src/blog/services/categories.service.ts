import { Inject, Injectable } from '@nestjs/common';
import { CATEGORIES_REPOSITORY_TOKEN } from '@src/blog/utils/constants.const';
import { ICategoriesRepository } from '@src/blog/interfaces/categories.interface';
import { CategoriesDto } from '@src/blog/dto/category/categories.dto';
import { CreateCategoriesDto } from '@src/blog/dto/category/create-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORIES_REPOSITORY_TOKEN)
    private readonly categoriesRepository: ICategoriesRepository,
  ) {}

  async create(
    createCategoriesDto: CreateCategoriesDto,
  ): Promise<CategoriesDto> {
    return await this.categoriesRepository.create(createCategoriesDto);
  }
  async findOne(id: number): Promise<CategoriesDto> {
    return await this.categoriesRepository.findOne(id);
  }
  async findAll(): Promise<CategoriesDto[]> {
    return await this.categoriesRepository.findAll();
  }
}
