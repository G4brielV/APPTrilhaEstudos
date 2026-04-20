import { Global, Injectable, Module, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrilhaDto } from './dto/create-trilha.dto';
import { UpdateTrilhaDto } from './dto/update-trilha.dto';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], 
})
@Injectable()
export class TrilhasService {
  private readonly USUARIO_FIXO_ID = 1;

  constructor(private prisma: PrismaService) {}

  async create(createTrilhaDto: CreateTrilhaDto) {
    return this.prisma.trilha.create({
      data: {
        ...createTrilhaDto,
        usuarioId: this.USUARIO_FIXO_ID,
      },
    });
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.trilha.findMany({
        where: { usuarioId: this.USUARIO_FIXO_ID },
        skip,
        take: limit,
        include: { _count: { select: { conteudos: true } } },
      }),
      this.prisma.trilha.count({ where: { usuarioId: this.USUARIO_FIXO_ID } }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    const trilha = await this.prisma.trilha.findFirst({
      where: { id, usuarioId: this.USUARIO_FIXO_ID },
      include: { conteudos: true }, 
    });

    if (!trilha) throw new NotFoundException('Trilha não encontrada');
    return trilha;
  }

  async update(id: number, updateTrilhaDto: UpdateTrilhaDto) {
    await this.findOne(id); 
    return this.prisma.trilha.update({
      where: { id },
      data: updateTrilhaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.trilha.delete({ where: { id } });
  }
}
