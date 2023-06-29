import { Expose } from 'class-transformer';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Turma {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  descricao: string;

  @OneToMany(() => Aluno, (aluno) => aluno.turma)
  aluno: Aluno;

  @Expose({ name: 'created_at' })
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Expose({ name: 'updated_at' })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
