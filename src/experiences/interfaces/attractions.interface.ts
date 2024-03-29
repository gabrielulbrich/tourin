import { ExperiencesEntity } from '../entities/experiences.entity';

export interface IAttractionsRepository {
  getAttractionsByCategory(categoryId: number): Promise<ExperiencesEntity>;
}
