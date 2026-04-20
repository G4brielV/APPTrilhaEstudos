import { IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateStatusDto {
  @IsBoolean({ message: 'isCompleted deve ser um booleano' })
  @IsNotEmpty({ message: 'isCompleted é obrigatório' })
  isCompleted!: boolean;
}