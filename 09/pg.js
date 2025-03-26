//// OBJETOS: CONTÉM MÉTODOS E ATRIBUTOS

// OBJETO LITERAL
let carroA = { marca: "Toyota", modelo: "Corolla"};

let carroB = { 
    marca: "Fiat", 
    modelo: "Uno",
    ano: 2009,
    ligar: function() {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
};

let carros = [carroA, carroB];

console.log(carroA.marca); // Exibe Toyota
console.log(carroB.modelo); // Exibe Uno
console.log(carroB.ligar()); // O carro Fiat Uno está ligado
console.log(carros[1]);

