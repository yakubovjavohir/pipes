import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, {provide:"IUserRepository", useClass:UserRepository}],
  exports: [UserService]
})
export class UserModule {}
