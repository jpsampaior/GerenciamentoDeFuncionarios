class Funcionario {
    constructor(codigo, nome, codigoCargo) {
        this.codigo = codigo;
        this.nome = nome;
        this.codigoCargo = codigoCargo;
    }
}

var listaCargos = JSON.parse(localStorage.getItem("listaCargos"));
var listaFuncionarios = JSON.parse(localStorage.getItem("listaFuncionarios"));
    
function cadastrarCargo(salario) {
    listaCargos.push(salario);
    localStorage.setItem('listaCargos', JSON.stringify(listaCargos));
}

function checarCodigoFuncionarios(codigo) {
    listaFuncionarios.forEach(funcionario => {
        if (codigo === funcionario.codigo) {
            throw new Error('Código de funcionário já cadastrado');
        }
    });
}

function checarCodigoCargo(codigoCargo) {
    if(codigoCargo >= listaCargos.length) throw new Error("Cargo não cadastrado")
}

function cadastrarFuncionario(codigo, nome, codigoCargo) {
    checarCodigoFuncionarios(codigo);
    checarCodigoCargo(codigoCargo);
    listaFuncionarios.push(new Funcionario(codigo, nome, codigoCargo));
    localStorage.setItem('listaFuncionarios', JSON.stringify(listaFuncionarios));
}


function mostrarRelatorioFuncionarios(table) {
    listaFuncionarios.forEach(funcionario => {
        const row = $("<tr></tr>");
        row.append(`<td>${funcionario.nome}</td>`);
        row.append(`<td>${funcionario.codigo}</td>`);
        row.append(`<td>${funcionario.codigoCargo}</td>`);

        table.append(row);
    });
}

function calcularSalarioBasico(codigoCargo) {
    return listaCargos[codigoCargo];
}

function calcularTotalSalarios(codigoCargo) {
    checarCodigoCargo(codigoCargo);

    var totalWage = 0;

    listaFuncionarios.filter(funcionario => funcionario.codigoCargo == codigoCargo)
    .forEach(funcionario => totalWage+=listaCargos[codigoCargo]);

    if(totalWage == 0) {
        throw new Error('Nenhum funcionário cadastrado nesse cargo');
    }

    return totalWage;
}