import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { ErrorReponseDto } from '@src/blog/dto/errors/error-response.dto';
import { AuthorDto } from '@src/blog/dto/author/author.dto';
import { AuthorService } from '@src/blog/services/author.service';
import { CreateAuthorDto } from '@src/blog/dto/author/create-author.dto';


@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @ApiBadRequestResponse({
    description: 'Invalid article data payload',
    type: ErrorReponseDto,
  })
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<AuthorDto> {
    return this.authorService.create(createAuthorDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }
  @Get()
  findAll(): Promise<AuthorDto[]> {
    return this.authorService.findAll();
  }
}
