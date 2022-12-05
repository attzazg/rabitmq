import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ReceiverModule } from './receiver.module';

async function bootstrap() {
  // const app = await NestFactory.create(ReceiverModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ReceiverModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://bnepokqd:nowqtQVvrRrua0uA6M6DsoJPB5b9b1aF@moose.rmq.cloudamqp.com/bnepokqd'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });



   app.listen();
  
}
bootstrap();
