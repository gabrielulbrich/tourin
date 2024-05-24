import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';
import { ArticleEntity } from '@src/blog/entities/article.entity';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  toEntity?(id: number): ArticleEntity {
    const article = new ArticleEntity();
    article.id = id;
    article.title = this.title;
    article.text = this.text;
    article.summary = this.summary;
    article.content = this.content;
    article.authorId = this.authorId;

    return article;
  }
}
