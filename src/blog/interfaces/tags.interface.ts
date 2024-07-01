import { TagsDto } from '@src/blog/dto/tags/tags.dto';
import { CreateTagsDto } from '@src/blog/dto/tags/create-tags.dto';

export interface ITagsRepository {
  create(createTagsDto: CreateTagsDto): Promise<TagsDto>;
  findOne(id: number): Promise<TagsDto>;
  findAll(): Promise<TagsDto[]>;
  createArticleTags(articleId: number, tags: number[]);
}
