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
import { ProductsEntity } from './products.entity';
import { OptionsEntity } from './options.entity';
import { WEEKDAYS } from '@src/experiences/utils/constants.const';
import { ScheduleDto } from '@src/experiences/dto/schedule.dto';
import { Transform } from 'class-transformer';

@Entity({ name: 'schedule' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: WEEKDAYS,
  })
  weekday: string;

  @Column({ type: 'date', nullable: true })
  date: Date; // in case of special date.

  @OneToMany(() => TimeSlotsEntity, (timeSlots) => timeSlots.schedule)
  timeSlots: TimeSlotsEntity[];

  @ManyToOne(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.schedule,
  )
  @JoinColumn({ name: 'availability_id' })
  availabilities: AvailabilitiesEntity;

  @ManyToOne(() => ProductsEntity, (product) => product.schedule)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;

  @ManyToOne(() => OptionsEntity, (experience) => experience.schedule)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;

  @Transform(() => ScheduleDto)
  toDto(): ScheduleDto {
    return {
      id: this.id,
      weekday: this.weekday,
      date: this.date,
      timeSlots: this.timeSlots.map((timeSlot) => timeSlot.toDto()),
    };
  }
}
