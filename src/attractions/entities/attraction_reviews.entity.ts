import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AttractionReviewsEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: 'varchar', length: 50 })
    user: string;

    @Column({ type: 'longtext' })
    review: string;

    @Column({ type: 'int', length: 5 })
    rate: string;
}
