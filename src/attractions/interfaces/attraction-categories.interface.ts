import { AttractionCategoriesEntity } from "../entities/attraction_categories.entity";

export interface IAttractionCategoriesRepository {
  findOne(categoryId: number): Promise<AttractionCategoriesEntity>;
}
