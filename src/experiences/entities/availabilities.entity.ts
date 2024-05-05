import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionsEntity } from './options.entity';
import { ProductsEntity } from './products.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'availabilities' })
export class AvailabilitiesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: ['opening_hours', 'starting_times'],
  })
  type: 'opening_hours' | 'starting_times';

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime', nullable: true })
  endDate: Date;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.availabilities)
  schedule: ScheduleEntity[];

  @OneToOne(() => OptionsEntity, (options) => options.availability)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;

  @ManyToOne(() => ProductsEntity, (product) => product.availabilities)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;
}
