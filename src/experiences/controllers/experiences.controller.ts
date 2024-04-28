import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ExperiencesService } from '../services/experiences.service';
import { ApiTags } from '@nestjs/swagger';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { ProductsEntity } from '../entities/products.entity';
import { AvailableOptionsFilterDto } from '../dto/available-options-filter.dto';
import { AvailableOptionsDto } from '@src/experiences/dto/available-options.dto';

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
    @Query() options: AvailableOptionsFilterDto,
  ): Promise<AvailableOptionsDto> {
    return this.experiencesService.getAvailabilityAndPricing(id, options);
  }
}
