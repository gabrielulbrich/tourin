import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  category: string;
}
