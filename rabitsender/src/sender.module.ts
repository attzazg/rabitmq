import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SenderController } from './sender.controller';
import { SenderService } from './rabitclient.service';



@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEND_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://bnepokqd:nowqtQVvrRrua0uA6M6DsoJPB5b9b1aF@moose.rmq.cloudamqp.com/bnepokqd'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],

  controllers: [SenderController],
  providers: [SenderService],
})
export class SenderModule {}
