import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExperiencesOptionsEntity } from './experiences_options.entity';
import { ExperiencesEntity } from './experiences.entity';
import { ScheduleEntity } from './schedule.entity';

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

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.availabilities)
  schedule: ScheduleEntity[];

  @ManyToOne(
    () => ExperiencesOptionsEntity,
    (experienceOptions) => experienceOptions.availabilities,
  )
  @JoinColumn({ name: 'experience_options_id' })
  experienceOptions: ExperiencesOptionsEntity;

  @ManyToOne(() => ExperiencesEntity, (experience) => experience.availabilities)
  @JoinColumn({ name: 'experience_id' })
  experience: ExperiencesEntity;
}
