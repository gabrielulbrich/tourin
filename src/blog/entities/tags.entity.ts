import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tags', { database: 'blog' })
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  tag: string;
}
