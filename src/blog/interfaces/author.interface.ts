import { AuthorDto } from '@src/blog/dto/author/author.dto';
import { CreateAuthorDto } from '@src/blog/dto/author/create-author.dto';

export interface IAuthorRepository {
  findOne(id: number): Promise<AuthorDto>;
  create(createAuthorDto: CreateAuthorDto): Promise<AuthorDto>;
  findAll(): Promise<AuthorDto[]>;
}
