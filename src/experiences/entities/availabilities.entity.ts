import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PricingEntity } from './pricing.entity';
import { ExperiencesOptionsEntity } from './experiences_options.entity';

@Entity({ name: 'availabilities' })
export class AvailabilitiesEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'integer' })
  vacancies: number;

  @Column({ type: 'integer' })
  startTime: number;

  @Column({ type: 'integer' })
  endTime: number;

  @OneToOne(() => PricingEntity, (pricing) => pricing.availabilities)
  pricing: PricingEntity;

  @ManyToOne(
    () => ExperiencesOptionsEntity,
    (experience) => experience.availabilities,
  )
  @JoinColumn({ name: 'experience_id' })
  experienceOptions: ExperiencesOptionsEntity;
}
