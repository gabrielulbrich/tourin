import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AttractionImages {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    extension: string;

    @Column({ type: 'varchar', length: 50 })
    type: string;
}
