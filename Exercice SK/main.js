class person{
    constructor(name, carac, probDeath, probDgt, probDeathDgt, hp){
        this.name = name
        this.carac = carac
        this.probDeath = probDeath
        this.probDgt = probDgt
        this.probDeathDgt = probDeathDgt
        this.hp = hp
    }
}
class sk{
    constructor(nameSk, caracSk, hpSk){
        this.nameSk = nameSk
        this.caracSk = caracSk
        this.hpSk = hpSk
    }
}

function attack(person,sk){
    let prob = Math.random() 
    if(prob <= person.probDeath){
        person.hp = 0
        console.log(sk.nameSk + " a frappé. Malheuresement, " + person.name + " nous a quitté.")
    }
    else if (prob <= person.probDgt){
        sk.hpSk = sk.hpSk - 10
        console.log( sk.nameSk + " a frapé mais a échoué ! " + person.name + ", le/la " + person.carac + " inflige 10 de dégats au tueur.")
    }
    else if ( prob <= person.probDeathDgt){
        sk.hpSk = sk.hpSk - 15
        person.hp = 0
        console.log(person.name + " est tombé.e... Mais dans sa chute, a infligé 15 de dégâts au " + sk.caracSk + " !")
    }
    console.log(sk.nameSk + " a encore " + sk.hpSk + " points de vie.")
}

let listName = ["Damien","Daniela", "Camille", "Ernest", "Eva", "Victor", "Enzo", "Bastien", "Paul", "Sofiane"]
let listCarac = ["nerd", "sportif.ve", "blond.e", "brun.e", "geek", "combattant.e", "le/la bg/blg", "le/la policier.ère", "l'étudiant.e"]
let listProbDeath = [0.2,0.3, 0.5]
let listProbDgt = [0.2, 0.4, 0.6, 0.8]
let listProbDeathDgt = [0.2, 0,5, 0.8]
let listCharacters = [] 
let listDeath = []
let jason = new sk("Jason","Serial Killer", 100)

for (i = 0; i < 5; i++){
    let character = new person(listName[Math.floor(Math.random()*listName.length)], listCarac[Math.floor(Math.random()*listCarac.length)],listProbDeath[Math.floor(Math.random()*listProbDeath.length)],listProbDgt[Math.floor(Math.random()*listProbDgt.length)],listProbDeathDgt[Math.floor(Math.random()*listProbDgt.length)], 1)
    listCharacters.push(character)
    console.log(character)
}

while(jason.hpSk > 0 ){
    for (k = 0; k < listCharacters.length; k++){
        attack(listCharacters[k], jason)
        if(listCharacters[k].hp === 0){
            listDeath.push(listCharacters[k].name)
            delete listCharacters[k]
        }
    }
    if (listCharacters = []){
        console.log("Jason a gagné.")
        break
    }
}
if ( jason.hpSk === 0){
console.log("Bravo aux survivants, Jason a été tué ! RIP à : " + listDeath)
}



