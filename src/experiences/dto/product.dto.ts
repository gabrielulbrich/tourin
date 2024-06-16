import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionsEntity } from '@src/experiences/entities/options.entity';
import { KeywordsEntity } from '@src/experiences/entities/keywords.entity';
import { ImagesEntity } from '@src/experiences/entities/images.entity';
import { ReviewsEntity } from '@src/experiences/entities/reviews.entity';
import { AvailabilitiesEntity } from '@src/experiences/entities/availabilities.entity';
import { ScheduleEntity } from '@src/experiences/entities/schedule.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  about: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  location: string; // TODO: latitud, longitud

  @ApiProperty()
  whatsIncluded: Record<string, any>;

  @ApiProperty()
  whatsNotIncluded: Record<string, any>;

  @ApiProperty()
  whatToBring: Record<string, any>;

  @ApiProperty()
  notSuitableFor: Record<string, any>;

  @ApiProperty()
  notAllowed: Record<string, any>;

  @ApiProperty()
  customInformation: string;

  @ApiProperty()
  options: OptionsEntity[];

  @ApiProperty()
  keywords: KeywordsEntity;

  @ApiProperty()
  images: ImagesEntity[];

  @ApiProperty()
  reviews: ReviewsEntity[];

  @ApiProperty()
  availabilities: AvailabilitiesEntity[];

  @ApiProperty()
  schedule: ScheduleEntity[];
}
