function Animal(nome) {
    this.nome = nome;
    let _idade = 5;

    this.getIdade = function() {
        return _idade;
    }

    this.setIdade = function(idade) {
        if (typeof idade === 'number' && idade >= 0) {
            _idade = idade;
        }
    }

    this.emitirSom = function() {
        console.log(this.nome + " está emitindo um som.");
    }

    this.crescer = function() {
        _idade += 1;
    }
}

function Cachorro(nome, raca) {
    this.raca = raca;

    this.latir = function() {
        console.log(this.nome + " está latindo.");
    }

    this.crescer = function() {
        const novaIdade = this.getIdade() + 2; 
        this.setIdade(novaIdade);
    }

    Animal.call(this, nome);
}

function Gato(nome, corDosOlhos) {
    this.corDosOlhos = corDosOlhos;
    this.miar = function() {
        console.log(this.nome + " está miando.");
    }

    this.crescer = function() {
        const novaIdade = this.getIdade() + 0.5;
        this.setIdade(novaIdade);
    }
    Animal.call(this, nome);
}

const animalGenerico = new Animal("Animal Genérico");
const meuCachorro = new Cachorro("Rex", "Labrador");
const meuGato = new Gato("Mimi", "Verdes");

animalGenerico.emitirSom();
animalGenerico.crescer();
console.log(animalGenerico.getIdade()); 

meuCachorro.emitirSom();    
meuCachorro.latir(); 
meuCachorro.crescer();
console.log(meuCachorro.getIdade());

meuGato.emitirSom();        
meuGato.miar();       
meuGato.crescer();
console.log(meuGato.getIdade()); 

