import { HateoasAluno } from 'src/core/hateoas/aluno-hateoas';
import { HateoasLinks } from 'src/core/hateoas/hateoas-interface';
import { Turma } from 'src/turmas/entities/turma.entity';

export class ResponseAlunoDto {
  id: number;
  nome: string;
  genero: string;
  turma: Turma;
  links?: HateoasLinks[];
}
