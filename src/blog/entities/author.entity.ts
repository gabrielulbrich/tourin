import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('author', { database: 'blog' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  surname: string;

  @Column({ type: 'varchar', length: 255 })
  profile_photo_url: string;
}
