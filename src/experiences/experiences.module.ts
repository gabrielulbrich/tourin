import { Module } from '@nestjs/common';
import { ExperiencesService } from './services/experiences.service';
import { ExperiencesController } from './controllers/experiences.controller';
import {
  CATEGORIES_REPOSITORY_TOKEN,
  EXPERIENCES_REPOSITORY_TOKEN,
} from 'src/shared/utils/constants.const';
import { CategoriesRepository } from './repositories/categories.repository';
import { ExperiencesRepository } from './repositories/experiences.repository';

@Module({
  controllers: [ExperiencesController],
  providers: [
    ExperiencesService,
    {
      provide: EXPERIENCES_REPOSITORY_TOKEN,
      useClass: ExperiencesRepository,
    },
    {
      provide: CATEGORIES_REPOSITORY_TOKEN,
      useClass: CategoriesRepository,
    },
  ],
})
export class ExperiencesModule {}
