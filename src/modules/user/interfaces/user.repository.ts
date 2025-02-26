  import { ID } from "src/common/types";
import { Role } from "../../../common/enums";
  import { UserEntity } from "../entities/user.entity";

  export interface IUserRepository {
    create(
      dto:UserEntity
    ): Promise<UserEntity | undefined>;

    findAll(): Promise<Array<UserEntity>>;

    update(
      id:ID,
      entity:UserEntity
    ): Promise<UserEntity | undefined>;

    delete(id: ID): Promise<undefined>;

    findById(id:ID):Promise<UserEntity | undefined>

    email(email:string):Promise<UserEntity | undefined>

    findByEmail(email:string):Promise<UserEntity | undefined>


  }
