import {
  Column,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { CategoriesEntity } from './categories.entity';
import { ImagesEntity } from './images.entity';
import { LanguagesEntity } from './languages.entity';

export class ExperiencesEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 36 })
  title: string;

  @Column({ type: 'longtext' })
  about: string;

  @Column({ type: 'int', length: 10 })
  min_age: string;

  @Column({ type: 'varchar', length: 10 })
  startTime: string;

  @Column({ type: 'varchar', length: 10 })
  endTime: string;

  @Column({ type: 'varchar', length: 36 })
  titletType: string;

  @Column({ type: 'float', length: 36 })
  price: string;

  @Column({ type: 'int', length: 36 })
  discount: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'varchar', length: 36 })
  guideId: string;
  guide: string; // type guide user

  @Column({ type: 'float', length: 5 })
  rate: string;

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
}
