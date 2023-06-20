import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('alunos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello() {
    const aluno = {
      id: '1',
      nome: 'Wesley',
    };
    return aluno;
  }
}
