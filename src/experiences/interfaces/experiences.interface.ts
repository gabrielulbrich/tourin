import { ExperiencesEntity } from '../entities/experiences.entity';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { AvailabilityOptionsFilterDto } from '../dto/availability-options-filter.dto';

export interface IExperienceRepository {
  getOverview(id: number): Promise<ExperiencesEntity>;
  getAvailability(
    id: number,
    availability: AvailabilityOptionsFilterDto,
  ): Promise<AvailabilitiesEntity>;
  getAttractionsByCategory(categoryId: number): Promise<ExperiencesEntity>;
}
