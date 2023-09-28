var tab = ["Pierre","Papier","Ciseaux"]
var aiId = Math.floor(Math.random() * tab.length )
var AI = tab[aiId]
var J1 = ""
var etat = ""
var scoreJ1 = 0


function Submit(){
    var J1 = document.getElementById("ppc").value;

    if (J1 === tab[0] && AI === tab[1] || J1 === tab[1] && AI === tab[2] ||J1 === tab[2] && AI === tab[0]){
        var etat = "Vous avez perdu... Dommage, rejouez !"
    }
    else if (J1 === AI) {
        var etat ="Egalité ! Retentez votre chance !"
    }
    else{
        var etat = "Bravo ! Vous avez gagné, rejouez !"
    }
    document.getElementById("AI").innerHTML = "L'ordinateur a joué " + AI
    document.getElementById("etat").innerHTML = etat
}