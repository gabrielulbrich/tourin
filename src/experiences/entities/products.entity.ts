import { Column, OneToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { KeywordsEntity } from './keywords.entity';
import { ImagesEntity } from './images.entity';
import { ReviewsEntity } from './reviews.entity';
import { OptionsEntity } from './options.entity';
import { AvailabilitiesEntity } from './availabilities.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'products' })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  slug: string;

  @Column({ type: 'enum', enum: ['ticket', 'tour', 'transfer'] })
  type: string;

  @Column({ type: 'varchar', length: 36 })
  title: string;

  @Column({ type: 'longtext' })
  about: string;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'varchar', length: 50 })
  location: string; // TODO: latitud, longitud

  @Column({ type: 'json' })
  whatsIncluded: Record<string, any>;

  @Column({ type: 'json' })
  whatsNotIncluded: Record<string, any>;

  @Column({ type: 'json' })
  whatToBring: Record<string, any>;

  @Column({ type: 'json' })
  notSuitableFor: Record<string, any>;

  @Column({ type: 'json' })
  notAllowed: Record<string, any>;

  @Column({ type: 'longtext' })
  customInformation: string;

  @OneToMany(() => OptionsEntity, (options) => options.product)
  options: OptionsEntity[];

  @OneToMany(() => KeywordsEntity, (keywords) => keywords.product)
  keywords: KeywordsEntity;

  @OneToMany(() => ImagesEntity, (images) => images.product)
  images: ImagesEntity[];

  @OneToMany(() => ReviewsEntity, (review) => review.product)
  reviews: ReviewsEntity[];

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.product,
  )
  availabilities: AvailabilitiesEntity[];

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.product)
  schedule: ScheduleEntity[];
}
