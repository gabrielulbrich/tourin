import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PricingEntity } from './pricing.entity';

@Entity({ name: 'pricing_categories' })
export class PricingCategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'integer' })
  code: number;

  @Column({
    type: 'enum',
    enum: ['adult', 'child', 'youth', 'senior', 'student'],
  })
  ticketCategory: string;

  @Column({ type: 'integer' })
  commissionRate: number;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'varchar' })
  currency: string;

  @Column({ type: 'tinyint' })
  isAutonomous: boolean;

  @Column({ type: 'integer' })
  minAge: number;

  @Column({ type: 'integer' })
  maxAge: number;

  @Column({ type: 'varchar', length: 50 })
  participantsType: 'individual' | 'group';

  @ManyToOne(() => PricingEntity, (pricing) => pricing.pricingCategories)
  @JoinColumn({ name: 'pricing_id' })
  pricing: PricingEntity;
}
