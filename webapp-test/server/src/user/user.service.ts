import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    try { return await this.userRepository.find(); }
    catch (error) {
      console.error('Error finding users:', error);
      throw new Error('Unable to find users');
    }
  }
  async findOne(id: number) {
    try { return await this.userRepository.findOne({ id }); }
    catch (error) {
      console.error('Error finding the user', error);
      throw new Error('Unable to find user');
    }
  }

  async follow(follower_id: number, following_id: number) {
    try {
      const follower = await this.findOne(follower_id);
      const following = await this.findOne(following_id);

      follower.followingcount += 1;
      following.followercount += 1;
      
      if(follower.following!==''){
        follower.following +=','+following_id
      } else follower.following += following_id
   
     await this.userRepository.save(follower);

     await  this.userRepository.save(following);

      return 'following '+following.name
    }

    catch (error) {
      console.error('Error following the user', error);
      throw new Error('Unable to follow user');
    }

  }
}
