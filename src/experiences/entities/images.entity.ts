import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
} from 'typeorm';
import { ExperiencesEntity } from './experiences.entity';

@Entity({ name: 'images' })
export class ImagesEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  extension: string;

  @Column({ type: 'varchar', length: 50 })
  type: string;

  @ManyToOne(() => ExperiencesEntity, (experience) => experience.images)
  @JoinColumn({ name: 'experience_id' })
  experience: ExperiencesEntity;
}
