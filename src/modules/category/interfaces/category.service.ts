import { ID } from "src/common/types";
import { ResData } from "../../../lib/resData";
import { ICategoryCreateDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CategoryEntity } from "../entities/category.entity";

export interface ICategoryService {
  create(dto: ICategoryCreateDto): Promise<ResData<CategoryEntity>>;
  findAll(): Promise<ResData<Array<CategoryEntity>>>;
  update( id:ID, dto: UpdateCategoryDto): Promise<ResData<CategoryEntity>>;
  delete(id:ID):Promise<ResData<CategoryEntity | undefined>>;
  findById(id:ID):Promise<ResData<CategoryEntity | undefined>>
  name(name:string):Promise<void>
}
