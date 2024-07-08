import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from '@src/blog/services/categories.service';
import { CreateCategoriesDto } from '@src/blog/dto/category/create-categories.dto';
import { CategoriesDto } from '@src/blog/dto/category/categories.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(
    @Body() createCategoriesDto: CreateCategoriesDto,
  ): Promise<CategoriesDto> {
    return this.categoriesService.create(createCategoriesDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
  @Get()
  findAll(): Promise<CategoriesDto[]> {
    return this.categoriesService.findAll();
  }
}
