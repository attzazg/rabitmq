import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { SenderService } from './rabitclient.service';

@Controller()
export class SenderController {
  constructor(private readonly senderservice: SenderService,

    @Inject('SEND_SERVICE') private readonly client: ClientProxy) { }

  @Get()
  async getHello() {
    const pattern = { cmd: 'sum' };
    const payload = { a: 1, b: 2, c: 3 };
    const result = await firstValueFrom(this.client.send(pattern, payload));//to return response firstValueFrom
    console.log('here ====>>>> ',result);



  }
}
