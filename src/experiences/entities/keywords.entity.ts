import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsEntity } from '@src/experiences/entities/products.entity';

@Entity({ name: 'keywords' })
// todo: make it MANY TO MANY
export class KeywordsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  keyword: string;

  @ManyToOne(() => ProductsEntity, (product) => product.keywords)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;
}
