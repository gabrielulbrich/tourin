import { KeywordsEntity } from '../entities/keywords.entity';

export interface ICategoriesRepository {
  findOne(categoryId: number): Promise<KeywordsEntity>;
}
