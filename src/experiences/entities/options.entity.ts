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
export class OptionsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  duration: string;

  @Column({ type: 'longtext' })
  whereToMeet: string;

  @OneToMany(() => LanguagesEntity, (languages) => languages.experience)
  languages: LanguagesEntity[];

  @ManyToOne(() => ExperiencesEntity, (experiences) => experiences.options)
  @JoinColumn({ name: 'experience_id' })
  experiences: ExperiencesEntity;

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.options,
  )
  availabilities: AvailabilitiesEntity;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.options)
  schedule: ScheduleEntity;

  @OneToOne(() => PricingEntity, (pricing) => pricing.options)
  pricing: PricingEntity;

  //todo: attributes (duration, acessibility, skiptheline, validity) and cancellation policy
}
