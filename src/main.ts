import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { jwtAuth } from './auth/jwtAuth.guard';
import {  ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useGlobalGuards(new jwtAuth)
  const configService=app.get( ConfigService)

  const port=configService.get('port')
  
  await app.listen(port);
}
bootstrap();
