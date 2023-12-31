import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { HateoasLinks } from 'src/core/hateoas/hateoas-interface';
import { Turma } from 'src/turmas/entities/turma.entity';

export class CreateAlunoDto {
  @ApiProperty({
    example: 'Elton Fonseca',
    description: 'Nome completo do aluno.',
  })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString({ message: 'Nome deve ser string' })
  @Length(3, 15, { message: 'Nome precisa ter entre 3 a 15 caracteres' })
  @Expose({ name: 'nome_completo' })
  @Transform(({ value }) => value.toLowerCase())
  nome: string;

  @ApiProperty({
    example: 'Masculino',
    description: 'Gênero do aluno.',
  })
  @IsNotEmpty({ message: 'Gênero não pode ser vazio' })
  @IsString({ message: 'Gênero deve ser string' })
  @Length(3, 15, { message: 'Gênero precisa ter entre 3 a 15 caracteres' })
  genero: string;

  @ApiProperty({
    example: 1,
    description:
      'Número de identificação (id) relacionado a turma cadastrada no BD',
  })
  @IsNotEmpty({ message: 'Turma não pode ser vazio' })
  @IsNumber({}, { message: 'Turma deve receber um número' })
  @Min(1, { message: 'Turma deve ser maior que 0' })
  @Max(99, { message: 'Turma deve ser menor que 99' })
  turma: Turma;
}
