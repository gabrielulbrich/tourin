import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @OneToOne(() => CategoriesEntity)
  experiences: CategoriesEntity;
}
