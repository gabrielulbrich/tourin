import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'keywords' })
export class KeywordsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @ManyToOne(() => KeywordsEntity)
  @JoinColumn({ name: 'experience_id' })
  experiences: KeywordsEntity;
}
