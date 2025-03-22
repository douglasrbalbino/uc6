let pessoas = [
    { nome: "João", nascimento: "1988-03-15", tipoSanguineo: "AB-", cpf: "45678901233", telefone: "966666666" },
    { nome: "Ana", nascimento: "1990-05-12", tipoSanguineo: "O+", cpf: "12345678900", telefone: "999999999" },
    { nome: "Maria", nascimento: "1995-08-19", tipoSanguineo: "O-", cpf: "56789012344", telefone: "955555555" },
    { nome: "Pedro", nascimento: "1993-12-05", tipoSanguineo: "A+", cpf: "67890123455", telefone: "944444444" },
    { nome: "Carlos", nascimento: "1985-07-23", tipoSanguineo: "A-", cpf: "23456789011", telefone: "988888888" },
    { nome: "Fernanda", nascimento: "1992-10-30", tipoSanguineo: "B+", cpf: "34567890122", telefone: "977777777" }

];

// BUSCA BINÁRIA POR JOÃO, PARA ISSO A LISTA PRECISA ESTAR ORDENADA POR
function adenilsaSort(array) {
    let i = 0;

    while (i < array.length -1) {
        let ref = i;

        if (array[i].cpf > array[i + 1].cpf) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        } else {
            ref = i + 1;
        }

        i = ref;
    } 
    return array;
}

console.log(adenilsaSort(pessoas));