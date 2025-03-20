function saudacao(nome, lugar) {
    console.log("Olá, " + nome + ", boa noite!");
    console.log("Seja Bem Vindos ao " + lugar );
}

// saudacao("Aecio", "Senac");
// saudacao("Adenilsa", "FreeFire");
// saudacao("Carlos", "TII09");
// saudacao("Lucas", "Aula de Sábado");

function soma(a, b) {
    return a + b;
}

// let resultado = soma(5, 10);
// console.log(resultado); // Exibe 15

// console.log(soma(3, 4)); // Exibe 7

// console.log(soma(2, 2) * 5); // Exibe 20



//// Escopo local de funções
function teste() {
    let mensagem = "Olá"; // Apenas dentro da função, não pode ser usada fora do escopo da função, ao menos que a variável seja criada do lado de fora
    console.log(mensagem);
}

// teste();
// console.log(mensagem); // Erro de escopo pois está puxando "mensagem", mas só existe dentro da função "teste"


//Função anônima
let dizAlgo = function() {
    console.log("Eu disse");
    console.log("Ele disse");
    console.log("Nós dissemos");
}

// dizAlgo();

// Arrow Function
function dobro(x) {
    return x * 2;
}

let dobroAnonimo = function(x) {
    return x * 2;
}

let dobroArrow = (x) => {
    return x * 2;
}

let dobroSimples = x => x * 2;

console.log(dobro(3));
console.log(dobroAnonimo(3));
console.log(dobroArrow(3));
console.log(dobroSimples(3));