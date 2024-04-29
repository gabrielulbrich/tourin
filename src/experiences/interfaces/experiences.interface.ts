import { ProductsEntity } from '../entities/products.entity';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { AvailableOptionsFilterDto } from '../dto/available-options-filter.dto';
import { OptionsEntity } from '@src/experiences/entities/options.entity';

export interface IExperienceRepository {
  getOverview(id: number): Promise<ProductsEntity>;
  getOptions(
    id: number,
    options: AvailableOptionsFilterDto,
  ): Promise<OptionsEntity[]>;
  getAttractionsByCategory(categoryId: number): Promise<ProductsEntity>;
}
