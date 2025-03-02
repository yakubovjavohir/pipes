import { Role } from "src/common/enums";
import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class IUserCreateDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fullname: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEnum(Role)
    role: Role;
  }
