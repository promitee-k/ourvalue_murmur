import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MurmurService } from './murmur.service';
import { CreateMurmurDto } from './dto/create-murmur.dto';
import { UpdateMurmurDto } from './dto/update-murmur.dto';

@Controller('murmur')
export class MurmurController {
  constructor(private readonly murmurService: MurmurService) {}

  @Post()
  create(@Body() createMurmurDto: CreateMurmurDto) {
    return this.murmurService.create(createMurmurDto);
  }

  @Get()
  findAll() {
    return this.murmurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.murmurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMurmurDto: UpdateMurmurDto) {
    return this.murmurService.update(+id, updateMurmurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.murmurService.remove(+id);
  }
}
