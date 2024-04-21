import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ExperiencesService } from '../services/experiences.service';
import { ApiTags } from '@nestjs/swagger';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { ProductsEntity } from '../entities/products.entity';
import { AvailabilityOptionsFilterDto } from '../dto/availability-options-filter.dto';

@Controller('experiences')
@ApiTags('Contract')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Get(':id/overview')
  overview(@Param('id') id: number): Promise<ProductsEntity> {
    return this.experiencesService.getOverview(id);
  }

  @Get(':id/available-options')
  availability(
    @Param('id') id: number,
    @Query('availability') availability: AvailabilityOptionsFilterDto,
  ): Promise<AvailabilitiesEntity> {
    return this.experiencesService.getAvailability(id, new AvailabilityOptionsFilterDto());
  }
}
