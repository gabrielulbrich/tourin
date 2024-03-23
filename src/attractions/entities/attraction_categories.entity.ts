import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AttractionCategoriesEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50 })
    category: string;
}
