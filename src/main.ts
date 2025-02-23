import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDto } from './common/config';
import { schemaDto } from './common/schema';
import { validator } from './lib/validator';
async function bootstrap() {
  validator(schemaDto, configDto)
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  await app.listen(configDto.PORT);
}
bootstrap();
