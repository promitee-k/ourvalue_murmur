import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MurmurService } from './murmur.service';
import { CreateMurmurDto } from './dto/create-murmur.dto';

@Controller('murmur')
export class MurmurController {
  constructor(private readonly murmurService: MurmurService) {}
  @Get()
  async findAll() {
    return await this.murmurService.findAll();
  }
  @Get('currentuser=:user_id/murmurs')
  async findOwnMurmurs(
    @Param('user_id') user_id: number,
  ) {
    return await this.murmurService.findAllbyUserId(user_id);
  }

  @Get('userid=:user_id/murmurs')
  async findAllMurmurByUser(
    @Param('user_id') user_id: number,
  ) {
    return this.murmurService.findAllbyUserId(user_id)
  }

  @Post('userid=:user_id/newmurmur')
  async create(
    @Param('user_id') user_id: number,
    @Body() description: string,
  ) 
  {
      return await this.murmurService.create({user_id,description});
    }

  @Patch(':id/like')
  async LikeMurmur(@Param('id') id: number){
      return await this.murmurService.updateLikeCount(id)
  }

  @Delete('currentuser=:user_id/murmurs/:id')
  async remove(@Param('id') id: number) {
    return await this.murmurService.remove(id);
  }


}
