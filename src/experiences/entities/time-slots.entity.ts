import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScheduleEntity } from './schedule.entity';

@Entity()
export class TimeSlotsEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar' })
  from: string;

  @Column({ type: 'varchar' })
  to: string;

  @ManyToOne(() => ScheduleEntity, (schedule) => schedule.timeSlots)
  @JoinColumn({ name: 'schedule_id' })
  schedule: ScheduleEntity;
}
