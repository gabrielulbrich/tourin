import { Controller, Get, Param } from '@nestjs/common';
import { ExperiencesService } from '../services/experiences.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('experiences')
@ApiTags('Contract')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Get(':id/overview')
  overview(@Param('id') id: number) {
    return this.experiencesService.getOverview(id);
  }
}
