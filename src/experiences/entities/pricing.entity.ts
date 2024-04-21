import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionsEntity } from './options.entity';

@Entity({ name: 'pricing' })
export class PricingEntity {
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

  @Column({ type: 'integer' })
  minAge: number;

  @Column({ type: 'integer' })
  maxAge: number;

  @Column({ type: 'enum', enum: ['individual', 'group'] })
  participantsType: 'individual' | 'group';

  @ManyToOne(() => OptionsEntity, (options) => options.pricing)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;
}
