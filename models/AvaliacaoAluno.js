import mongoose from 'mongoose';

import Aluno from './Aluno';
import Professor from './Professor';
import Aula from './Aula';

const avaliacaoAlunoSchema = new mongoose.Schema({
  aluno: { type: Aluno, required: true },
  professor: { type: Professor, required: true },
  nota: { type: Number, required: true },
  comentario: { type: String, required: true },
  aula: { type: Aula, required: true },
});

const AvaliacaoAluno = mongoose.model('AvaliacaoAluno', avaliacaoAlunoSchema);

export default AvaliacaoAluno;
