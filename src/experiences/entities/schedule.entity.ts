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

@Entity({ name: 'schedule' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @ManyToOne(() => ProductsEntity, (product) => product.schedule)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;

  @ManyToOne(() => OptionsEntity, (experience) => experience.schedule)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;
}
