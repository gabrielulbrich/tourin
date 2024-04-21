import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AvailabilitiesEntity } from './availabilities.entity';
import { ProductsEntity } from './products.entity';
import { PricingEntity } from './pricing.entity';
import { ScheduleEntity } from './schedule.entity';
import { LanguagesEntity } from './languages.entity';

@Entity({ name: 'options' })
export class OptionsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 50 })
  code: string;

  @Column({ type: 'varchar', length: 50 })
  description: string;

  @Column({
    type: 'boolean',
    comment:
      'This means that only one group or person can participate. There won’t be other customers in the same activity.',
  })
  isPrivate: boolean;

  @Column({ type: 'json', nullable: true })
  duration: {
    unit: 'minutes' | 'hours' | 'days';
    value: number;
  }; // It lasts for a specific amount of time (duration)

  @Column({ type: 'json', nullable: true })
  validity: {
    from: 'time_booked' | 'time_selected' | 'time_activated';
    unit: 'minutes' | 'hours' | 'days';
    value: number;
  }; // Customers can use their ticket anytime during a certain period (validity)

  @Column({ type: 'varchar', length: 50, nullable: true })
  cutOff: string; // The cut-off time is the latest you accept new bookings before the activity starts.

  @Column({ type: 'longtext' })
  whereToMeet: string;
  // They go to a set meeting point
  // They can choose where you pick them up from certain areas or a list of places
  //  // You’ll pick them up at any address in areas you specify.
  //  // You’ll pick them up at specific places like hotels, airports, etc. you list.
  //  //  // When will you tell the customer what time you’ll pick them up?
  //  //  // You’ll pick them up at the time the activity starts
  //  //  // The day before the activity takes place
  //  //  // Within 24 hours after they book

  @OneToMany(() => LanguagesEntity, (languages) => languages.option)
  languages: LanguagesEntity[];

  @ManyToOne(() => ProductsEntity, (product) => product.options)
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.options,
  )
  availabilities: AvailabilitiesEntity;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.options)
  schedule: ScheduleEntity;

  @OneToMany(() => PricingEntity, (pricing) => pricing.options)
  pricing: PricingEntity;
}
