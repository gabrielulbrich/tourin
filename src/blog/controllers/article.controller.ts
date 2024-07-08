import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { CreateArticleDto } from '../dto/create-article.dto';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { ErrorReponseDto } from '@src/blog/dto/errors/error-response.dto';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { ArticleDto } from '@src/blog/dto/article.dto';


@Controller('blogs')
@ApiTags('Articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiBadRequestResponse({
    description: 'Invalid article data payload',
    type: ErrorReponseDto,
  })
  create(@Body() createBlogDto: CreateArticleDto): Promise<ArticleDto> {
    return this.articleService.create(createBlogDto);
  }

  @Get()
  findAll(): Promise<ArticleDto[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ArticleDto> {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateArticleDto,
  ) {
    return this.articleService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
