import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { Repository } from 'typeorm';
import { AlunoNotFoundException } from './exceptions/alunoNotFound.exception';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private repository: Repository<Aluno>,
  ) {}
  async create(createAlunoDto: CreateAlunoDto) {
    const aluno = this.repository.create(createAlunoDto);
    return await this.repository.save(aluno);
  }

  async findAll() {
    return await this.repository.find({
      relations: {
        turma: true,
      },
    });
  }

  async findOne(id: number) {
    try {
      return await this.repository.findOneByOrFail({ id: id });
    } catch (error) {
      if (error.name === 'EntityNotFoundError') {
        throw new AlunoNotFoundException();
      }
      throw new HttpException(
        'Erro interno de servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.repository.update(id, updateAlunoDto);
  }

  async remove(id: number) {
    const response = await this.repository.delete({ id: id });
    if (response.affected === 0) {
      throw new AlunoNotFoundException();
    }
    return await this.repository.delete({ id: id });
  }
}
