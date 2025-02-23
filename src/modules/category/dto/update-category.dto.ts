import { PartialType } from '@nestjs/mapped-types';
import { ICategoryCreateDto } from './create-category.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(ICategoryCreateDto) {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name:string
}
