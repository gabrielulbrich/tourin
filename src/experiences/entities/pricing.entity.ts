import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionsEntity } from './options.entity';
import { PricingDto } from '@src/experiences/dto/pricing.dto';
import { Transform } from 'class-transformer';

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
  currencyIso: string;

  @Column({ type: 'varchar' })
  currencySymbol: string;

  @Column({ type: 'integer' })
  ageFrom: number;

  @Column({ type: 'integer' })
  ageTo: number;

  @Column({ type: 'enum', enum: ['individual', 'group'] })
  participantsType: 'individual' | 'group';

  @ManyToOne(() => OptionsEntity, (options) => options.pricing)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;

  @Transform(() => PricingDto)
  toDto(): PricingDto {
    return {
      id: this.id,
      code: this.code,
      ticketCategory: this.ticketCategory,
      commissionRate: this.commissionRate,
      price: this.price,
      currencyIso: this.currencyIso,
      currencySymbol: this.currencySymbol,
      ageFrom: this.ageFrom,
      ageTo: this.ageTo,
      participantsType: this.participantsType,
    };
  }
}
