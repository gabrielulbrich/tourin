import { Inject, Injectable } from '@nestjs/common';
import { ITagsRepository } from '@src/blog/interfaces/tags.interface';
import { TAGS_REPOSITORY_TOKEN } from '@src/blog/utils/constants.const';
import { CreateTagsDto } from '@src/blog/dto/tags/create-tags.dto';
import { TagsDto } from '@src/blog/dto/tags/tags.dto';

@Injectable()
export class TagsService {
  constructor(
    @Inject(TAGS_REPOSITORY_TOKEN)
    private readonly tagsRepository: ITagsRepository,
  ) {}

  async create(createTagsDto: CreateTagsDto): Promise<TagsDto> {
    return await this.tagsRepository.create(createTagsDto);
  }
  async findOne(id: number): Promise<TagsDto> {
    return await this.tagsRepository.findOne(id);
  }
  async findAll(): Promise<TagsDto[]> {
    return await this.tagsRepository.findAll();
  }
}
