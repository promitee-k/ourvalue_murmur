import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
// will use patch to update followercount/followingcount
  @Patch(':id/:userid/follow')
  async followUser(@Param('id')id:number,@Param('userid')userid:number){
  return await this.userService.follow(id,userid);
  }

  
}
