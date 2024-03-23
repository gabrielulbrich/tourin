import { EntityManager } from "typeorm";
import { IAttractionCategoriesRepository } from "../interfaces/attraction-categories.interface";
import { AttractionCategoriesEntity } from "../entities/attraction_categories.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AttractionCategoriesRepository implements IAttractionCategoriesRepository {
    constructor(private readonly entityManager: EntityManager) {}

    async findOne(categoryId: number): Promise<AttractionCategoriesEntity> {
        return null;
    }
}
