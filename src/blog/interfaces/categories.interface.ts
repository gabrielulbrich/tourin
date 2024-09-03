import { CategoriesDto } from '@src/blog/dto/category/categories.dto';
import { CreateCategoriesDto } from '@src/blog/dto/category/create-categories.dto';


export interface ICategoriesRepository {
  findOne(id: number): Promise<CategoriesDto>;
  create(createCategoryDto: CreateCategoriesDto): Promise<CategoriesDto>;
  findAll(): Promise<CategoriesDto[]>;
}