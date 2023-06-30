import { AlunosController } from 'src/alunos/alunos.controller';
import { HateoasBase } from './hateoas-base';
import { HateoasLinks } from './hateoas-interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HateoasIndex extends HateoasBase {
  gerarLinksHateoas(): HateoasLinks[] {
    this.LINKS = [];

    this.adicionarLinks(
      'POST',
      'cadastrar_aluno',
      AlunosController,
      AlunosController.prototype.create,
    );

    this.adicionarLinks(
      'GET',
      'listar_alunos',
      AlunosController,
      AlunosController.prototype.findAll,
    );

    return this.LINKS;
  }
}
