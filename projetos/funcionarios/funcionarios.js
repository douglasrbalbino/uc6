class Funcionario {
    _nome = "";
    _matricula = 0;
    _anoAdmissao = 0;
    _endereco = "";

    constructor (nome, matricula, anoAdmissao, endereco) {
        this._nome = nome;
        this._matricula = matricula;
        this._anoAdmissao = anoAdmissao;
        this._endereco = endereco;
    }

    receberSalario(valor) {
        console.log(`${this._nome} recebeu o salário de R$ ${valor}!`);
    }

    tempoDeEmpresa(anoAtual) {
        if (anoAtual > this._anoAdmissao) {
            let totalAnos = anoAtual - this._anoAdmissao;
            console.log(`${this._nome} possui ${totalAnos} anos trabalhados!`)
        } else {
            console.log(`O "Ano Atual" inserido é inválido!`);
        }
    }

    baterPonto() {
        console.log(`Ponto registrado para ${this._nome}!`);
    }
}

class Gerente extends Funcionario {
    receberSalario(valor) {
        let salario = valor * 1.20;
        super.receberSalario(salario);
        
    }

}

class OperadorDeCaixa extends Funcionario {
    fecharCaixa(fechamento) {
        console.log(`${this._nome} fechou o caixa. Total movimentado durante o dia: R$ ${fechamento}.`);
    }
    
}

class Estagiario extends Funcionario {
    receberSalario() {
        console.log(`${this._nome} recebeu Bolsa Auxílio no valor de R$ 1.000.`)
    }

    registrarAtividade(atividade) {
        console.log(`Tarefa executada por ${this._nome} durante o dia: ${atividade}.`);
    }
}

let funcionario1 = new Gerente("Ronaldo", 1, 1990, "Rua Tito");

let funcionario2 = new OperadorDeCaixa("Astolfo", 2, 2000, "Rua Tuiuti");

let funcionario3 = new Estagiario("Genovevo", 3, 2010, "Rua Magnolia");


// console.log(funcionario1);
// console.log(funcionario2);
// console.log(funcionario3);

// funcionario1.tempoDeEmpresa(2025);
// funcionario2.tempoDeEmpresa(2025);
// funcionario3.tempoDeEmpresa(2025);

// funcionario1.receberSalario(3000);
// funcionario2.receberSalario(1500);
// funcionario3.receberSalario();


// funcionario1.baterPonto();
// funcionario2.baterPonto();
// funcionario3.baterPonto();

// funcionario2.fecharCaixa(10000);
funcionario3.registrarAtividade("Registrar produtos do setor");