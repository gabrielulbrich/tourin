import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity({ name: 'reviews' })
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  user: string;

  @Column({ type: 'longtext' })
  message: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'tinyint' })
  isAnonymous: boolean;

  // Todo:: add author object
  // @Column({ type: 'varchar' })
  // author: {
  //   fullName: string,
  //   country: string,
  // };

  @ManyToOne(() => ProductsEntity, (product) => product.reviews)
  product: ProductsEntity;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
