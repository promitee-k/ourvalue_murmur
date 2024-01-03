import { Injectable } from '@nestjs/common';
import { CreateMurmurDto } from './dto/create-murmur.dto';
import { UpdateMurmurDto } from './dto/update-murmur.dto';

@Injectable()
export class MurmurService {
  create(createMurmurDto: CreateMurmurDto) {
    return 'This action adds a new murmur';
  }

  findAll() {
    return `This action returns all murmur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} murmur`;
  }

  update(id: number, updateMurmurDto: UpdateMurmurDto) {
    return `This action updates a #${id} murmur`;
  }

  remove(id: number) {
    return `This action removes a #${id} murmur`;
  }
}
