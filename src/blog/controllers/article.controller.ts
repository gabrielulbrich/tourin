import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { CreateArticleDto } from '../dto/create-article.dto';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { ErrorReponseDto } from '@src/blog/dto/errors/error-response.dto';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { ArticleEntity } from '@src/blog/entities/article.entity';

@Controller('blogs')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiBadRequestResponse({
    description: 'Invalid article data payload',
    type: ErrorReponseDto,
  })
  create(@Body() createBlogDto: CreateArticleDto): Promise<ArticleEntity> {
    return this.articleService.create(createBlogDto);
  }

  @Get()
  findAll(): Promise<ArticleEntity[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
