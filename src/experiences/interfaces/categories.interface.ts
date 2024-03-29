import { CategoriesEntity } from '../entities/categories.entity';

export interface ICategoriesRepository {
  findOne(categoryId: number): Promise<CategoriesEntity>;
}
