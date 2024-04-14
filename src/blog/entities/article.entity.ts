import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('article', { database: 'blog' })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;
}
