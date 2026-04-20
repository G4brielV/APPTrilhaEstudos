import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateConteudoDto {
  @IsString()
  @IsNotEmpty({ message: 'O título do conteúdo é obrigatório' })
  titulo!: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  tipo?: string; // Ex: 'video', 'artigo', 'curso'

  @IsNumber()
  @IsNotEmpty({ message: 'O ID da trilha (trilhaId) é obrigatório' })
  trilhaId!: number;
}