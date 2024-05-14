import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from '@src/blog/entities/article.entity';
import { AuthorDto } from '@src/blog/dto/author.dto';
import { Transform } from 'class-transformer';

@Entity('author', { database: 'blog' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  surname: string;

  @Column({ type: 'varchar', length: 255 })
  profilePhotoUrl: string;

  @OneToMany(() => ArticleEntity, (article) => article.author)
  author: AuthorEntity[];

  @Transform(() => AuthorDto)
  toDto?(): AuthorDto {
    const author = new AuthorDto();
    author.name = this.name;
    author.surname = this.surname;
    author.profilePhotoUrl = this.profilePhotoUrl;
    return author;
  }
}
