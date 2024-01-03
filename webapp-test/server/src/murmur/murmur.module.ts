import { Module } from '@nestjs/common';
import { MurmurService } from './murmur.service';
import { MurmurController } from './murmur.controller';

@Module({
  controllers: [MurmurController],
  providers: [MurmurService]
})
export class MurmurModule {}
