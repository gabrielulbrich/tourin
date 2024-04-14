import { ProductsEntity } from '../entities/products.entity';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { AvailabilityOptionsFilterDto } from '../dto/availability-options-filter.dto';

export interface IExperienceRepository {
  getOverview(id: number): Promise<ProductsEntity>;
  getAvailability(
    id: number,
    availability: AvailabilityOptionsFilterDto,
  ): Promise<AvailabilitiesEntity>;
  getAttractionsByCategory(categoryId: number): Promise<ProductsEntity>;
}
