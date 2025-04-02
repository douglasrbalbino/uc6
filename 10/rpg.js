class Personagem {
    _nome;
    _forca;
    _pontosDeVida;
    _vivo; // valor booleano

    constructor(nome, pontosDeVida) {
        this._nome = nome;
        this._forca = 30;
        this._pontosDeVida = pontosDeVida;
        this._vivo = true;

    }

    atacar(alvo) {

    }

    tomarDano(inimigo) {
        
    }

    recuperarVida() {

    }

    morrer() {

    }
}

class Guerreiro extends Personagem {
    // Ao tomar dano, é reduzido em 5 por conta do escudo;

}

class Mago extends Personagem {
    // Ao atacar, reduz 5 da própria vida, para fazer um ataque
}

let guerreiro1 = new Guerreiro("Ronaldo", 150);
let mago1 = new Mago("Burro", 100);
guerreiro1.atacar(mago1);