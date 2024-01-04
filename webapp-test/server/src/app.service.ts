import { Inject, Injectable } from '@nestjs/common';
import { MurmurService } from './murmur/murmur.service';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  @Inject(MurmurService)
  private readonly murmurService: MurmurService;

  //show all murmurs
   getMurmurs(){
    return this.murmurService.findAll()
   }

   @Inject(UserService)
   private readonly userService:UserService;

   getUsers(){
    return this.userService.findAll()
   }

}
