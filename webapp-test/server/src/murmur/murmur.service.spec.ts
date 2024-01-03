import { Test, TestingModule } from '@nestjs/testing';
import { MurmurService } from './murmur.service';

describe('MurmurService', () => {
  let service: MurmurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MurmurService],
    }).compile();

    service = module.get<MurmurService>(MurmurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
