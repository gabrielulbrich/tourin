import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CategoriesEntity } from '@src/blog/entities/categories.entity';
import { AuthorEntity } from '@src/blog/entities/author.entity';

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

  @Column({ name: 'categories_id' })
  categoriesId: number;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'categories_id' })
  categories: CategoriesEntity;

  @ManyToOne(() => AuthorEntity)
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;
}
