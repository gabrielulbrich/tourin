import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { CategoriesDto } from '@src/blog/dto/categories.dto';
import { Transform } from 'class-transformer';
import { ArticleDto } from '@src/blog/dto/article.dto';

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
