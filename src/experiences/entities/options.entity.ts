import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AvailabilitiesEntity } from './availabilities.entity';
import { ProductsEntity } from './products.entity';
import { PricingEntity } from './pricing.entity';
import { ScheduleEntity } from './schedule.entity';
import { OptionsDto } from '@src/experiences/dto/options.dto';
import { Transform } from 'class-transformer';
import { LanguagesEntity } from '@src/experiences/entities/languages.entity';
import { JoinTable } from 'typeorm/browser';

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

  @Column({
    type: 'boolean',
  })
  isActive: boolean;

  @Column({ type: 'json' })
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

  @ManyToMany(
    () => LanguagesEntity,
    (languagesToOptions) => languagesToOptions.options,
  )
  @JoinTable()
  languages: LanguagesEntity[];

  @ManyToOne(() => ProductsEntity, (product) => product.options)
  product: ProductsEntity;

  @OneToOne(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.options,
  )
  availability: AvailabilitiesEntity;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.options)
  schedule: ScheduleEntity[];

  @OneToMany(() => PricingEntity, (pricing) => pricing.options)
  pricing: PricingEntity[];

  @Transform(() => OptionsDto)
  toDto(): OptionsDto {
    return {
      id: this.id,
      title: this.title,
      code: this.code,
      description: this.description,
      isPrivate: this.isPrivate,
      isActive: this.isActive,
      duration: this.duration,
      validity: this.validity,
      cutOff: this.cutOff,
      whereToMeet: this.whereToMeet,
      languages: this.languages.map((languageOption) => languageOption.toDto()),
      availability: this.availability.toDto(),
      schedule: this.schedule.map((schedule) => schedule.toDto()),
      pricing: this.pricing.map((pricing) => pricing.toDto()),
      attributes: [],
      cancellation: undefined,
    };
  }
}
