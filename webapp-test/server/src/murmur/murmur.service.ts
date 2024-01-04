import { Injectable } from '@nestjs/common';
import { CreateMurmurDto } from './dto/create-murmur.dto';
import { Murmur } from './entities/murmur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateMurmurDto } from './dto/update-murmur.dto';

@Injectable()
export class MurmurService {
  constructor(
    @InjectRepository(Murmur)
    private readonly murmurRepository: Repository<Murmur>,
  ) {}
  //create new murmur
   create(createMurmurDto: CreateMurmurDto) {
    try{
      return this.murmurRepository.save(createMurmurDto);
    }catch(error){
      console.error('Error creating murmur:', error);
      throw new Error('Unable to create murmur');
    }
   
  }
  //fetch all murmurs
  async findAll():Promise<Murmur[]> {
    try{return await this.murmurRepository.find();}
    catch(error){
      console.error('Error showing murmurs:', error);
      throw new Error('Unable to show murmurs');
    }
    
  }
  async findOne(id:number):Promise<Murmur> {
    try{ return this.murmurRepository.findOne({id});}
    catch(error){
      console.error('Error showing murmurs:', error);
      throw new Error('Unable to show murmurs');
    }
    
  }
  //fetch user specific murmurs
 async findAllbyUserId(user_id:number){
   try{return await this.murmurRepository.find({user_id})} 
   catch(error){
    console.error('Error showing murmurs of this user:', error);
    throw new Error('Unable to show murmurs of this user');
   }
  }
 async updateLikeCount(current_murmur_id: number){
  const likedmurmur = await this.findOne(current_murmur_id)

  likedmurmur.likecount += 1;

  return this.murmurRepository.save(likedmurmur);
 }
 async remove(current_murmur_id: number) {

   try{return await this.murmurRepository.delete({id:current_murmur_id});}  
   catch(error){
    console.error('Error deleting murmur:', error);
    throw new Error('Unable to delete murmur');
   }
  }
}
