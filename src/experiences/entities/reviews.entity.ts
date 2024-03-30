import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reviews' })
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  user: string;

  @Column({ type: 'longtext' })
  review: string;

  @Column({ type: 'int' })
  rate: string;
}
