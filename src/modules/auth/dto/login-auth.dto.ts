import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class LoginAuthDto {
    @ApiProperty({type:String})
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty({type:String})
    @IsNotEmpty()
    @IsString()
    password:string
}
