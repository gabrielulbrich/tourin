import * as dotenv from 'dotenv'; // @see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'node:path';
import { writeFileSync } from 'fs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle('TourIn API')
    .setDescription('The TourIn API')
    .setVersion('1.0')
    .addTag('tourin')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
  const outputPath = path.resolve(process.cwd(), 'swagger.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 4), {
    encoding: 'utf8',
  });

  if (process.env.DATABASE_MIGRATION !== 'true') {
    await app.listen(3000);
    // logger.log(
    //   `Application listening port: ${config?.port ?? process.env.PORT}`,
    // );
    // logger.log(`Apm agent started: ${agent.isStarted()}`);
  } else {
    // logger.log('Close application due to migrations');
    await app.close();
    process.exit(0);
  }
}

if (require.main === module) {
  bootstrap().catch((error) => {
    console.log(error?.message, error?.stack);
  });
}
