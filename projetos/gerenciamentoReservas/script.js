let reservas = [];

// Adicionar reserva
function adicionarReserva() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    if (nome === "" || data === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let novaReserva = {nome, data};

    reservas.push(novaReserva);

    console.log(reservas);

    document.getElementById("nome").value = ""; // Apaga o campo de nome depois de adicionar
    document.getElementById("data").value = ""; // Apaga o campo de data depois de adicionar

    atualizarListaReservas()
};

// Remover reserva
function removerReserva(index) {
    reservas.splice(index, 1);

    atualizarListaReservas();
}


// Atualizar lista
function atualizarListaReservas() {
    let lista = document.getElementById("listaReservas");
    lista.innerHTML = "";

    reservas.forEach((reservas, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${reservas.nome}, ${reservas.data} <button onclick= removerReserva(${index})>X</button>`;
        lista.appendChild(li);
    });

    // for(let i = 0; i < reservas.length; i++) {
    //     let li = document.createElement("li");
    //     li.innerHTML = `${reservas[i].nome}, ${reservas[i].data} <button onclick="removerReserva(${i})">X</button>`;
    //     lista.appendChild(li);
    // }
}