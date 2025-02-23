import { IsNotEmpty, IsString, MinLength } from "class-validator";
export class ICategoryCreateDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name:string
}
