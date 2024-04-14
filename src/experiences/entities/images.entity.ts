import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
} from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity({ name: 'images' })
export class ImagesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  extension: string;

  @Column({ type: 'varchar', length: 50 })
  type: string;

  @ManyToOne(() => ProductsEntity, (product) => product.images)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;
}
