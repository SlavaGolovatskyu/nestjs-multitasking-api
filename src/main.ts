import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT');

  app.useGlobalPipes(new ValidationPipe());

  // Swagger Configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Alias Arena API')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port || 3000, () => {
    console.log('App has been started successfully.');
  });
}
bootstrap();
