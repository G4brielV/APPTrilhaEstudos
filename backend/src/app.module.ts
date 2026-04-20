import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TrilhasModule } from './trilhas/trilhas.module';
import { ConteudosModule } from './conteudos/conteudos.module';

@Module({
  imports: [PrismaModule, TrilhasModule, ConteudosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
