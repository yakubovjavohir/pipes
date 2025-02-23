import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    { provide: 'ICategoryRepository', useClass: CategoryRepository },
  ],
  exports: [CategoryService, 'ICategoryRepository'],
})
export class CategoryModule {}
