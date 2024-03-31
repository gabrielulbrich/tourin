import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AvailabilitiesEntity } from './availabilities.entity';
import { ExperiencesEntity } from './experiences.entity';

@Entity({ name: 'experiences_options' })
export class ExperiencesOptionsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  duration: string;

  @ManyToOne(
    () => ExperiencesEntity,
    (experiences) => experiences.experiencesOptions,
  )
  @JoinColumn({ name: 'experience_id' })
  experiences: ExperiencesEntity;

  @OneToMany(
    () => AvailabilitiesEntity,
    (availabilities) => availabilities.experienceOptions,
  )
  availabilities: AvailabilitiesEntity;

  //todo: attributes (duration, acessibility, skiptheline, validity) and cancellation policy
}
