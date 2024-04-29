import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CategoriesEntity } from '@src/blog/entities/categories.entity';
import { AuthorEntity } from '@src/blog/entities/author.entity';

@Entity('article', { database: 'blog' })
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

  @Column({ type: 'varchar', length: 255 })
  created_at: string;

  @Column({ type: 'varchar', length: 255 })
  updated_at: string;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'categories_id' })
  categories: CategoriesEntity;

  @ManyToOne(() => AuthorEntity)
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;
}

