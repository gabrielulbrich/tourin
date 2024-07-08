import { Inject, Injectable } from '@nestjs/common';
import { AUTHOR_REPOSITORY_TOKEN } from '@src/blog/utils/constants.const';
import { IAuthorRepository } from '@src/blog/interfaces/author.interface';
import { CreateAuthorDto } from '@src/blog/dto/author/create-author.dto';
import { AuthorDto } from '@src/blog/dto/author/author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @Inject(AUTHOR_REPOSITORY_TOKEN)
    private readonly authorRepository: IAuthorRepository,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<AuthorDto> {
    return await this.authorRepository.create(createAuthorDto);
  }
  async findOne(id: number): Promise<AuthorDto> {
    return await this.authorRepository.findOne(id);
  }
  async findAll(): Promise<AuthorDto[]> {
    return await this.authorRepository.findAll();
  }
}
