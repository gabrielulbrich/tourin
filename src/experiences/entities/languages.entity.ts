import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
} from 'typeorm';
import { ExperiencesOptionsEntity } from './experiences_options.entity';

@Entity({ name: 'languages' })
export class LanguagesEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  isoCode: string;

  @Column({ type: 'varchar', length: 50 })
  language: string;

  @ManyToOne(
    () => ExperiencesOptionsEntity,
    (experience) => experience.languages,
  )
  @JoinColumn({ name: 'experience_id' })
  experience: ExperiencesOptionsEntity;
}
