import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PricingCategoriesEntity } from './pricing-categories.entity';
import { AvailabilitiesEntity } from './availabilities.entity';

@Entity({ name: 'pricing' })
export class PricingEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @ManyToOne(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.pricing,
  )
  availabilities: AvailabilitiesEntity;

  @OneToMany(
    () => PricingCategoriesEntity,
    (pricingCategory) => pricingCategory.price,
  )
  pricingCategories: PricingCategoriesEntity;
}
