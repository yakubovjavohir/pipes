import { Role } from "src/common/enums";
import { UserEntity } from "./entities/user.entity";
import { IUserRepository } from "./interfaces/user.repository";
import { BaseRepository } from "src/common/base/postgresSQL.base";
import { ID } from "src/common/types";
import { IUserUpdateDto } from "./dto/update-user.dto";
import { v4 } from 'uuid';
import { IUserCreateDto } from "./dto/create-user.dto";

export class UserRepository extends BaseRepository implements IUserRepository{
   async create(
        dto:IUserCreateDto
    ): Promise<UserEntity | undefined> {
        const data = await this.single<UserEntity, any>(
            'insert into users(id, fullname, email, password, role) values($1, $2, $3, $4, $5) returning *',
            v4(), 
            dto.fullname,
            dto.email,
            dto.password,
            dto.role
        )
        return data
    }

    async findAll(): Promise<Array<UserEntity>> {
        return await this.multiple<UserEntity, any>(
            'select * from users'
        )
    }

    async update(
        id:ID,
        entity:IUserUpdateDto
    ): Promise<UserEntity | undefined> {
        return await this.single<UserEntity, any>(
            'update users set fullname=$1, email=$2, password=$3, role=$4 where id=$5 returning *',
            entity.fullname,
            entity.email,
            entity.password,
            entity.role,
            id
        )
    }
    async delete(id: ID): Promise<undefined> {
        await this.single<UserEntity, any>(
            'delete from users where id=$1',
            id
        )
    }
    async findById(id: ID): Promise<UserEntity | undefined> {
        return await this.single<UserEntity, any>(
            'select * from users where id=$1',
            id
        )
    }

    async email(email: string): Promise<UserEntity | undefined> {
        
        const data =  await this.single<UserEntity, any>(
            'select * from users where email=$1',
            `${email}`
        )
        console.log("data:", data);
        return data
        
    }

}
