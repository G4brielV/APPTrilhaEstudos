import { Module } from '@nestjs/common';
import { ConteudosService } from './conteudos.service';
import { ConteudosController } from './conteudos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [ConteudosController],
  providers: [ConteudosService],
})
export class ConteudosModule {}
