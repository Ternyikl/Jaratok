import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { JaratokModule } from './jaratok/jaratok.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), JaratokModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
