import { Test, TestingModule } from '@nestjs/testing';
import { MurmurController } from './murmur.controller';
import { MurmurService } from './murmur.service';

describe('MurmurController', () => {
  let controller: MurmurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MurmurController],
      providers: [MurmurService],
    }).compile();

    controller = module.get<MurmurController>(MurmurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
