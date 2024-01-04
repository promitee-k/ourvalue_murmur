import { Module } from '@nestjs/common';
import { MurmurService } from './murmur.service';
import { MurmurController } from './murmur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Murmur } from './entities/murmur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Murmur])],
  controllers: [MurmurController],
  providers: [MurmurService],
  exports:[MurmurService]
})
export class MurmurModule {}
