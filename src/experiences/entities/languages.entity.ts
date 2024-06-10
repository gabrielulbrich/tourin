import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
import { OptionsEntity } from './options.entity';

@Entity({ name: 'languages' })
export class LanguagesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  isoCode: string;

  @Column({ type: 'varchar', length: 50 })
  language: string;

  @ManyToMany(() => OptionsEntity, (options) => options.languages)
  options: OptionsEntity[];

  toDto() {
    return {
      id: this.id,
      isoCode: this.isoCode,
      language: this.language,
    };
  }
}
