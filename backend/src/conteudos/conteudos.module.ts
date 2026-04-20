import { Module } from '@nestjs/common';
import { ConteudosService } from './conteudos.service';
import { ConteudosController } from './conteudos.controller';

@Module({
  controllers: [ConteudosController],
  providers: [ConteudosService],
})
export class ConteudosModule {}
