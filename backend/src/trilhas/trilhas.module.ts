import { Module } from '@nestjs/common';
import { TrilhasService } from './trilhas.service';
import { TrilhasController } from './trilhas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrilhasController],
  providers: [TrilhasService],
})
export class TrilhasModule {}
