const alunos = [{
  nome: "Leandro",
  nota: 8.5
}, {
  nome: "Bruno",
  nota: 6.0
}, {
  nome: "Carla",
  nota: 7.5
}, {
  nome: "Daniel",
  nota: 5.5
}, {
  nome: "Elena",
  nota: 9.0
}, {
  nome: "Fabio",
  nota: 4.5
}];
function filtrarAlunosAprovados(listaAlunos) {
  return listaAlunos.filter(aluno => aluno.nota >= 6);
}
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);