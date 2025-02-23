import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ICategoryCreateDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ID } from 'src/common/types';
import { LoggingInterceptor } from 'src/common/interceptors';

@Controller('category')
@UseInterceptors(LoggingInterceptor)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: ICategoryCreateDto) {
    const resdata = await this.categoryService.create(dto)
    return resdata
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ID) {
    return await this.categoryService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: ID, @Body() dto: UpdateCategoryDto) {
    return await this.categoryService.update(id, dto)
  }

  @Delete(':id')
  async remove(@Param('id') id: ID) {
    return await this.categoryService.delete(id)
  }
}
