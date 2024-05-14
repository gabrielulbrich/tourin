// import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { LanguagesEntity } from '@src/experiences/entities/languages.entity';
// import { OptionsEntity } from '@src/experiences/entities/options.entity';
//
// @Entity({ name: 'languages_to_options' })
// export class LanguagesToOptionsEntity {
//   @PrimaryGeneratedColumn()
//   id!: number;
//
//   @ManyToOne(() => LanguagesEntity, (language) => language.languagesOptions)
//   @JoinColumn({ name: 'language_id' })
//   language: LanguagesEntity;
//
//   @ManyToOne(() => OptionsEntity, (option) => option.languagesOptions)
//   @JoinColumn({ name: 'option_id' })
//   option: OptionsEntity;
//
//   toDto() {
//     return {
//       id: this.id,
//       language: this.language.maptoDto(),
//     };
//   }
// }
