import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Turma } from 'src/turmas/entities/turma.entity';

export class CreateAlunoDto {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString({ message: 'Nome deve ser string' })
  @Length(3, 15, { message: 'Nome precisa ter entre 3 a 15 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'Gênero não pode ser vazio' })
  @IsString({ message: 'Gênero deve ser string' })
  @Length(3, 15, { message: 'Gênero precisa ter entre 3 a 15 caracteres' })
  genero: string;

  @IsNotEmpty({ message: 'Turma não pode ser vazio' })
  @IsNumber({}, { message: 'Turma deve receber um número' })
  @Min(1, { message: 'Turma deve ser maior que 0' })
  @Max(99, { message: 'Turma deve ser menor que 99' })
  turma: Turma;
}
