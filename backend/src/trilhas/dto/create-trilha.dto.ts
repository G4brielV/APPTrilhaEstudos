import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTrilhaDto {
  @IsString()
  @IsNotEmpty({ message: 'O título da trilha é obrigatório' })
  titulo!: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsOptional()
  icone?: string; 
}