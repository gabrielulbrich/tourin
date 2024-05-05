import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
  ManyToMany, OneToMany
} from 'typeorm';
import { OptionsEntity } from './options.entity';
import { LanguagesToOptionsEntity } from '@src/experiences/entities/languages-to-options.entity';

// todo: make it MANY TO MANY
@Entity({ name: 'languages' })
export class LanguagesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  isoCode: string;

  @Column({ type: 'varchar', length: 50 })
  language: string;

  @OneToMany(() => LanguagesToOptionsEntity, (languagesToOptions) => languagesToOptions.language)
  languagesOptions: LanguagesToOptionsEntity[];
}
