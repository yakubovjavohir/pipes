  import { ID } from "src/common/types";
  import { CategoryEntity } from "../entities/category.entity";

  export interface ICategoryRepository {
    create(
      dto:CategoryEntity
    ): Promise<CategoryEntity | undefined>;

    findAll(): Promise<Array<CategoryEntity>>;

    update(
      id:ID,
      entity:CategoryEntity
    ): Promise<CategoryEntity | undefined>;

    delete(id: ID): Promise<undefined>;

    findById(id:ID):Promise<CategoryEntity | undefined>

    name(name:string):Promise<CategoryEntity | undefined>
  }
