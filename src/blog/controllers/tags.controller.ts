import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { ErrorReponseDto } from '@src/blog/dto/errors/error-response.dto';
import { TagsService } from '@src/blog/services/tags.service';
import { CreateTagsDto } from '@src/blog/dto/tags/create-tags.dto';
import { TagsDto } from '@src/blog/dto/tags/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiBadRequestResponse({
    description: 'Invalid article data payload',
    type: ErrorReponseDto,
  })
  create(@Body() createTagsDto: CreateTagsDto): Promise<TagsDto> {
    return this.tagsService.create(createTagsDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }
  @Get()
  findAll(): Promise<TagsDto[]> {
    return this.tagsService.findAll();
  }
}
