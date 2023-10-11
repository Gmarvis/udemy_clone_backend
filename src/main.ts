import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global pipes and validators
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
