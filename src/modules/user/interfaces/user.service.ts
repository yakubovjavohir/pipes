import { ID } from "src/common/types";
import { ResData } from "../../../lib/resData";
import { IUserCreateDto } from "../dto/create-user.dto";
import { IUserUpdateDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";

export interface IUserService {
  create(dto: IUserCreateDto): Promise<ResData<UserEntity>>;
  findAll(): Promise<ResData<Array<UserEntity>>>;
  update( id:ID, dto: IUserUpdateDto): Promise<ResData<UserEntity>>;
  delete(id:ID):Promise<ResData<UserEntity>>;
  findById(id:ID):Promise<ResData<UserEntity | undefined>>
  email(email:string):Promise<UserEntity | undefined>
}
