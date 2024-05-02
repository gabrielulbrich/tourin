import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from '@src/blog/entities/article.entity';

@Entity('author', { database: 'blog' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  surname: string;

  @Column({ type: 'varchar', length: 255 })
  profilePhotoUrl: string;

  @OneToMany(() => ArticleEntity, (article) => article.author)
  author: AuthorEntity[];
}
