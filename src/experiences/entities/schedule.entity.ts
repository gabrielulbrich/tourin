import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AvailabilitiesEntity } from './availabilities.entity';
import { TimeSlotsEntity } from './time-slots.entity';
import { ExperiencesEntity } from './experiences.entity';
import { ExperiencesOptionsEntity } from './experiences_options.entity';

@Entity({ name: 'schedule' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    type: 'enum',
    enum: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
      'special',
    ],
  })
  day: string;

  @Column({ type: 'date', nullable: true })
  date: Date;

  @OneToMany(() => TimeSlotsEntity, (timeSlots) => timeSlots.schedule)
  timeSlots: TimeSlotsEntity[];

  @ManyToOne(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.schedule,
  )
  @JoinColumn({ name: 'availability_id' })
  availabilities: AvailabilitiesEntity;

  @ManyToOne(() => ExperiencesEntity, (experience) => experience.schedule)
  @JoinColumn({ name: 'experience_id' })
  experience: ExperiencesEntity;

  @ManyToOne(
    () => ExperiencesOptionsEntity,
    (experience) => experience.schedule,
  )
  @JoinColumn({ name: 'experience_options_id' })
  experienceOptions: ExperiencesOptionsEntity;
}
