import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MurmurModule } from './murmur/murmur.module';
import { User } from './user/entities/user.entity';
import { Murmur } from './murmur/entities/murmur.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'docker',
    password: 'docker',
    database: 'test',
    entities: [User,Murmur],
    synchronize: true,
  }), UserModule, MurmurModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
