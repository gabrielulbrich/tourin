import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionsEntity } from './options.entity';
import { ProductsEntity } from './products.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'availabilities' })
export class AvailabilitiesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'integer' })
  vacancies: number;

  @Column({ type: 'date' })
  startFrom: Date;

  @Column({ type: 'date' })
  end: Date;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.availabilities)
  schedule: ScheduleEntity[];

  @ManyToOne(() => OptionsEntity, (options) => options.availabilities)
  @JoinColumn({ name: 'option_id' })
  options: OptionsEntity;

  @ManyToOne(() => ProductsEntity, (product) => product.availabilities)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;
}
