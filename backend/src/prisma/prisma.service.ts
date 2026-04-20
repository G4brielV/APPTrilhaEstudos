import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // URL do banco
    const connectionString = process.env.DATABASE_URL;
    
    // 2. Cria um Pool de conexões nativo do pg
    const pool = new Pool({ connectionString });
    
    // 3. Passa o pool para o novo adaptador do Prisma 7
    const adapter = new PrismaPg(pool);
    
    // 4. Injeta o adaptador no PrismaClient
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}