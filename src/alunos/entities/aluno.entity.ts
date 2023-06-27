import { Exclude, Expose } from 'class-transformer';
import { Turma } from 'src/turmas/entities/turma.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  @Expose({ name: 'nome_completo' })
  nome: string;

  @Column({ nullable: false })
  genero: string;

  @ManyToOne(() => Turma, (turma) => turma.aluno)
  @JoinColumn({ name: 'turma_id' })
  turma: Turma;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
