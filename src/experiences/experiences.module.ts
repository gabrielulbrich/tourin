import { Module } from '@nestjs/common';
import { ExperiencesService } from './services/experiences.service';
import { ExperiencesController } from './controllers/experiences.controller';
import {
  CATEGORIES_REPOSITORY_TOKEN,
  EXPERIENCES_REPOSITORY_TOKEN,
} from '@src/experiences/utils/constants.const';
import { CategoriesRepository } from './repositories/categories.repository';
import { ProductsRepository } from './repositories/products.repository';

@Module({
  controllers: [ExperiencesController],
  providers: [
    ExperiencesService,
    {
      provide: EXPERIENCES_REPOSITORY_TOKEN,
      useClass: ProductsRepository,
    },
    {
      provide: CATEGORIES_REPOSITORY_TOKEN,
      useClass: CategoriesRepository,
    },
  ],
})
export class ExperiencesModule {}
