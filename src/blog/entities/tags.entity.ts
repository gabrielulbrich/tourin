import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '@src/blog/entities/article.entity';

@Entity('tags', { database: 'blog' })
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  tag: string;

  @ManyToMany(() => ArticleEntity, (article) => article.tags)
  @JoinColumn()
  article: ArticleEntity[];
}
