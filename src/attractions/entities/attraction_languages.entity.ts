import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AttractionLanguages {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: 'varchar', length: 50 })
    language: string;
}
