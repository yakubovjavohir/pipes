import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "../../../common/enums";
import { ApiProperty } from "@nestjs/swagger";

export class IUserUpdateDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  fullname:string

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail()
  email:string

  @ApiProperty()
  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  @IsString()
  password:string

  @ApiProperty()
  @IsOptional()
  @IsString()
  role:Role
}

