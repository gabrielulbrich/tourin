import { Body, Controller, Get, Param } from '@nestjs/common';
import { ExperiencesService } from '../services/experiences.service';
import { ApiTags } from '@nestjs/swagger';
import { AvailabilitiesEntity } from '../entities/availabilities.entity';
import { ExperiencesEntity } from '../entities/experiences.entity';
import { AvailabilityOptionsFilterDto } from '../dto/availability-options-filter.dto';

@Controller('experiences')
@ApiTags('Contract')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Get(':id/overview')
  overview(@Param('id') id: number): Promise<ExperiencesEntity> {
    return this.experiencesService.getOverview(id);
  }

  @Get(':id/available-options')
  availability(
    @Param('id') id: number,
    @Body() availability: AvailabilityOptionsFilterDto,
  ): Promise<AvailabilitiesEntity> {
    return this.experiencesService.getAvailability(id, availability);
  }
}
