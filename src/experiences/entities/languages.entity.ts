import { Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { ExperiencesEntity } from './experiences.entity';

export class LanguagesEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 50 })
  language: string;

  @ManyToOne(() => ExperiencesEntity, (experience) => experience.languages)
  @JoinColumn()
  experience: ExperiencesEntity;
}
