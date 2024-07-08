import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { CategoriesDto } from '@src/blog/dto/category/categories.dto';
import { Transform } from 'class-transformer';

@Entity('categories', { database: 'blog' })
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  category: string;

  @ManyToOne(() => ArticleEntity, (article) => article.categories)
  @JoinColumn({ name: 'article_id' })
  categories: CategoriesDto;

  @Transform(() => CategoriesDto)
  toDto?(): CategoriesDto {
    const categories = new CategoriesDto();
    categories.category = this.category;
    return categories;
  }
}
