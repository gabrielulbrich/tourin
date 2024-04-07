import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PricingCategoriesEntity } from './pricing-categories.entity';
import { OptionsEntity } from './options.entity';

@Entity({ name: 'pricing' })
export class PricingEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ManyToOne(() => OptionsEntity, (options) => options.pricing)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;

  @OneToMany(
    () => PricingCategoriesEntity,
    (pricingCategory) => pricingCategory.price,
  )
  pricingCategories: PricingCategoriesEntity;
}
