class character{
    constructor(name, hp, hated){
        this.name = name
        this.hp = hp
        this.hated = hated
    }

    traject(redLightNumbers, list, playingMusic = ""){
        let changeTaxi = 0
        while(redLightNumbers > 0 && this.hp > 0){
            redLightNumbers -= 1
            let nb = Math.floor(Math.random() * 5)
            playingMusic = list[nb]
            console.log(playingMusic + " passe à la radio.")
            if (playingMusic === this.hated){
                this.hp = this.hp - 1
                changeTaxi += 1
                console.log (this.name + " a les oreilles qui saignent...")
                console.log(this.name + " a changé de taxi " + changeTaxi + " fois.")
                console.log("Il a encore " + this.hp + " points de santé mentale. Il lui reste " + redLightNumbers + " feux rouges à passer !")
            }
            if(redLightNumbers == 0 && this.hp > 0){
                console.log(this.name + " est arrivé à destination ! Il a " + this.hp + " points de santé mentale. ")
            } 
            else if (this.hp == 0){
                console.log(this.name + " a explosé...")
            }
        }                   
        }
    }
            
let john = new character("John", 10, "Anissa - Wejdene")
let radio = ["Bohemian Rhaphsody - Queen","Anissa - Wejdene", "Canard - Squeezie", "Idol - YOASOBI", "Numb - Linkin Park" ]
console.log(john)
console.log(radio)

john.traject(30, radio)


