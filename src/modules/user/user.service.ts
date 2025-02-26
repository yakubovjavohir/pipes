import { Inject, Injectable, Res } from '@nestjs/common';
import { IUserCreateDto} from './dto/create-user.dto';
import { IUserUpdateDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { ResData } from 'src/lib/resData';
import { IUserService } from './interfaces/user.service';
import { ID } from 'src/common/types';
import { CustomError } from 'src/lib/customError';
@Injectable()
export class UserService implements IUserService{
  constructor(
    @Inject("IUserRepository") private readonly userRepository:UserRepository
  ){}
    async create(dto: IUserCreateDto) {

      const data = await this.userRepository.create(
        dto
      )    
      return new ResData<UserEntity>(201, "created", data)
    }
  
    async findAll() {
      const data = await this.userRepository.findAll()
      return new ResData<Array<UserEntity>>(200, "success", data)
    }
  
    async findById(id: ID) {
      const data = await this.userRepository.findById(id)
      if (!data) {
        throw new CustomError(404, "user not found!")
      }
      return new ResData<UserEntity>(200, "success", data)
    }
  
    async update(id: ID, dto: IUserUpdateDto) {
      await this.findById(id)
      const data = await this.userRepository.update(
        id,
        dto
      )
      return new ResData<UserEntity>(200, "success", data)
    }
  
    async delete(id: string): Promise<ResData<UserEntity>> {
      await this.findById(id)
      await this.userRepository.delete(id)
      return new ResData<UserEntity>(200, "deleted")
    }

    async email(email:string):Promise<UserEntity | undefined>{
      const data = await this.userRepository.email(email)
      
      if(data){
        throw new CustomError(400, "email existing!")
      }
      return data
    }

    async findByEmail(email: string): Promise<ResData<UserEntity | undefined>> {
        const data = await this.userRepository.findByEmail(email)

        if(!data){
          throw new CustomError(404, "user not found")
        }

        return new ResData<UserEntity>(200, "user find all", data)
    }
}
