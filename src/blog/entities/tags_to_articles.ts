import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity, TagsEntity } from '@src/blog/entities/article.entity';

@Entity('tags_to_articles', { database: 'blog' })
export class TagsToArticlesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ArticleEntity)
  @JoinColumn({ name: 'article_id' })
  article: ArticleEntity;

  @ManyToOne(() => TagsEntity)
  @JoinColumn({ name: 'tags_id' })
  tags: TagsEntity;
}
