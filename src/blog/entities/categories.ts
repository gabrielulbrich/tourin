import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories', { database: 'blog' })
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  category: string;
}
