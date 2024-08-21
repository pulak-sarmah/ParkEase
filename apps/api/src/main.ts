import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Parkease | pulak sarmah')
    .setDescription(
      'The Parkease API. <h3>Looking for the graphql api?</h3> Go to <a href="/graphql" target="_blank">/grapgql</a>. or you might use  the <a targer="_blank" href="https://studio.apollographql.com/sandbox/explorer">Apollo Explorer</a>',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('parkease')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
