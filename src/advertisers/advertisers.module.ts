import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdvertisersService } from './advertisers.service';
import { AdvertisersController } from './advertisers.controller';
import { AdvertiserSchema } from './advertiser.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Advertiser', schema: AdvertiserSchema },
    ]),
  ],
  controllers: [AdvertisersController],
  providers: [AdvertisersService],
})
export class AdvertisersModule {}
