import { ExperiencesEntity } from '../entities/experiences.entity';

export interface IExperienceRepository {
  getOverview(id: number): Promise<ExperiencesEntity>;
  getAttractionsByCategory(categoryId: number): Promise<ExperiencesEntity>;
}
