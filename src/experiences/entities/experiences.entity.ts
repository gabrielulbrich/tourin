import {
  Column,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
} from 'typeorm';
import { CategoriesEntity } from './categories.entity';
import { ImagesEntity } from './images.entity';
import { ReviewsEntity } from './reviews.entity';
import { ExperiencesOptionsEntity } from './experiences_options.entity';
import { AvailabilitiesEntity } from './availabilities.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'experiences' })
export class ExperiencesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  slug: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar', length: 36 })
  title: string;

  @Column({ type: 'longtext' })
  about: string;

  @Column({ type: 'varchar', length: 10 })
  startTime: string;

  @Column({ type: 'varchar', length: 10 })
  endTime: string;

  @Column({ type: 'varchar', length: 36 })
  ticketType: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'longtext' })
  whatsIncluded: string;

  @Column({ type: 'longtext' })
  whatToBring: string;

  @OneToMany(
    () => ExperiencesOptionsEntity,
    (experiencesOptions) => experiencesOptions.experiences,
  )
  experiencesOptions: ExperiencesOptionsEntity[];

  @OneToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoriesEntity;

  @OneToMany(() => ImagesEntity, (images) => images.experience)
  images: ImagesEntity[];

  @OneToMany(() => ReviewsEntity, (r) => r.experience)
  reviews: ReviewsEntity[];

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.experience,
  )
  availabilities: AvailabilitiesEntity[];

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.experience)
  schedule: ScheduleEntity[];
}
