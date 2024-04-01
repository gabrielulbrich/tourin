import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PricingCategoriesEntity } from './pricing-categories.entity';
import { ExperiencesOptionsEntity } from './experiences_options.entity';

@Entity({ name: 'pricing' })
export class PricingEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ManyToOne(
    () => ExperiencesOptionsEntity,
    (experienceOptions) => experienceOptions.pricing,
  )
  @JoinColumn({ name: 'availability_id' })
  experiencesOptions: ExperiencesOptionsEntity;

  @OneToMany(
    () => PricingCategoriesEntity,
    (pricingCategory) => pricingCategory.price,
  )
  pricingCategories: PricingCategoriesEntity;
}
