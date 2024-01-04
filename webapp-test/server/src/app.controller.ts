import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
   showMurmurs(){
    return this.appService.getMurmurs();
   }
  //  @Get()
  //  showUsers(){
  //   return this.appService.getUsers();
  //  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
