import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { callbackify } from 'util';
import { SenderModule } from './sender.module';


async function bootstrap() {

  const app = await NestFactory.create(SenderModule);
  await app.listen(4000);

  
}
bootstrap();
