import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDto } from './common/config';
import { schemaDto } from './common/schema';
import { validator } from './lib/validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './lib/allhttpexception';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
async function bootstrap() {
  validator(schemaDto, configDto)

  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  app.useStaticAssets(join(process.cwd(), "uploads"), {
    prefix: '/api/files/',
  });
  

  const httpAdapter = app.get(HttpAdapterHost)
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter))
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .addBearerAuth()
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, documentFactory);
  app.setGlobalPrefix("api")
  await app.listen(configDto.PORT);
}
bootstrap();
