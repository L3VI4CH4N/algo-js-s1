class pokemon{
    constructor(name, atk, hp, def, luck){
        this.name = name
        this.atk = atk 
        this.hp = hp
        this.def = def
        this.luck = luck
    }
    attack(ex, dgt = 0){
        dgt = this.atk + ex.def
        if (dgt < 0){
            dgt = 0
        }
        ex.hp = ex.hp - dgt
    }

}

function isLucky(ex,nb = 0){
        nb = Math.random()
        if ( ex.luck >= nb){
            return true
        }
        else{
            console.log(ex.name + " a esquivé.")
            return false
        }
    }
    
function combat( a , b ){
    while(a.hp > 0 || b.hp > 0){  
        if (isLucky(a) == true){
            a.attack(b)
            
            if (a.hp <= 0) {
                a.hp = 0
                console.log( b.name + " a gagné!")
                break
        }
        console.log( a.name + " a " + a.hp + "HP.")
    }
        if (isLucky(a) == true){
            b.attack(a)
            console.log(a.name + " attaque !")
            
            if (b.hp <= 0) {
                b.hp = 0
                console.log(a.name + " a gagné!")
                break
        }
        console.log( b.name + " a " + b.hp + "HP.")
        }
    }       
}

var a = new pokemon("Parasect", 30 , 60 , 10 , 0.30 )
var b = new pokemon("Aéromite" , 20 , 70 , 10 , 0.90 )
combat(a,b)
