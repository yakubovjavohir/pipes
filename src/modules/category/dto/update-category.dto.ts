import { PartialType } from '@nestjs/mapped-types';
import { ICategoryCreateDto } from './create-category.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(ICategoryCreateDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name:string
}
