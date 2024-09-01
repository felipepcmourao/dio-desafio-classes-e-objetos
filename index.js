// Criaçao da classe

class hero {
    constructor (name, age, type){
    this.name = name
    this.age = age
    this.type = type
    }
   
// Funcao para definir o ataque para cada personagem
    attack (){
        if (this.type == "mago"){
            this.attack = "magia"
        }
        else if (this.type == "ninja"){
            this.attack = "shuriken"
        }
        else if (this.type == "guerreiro"){
            this.attack = "espada"
        }
        else if (this.type == "monge"){
            this.attack = "artes marciais"
        }
        console.log(`O ${this.type} atacou usando ${this.attack}`) //definir saida da funcao
    }
}

//Instancia dos personagens
let personagem1 = new hero ("Dumbledore", 123, "mago");
let personagem2 = new hero ("Naruto", 16, "ninja");
let personagem3 = new hero ("Dom Quixote", 52, "guerreiro");
let personagem4 = new hero ("Shaolin", 83, "monge")

//Chamado da funçao
personagem1.attack()
personagem2.attack()
personagem3.attack()
personagem4.attack()