import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [UserModule, CategoryModule],
  exports: [UserModule, CategoryModule]
})
export class AppModule {}
