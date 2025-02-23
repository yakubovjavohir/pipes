import { BaseRepository } from "src/common/base/postgresSQL.base";
import { ICategoryRepository } from "./interfaces/category.repository";
import { ID } from "src/common/types";
import { CategoryEntity } from "./entities/category.entity";
import {v4} from "uuid"
import { ICategoryCreateDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryRepository extends BaseRepository implements ICategoryRepository {
    async create(dto:ICategoryCreateDto): Promise<CategoryEntity | undefined> {
        return await this.single<CategoryEntity, any>(
            'insert into category(id, name) values($1, $2) returning *',
            v4(),
            dto.name
        )
    }

    async findAll(): Promise<Array<CategoryEntity>> {
        return await this.multiple<CategoryEntity, any>(
            'select * from category'
        )
    }

    async update(id: ID, entity: UpdateCategoryDto): Promise<CategoryEntity | undefined> {
        return await this.single<CategoryEntity, any>(
            'update category set name=$1 where id=$2 returning *',
            entity.name,
            id
        )
    }
    async delete(id: ID): Promise<undefined> {
        return await this.single<undefined, any>(
            'delete from category where id=$1',
            id
        )
    }
    async findById(id: ID): Promise<CategoryEntity | undefined> {
        return await this.single<CategoryEntity, string>(
            'select * from category where id=$1',
            id
        )
    }
    async name(name: string): Promise<CategoryEntity | undefined> {
        return await this.single<CategoryEntity, string>(
            'select * from category where name=$1',
            name
        )
    }
}