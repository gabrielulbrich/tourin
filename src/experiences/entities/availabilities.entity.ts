import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionsEntity } from './options.entity';
import { ExperiencesEntity } from './experiences.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'availabilities' })
export class AvailabilitiesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'integer' })
  vacancies: number;

  @Column({ type: 'integer' })
  startTime: number;

  @Column({ type: 'integer' })
  endTime: number;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.availabilities)
  schedule: ScheduleEntity[];

  @ManyToOne(() => OptionsEntity, (options) => options.availabilities)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;

  @ManyToOne(() => ExperiencesEntity, (experience) => experience.availabilities)
  @JoinColumn({ name: 'experience_id' })
  experience: ExperiencesEntity;
}
