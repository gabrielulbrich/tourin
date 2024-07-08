import { AuthorEntity } from '@src/blog/entities/author.entity';
import { AuthorDto } from '@src/blog/dto/author/author.dto';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { IAuthorRepository } from '@src/blog/interfaces/author.interface';
import { CreateAuthorDto } from '@src/blog/dto/author/create-author.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AuthorRepository implements IAuthorRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<AuthorDto> {
    const authorEntity = await this.entityManager.save(
      AuthorEntity,
      createAuthorDto,
    );
    return plainToClass(AuthorDto, authorEntity);
  }

  async findOne(id: number): Promise<AuthorDto> {
    const authorEntity = await this.entityManager.findOne(AuthorEntity, {
      where: { id },
    });
    if (!authorEntity) {
      return null;
    }

    return plainToClass(AuthorDto, authorEntity);
  }

  async findAll(): Promise<AuthorDto[]> {
    const authorEntity = await this.entityManager.find(AuthorEntity);

    if (!authorEntity) {
      throw new Error('No authors found');
    }

    return authorEntity.map((author) => plainToClass(AuthorDto, author));
  }
}
