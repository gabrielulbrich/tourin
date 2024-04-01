import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AvailabilitiesEntity } from './availabilities.entity';
import { ExperiencesEntity } from './experiences.entity';
import { PricingEntity } from './pricing.entity';
import { ScheduleEntity } from './schedule.entity';
import { LanguagesEntity } from './languages.entity';

@Entity({ name: 'experiences_options' })
export class ExperiencesOptionsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  duration: string;

  @Column({ type: 'longtext' })
  whereToMeet: string;

  @OneToMany(() => LanguagesEntity, (languages) => languages.experience)
  languages: LanguagesEntity[];

  @ManyToOne(
    () => ExperiencesEntity,
    (experiences) => experiences.experiencesOptions,
  )
  @JoinColumn({ name: 'experience_id' })
  experiences: ExperiencesEntity;

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.experienceOptions,
  )
  availabilities: AvailabilitiesEntity;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.experienceOptions)
  schedule: ScheduleEntity;

  @OneToOne(() => PricingEntity, (pricing) => pricing.experiencesOptions)
  pricing: PricingEntity;

  //todo: attributes (duration, acessibility, skiptheline, validity) and cancellation policy
}
