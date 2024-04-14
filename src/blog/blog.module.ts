import { Module } from '@nestjs/common';
import { ArticleService } from './services/article.service';
import { ArticleController } from './controllers/article.controller';
import { ARTICLE_REPOSITORY_TOKEN } from '@src/blog/utils/constants.const';
import { ArticleRepository } from '@src/blog/repository/article.repository';

@Module({
  controllers: [ArticleController],
  providers: [
    {
      provide: ARTICLE_REPOSITORY_TOKEN,
      useClass: ArticleRepository,
    },
    ArticleService,
  ],
})
export class BlogModule {}
