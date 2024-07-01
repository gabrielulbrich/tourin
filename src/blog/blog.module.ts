import { Module } from '@nestjs/common';
import { ArticleService } from './services/article.service';
import { ArticleController } from './controllers/article.controller';
import {
  ARTICLE_REPOSITORY_TOKEN,
  AUTHOR_REPOSITORY_TOKEN,
  TAGS_REPOSITORY_TOKEN,
} from '@src/blog/utils/constants.const';
import { ArticleRepository } from '@src/blog/repository/article.repository';
import { AuthorRepository } from '@src/blog/repository/author.repository';
import { AuthorController } from '@src/blog/controllers/author.controller';
import { AuthorService } from '@src/blog/services/author.service';
import { TagsService } from '@src/blog/services/tags.service';
import { TagsRepository } from '@src/blog/repository/tags.repository';
import { TagsController } from '@src/blog/controllers/tags.controller';

@Module({
  controllers: [ArticleController, AuthorController, TagsController],
  providers: [
    {
      provide: ARTICLE_REPOSITORY_TOKEN,
      useClass: ArticleRepository,
    },
    {
      provide: AUTHOR_REPOSITORY_TOKEN,
      useClass: AuthorRepository,
    },
    {
      provide: TAGS_REPOSITORY_TOKEN,
      useClass: TagsRepository,
    },
    ArticleService,
    AuthorService,
    TagsService,
  ],
})
export class BlogModule {}
