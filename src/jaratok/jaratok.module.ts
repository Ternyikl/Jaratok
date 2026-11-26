import { Module } from '@nestjs/common';
import { JaratokService } from './jaratok.service.js';
import { JaratokController } from './jaratok.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [JaratokController],
  providers: [JaratokService],
})
export class JaratokModule {}
