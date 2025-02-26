import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, CategoryModule, AuthModule],
  exports: [UserModule, CategoryModule, AuthModule]
})
export class AppModule {}
