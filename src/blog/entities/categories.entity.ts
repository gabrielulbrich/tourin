import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from '@src/blog/entities/article.entity';

@Entity('categories', { database: 'blog' })
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  category: string;

  @OneToMany(() => ArticleEntity, (article) => article.categories)
  Category: CategoriesEntity[];
}
