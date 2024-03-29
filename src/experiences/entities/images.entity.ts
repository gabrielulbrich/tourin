import { Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { ExperiencesEntity } from './experiences.entity';

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
  @JoinColumn()
  experience: ExperiencesEntity;
}
