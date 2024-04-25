import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisersService } from './advertisers.service';

describe('AdvertisersService', () => {
  let service: AdvertisersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvertisersService],
    }).compile();

    service = module.get<AdvertisersService>(AdvertisersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
