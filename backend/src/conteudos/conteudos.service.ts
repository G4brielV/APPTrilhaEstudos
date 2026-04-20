import { Injectable } from '@nestjs/common';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';

@Injectable()
export class ConteudosService {
  create(createConteudoDto: CreateConteudoDto) {
    return 'This action adds a new conteudo';
  }

  findAll() {
    return `This action returns all conteudos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conteudo`;
  }

  update(id: number, updateConteudoDto: UpdateConteudoDto) {
    return `This action updates a #${id} conteudo`;
  }

  remove(id: number) {
    return `This action removes a #${id} conteudo`;
  }
}
