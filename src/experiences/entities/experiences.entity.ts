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
import { LanguagesEntity } from './languages.entity';
import { AvailabilitiesEntity } from './availabilities.entity';

@Entity({ name: 'experiences' })
export class ExperiencesEntity {
  @PrimaryGeneratedColumn()
  id: string;

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

  @Column({ type: 'varchar', length: 5 }) // validate
  whatsIncluded: [string];

  @Column({ type: 'varchar', length: 5 }) // validate
  whatToBring: [string];

  @Column({ type: 'varchar', length: 5 }) // validate
  whereToMeet: [string];

  @OneToOne(() => CategoriesEntity)
  @JoinColumn()
  category: CategoriesEntity;

  @OneToMany(() => ImagesEntity, (images) => images.experience)
  images: ImagesEntity;

  @OneToMany(() => LanguagesEntity, (languages) => languages.experience)
  languages: LanguagesEntity;

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.experience,
  )
  availabilities: AvailabilitiesEntity;
}
