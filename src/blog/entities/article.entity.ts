import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CategoriesEntity } from '@src/blog/entities/categories.entity';
import { AuthorEntity } from '@src/blog/entities/author.entity';
import { ArticleDto } from '@src/blog/dto/article.dto';
import { Transform } from 'class-transformer';

@Entity('articles', { database: 'blog' })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  text: string;

  @Column({ type: 'varchar', length: 255 })
  summary: string;

  @Column({ type: 'varchar', length: 255 })
  content: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ name: 'author_id' })
  authorId: number;

  @OneToMany(() => CategoriesEntity, (category) => category.categories)
  categories: CategoriesEntity[];

  @ManyToOne(() => AuthorEntity)
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;

  @Transform(() => ArticleDto)
  toDto?(): ArticleDto {
    const article = new ArticleDto();
    article.title = this.title;
    article.text = this.text;
    article.summary = this.summary;
    article.content = this.content;
    article.authorId = this.authorId;
    article.author = this.author.toDto();
    article.categories = this.categories.map((category) => category.toDto());
    return article;
  }
}
