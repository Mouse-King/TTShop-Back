import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvertisersModule } from './advertisers/advertisers.module';

@Module({
  imports: [
    AdvertisersModule,
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/ttbackend'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
