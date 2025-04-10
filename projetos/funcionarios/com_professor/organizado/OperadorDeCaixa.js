import { Funcionario } from './Funcionario.js'

export class OperadorDeCaixa extends Funcionario {

    receberSalario(valor) {
        // TO DO: Modificação futura
       super.receberSalario(valor);
    }

    fechamentoCaixa(valorTotal) {
        return `${this.getNome()} fechou o caixa com o valor de  R$${valorTotal}.`;
    }
}
