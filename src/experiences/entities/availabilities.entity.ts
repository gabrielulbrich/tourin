import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExperiencesEntity } from './experiences.entity';
import { PricingEntity } from './pricing.entity';

@Entity({ name: 'availabilities' })
export class AvailabilitiesEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'integer' })
  vacancies: number;

  @OneToMany(() => PricingEntity, (pricing) => pricing.availabilities)
  pricing: PricingEntity;

  @ManyToOne(() => ExperiencesEntity, (experience) => experience.availabilities)
  experience: ExperiencesEntity;
}
