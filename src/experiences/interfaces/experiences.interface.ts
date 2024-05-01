import { ProductsEntity } from '../entities/products.entity';
import { AvailableOptionsInputDto } from '../dto/available-options-input.dto';
import { OptionsEntity } from '@src/experiences/entities/options.entity';

export interface IExperienceRepository {
  getOverview(id: number): Promise<ProductsEntity>;
  getOptions(
    id: number,
    options: AvailableOptionsInputDto,
  ): Promise<OptionsEntity[]>;
  getAttractionsByCategory(categoryId: number): Promise<ProductsEntity>;
}
