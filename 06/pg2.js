let alunos = ["Aecio", "Bernardo", "Cecilia"];

let cadeiras = [
    ['B2', "B4", "B6", "B8"],
    ['D2', "D4", "D6", "D8"],
    ['F2', "F4", "F6", "F8"]
];

console.log(alunos);

// for (i = 0; i < alunos.length; i++) {
//     console.log(`Aluno ${i + 1}: ${alunos[i]}`);
// }


// Passando por cada coluna de cada linha
for (let i = 0; i < cadeiras.length; i++) { // O "i" define o número da linha
    for (let j = 0; j < cadeiras[i].length; j++) { // O "j" define o número de colunas
        console.log(`Posição: [${i}][${j}]: ${cadeiras[i][j]}`);
    };
    console.log("\n");
};