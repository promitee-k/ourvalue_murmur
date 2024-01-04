import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }
// using patch to update followercount/followingcount
  @Patch(':id/:userid/follow')
  async followUser(@Param('id')id:number,@Param('userid')userid:number){
  return await this.userService.follow(id,userid);
  }

  
}
