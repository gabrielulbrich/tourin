import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'time_slots' })
export class TimeSlotsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'time' })
  from: string;

  @Column({ type: 'time' })
  to: string;

  @Column({ type: 'integer' })
  capacity: number;

  @Column({ type: 'integer' })
  vacancies: number;

  @ManyToOne(() => ScheduleEntity, (schedule) => schedule.timeSlots)
  @JoinColumn({ name: 'schedule_id' })
  schedule: ScheduleEntity;
}
