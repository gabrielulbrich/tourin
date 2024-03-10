import { Module } from '@nestjs/common';
import { AttractionsService } from './services/attractions.service';
import { AttractionsController } from './controllers/attractions.controller';

@Module({
  controllers: [AttractionsController],
  providers: [AttractionsService],
})
export class AttractionsModule {}
