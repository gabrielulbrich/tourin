import { Module } from '@nestjs/common';
import { AttractionsService } from './services/attractions.service';
import { AttractionsController } from './controllers/attractions.controller';
import { ATTRACTION_CATEGORIES_REPOSITORY_TOKEN } from 'src/shared/utils/constants.const';
import { AttractionCategoriesRepository } from './repositories/attraction-categories.repository';

@Module({
  controllers: [AttractionsController],
  providers: [
    AttractionsService,
    {
      provide: ATTRACTION_CATEGORIES_REPOSITORY_TOKEN,
      useClass: AttractionCategoriesRepository,
    },
],
})
export class AttractionsModule {}
