import { Inject, Injectable } from '@nestjs/common';
import { ICategoryCreateDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ICategoryService } from './interfaces/category.service';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resData';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './category.repository';
import { CustomError } from 'src/lib/customError';


export class CategoryService implements ICategoryService{
  constructor(
    @Inject('ICategoryRepository') 
    private readonly categoryRepository: CategoryRepository, 
  ) {}
  async create(dto: ICategoryCreateDto): Promise<ResData<CategoryEntity>> {
    await this.name(dto.name)
    const data = await this.categoryRepository.create(dto)
    return new ResData(201, "created", data)
  }
  async findAll(): Promise<ResData<Array<CategoryEntity>>> {
    const data = await this.categoryRepository.findAll()
    return new ResData(200, "success", data)
  }
  async update(id: ID, dto: UpdateCategoryDto): Promise<ResData<CategoryEntity>> {
    await this.findById(id)
    const data = await this.categoryRepository.update(id, dto)
    return new ResData(200, "update", data)
  }
  async delete(id: ID): Promise<ResData<CategoryEntity | undefined>> {
    await this.findById(id)
    await this.categoryRepository.delete(id)
    return new ResData(200, "deleted")
  }
  async findById(id: ID): Promise<ResData<CategoryEntity | undefined>> {
    const data = await this.categoryRepository.findById(id)
    if (!data) {
      throw new CustomError(404, "category not fount")
    }
    return new ResData(200, "success", data)
  }
  async name(name: string): Promise<void> {
    const data = await this.categoryRepository.name(name)
    if(data){
      throw new CustomError(404, "category existing!")
    }
  }
  
}
