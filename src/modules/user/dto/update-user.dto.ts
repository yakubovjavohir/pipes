import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "../../../common/enums";

export class IUserUpdateDto {
  @IsOptional()
  @IsString()
  fullname:string

  @IsOptional()
  @IsString()
  @IsEmail()
  email:string

  @IsOptional()
  @MinLength(6)
  @MaxLength(20)
  @IsString()
  password:string

  @IsOptional()
  @IsString()
  role:Role
}

