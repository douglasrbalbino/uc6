import { BancoDeDados } from "./BancoDeDados.js";

const ul = document.getElementById("listaProdutos");
const produts = BancoDeDados.buscarTodos();

if (produts.length === 0) {
    ul.innerHTML = '<li>Nenhum produto cadastrado!</li>';
} else {
    produts.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.toString();

        ul.appendChild(li);
    })
}