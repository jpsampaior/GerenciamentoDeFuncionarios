class Funcionario {
  constructor(codigo, nome, codigoCargo) {
      this.codigo = codigo;
      this.nome = nome;
      this.codigoCargo = codigoCargo;
  }
}

var listaCargos = [2500, 1500, 10000, 1200, 800];
var listaFuncionarios = [
  new Funcionario(15, "João da Silva", 1),
  new Funcionario(1, "Pedro Santos", 2),
  new Funcionario(26, "Maria Oliveira", 3),
  new Funcionario(12, "Rita Alcântara", 5),
  new Funcionario(8, "Ligia Matos", 2)
];

localStorage.setItem('listaCargos', JSON.stringify(listaCargos));
localStorage.setItem('listaFuncionarios', JSON.stringify(listaFuncionarios));