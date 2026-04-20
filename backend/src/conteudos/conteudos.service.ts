import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class ConteudosService {
  private readonly USUARIO_FIXO_ID = 1;

  constructor(private prisma: PrismaService) {}

  // SEC: Impedir de mexer em trilhas de outros
  private async checkTrilhaOwnership(trilhaId: number) {
    const trilha = await this.prisma.trilha.findUnique({ where: { id: trilhaId } });
    if (!trilha) throw new NotFoundException('Trilha não encontrada');
    if (trilha.usuarioId !== this.USUARIO_FIXO_ID) {
      throw new ForbiddenException('Acesso negado a esta trilha');
    }
  }

  async create(createConteudoDto: CreateConteudoDto) {
    await this.checkTrilhaOwnership(createConteudoDto.trilhaId);
    return this.prisma.conteudo.create({
      data: createConteudoDto,
    });
  }

  // Titulo, troca de trilha, ordem?
  async update(id: number, updateConteudoDto: UpdateConteudoDto) {
    const conteudo = await this.prisma.conteudo.findUnique({ 
      where: { id }, 
      include: { trilha: true } 
    });
    
    if (!conteudo) throw new NotFoundException('Conteúdo não encontrado');
    if (conteudo.trilha.usuarioId !== this.USUARIO_FIXO_ID) throw new ForbiddenException('Acesso negado');

    // Checando se o usuario está tentando mover para outra trilha que seja dele
    if (updateConteudoDto.trilhaId) {
      await this.checkTrilhaOwnership(updateConteudoDto.trilhaId);
    }

    return this.prisma.conteudo.update({
      where: { id },
      data: updateConteudoDto,
    });
  }

  async remove(id: number) {
    const conteudo = await this.prisma.conteudo.findUnique({ 
      where: { id }, 
      include: { trilha: true } 
    });
    
    if (!conteudo) throw new NotFoundException('Conteúdo não encontrado');
    if (conteudo.trilha.usuarioId !== this.USUARIO_FIXO_ID) throw new ForbiddenException('Acesso negado');

    return this.prisma.conteudo.delete({ where: { id } });
  }

  async updateStatus(id: number, updateStatusDto: UpdateStatusDto) {
    const conteudo = await this.prisma.conteudo.findUnique({ 
      where: { id }, 
      include: { trilha: true } 
    });
    
    if (!conteudo) throw new NotFoundException('Conteúdo não encontrado');
    if (conteudo.trilha.usuarioId !== this.USUARIO_FIXO_ID) {
      throw new ForbiddenException('Acesso negado');
    }
    return this.prisma.conteudo.update({
      where: { id },
      data: { isCompleted: updateStatusDto.isCompleted },
    });
  }
}
