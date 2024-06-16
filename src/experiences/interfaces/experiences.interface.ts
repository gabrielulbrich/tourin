import { ProductsEntity } from '../entities/products.entity';
import { AvailableOptionsInputDto } from '../dto/available-options/available-options-input.dto';
import { OptionsDto } from '@src/experiences/dto/options.dto';

export interface IExperienceRepository {
  getProductOverview(id: number): Promise<ProductsEntity>;
  getOptions(
    id: number,
    options: AvailableOptionsInputDto,
  ): Promise<OptionsDto[]>;
  getAttractionsByCategory(categoryId: number): Promise<ProductsEntity>;
}
