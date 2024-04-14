import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
} from 'typeorm';
import { OptionsEntity } from './options.entity';

@Entity({ name: 'languages' })
export class LanguagesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  isoCode: string;

  @Column({ type: 'varchar', length: 50 })
  language: string;

  @ManyToOne(() => OptionsEntity, (option) => option.languages)
  @JoinColumn({ name: 'option_id' })
  option: OptionsEntity;
}
