let vagas = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(vagas[0][3]); // 4
console.log(vagas[2][1]); // 10

let predio = [
    ["1S", "2S", "3S"],
    ["0", "1", "Atendimento "],
    ["A1", "A2", "A3"]
]

console.log(predio[1][2]); // Atendimento
console.log(predio[2][0]); // A1
console.log(predio);

predio[1][2] = "RH"; // Alterando o valor de uma matriz (Atendimento passou a ser RH)
console.log(predio);

// Adicionando uma nova linha na Matriz
predio.push(["B1", "B2", "B3"]);
console.log(predio);