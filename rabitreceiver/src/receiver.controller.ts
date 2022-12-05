import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ReceiverService } from './receiver.service';

@Controller()
export class ReceiverController {
  constructor(private readonly ReceiverService: ReceiverService) { }

  @MessagePattern({"cmd":"test"})
  async test(data: string) {
    // business logic
    console.log('receive data from sender & print from receiver=',data);
    return "receive data from sender & print from receiver="+data;
  }

  @MessagePattern({ cmd: 'sum' })
  async accumulate(data){
    console.log(data);
   return data;
  }

  @Get()
  getHello(): string {
    return this.ReceiverService.getHello();
  }

  
}
