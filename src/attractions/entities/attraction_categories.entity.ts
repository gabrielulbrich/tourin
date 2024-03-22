import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AttractionCategories {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50 })
    category: string;
}
