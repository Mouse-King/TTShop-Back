import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisersController } from './advertisers.controller';
import { AdvertisersService } from './advertisers.service';

describe('AdvertisersController', () => {
  let controller: AdvertisersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertisersController],
      providers: [AdvertisersService],
    }).compile();

    controller = module.get<AdvertisersController>(AdvertisersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
